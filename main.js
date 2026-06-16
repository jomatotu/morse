/* ── i18n ── */
let LANG = DE;

function setLang(l) {
  LANG = l === 'en' ? EN : DE;
  document.documentElement.lang = LANG.lang;
  renderAll();
}

function t(key) { return LANG[key] || key; }

/* ── Audio Engine ── */
let audioCtx = null;
let playbackTimeout = null;
let isPlaying = false;
let playbackSource = null; // 'translator' | 'quiz'

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTone(startTime, duration, freq = 650) {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.value = freq;
  osc.type = 'sine';
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(0.4, startTime + 0.005);
  gain.gain.setValueAtTime(0.4, startTime + duration - 0.005);
  gain.gain.linearRampToValueAtTime(0, startTime + duration);
  osc.start(startTime);
  osc.stop(startTime + duration);
}

function stopPlayback() {
  isPlaying = false;
  playbackSource = null;
  if (playbackTimeout) { clearTimeout(playbackTimeout); playbackTimeout = null; }
  setLedState('off');
  updatePlayBtn(false);
}

function playMorse(morseStr, unit, source) {
  if (!morseStr.trim()) return;
  // Stop any ongoing playback regardless of source
  stopPlayback();
  isPlaying = true;
  playbackSource = source || 'translator';

  if (source === 'translator') updatePlayBtn(true);

  const ctx = getAudioCtx();
  const { events, total } = getTimings(morseStr, unit || 60);
  const baseTime = ctx.currentTime + 0.1;

  events.forEach(({ t, len, sym }) => {
    const s = baseTime + t / 1000;
    const d = len / 1000;
    playTone(s, d);
    setTimeout(() => { if (isPlaying) setLedState(sym === '-' ? 'dah' : 'dit'); }, t);
    setTimeout(() => { if (isPlaying) setLedState('off'); }, t + len);
  });

  playbackTimeout = setTimeout(() => {
    isPlaying = false;
    playbackSource = null;
    setLedState('off');
    if (source === 'translator') updatePlayBtn(false);
  }, total + 300);
}

function setLedState(state) {
  const hero = document.getElementById('hero-led');
  const trans = document.getElementById('translator-led');
  const cls = 'led-' + state;
  if (hero) hero.className = 'hero-led ' + cls;
  if (trans) {
    trans.style.background = state === 'dit' ? 'var(--led-green)'
      : state === 'dah' ? 'var(--metal)'
      : 'var(--metal-dim)';
    trans.style.boxShadow = state === 'dit' ? '0 0 20px var(--led-green-glow)'
      : state === 'dah' ? '0 0 20px rgba(210,169,70,0.6)'
      : 'none';
  }
}

function updatePlayBtn(playing) {
  const btn = document.getElementById('play-btn');
  if (!btn) return;
  btn.textContent = playing ? t('translate_stop') : t('translate_play');
  btn.classList.toggle('playing', playing);
}

/* ── Translator ── */
function initTranslator() {
  const textIn = document.getElementById('text-input');
  const morseIn = document.getElementById('morse-input');
  const speedEl = document.getElementById('speed-range');
  const playBtn = document.getElementById('play-btn');

  if (!textIn) return;

  textIn.addEventListener('input', () => {
    // Stop quiz playback if user is typing in translator
    if (isPlaying && playbackSource === 'quiz') stopPlayback();
    const m = encode(textIn.value);
    morseIn.value = m.replace(/\./g, '·').replace(/-/g, '—');
  });

  morseIn.addEventListener('input', () => {
    // Stop quiz playback if user is typing in translator
    if (isPlaying && playbackSource === 'quiz') stopPlayback();
    const raw = morseIn.value.replace(/·/g, '.').replace(/—/g, '-');
    textIn.value = decode(raw);
  });

  playBtn.addEventListener('click', () => {
    if (isPlaying && playbackSource === 'translator') { stopPlayback(); return; }
    const raw = morseIn.value.replace(/·/g, '.').replace(/—/g, '-');
    const unit = 200 - (parseInt(speedEl.value) * 15);
    playMorse(raw, unit, 'translator');
  });
}

/* ── Quiz ── */
const QUIZ_LETTERS = 'ETAINSHLDCUMWFGYPBVKJXQZ'.split('');
const QUIZ_WORDS = ['SOS', 'ACAB', 'FUSION', 'ALERTA', 'ANTIFA', 'MORSE'];
let quizState = { mode: 'letter', dir: 'to_morse', score: 0, total: 0, current: null, answered: false };

function quizPick() {
  const pool = quizState.mode === 'letter' ? QUIZ_LETTERS : QUIZ_WORDS;
  return pool[Math.floor(Math.random() * pool.length)];
}

function renderQuiz() {
  const card = document.getElementById('quiz-card');
  if (!card) return;
  const { dir, score, total, current, answered } = quizState;
  const isMorse = dir === 'to_morse';
  const prompt = current ? (isMorse ? current : encode(current).replace(/\./g,'·').replace(/-/g,'—')) : '…';
  const promptLabel = isMorse ? t('quiz_prompt_to_morse') : t('quiz_prompt_to_text');

  card.querySelector('.quiz-prompt-label').textContent = promptLabel;
  card.querySelector('.quiz-target').textContent = prompt;
  card.querySelector('.quiz-score').textContent = `${t('quiz_score')}: ${score}/${total}`;
  const inp = card.querySelector('.quiz-input');
  inp.value = '';
  inp.disabled = answered;
  inp.placeholder = t('quiz_placeholder');
  const fb = card.querySelector('.quiz-feedback');
  fb.textContent = '';
  fb.className = 'quiz-feedback';
  card.querySelector('.quiz-check').style.display = answered ? 'none' : '';
  card.querySelector('.quiz-next').style.display = answered ? '' : 'none';
  card.querySelector('.quiz-check').textContent = t('quiz_check');
  card.querySelector('.quiz-next').textContent = t('quiz_next');

  // Auto-play quiz target ONLY if translator is not playing
  if (!isPlaying || playbackSource !== 'translator') {
    const morse = encode(current || '').replace(/·/g,'.').replace(/—/g,'-');
    if (morse) setTimeout(() => {
      if (!isPlaying || playbackSource !== 'translator') playMorse(morse, 80, 'quiz');
    }, 200);
  }
}

function animateQuizResult(correct) {
  const card = document.getElementById('quiz-card');
  if (!card) return;
  card.classList.remove('anim-correct', 'anim-wrong');
  void card.offsetWidth; // reflow to restart animation
  card.classList.add(correct ? 'anim-correct' : 'anim-wrong');
}

function checkQuiz() {
  const card = document.getElementById('quiz-card');
  const input = card.querySelector('.quiz-input');
  const feedback = card.querySelector('.quiz-feedback');
  const { dir, current } = quizState;
  const answer = input.value.trim().toUpperCase().replace(/·/g,'.').replace(/—/g,'-');
  const correct = dir === 'to_morse'
    ? encode(current).replace(/\s/g,'')
    : current;
  const ok = answer.replace(/\s/g,'') === correct.replace(/\s/g,'');
  quizState.total++;
  if (ok) quizState.score++;
  quizState.answered = true;
  feedback.textContent = ok ? t('quiz_correct') : `${t('quiz_wrong')} ${correct}`;
  feedback.className = 'quiz-feedback ' + (ok ? 'correct' : 'wrong');
  animateQuizResult(ok);
  // Re-render controls (show Next, hide Check, update score) without re-rendering prompt
  input.disabled = true;
  card.querySelector('.quiz-check').style.display = 'none';
  card.querySelector('.quiz-next').style.display = '';
  card.querySelector('.quiz-score').textContent = `${t('quiz_score')}: ${quizState.score}/${quizState.total}`;
}

function nextQuiz() {
  quizState.current = quizPick();
  quizState.answered = false;
  renderQuiz();
}

function initQuiz() {
  const card = document.getElementById('quiz-card');
  if (!card) return;
  quizState.current = quizPick();

  card.querySelector('.quiz-check').addEventListener('click', checkQuiz);
  card.querySelector('.quiz-next').addEventListener('click', nextQuiz);
  card.querySelector('.quiz-input').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !quizState.answered) checkQuiz();
  });

  document.querySelectorAll('[data-quiz-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      quizState.mode = btn.dataset.quizMode;
      quizState.current = quizPick();
      quizState.answered = false;
      document.querySelectorAll('[data-quiz-mode]').forEach(b => b.classList.toggle('active', b === btn));
      renderQuiz();
    });
  });

  document.querySelectorAll('[data-quiz-dir]').forEach(btn => {
    btn.addEventListener('click', () => {
      quizState.dir = btn.dataset.quizDir;
      quizState.current = quizPick();
      quizState.answered = false;
      document.querySelectorAll('[data-quiz-dir]').forEach(b => b.classList.toggle('active', b === btn));
      renderQuiz();
    });
  });

  renderQuiz();
}

/* ── Accordion ── */
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(h => {
    h.addEventListener('click', () => {
      const item = h.closest('.accordion-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── Hero LED idle animation ── */
function startHeroIdle() {
  const msg = encode('ALERTA');
  let i = 0;
  const chars = msg.replace(/\./g,'·').replace(/-/g,'—');

  function blink() {
    if (isPlaying) { setTimeout(blink, 2000); return; }
    const led = document.getElementById('hero-led');
    if (!led) return;
    if (i < chars.length) {
      const c = chars[i];
      if (c === '·') { led.className = 'hero-led led-dit'; setTimeout(() => { led.className = 'hero-led led-off'; i++; setTimeout(blink, 120); }, 100); }
      else if (c === '—') { led.className = 'hero-led led-dah'; setTimeout(() => { led.className = 'hero-led led-off'; i++; setTimeout(blink, 120); }, 300); }
      else if (c === ' ') { i++; setTimeout(blink, 200); }
      else { i++; setTimeout(blink, 50); }
    } else {
      i = 0;
      setTimeout(blink, 3000);
    }
  }
  setTimeout(blink, 1500);
}

/* ── Lang switch ── */
function initLangSwitch() {
  document.querySelectorAll('[data-lang-switch]').forEach(btn => {
    btn.addEventListener('click', () => {
      const l = btn.dataset.langSwitch;
      setLang(l);
      document.querySelectorAll('[data-lang-switch]').forEach(b => b.classList.toggle('active', b.dataset.langSwitch === l));
    });
  });
}

/* ── Nav scroll ── */
function initNav() {
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const el = document.querySelector(a.getAttribute('href'));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ── Render (i18n-driven DOM update) ── */
function renderAll() {
  setT('nav-about', t('nav_about'));
  setT('nav-history', t('nav_history'));
  setT('nav-translate', t('nav_translate'));
  setT('nav-quiz', t('nav_quiz'));
  setT('nav-cheatsheet', t('nav_cheatsheet'));
  setT('nav-links', t('nav_links'));

  setT('hero-subtitle', t('hero_subtitle'));
  setT('hero-desc', t('hero_desc'));
  setT('hero-scroll', t('hero_scroll'));

  setT('about-title', t('about_title'));
  setT('about-p1', t('about_p1'));
  setT('about-p2', t('about_p2'));
  setT('about-timing-title', t('about_timing_title'));
  setT('about-dit', t('about_dit'));
  setT('about-dah', t('about_dah'));
  setT('about-char', t('about_char'));
  setT('about-word', t('about_word'));
  setT('about-fact1', t('about_fact1'));
  setT('about-fact2', t('about_fact2'));
  setT('about-fact3', t('about_fact3'));

  setT('history-title', t('history_title'));
  setT('history-intro', t('history_intro'));
  const accList = document.getElementById('accordion-list');
  if (accList) {
    accList.innerHTML = LANG.anecdotes.map((a, i) => `
      <div class="accordion-item">
        <button class="accordion-header">
          <span class="acc-num">${String(i+1).padStart(2,'0')}</span>
          <span class="acc-text">
            <strong>${a.title}</strong>
            <span class="acc-teaser">${a.teaser}</span>
          </span>
          <span class="acc-icon">▾</span>
        </button>
        <div class="accordion-body">
          <p>${a.body}</p>
          ${a.links && a.links.length ? `
            <div class="acc-links">
              ${a.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="acc-link">↗ ${l.label}</a>`).join('')}
            </div>` : ''}
        </div>
      </div>
    `).join('');
    initAccordion();
  }

  setT('translate-title', t('translate_title'));
  setT('translate-text-label', t('translate_text_label'));
  setT('translate-morse-label', t('translate_morse_label'));
  setT('translate-speed-label', t('translate_speed_label'));
  setT('translate-hint', t('translate_hint'));
  const textIn = document.getElementById('text-input');
  const morseIn = document.getElementById('morse-input');
  if (textIn) textIn.placeholder = t('translate_placeholder_text');
  if (morseIn) morseIn.placeholder = t('translate_placeholder_morse');
  updatePlayBtn(isPlaying && playbackSource === 'translator');

  setT('quiz-title', t('quiz_title'));
  setT('quiz-desc', t('quiz_desc'));
  const ql = document.querySelector('[data-quiz-mode="letter"]');
  const qw = document.querySelector('[data-quiz-mode="word"]');
  const qdm = document.querySelector('[data-quiz-dir="to_morse"]');
  const qdt = document.querySelector('[data-quiz-dir="to_text"]');
  if (ql) ql.textContent = t('quiz_mode_letter');
  if (qw) qw.textContent = t('quiz_mode_word');
  if (qdm) qdm.textContent = t('quiz_dir_to_morse');
  if (qdt) qdt.textContent = t('quiz_dir_to_text');

  setT('cheatsheet-title', t('cheatsheet_title'));
  setT('cheatsheet-desc', t('cheatsheet_desc'));
  setT('cheatsheet-receive-label', t('cheatsheet_receive'));
  setT('cheatsheet-send-label', t('cheatsheet_send'));
  setT('cheatsheet-print-btn', t('cheatsheet_print'));

  setT('links-title', t('links_title'));
  setT('links-intro', t('links_intro'));
  const linksEl = document.getElementById('links-list');
  if (linksEl) {
    linksEl.innerHTML = LANG.links_list.map(l => `
      <a href="${l.url}" class="link-card" target="_blank" rel="noopener">
        <span class="link-name">${l.name}</span>
        <span class="link-desc">${l.desc}</span>
      </a>
    `).join('');
  }

  setT('footer-workshop', t('footer_workshop'));
  setT('footer-event', t('footer_event'));
  setT('footer-license', t('footer_license'));
  setT('footer-alerta', t('footer_alerta'));
}

function setT(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initLangSwitch();
  initNav();
  initTranslator();
  initQuiz();
  startHeroIdle();
});
