# Context Findings

## Design System (aus Cheatsheets)

### Typografie
- Font: Chakra Petch (500/600/700) via Google Fonts
- Stil: technisch, monospace-nah, futuristisch

### Farben / Themes
```css
--bg: #1a1712          /* dark board (gold theme) */
--metal: #d2a946       /* gold */
--metal-dim: rgba(210,169,70,0.35)
--led-green: #8fe46a
--led-red: #e8584d
--backdrop: #0d0d10    /* outer background */

/* silver theme */
--bg: #16181b
--metal: #c4cad2

/* print theme */
--bg: #f7f4ed          /* cream */
--metal: #221f1a       /* near-black */
```

### SVG-Pattern
- Circuits/traces als `<line>` mit stroke
- Knoten: `<circle>` (dit) und `<rect rx>` (dah)
- LED-Glow: `<feGaussianBlur>` filter + overlay circle
- Antenne: Dreieck + Linie
- Side-note: rotierter Text ("ALERTA ALERTA")

## Workshop-Inhalte (aus Konzept)

### Historische Anekdoten (Content-Blöcke)
1. **Belgischer Widerstand WW2** — Strickerei: Löcher/Bumps für Zugtypen
2. **UK Strickverbot** — Paranoia, eigene Agentinnen hinter die Front geschickt
3. **Madame Levangle** — Fußklopfen, Kinder notieren unten im Zimmer
4. **Phyllis Latour Doyle** — Morsecode in Garnknoten versteckt
5. **Alexis Casdagli WW2** — Morse in Stickerei eingearbeitet
6. **Jeremiah Denton Vietnam** — Blinzeln im TV-Interview (TORTURE)
7. **Klopfen zwischen Gefängniszellen** — klassisches Klopfalphabet
8. **Grok-Scam** — subversiv, aktuell, lustig

### Lern-Wörter aus Workshop
- SOS, ACAB, FUSION, ALERTA

### Übungsressourcen (Links)
- https://lcwo.net/de/welcome (Koch Methode)
- morsle.fun
- MorseMania App
- MorseChat App

### 4 Stationen (als Inhaltssektionen nutzbar)
- A: Auditiv (Kazoos, Summer, Stimme)
- B: Visuell über Distanz (Taschenlampe, Spiegel)
- C: Visuell-kreativ (Bilder, Perlen, Garn)
- D: Haptisch (Handdruck, Schulter)

## Technische Analyse

### Interaktiver Übersetzer — Anforderungen
- Text → Morse (Punkte/Striche als Text + optional Blink-Animation)
- Morse → Text (Decoder)
- Playback: LED blinkt den Code visuell (setTimeout-basiert)
- Ggf. Audio: Web Audio API für Töne (dit/dah)

### Sprachumschalter DE/EN
- Einfachste Lösung: data-lang Attribut auf body, alle Texte doppelt im DOM mit `[lang=de]` / `[lang=en]` CSS-Visibility
- Alternative: JS-Object mit allen Strings, DOM-Update bei Switch

### Animation-Ideen (passend zum Stil)
- Blinkende LED-Nodes beim Laden / Idle
- Cursor als Morsezeichen
- Scan-line / CRT-Effekte via CSS
- "Übertragung"-Animation wenn Übersetzer läuft
- Tipp-Sound (optional, Web Audio)

### Seitenstruktur
Logische Sektionen:
1. Hero / Titel (mit Antennen-Animation)
2. Was ist Morsen? (Grundlagen)
3. Historische Anwendung im Widerstand (Anekdoten-Karten)
4. Interaktiver Übersetzer / Trainer
5. Die 4 Stationen (Workshop-Inhalt)
6. Weiterlernen (Links + Cheatsheet-Download)
7. Footer (Kontakt / Über den Workshop)
