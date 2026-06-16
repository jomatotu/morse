const DE = {
  lang: 'de',
  nav_about: 'Über Morsen',
  nav_history: 'Geschichte',
  nav_translate: 'Übersetzer',
  nav_quiz: 'Quiz',
  nav_cheatsheet: 'Cheatsheet',
  nav_links: 'Weiterlernen',

  hero_subtitle: 'Workshop · Fusion Festival 2026',
  hero_desc: 'Morsecode als Werkzeug des Widerstands — gestern, heute, morgen.',
  hero_scroll: 'Weiter erkunden',

  about_title: 'Was ist Morsen?',
  about_p1: 'Morsecode ist ein Zeichencode, der Text durch kurze Signale (Dit · ) und lange Signale (Dah — ) überträgt. Entwickelt in den 1840ern für den elektrischen Telegrafen, wurde er zum universellen Kommunikationsmedium.',
  about_p2: 'Ein Dit dauert eine Einheit. Ein Dah drei. Die Pause zwischen Zeichen desselben Buchstabens: eine Einheit. Zwischen Buchstaben: drei. Zwischen Wörtern: sieben.',
  about_timing_title: 'Timing-Prinzip',
  about_dit: 'Dit · (kurz)',
  about_dah: 'Dah — (lang = 3×)',
  about_char: 'Buchstaben-Pause (3×)',
  about_word: 'Wort-Pause (7×)',
  about_fact1: '🌍 Weltweit verständlich — keine gemeinsame Sprache nötig.',
  about_fact2: '⚡ SOS (···—···) ist kein Akronym — die Signalfolge ist einfach unmissverständlich.',
  about_fact3: '📻 Bis heute im Einsatz: Seenot, Amateurfunk, Militär.',

  history_title: 'Morsecode im Widerstand',
  history_intro: 'Geheimkommunikation war überlebenswichtig. Menschen haben Morse auf kreativste Wege eingesetzt — strickend, klopfend, blinzelnd.',
  anecdotes: [
    {
      title: 'Belgischer Widerstand, WW2',
      teaser: 'Stricken als Spionagetool',
      body: 'Mitglieder des belgischen Widerstands strickten Nachrichten in ihre Arbeit ein: Ein fallengelassener Stich (Loch) stand für einen Zugstyp, ein Purl-Stich (Beule) für einen anderen. So wurden feindliche Truppenbewegungen dokumentiert — versteckt in harmlosen Strümpfen und Schals.',
      links: [
        { label: 'Wikipedia: Wartime knitting', url: 'https://en.wikipedia.org/wiki/Wartime_knitting' },
        { label: 'Wikipedia: Belgischer Widerstand', url: 'https://de.wikipedia.org/wiki/Belgischer_Widerstand_(Zweiter_Weltkrieg)' }
      ]
    },
    {
      title: 'UK-Strickverbot',
      teaser: 'Paranoia auf beiden Seiten',
      body: 'Die britische Regierung erkannte das Potenzial — und verbot während des Zweiten Weltkriegs Strickmuster in Briefen ins Ausland. Gleichzeitig schickte das UK selbst Frauen hinter die feindlichen Linien, die Informationen in Strickarbeit codierten. Aus Paranoia wurde Taktik.',
      links: [
        { label: 'Wikipedia: Wartime knitting', url: 'https://en.wikipedia.org/wiki/Wartime_knitting' },
        { label: 'The Guardian: Knitting as espionage', url: 'https://www.theguardian.com/lifeandstyle/2014/jun/20/knitting-spies-subversive-stitch' }
      ]
    },
    {
      title: 'Madame Levangle',
      teaser: 'Fußklopfen unter den Augen der Besatzer',
      body: 'Während ein deutscher Offizier in ihrem Haus stationiert war, saß Madame Levangle scheinbar ruhig beim Stricken — und tippte mit ihrem Fuß gegen den Boden. Im Zimmer darunter taten ihre Kinder so, als machten sie Hausaufgaben. In Wirklichkeit notierten und übersetzten sie jeden Morsecode, den ihre Mutter sendete.',
      links: [
        { label: 'Wikipedia: Wartime knitting (Abschnitt Morse)', url: 'https://en.wikipedia.org/wiki/Wartime_knitting#Morse_code' }
      ]
    },
    {
      title: 'Phyllis Latour Doyle',
      teaser: 'SOE-Agentin mit Garn als Funksignal',
      body: 'Phyllis Latour Doyle war SOE-Agentin und sprang 1944 mit dem Fallschirm über dem besetzten Frankreich ab. Sie versteckte ihre Morsecodes in einem Stück Garn — verschiedene Knoten codierten die Informationen. So überlebte sie vier Monate hinter feindlichen Linien.',
      links: [
        { label: 'Wikipedia: Phyllis Latour Doyle', url: 'https://en.wikipedia.org/wiki/Phyllis_Latour_Doyle' },
        { label: 'Wikipedia: Special Operations Executive', url: 'https://de.wikipedia.org/wiki/Special_Operations_Executive' }
      ]
    },
    {
      title: 'Alexis Casdagli',
      teaser: 'Morse als Kunst im Kriegsgefangenenlager',
      body: 'Der britische Offizier Alexis Casdagli war Kriegsgefangener und stickte scheinbar harmlose dekorative Muster. Eingewoben in den Rahmen: "God Save the King" und "Fuck Hitler" in Morsecode. Die deutschen Wachen sahen nur Handarbeit.',
      links: [
        { label: 'Wikipedia: Alexis Casdagli', url: 'https://en.wikipedia.org/wiki/Alexis_Casdagli' },
        { label: 'Imperial War Museum: Casdagli\'s needlework', url: 'https://www.iwm.org.uk/collections/item/object/30014090' }
      ]
    },
    {
      title: 'Jeremiah Denton',
      teaser: 'Blinzeln im Live-TV-Interview',
      body: '1966 wurde der US-Kriegsgefangene Jeremiah Denton von seinen Entführern in Vietnam für ein Propaganda-Interview vorgeführt. Während er sprach, blinzelte er — und buchstabierte so mit dem Morsecode: T-O-R-T-U-R-E. Es war der erste Beweis, den die USA für die Behandlung ihrer Gefangenen erhielten.',
      links: [
        { label: 'Wikipedia: Jeremiah Denton', url: 'https://en.wikipedia.org/wiki/Jeremiah_Denton' },
        { label: 'Wikipedia: Vietnamkrieg-Kriegsgefangene', url: 'https://de.wikipedia.org/wiki/Kriegsgefangene_im_Vietnamkrieg' }
      ]
    },
    {
      title: 'Klopfen zwischen Zellen',
      teaser: 'Das älteste Gefängnis-Kommunikationssystem',
      body: 'Gefangene auf der ganzen Welt haben durch Wände geklopft — Morse oder das einfachere Polybius-Quadrat-System. Wände, die trennen sollen, wurden zu Kanälen der Solidarität. Von russischen Revolutionär*innen bis zu US-Kriegsgefangenen in Vietnam: Klopfen war Widerstand.',
      links: [
        { label: 'Wikipedia: Tap code', url: 'https://en.wikipedia.org/wiki/Tap_code' },
        { label: 'Wikipedia: Polybius-Quadrat', url: 'https://de.wikipedia.org/wiki/Polybios-Chiffre' }
      ]
    },
    {
      title: 'Grok wird gescamt',
      teaser: 'Morse als digitale Subversion heute',
      body: 'Ein Twitter/X-Nutzer hat Grok (das KI-Modell von Elon Musk) mit Morsecode-Prompts hereingelegt und es dazu gebracht, Inhalte zu generieren, die es sonst verweigert hätte. Kein politischer Widerstand im klassischen Sinne — aber ein schöner Beweis, dass Verschlüsselung und Umgehungsstrategien lebendige Praxis bleiben.',
      links: [
        { label: '404 Media: Grok Morse Code Jailbreak', url: 'https://www.404media.co/grok-morse-code-jailbreak/' }
      ]
    }
  ],

  translate_title: 'Übersetzer',
  translate_text_label: 'Text',
  translate_morse_label: 'Morsecode',
  translate_placeholder_text: 'Text eingeben…',
  translate_placeholder_morse: '· · · — — — · · ·',
  translate_play: 'Abspielen ▶',
  translate_stop: 'Stop ■',
  translate_speed_label: 'Geschwindigkeit',
  translate_hint: 'Tipp: Leerzeichen zwischen Zeichen, / zwischen Wörtern',

  quiz_title: 'Lernmodus',
  quiz_desc: 'Buchstaben und Workshop-Wörter in Morse lernen.',
  quiz_mode_letter: 'Buchstaben',
  quiz_mode_word: 'Wörter',
  quiz_dir_to_morse: 'Text → Morse',
  quiz_dir_to_text: 'Morse → Text',
  quiz_prompt_to_morse: 'Wie lautet der Morsecode für:',
  quiz_prompt_to_text: 'Was bedeutet dieser Morsecode?',
  quiz_placeholder: 'Antwort eingeben…',
  quiz_check: 'Prüfen',
  quiz_next: 'Weiter',
  quiz_correct: '✓ Richtig!',
  quiz_wrong: '✗ Falsch. Richtig wäre:',
  quiz_score: 'Punkte',

  cheatsheet_title: 'Cheatsheet',
  cheatsheet_desc: 'Vorder- und Rückseite eurer Lernkarte — zum Ausdrucken oder Speichern.',
  cheatsheet_receive: 'EMPFANGEN (Entschlüsseln)',
  cheatsheet_send: 'SENDEN (Codieren)',
  cheatsheet_print: 'Drucken',

  links_title: 'Weiterlernen',
  links_intro: 'Mit diesen Ressourcen könnt ihr Morse systematisch lernen und üben:',
  links_list: [
    { name: 'lcwo.net', url: 'https://lcwo.net/de/welcome', desc: 'Koch-Methode — strukturiertes Lernen, kostenlos, auf Deutsch.' },
    { name: 'morsle.fun', url: 'https://morsle.fun', desc: 'Wordle mit Morsecode. Täglich ein neues Wort.' },
    { name: 'MorseMania', url: 'https://apps.apple.com/app/morse-mania/id886013877', desc: 'App zum Üben — gamifiziert und progressiv.' },
    { name: 'MorseChat', url: 'https://morsechat.app', desc: 'Mit anderen Morse-Lernenden chatten — als echter Morsecode.' }
  ],

  footer_workshop: 'Antifaschistisches Morsen',
  footer_event: 'Fusion Festival 2026',
  footer_license: 'Inhalte: CC BY-SA 4.0',
  footer_alerta: '.- .-.. . .-. - .-'
};
