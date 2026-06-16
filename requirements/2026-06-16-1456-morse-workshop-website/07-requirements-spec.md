# Requirements Specification: Morse Workshop Website
# Antifaschistisches Morsen — Fusion Festival 2026

Generated: 2026-06-16  
Status: Complete

---

## Overview

Statische, mobile-first Website als digitales Handout und Lernressource für den Workshop "Antifaschistisches Morsen" auf dem Fusion Festival 2026. Die Seite erweitert den physischen Visitenkarten-Cheatsheet um interaktive, animierte und inhaltlich tiefere Inhalte. Zugang primär über direkte URL-Eingabe (mündlich kommuniziert). Hosting: GitHub Pages, Custom Domain folgt später.

---

## Functional Requirements

### 1. Mehrsprachigkeit
- Sprachumschalter DE / EN, sichtbar und jederzeit erreichbar (sticky Header oder Floating Button)
- Alle Texte in beiden Sprachen vorhanden
- Standard: Deutsch (Browser-Sprache als Fallback-Heuristik optional)

### 2. Seitenstruktur (Single Page, Sektionen)

#### 2.1 Hero
- Titel: "Antifaschistisches Morsen" / "Antifascist Morse"
- Untertitel: Workshop-Kontext, Fusion Festival 2026
- Animierte Antenne (wie im Cheatsheet-SVG), LED blinkt Begrüßung in Morse
- "ALERTA ALERTA" als Easter Egg / Leitmotiv

#### 2.2 Was ist Morsen? (Grundlagen)
- Kurze Erklärung: Punkt/Strich, Timings, Pausen
- Visualisierung: Interaktives Dit/Dah-Diagramm
- Fun Facts aus dem Workshop-Konzept

#### 2.3 Historische Anwendungen im Widerstand (Anekdoten)
8 aufklappbare Karten (expand on click), jede mit:
- Titel + kurze Teaser-Zeile (sichtbar ohne Klick)
- Voller Text auf Klick (accordion/expand)
- Inhalte:
  1. Belgischer Widerstand WW2 — Stricken als Spionage
  2. UK Strickverbot — Paranoia und eigene Agentinnen
  3. Madame Levangle — Fußklopfen, Kinder notieren
  4. Phyllis Latour Doyle — Morse in Garnknoten
  5. Alexis Casdagli — Morse in Stickerei
  6. Jeremiah Denton — Blinzeln im Vietnam-TV-Interview (TORTURE)
  7. Klopfen zwischen Gefängniszellen
  8. Grok-Scam — subversiv & aktuell

#### 2.4 Interaktiver Bereich: Übersetzer + Trainer

**Freier Übersetzer (bidirektional):**
- Text → Morse: Eingabefeld, Ausgabe als ·/— Text + LED-Blink-Animation
- Morse → Text: Eingabe mit · und —, Ausgabe als Klartext
- Audio: Web Audio API, spielbare Dit/Dah-Töne (440 Hz oder ähnlich), mit Pause-Button
- Visuelle LED blinkt synchron zum Audio

**Lernmodus / Quiz:**
- Zufälliger Buchstabe oder Wort wird angezeigt
- Nutzer*in gibt Morse-Code ein (oder umgekehrt: Morse wird gezeigt, Klartext gesucht)
- Feedback: richtig/falsch, mit Erklärung
- Vokabeln aus dem Workshop priorisiert: E T A N I S H L, SOS, ACAB, FUSION, ALERTA
- Schwierigkeitsgrad wählbar: Einzelbuchstaben / Wörter

#### 2.5 Workshop-Stationen (als Inhaltssektionen)
4 Karten/Blöcke:
- A: Auditiv — Kazoos, Summer, Stimme
- B: Visuell über Distanz — Taschenlampe, Spiegel, Handylicht
- C: Visuell-kreativ — Bilder, Perlenschmuck, Garn/Knoten
- D: Haptisch — Handdruck, Schulter (mit Consent-Hinweis)

#### 2.6 Cheatsheet-Referenz
- Beide SVG-Cheatsheets eingebettet (RECEIVE-Baum + SEND-Tabelle)
- Print-CSS: Karten druckbar auf Visitenkartenformat (55×85mm)
- Optional: "Als PDF drucken" Link/Button

#### 2.7 Weiterlernen
- Links zu: lcwo.net, morsle.fun, MorseMania, MorseChat
- Kurze Beschreibung pro Ressource

#### 2.8 Footer
- Workshop-Team (Kristina, Tobi, Andrea — oder wie gewünscht)
- Kontext: Fusion Festival 2026
- Lizenz (z.B. CC BY-SA)

---

## Technical Requirements

### Stack
- Reines HTML5 / CSS3 / Vanilla JavaScript
- Kein Build-Tool, kein Framework, kein Backend
- Google Fonts: Chakra Petch (500/600/700)
- Web Audio API für Sound

### File Structure
```
/
├── index.html          # Single Page
├── style.css           # Alle Styles
├── main.js             # Übersetzer, Quiz, Animationen, i18n
├── morse.js            # Morse-Alphabet, Encode/Decode-Logik
├── lang/
│   ├── de.js           # Deutsche Texte
│   └── en.js           # Englische Texte
└── assets/
    ├── cheatsheet-receive.svg  # (aus bestehendem HTML extrahiert)
    └── cheatsheet-send.svg
```

### Design System
```css
--bg: #1a1712
--metal: #d2a946        /* primary: gold */
--metal-dim: rgba(210,169,70,0.35)
--led-green: #8fe46a
--led-red: #e8584d
--backdrop: #0d0d10
```
- Font: Chakra Petch
- Responsiv: mobile-first, ab 768px Desktop-Layout
- Animationen: LED-Blink (keyframes), Scan-line/CRT-Effekte, Expand-Transitions
- Kein Autoplay-Audio (nur auf Nutzer-Aktion)

### Hosting
- GitHub Pages (Branch: `gh-pages` oder `/docs` Folder)
- Custom Domain: offen, wird später konfiguriert
- HTTPS: via GitHub Pages automatisch

---

## Assumptions
- ASSUMED: Keine Nutzer-Accounts oder Persistenz nötig (kein LocalStorage für Quiz-Fortschritt)
- ASSUMED: Kein CMS — Inhalte direkt im HTML/JS
- ASSUMED: Workshop-Team-Namen im Footer werden noch geliefert
- ASSUMED: Lizenz: CC BY-SA 4.0

---

## Implementation Notes

1. **Morse-Engine** (`morse.js`): Standard ITU Morse-Alphabet-Map, encode/decode Funktionen, Timing-Konstanten (dit = 1 unit, dah = 3 units, etc.)
2. **Audio** (`main.js`): Web Audio API, `OscillatorNode` + `GainNode`, Töne on-demand. Kein Autoplay.
3. **i18n**: JS-Object `{de: {...}, en: {...}}`, Switch tauscht `data-lang` auf `<html>`, CSS zeigt/versteckt entsprechende Elemente.
4. **Quiz**: Shuffle-Array aus priorisierten Zeichen, State-Machine (show → input → feedback → next).
5. **SVGs**: Aus den bestehenden HTML-Dateien extrahieren, Theme-Vars übernehmen.
6. **Print**: `@media print` CSS für Cheatsheet-Sektion, Visitenkarten-Format.

---

## Acceptance Criteria

- [ ] Seite lädt auf Mobilgerät in < 3s (ohne Caching, Fusion hat ggf. schlechtes Netz)
- [ ] DE/EN Umschalter funktioniert, alle Texte übersetzt
- [ ] Alle 8 Anekdoten-Karten auf- und zuklappbar
- [ ] Übersetzer: Text → Morse und Morse → Text korrekt für A-Z, 0-9
- [ ] Audio spielt Dit/Dah-Töne auf Knopfdruck (kein Autoplay)
- [ ] LED blinkt synchron zum Audio
- [ ] Quiz: mindestens 26 Buchstaben + Workshop-Wörter (SOS, ACAB, FUSION, ALERTA)
- [ ] Beide Cheatsheets eingebettet und druckbar
- [ ] GitHub Pages Deployment funktioniert
- [ ] Keine Abhängigkeiten außer Google Fonts (kein npm, kein CDN für JS-Libs)
