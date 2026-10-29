# Musical Instruments Explorer — Gamility Explorer

> Interactive organology catalog, acoustic physics analyzer, and synthesized audio explorer for world musical instruments.

## 🌟 Overview
**Musical Instruments Explorer** is a zero-build, client-side web application dedicated to organology (the science of musical instruments and their classifications). Explore the physical mechanisms, pitch frequencies, cultural histories, and acoustic resonance principles across five foundational instrument families: Strings, Woodwinds, Brass, Percussion, and Keyboards.

Part of the **Gamility Explorer** knowledge platform.

---

## 🎻 Key Features
- **5 Classical Families (35+ Curated Instruments)**: Strings (Chordophones), Woodwinds (Aerophones), Brass (Labrosones), Percussion (Idiophones & Membranophones), and Keyboards.
- **Interactive Web Audio Sound Synthesis**: Realistic acoustic procedural sound synthesis engine generating characteristic pitch samples for each instrument in real-time (no external audio files required).
- **High-Definition Photography Showcase**: Clean, uncropped high-resolution instrument photography with zero blur or obscuring scrims.
- **Detailed Acoustic Dossiers**: Hornbostel-Sachs classification, pitch frequency range in Hertz (Hz), vibrating medium, historical origin century, famous orchestral compositions, and playing techniques (arco, pizzicato, embouchure, muting).
- **Side-by-Side Instrument Comparator**: Benchmark 3 instruments head-to-head comparing frequency spans, dynamic volume decibels, physical weight, and orchestra section placement.
- **Ear-Training & Organology Quiz Master**: Test your musical ear by identifying instruments from live sound clips and testing classification trivia.
- **Mystery Instrument Discovery**: Instant randomizer to discover unique world instruments.

---

## 🛠️ Technology Stack
- **Structure**: Semantic HTML5 with accessibility ARIA tags
- **Styling**: Vanilla CSS3 custom design system with warm amber/bronze acoustic theme
- **Logic**: Vanilla JavaScript (ES6+) with the Web Audio API (`AudioContext`, `BiquadFilterNode`, `GainNode`, `OscillatorNode`)
- **Zero Build**: Operates 100% locally in any modern browser without npm dependencies or bundlers.

---

## 📂 Repository Structure
```
explorer/musical-instruments/
├── index.html          # Application layout & UI views
├── style.css           # Design system & responsive stylesheets
├── app.js              # Instrument dataset & Web Audio synthesis
├── favicon.svg         # Treble clef vector icon
├── site.webmanifest    # Progressive Web App manifest
├── robots.txt          # Web crawler configuration
├── sitemap.xml         # XML sitemap
├── .gitignore          # Git exclusion rules
└── README.md           # Documentation
```

---

## 📜 Copyright & License
Copyright © 2026 [Gamility](https://mahesh-yennam.github.io/Gamility/). All rights reserved.
