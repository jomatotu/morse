const MORSE = {
  A:'.-', B:'-...', C:'-.-.', D:'-..', E:'.', F:'..-.',
  G:'--.', H:'....', I:'..', J:'.---', K:'-.-', L:'.-..',
  M:'--', N:'-.', O:'---', P:'.--.', Q:'--.-', R:'.-.',
  S:'...', T:'-', U:'..-', V:'...-', W:'.--', X:'-..-',
  Y:'-.--', Z:'--..',
  '0':'-----','1':'.----','2':'..---','3':'...--','4':'....-',
  '5':'.....','6':'-....','7':'--...','8':'---..','9':'----.',
  '.':'.-.-.-', ',':'--..--', '?':'..--..', '/':'-..-.', '-':'-....-',
  '(':'-.--.',  ')':'-.--.-', '@':'.--.-.', ':':'---...'
};

const MORSE_INV = Object.fromEntries(Object.entries(MORSE).map(([k,v])=>[v,k]));

const DIT = 1, DAH = 3, CHAR_GAP = 3, WORD_GAP = 7;

function encode(text) {
  return text.toUpperCase().split('').map(c => {
    if (c === ' ') return '/';
    return MORSE[c] || '';
  }).filter(Boolean).join(' ');
}

function decode(morse) {
  return morse.trim().split(' / ').map(word =>
    word.split(' ').map(sym => MORSE_INV[sym] || '?').join('')
  ).join(' ');
}

function getTimings(morseStr, unit = 60) {
  const events = [];
  let t = 0;
  const tokens = morseStr.trim().split(' ');
  tokens.forEach((token, ti) => {
    if (token === '/') { t += (WORD_GAP - CHAR_GAP) * unit; return; }
    if (ti > 0 && tokens[ti-1] !== '/') t += CHAR_GAP * unit;
    for (let i = 0; i < token.length; i++) {
      if (i > 0) t += unit;
      const len = token[i] === '-' ? DAH * unit : DIT * unit;
      events.push({ t, len, sym: token[i] });
      t += len;
    }
  });
  return { events, total: t };
}
