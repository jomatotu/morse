const EN = {
  lang: 'en',
  nav_about: 'About Morse',
  nav_history: 'History',
  nav_translate: 'Translator',
  nav_quiz: 'Quiz',
  nav_cheatsheet: 'Cheatsheet',
  nav_links: 'Learn More',

  hero_subtitle: 'Workshop · Fusion Festival 2026',
  hero_desc: 'Morse code as a tool of resistance — yesterday, today, tomorrow.',
  hero_scroll: 'Explore more',

  about_title: 'What is Morse Code?',
  about_p1: 'Morse code is a character encoding that transmits text through short signals (Dit · ) and long signals (Dah — ). Developed in the 1840s for the electric telegraph, it became a universal communication medium.',
  about_p2: 'A Dit lasts one unit. A Dah lasts three. The pause between elements of the same letter: one unit. Between letters: three. Between words: seven.',
  about_timing_title: 'Timing Principle',
  about_dit: 'Dit · (short)',
  about_dah: 'Dah — (long = 3×)',
  about_char: 'Letter pause (3×)',
  about_word: 'Word pause (7×)',
  about_fact1: '🌍 Universally understandable — no shared language needed.',
  about_fact2: '⚡ SOS (···—···) is not an acronym — the signal sequence is simply unmistakable.',
  about_fact3: '📻 Still in use today: maritime distress, amateur radio, military.',

  history_title: 'Morse Code in Resistance',
  history_intro: 'Secret communication was vital for survival. People used Morse in the most creative ways — knitting, tapping, blinking.',
  anecdotes: [
    {
      title: 'Belgian Resistance, WW2',
      teaser: 'Knitting as a spy tool',
      body: 'Members of the Belgian resistance knitted messages into their work: a dropped stitch (hole) represented one type of train, a purl stitch (bump) another. Enemy troop movements were documented this way — hidden in harmless socks and scarves.',
      links: [
        { label: 'Wikipedia: Wartime knitting', url: 'https://en.wikipedia.org/wiki/Wartime_knitting' },
        { label: 'Wikipedia: Belgian Resistance', url: 'https://en.wikipedia.org/wiki/Belgian_resistance_movement_in_World_War_II' }
      ]
    },
    {
      title: 'UK Knitting Ban',
      teaser: 'Paranoia on both sides',
      body: 'The British government recognised the potential — and banned knitting patterns in letters abroad during WW2. At the same time, the UK itself sent women behind enemy lines who encoded information in their knitting. Paranoia became tactics.',
      links: [
        { label: 'Wikipedia: Wartime knitting', url: 'https://en.wikipedia.org/wiki/Wartime_knitting' },
        { label: 'The Guardian: Knitting as espionage', url: 'https://www.theguardian.com/lifeandstyle/2014/jun/20/knitting-spies-subversive-stitch' }
      ]
    },
    {
      title: 'Madame Levangle',
      teaser: 'Foot-tapping under the occupiers\' eyes',
      body: 'While a German officer was stationed in her house, Madame Levangle sat seemingly calm, knitting — and tapped her foot against the floor. In the room below, her children pretended to do homework. In reality they were noting and translating every Morse signal their mother sent.',
      links: [
        { label: 'Wikipedia: Wartime knitting (Morse section)', url: 'https://en.wikipedia.org/wiki/Wartime_knitting#Morse_code' }
      ]
    },
    {
      title: 'Phyllis Latour Doyle',
      teaser: 'SOE agent with yarn as radio signal',
      body: 'Phyllis Latour Doyle was an SOE agent who parachuted into occupied France in 1944. She hid her Morse codes in a piece of yarn — different knots encoded the information. She survived four months behind enemy lines.',
      links: [
        { label: 'Wikipedia: Phyllis Latour Doyle', url: 'https://en.wikipedia.org/wiki/Phyllis_Latour_Doyle' },
        { label: 'Wikipedia: Special Operations Executive', url: 'https://en.wikipedia.org/wiki/Special_Operations_Executive' }
      ]
    },
    {
      title: 'Alexis Casdagli',
      teaser: 'Morse as art in a POW camp',
      body: 'British officer Alexis Casdagli was a prisoner of war who embroidered seemingly harmless decorative patterns. Woven into the border: "God Save the King" and "Fuck Hitler" in Morse code. The German guards saw only needlework.',
      links: [
        { label: 'Wikipedia: Alexis Casdagli', url: 'https://en.wikipedia.org/wiki/Alexis_Casdagli' },
        { label: 'Imperial War Museum: Casdagli\'s needlework', url: 'https://www.iwm.org.uk/collections/item/object/30014090' }
      ]
    },
    {
      title: 'Jeremiah Denton',
      teaser: 'Blinking in a live TV interview',
      body: 'In 1966, US POW Jeremiah Denton was paraded by his captors in Vietnam for a propaganda interview. While speaking, he blinked — spelling out in Morse code: T-O-R-T-U-R-E. It was the first evidence the US received about the treatment of their prisoners.',
      links: [
        { label: 'Wikipedia: Jeremiah Denton', url: 'https://en.wikipedia.org/wiki/Jeremiah_Denton' },
        { label: 'Wikipedia: Vietnam War POWs', url: 'https://en.wikipedia.org/wiki/American_prisoners_of_war_in_the_Vietnam_War' }
      ]
    },
    {
      title: 'Tapping Between Cells',
      teaser: 'The oldest prison communication system',
      body: 'Prisoners worldwide have tapped through walls — using Morse or the simpler Polybius square. Walls meant to divide became channels of solidarity. From Russian revolutionaries to US POWs in Vietnam: tapping was resistance.',
      links: [
        { label: 'Wikipedia: Tap code', url: 'https://en.wikipedia.org/wiki/Tap_code' },
        { label: 'Wikipedia: Polybius square', url: 'https://en.wikipedia.org/wiki/Polybius_square' }
      ]
    },
    {
      title: 'Grok Gets Scammed',
      teaser: 'Morse as digital subversion today',
      body: 'A Twitter/X user tricked Grok (Elon Musk\'s AI model) with Morse-coded prompts, getting it to generate content it would otherwise refuse. Not political resistance in the classical sense — but a beautiful reminder that encryption and circumvention remain living practice.',
      links: [
        { label: '404 Media: Grok Morse Code Jailbreak', url: 'https://www.404media.co/grok-morse-code-jailbreak/' }
      ]
    }
  ],

  translate_title: 'Translator',
  translate_text_label: 'Text',
  translate_morse_label: 'Morse Code',
  translate_placeholder_text: 'Enter text…',
  translate_placeholder_morse: '· · · — — — · · ·',
  translate_play: 'Play ▶',
  translate_stop: 'Stop ■',
  translate_speed_label: 'Speed',
  translate_hint: 'Tip: spaces between characters, / between words',

  quiz_title: 'Practice Mode',
  quiz_desc: 'Learn letters and workshop words in Morse.',
  quiz_mode_letter: 'Letters',
  quiz_mode_word: 'Words',
  quiz_dir_to_morse: 'Text → Morse',
  quiz_dir_to_text: 'Morse → Text',
  quiz_prompt_to_morse: 'What is the Morse code for:',
  quiz_prompt_to_text: 'What does this Morse code mean?',
  quiz_placeholder: 'Enter answer…',
  quiz_check: 'Check',
  quiz_next: 'Next',
  quiz_correct: '✓ Correct!',
  quiz_wrong: '✗ Wrong. The answer is:',
  quiz_score: 'Score',

  cheatsheet_title: 'Cheatsheet',
  cheatsheet_desc: 'Front and back of your learning card — for printing or saving.',
  cheatsheet_receive: 'RECEIVE (Decode)',
  cheatsheet_send: 'SEND (Encode)',
  cheatsheet_print: 'Print',

  links_title: 'Learn More',
  links_intro: 'Resources for learning and practising Morse systematically:',
  links_list: [
    { name: 'lcwo.net', url: 'https://lcwo.net/de/welcome', desc: 'Koch method — structured learning, free.' },
    { name: 'morsle.fun', url: 'https://morsle.fun', desc: 'Wordle with Morse code. A new word every day.' },
    { name: 'MorseMania', url: 'https://apps.apple.com/app/morse-mania/id886013877', desc: 'App for practice — gamified and progressive.' },
    { name: 'MorseChat', url: 'https://morsechat.app', desc: 'Chat with other Morse learners — in actual Morse code.' }
  ],

  footer_workshop: 'Antifascist Morse',
  footer_event: 'Fusion Festival 2026',
  footer_license: 'Content: CC BY-SA 4.0',
  footer_alerta: '.- .-.. . .-. - .-'
};
