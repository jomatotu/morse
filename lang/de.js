const DE = {
  lang: 'de',
  nav_about: 'Über Morsen',
  nav_history: 'Geschichte',
  nav_translate: 'Übersetzer',
  nav_quiz: 'Quiz',
  nav_stations: 'Stationen',
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
      body: 'Mitglieder des belgischen Widerstands strickten Nachrichten in ihre Arbeit ein: Ein fallengelassener Stich (Loch) stand für einen Zugstyp, ein Purl-Stich (Beule) für einen anderen. So wurden feindliche Truppenbewegungen dokumentiert — versteckt in harmlosen Strümpfen und Schals.'
    },
    {
      title: 'UK-Strickverbot',
      teaser: 'Paranoia auf beiden Seiten',
      body: 'Die britische Regierung erkannte das Potenzial — und verbot während des Zweiten Weltkriegs Strickmuster in Briefen ins Ausland. Gleichzeitig schickte das UK selbst Frauen hinter die feindlichen Linien, die Informationen in Strickarbeit codierten. Aus Paranoia wurde Taktik.'
    },
    {
      title: 'Madame Levangle',
      teaser: 'Fußklopfen unter den Augen der Besatzer',
      body: 'Während ein deutscher Offizier in ihrem Haus stationiert war, saß Madame Levangle scheinbar ruhig beim Stricken — und tippte mit ihrem Fuß gegen den Boden. Im Zimmer darunter taten ihre Kinder so, als machten sie Hausaufgaben. In Wirklichkeit notierten und übersetzten sie jeden Morsecode, den ihre Mutter sendete.'
    },
    {
      title: 'Phyllis Latour Doyle',
      teaser: 'SOE-Agentin mit Garn als Funksignal',
      body: 'Phyllis Latour Doyle war SOE-Agentin und sprang 1944 mit dem Fallschirm über dem besetzten Frankreich ab. Sie versteckte ihre Morsecodes in einem Stück Garn — verschiedene Knoten codierten die Informationen. So überlebte sie vier Monate hinter feindlichen Linien.'
    },
    {
      title: 'Alexis Casdagli',
      teaser: 'Morse als Kunst im Kriegsgefangenenlager',
      body: 'Der britische Offizier Alexis Casdagli war Kriegsgefangener und stickte scheinbar harmlose dekorative Muster. Eingewoben in den Rahmen: "God Save the King" und "Fuck Hitler" in Morsecode. Die deutschen Wachen sahen nur Handarbeit.'
    },
    {
      title: 'Jeremiah Denton',
      teaser: 'Blinzeln im Live-TV-Interview',
      body: '1966 wurde der US-Kriegsgefangene Jeremiah Denton von seinen Entführern in Vietnam für ein Propaganda-Interview vorgeführt. Während er sprach, blinzelte er — und buchstabierte so mit dem Morsecode: T-O-R-T-U-R-E. Es war der erste Beweis, den die USA für die Behandlung ihrer Gefangenen erhielten.'
    },
    {
      title: 'Klopfen zwischen Zellen',
      teaser: 'Das älteste Gefängnis-Kommunikationssystem',
      body: 'Gefangene auf der ganzen Welt haben durch Wände geklopft — Morse oder das einfachere Polybius-Quadrat-System. Wände, die trennen sollen, wurden zu Kanälen der Solidarität. Von russischen Revolutionär*innen bis zu US-Kriegsgefangenen in Vietnam: Klopfen war Widerstand.'
    },
    {
      title: 'Grok wird gescamt',
      teaser: 'Morse als digitale Subversion heute',
      body: 'Ein Twitter/X-Nutzer hat Grok (das KI-Modell von Elon Musk) mit Morsecode-Prompts hereingelegt und es dazu gebracht, Inhalte zu generieren, die es sonst verweigert hätte. Kein politischer Widerstand im klassischen Sinne — aber ein schöner Beweis, dass Verschlüsselung und Umgehungsstrategien lebendige Praxis bleiben.'
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
  translate_hint: 'Tipp: Nutze Leerzeichen zwischen Zeichen, / zwischen Wörtern',

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

  stations_title: 'Die 4 Stationen',
  stations_intro: 'Im Workshop gibt es vier praktische Stationen zum Ausprobieren.',
  stations: [
    {
      letter: 'A',
      title: 'Auditiv',
      desc: 'Morsen mit Tönen — Kazoos, Summer, Tröten, Stimme. Hören und Senden mit dem, was ihr habt.'
    },
    {
      letter: 'B',
      title: 'Visuell über Distanz',
      desc: 'Taschenlampe, Handylicht, Spiegel. Signale über größere Entfernungen — wie Leuchtfeuer oder Heliograf.'
    },
    {
      letter: 'C',
      title: 'Visuell-kreativ',
      desc: 'Botschaften verstecken in Bildern oder Texten. Morsecode in Perlenschmuck oder Knoten in Garn einarbeiten — wie die Widerstandskämpfer*innen.'
    },
    {
      letter: 'D',
      title: 'Haptisch',
      desc: 'Morsen durch Berührung — Handdruck oder Tippen auf die Schulter. Stille Post: ein Morsewort durch 5–6 Personen in einer Reihe. Nur freiwillig, nur mit Consent.'
    }
  ],

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
