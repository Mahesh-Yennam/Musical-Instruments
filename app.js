/**
 * MUSICAL INSTRUMENTS EXPLORER — Gamility Explorer
 * Client-Side Organology Discovery Engine, Procedural Audio Synthesis & Comparator
 * Copyright © 2026 Gamility (All Rights Reserved)
 */

(function () {
  'use strict';

  /* ==========================================================================
     CURATED DATASET: 35 CLASSICAL & WORLD INSTRUMENTS ACROSS 5 FAMILIES
     ========================================================================== */
  const INSTRUMENTS_DATA = [
    // --- STRINGS (CHORDOPHONES) ---
    {
      id: 'violin',
      name: 'Violin',
      family: 'strings',
      familyName: 'Strings',
      classification: 'Bowed Chordophone',
      emoji: '🎻',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Violin_VL100.png/330px-Violin_VL100.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'G3 – A7',
      lowestFreqHz: 196,
      highestFreqHz: 3520,
      vibratingMedium: 'Four steel or gut strings excited by horsehair bow',
      originCentury: '16th Century (Italy)',
      originYear: 1550,
      register: 'soprano',
      orchestraRole: 'Primary melodic section of the symphony orchestra (First & Second Violins)',
      famousPiece: 'Antonio Vivaldi — The Four Seasons (1725)',
      playingTechniques: ['Arco (Bowed)', 'Pizzicato (Plucked)', 'Spiccato (Bouncing)', 'Sul tasto'],
      soundSynth: { type: 'bowed-string', baseFreq: 440, duration: 1.8 },
      funFacts: [
        'A full-size violin body consists of over 70 individual pieces of precision-carved wood joined together.',
        'Stradivarius violins crafted by Antonio Stradivari in the 17th century regularly auction for upwards of $15 million.',
        'Playing the violin burns approximately 170 calories per hour, comparable to a brisk walk.'
      ]
    },
    {
      id: 'viola',
      name: 'Viola',
      family: 'strings',
      familyName: 'Strings',
      classification: 'Bowed Chordophone',
      emoji: '🎻',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Bratsche.jpg/330px-Bratsche.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'C3 – E6',
      lowestFreqHz: 131,
      highestFreqHz: 1318,
      vibratingMedium: 'Four thicker strings tuned a perfect fifth below the violin',
      originCentury: '16th Century (Italy)',
      originYear: 1535,
      register: 'alto',
      orchestraRole: 'Middle harmonic voice bridging the violins and cellos',
      famousPiece: 'Hector Berlioz — Harold in Italy (1834)',
      playingTechniques: ['Arco', 'Pizzicato', 'Martelé', 'Tremolo'],
      soundSynth: { type: 'bowed-string', baseFreq: 261.63, duration: 1.8 },
      funFacts: [
        'The viola is the only orchestral instrument that routinely reads music in the Alto Clef (C-clef).',
        'Slightly larger than a violin, its acoustic resonance produces a noticeably darker, warmer, and huskier timbre.',
        'Famous composers Wolfgang Amadeus Mozart and Johann Sebastian Bach both preferred playing the viola in chamber quartets.'
      ]
    },
    {
      id: 'cello',
      name: 'Violoncello (Cello)',
      family: 'strings',
      familyName: 'Strings',
      classification: 'Bowed Chordophone',
      emoji: '🎻',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Cello_front_side.png/330px-Cello_front_side.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'C2 – G5',
      lowestFreqHz: 65,
      highestFreqHz: 784,
      vibratingMedium: 'Heavy strings anchored over a carved bridge and spruce soundboard',
      originCentury: '16th Century (Italy)',
      originYear: 1550,
      register: 'tenor',
      orchestraRole: 'Rich tenor/bass foundation and expressive solo melody',
      famousPiece: 'J.S. Bach — Cello Suite No. 1 in G Major (BWV 1007)',
      playingTechniques: ['Arco', 'Pizzicato', 'Thumb Position', 'Portamento'],
      soundSynth: { type: 'bowed-string', baseFreq: 130.81, duration: 2.2 },
      funFacts: [
        'The cello is widely considered by acoustic scientists to have the pitch range closest to the human vocal singing range.',
        'Early cellos had no endpin (spike) and were held clamped solely by the musician’s calves.',
        'The plural of cello is technically "celli", inherited directly from the original Italian.'
      ]
    },
    {
      id: 'double-bass',
      name: 'Double Bass (Contrabass)',
      family: 'strings',
      familyName: 'Strings',
      classification: 'Bowed Chordophone',
      emoji: '🎻',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/AGK_bass1_full.jpg/330px-AGK_bass1_full.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'C1 – C4',
      lowestFreqHz: 32,
      highestFreqHz: 261,
      vibratingMedium: 'Four heavy wound steel strings tuned in fourths (E-A-D-G)',
      originCentury: '15th Century (Europe)',
      originYear: 1490,
      register: 'bass',
      orchestraRole: 'Deep acoustic harmonic foundation of the entire orchestral string section',
      famousPiece: 'Camille Saint-Saëns — The Elephant from Carnival of the Animals',
      playingTechniques: ['Slap Bass (Jazz)', 'Arco (French or German bow)', 'Pizzicato'],
      soundSynth: { type: 'bowed-string', baseFreq: 65.41, duration: 2.4 },
      funFacts: [
        'Stands over 1.8 meters (6 feet) tall, requiring the performer to stand or sit on a specialized high stool.',
        'It is the only modern orchestral string instrument tuned in intervals of fourths rather than fifths.',
        'Serves as the rhythmic and harmonic engine across classical symphonies, big band jazz, and rockabilly.'
      ]
    },
    {
      id: 'acoustic-guitar',
      name: 'Classical Acoustic Guitar',
      family: 'strings',
      familyName: 'Strings',
      classification: 'Plucked Chordophone',
      emoji: '🎸',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Classical_Guitar_two_views2.png/330px-Classical_Guitar_two_views2.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'E2 – B5',
      lowestFreqHz: 82,
      highestFreqHz: 988,
      vibratingMedium: 'Six nylon or steel strings amplified through a hollow wooden resonance box',
      originCentury: '15th Century (Spain)',
      originYear: 1490,
      register: 'tenor',
      orchestraRole: 'Solo concert instrument and harmonic rhythm accompaniment',
      famousPiece: 'Joaquín Rodrigo — Concierto de Aranjuez (1939)',
      playingTechniques: ['Rasgueado', 'Fingerstyle (Plucking)', 'Tremolo', 'Harmonics'],
      soundSynth: { type: 'plucked-string', baseFreq: 196, duration: 2.0 },
      funFacts: [
        'The sound of a guitar is amplified purely by the vibration of the top soundboard and soundhole, without electronics.',
        'Predecessor instruments include the Renaissance lute and the Spanish vihuela.',
        'Antonio de Torres Jurado in 1850 established the modern proportions and fan-strutting of the classical guitar.'
      ]
    },
    {
      id: 'harp',
      name: 'Concert Grand Harp',
      family: 'strings',
      familyName: 'Strings',
      classification: 'Plucked Chordophone',
      emoji: '🪕',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Harp.png/330px-Harp.png',
      pitchRangeNotes: 'C0 – G7',
      lowestFreqHz: 16,
      highestFreqHz: 3136,
      vibratingMedium: '47 vertical strings controlled by 7 pedal mechanisms',
      originCentury: 'Ancient / Modern 1810',
      originYear: 1810,
      register: 'soprano',
      orchestraRole: 'Lyrical arpeggios, atmospheric glissandi, and delicate orchestral accents',
      famousPiece: 'Claude Debussy — Danses Sacrée et Profane (1904)',
      playingTechniques: ['Glissando', 'Près de la table', 'Bisbigliando', 'Harmonics'],
      soundSynth: { type: 'plucked-string', baseFreq: 523.25, duration: 2.5 },
      funFacts: [
        'Has 47 strings under a combined tension of over 2,000 kilograms (4,400 lbs) pulling against the wooden frame.',
        'Its 7 pedals at the base alter each note flat, natural, or sharp across all octaves simultaneously.',
        'One of the oldest recorded musical instruments, depicted on Sumerian wall reliefs dating to 3000 BCE.'
      ]
    },
    {
      id: 'sitar',
      name: 'Indian Sitar',
      family: 'strings',
      familyName: 'Strings',
      classification: 'Plucked Lute Chordophone',
      emoji: '🪕',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Sitar%2C_late_19th_Century.jpg/330px-Sitar%2C_late_19th_Century.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'C2 – D5',
      lowestFreqHz: 65,
      highestFreqHz: 587,
      vibratingMedium: 'Gourd resonator with movable arched frets and sympathetic resonance strings',
      originCentury: '16th Century (India)',
      originYear: 1550,
      register: 'tenor',
      orchestraRole: 'Lead melodic instrument in Hindustani classical music ragas',
      famousPiece: 'Ravi Shankar — Raga Sindhi Bhairavi',
      playingTechniques: ['Meend (Microtonal Bending)', 'Jhala (Fast Plucking)', 'Ghat'],
      soundSynth: { type: 'plucked-string', baseFreq: 293.66, duration: 2.2 },
      funFacts: [
        'Features up to 20 strings, but 11 to 13 of them are sympathetic strings that vibrate on their own to create a lush shimmer.',
        'The deep resonator gourd (kaddu) is crafted from dried and hollowed water pumpkins.',
        'Introduced to Western rock music by George Harrison of The Beatles on the 1965 track "Norwegian Wood".'
      ]
    },
    {
      id: 'banjo',
      name: '5-String Banjo',
      family: 'strings',
      familyName: 'Strings',
      classification: 'Plucked Frame-Drum Chordophone',
      emoji: '🪕',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Bluegrass_banjo.png/500px-Bluegrass_banjo.png',
      pitchRangeNotes: 'C3 – D5',
      lowestFreqHz: 130,
      highestFreqHz: 587,
      vibratingMedium: 'Strings stretched over a taut circular plastic or calfskin membrane head',
      originCentury: '17th Century (Afro-Caribbean)',
      originYear: 1680,
      register: 'tenor',
      orchestraRole: 'Rapid syncopated picking in bluegrass, Appalachian folk, and Dixieland jazz',
      famousPiece: 'Earl Scruggs — Foggy Mountain Breakdown (1949)',
      playingTechniques: ['Scruggs Style (Three-Finger)', 'Clawhammer (Frailing)', 'Choke'],
      soundSynth: { type: 'plucked-string', baseFreq: 392, duration: 1.2 },
      funFacts: [
        'Created by enslaved Africans in the Caribbean and American South, directly descending from the West African Akonting.',
        'Features a unique short 5th string (drone string) pegged halfway up the neck.',
        'The drum-head membrane gives the banjo an exceptionally fast, punchy acoustic attack with zero sustain.'
      ]
    },

    // --- WOODWINDS (AEROPHONES) ---
    {
      id: 'concert-flute',
      name: 'Western Concert Flute',
      family: 'woodwinds',
      familyName: 'Woodwinds',
      classification: 'Edge-blown Aerophone',
      emoji: '🪈',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Fl%C3%BBte_traversi%C3%A8re.png/330px-Fl%C3%BBte_traversi%C3%A8re.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'C4 – D7',
      lowestFreqHz: 261,
      highestFreqHz: 2349,
      vibratingMedium: 'Airstream split across the sharp embouchure hole lip plate',
      originCentury: 'Ancient / Modern 1847',
      originYear: 1847,
      register: 'soprano',
      orchestraRole: 'Bright, agile, bird-like soprano woodwind melodies and rapid trills',
      famousPiece: 'Claude Debussy — Prélude à l’après-midi d’un faune (1894)',
      playingTechniques: ['Flutter-tonguing', 'Double-tonguing', 'Key clicks', 'Overblowing'],
      soundSynth: { type: 'flute', baseFreq: 587.33, duration: 2.0 },
      funFacts: [
        'Although classified as a woodwind due to its historical origin, modern concert flutes are crafted from silver, gold, or platinum.',
        'It is the only orchestral woodwind that produces sound without any vibrating wooden reed.',
        'The modern cylindrical key mechanism was perfected in 1847 by German instrument maker Theobald Boehm.'
      ]
    },
    {
      id: 'clarinet',
      name: 'B♭ Clarinet',
      family: 'woodwinds',
      familyName: 'Woodwinds',
      classification: 'Single-reed Aerophone',
      emoji: '🪈',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Leitner%2BKraus_410_320.png/330px-Leitner%2BKraus_410_320.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'D3 – B♭6',
      lowestFreqHz: 147,
      highestFreqHz: 1864,
      vibratingMedium: 'Single cane reed strapped to a mouthpiece over a cylindrical bore',
      originCentury: '18th Century (Germany)',
      originYear: 1700,
      register: 'soprano',
      orchestraRole: 'Wide-ranging lyrical, acrobatic, and expressive woodwind melodies',
      famousPiece: 'George Gershwin — Rhapsody in Blue (Opening Glissando, 1924)',
      playingTechniques: ['Glissando', 'Sub-tone', 'Multiphonics', 'Vibrato'],
      soundSynth: { type: 'reed-woodwind', baseFreq: 349.23, duration: 2.0 },
      funFacts: [
        'Has the widest dynamic range and largest pitch compass of any orchestral woodwind instrument (~4 octaves).',
        'Produces primarily odd-numbered harmonics due to its cylindrical closed-pipe acoustic physics.',
        'Johann Christoph Denner invented the clarinet around 1700 by adding a register key to the chalumeau.'
      ]
    },
    {
      id: 'oboe',
      name: 'Oboe',
      family: 'woodwinds',
      familyName: 'Woodwinds',
      classification: 'Double-reed Aerophone',
      emoji: '🪈',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Oboe_Patricola_Artista_PT1.jpg/330px-Oboe_Patricola_Artista_PT1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'B♭3 – A6',
      lowestFreqHz: 233,
      highestFreqHz: 1760,
      vibratingMedium: 'Two vibrating strips of cane bound together into a conical tube',
      originCentury: '17th Century (France)',
      originYear: 1657,
      register: 'soprano',
      orchestraRole: 'Tuning standard for the entire orchestra; poignant, plaintive solos',
      famousPiece: 'Gabriel Fauré — Pavane (1887)',
      playingTechniques: ['Circular Breathing', 'Double Reed Trills', 'Cantabile Legato'],
      soundSynth: { type: 'reed-woodwind', baseFreq: 440, duration: 1.8 },
      funFacts: [
        'The oboist plays the concert pitch A4 (440 Hz) that the entire symphony orchestra tunes to before every concert.',
        'Oboists craft their own reeds by hand from Arundo donax cane using precision razor blades and micrometers.',
        'Its narrow conical bore gives it a penetrating, reedy tone that cuts cleanly through full brass sections.'
      ]
    },
    {
      id: 'bassoon',
      name: 'Bassoon',
      family: 'woodwinds',
      familyName: 'Woodwinds',
      classification: 'Double-reed Aerophone',
      emoji: '🪈',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/FoxBassoon.png/330px-FoxBassoon.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'B♭1 – E♭5',
      lowestFreqHz: 58,
      highestFreqHz: 622,
      vibratingMedium: 'Large double reed mounted on a curved metal crook (bocal)',
      originCentury: '16th Century (Europe)',
      originYear: 1550,
      register: 'bass',
      orchestraRole: 'Deep bass woodwind lines, staccato comedic passages, and soulful low solos',
      famousPiece: 'Paul Dukas — The Sorcerer’s Apprentice (1897)',
      playingTechniques: ['Staccato', 'Tenor Clef Reading', 'Multiphonics'],
      soundSynth: { type: 'reed-woodwind', baseFreq: 116.54, duration: 2.2 },
      funFacts: [
        'Contains over 2.4 meters (8 feet) of wooden tubing folded in half inside a double bore.',
        'Often affectionately dubbed the "clown of the orchestra" for its dry, bouncing, humorous staccato runs.',
        'Igor Stravinsky opened his legendary 1913 ballet "The Rite of Spring" with a famously high, eerie bassoon solo.'
      ]
    },
    {
      id: 'alto-saxophone',
      name: 'Alto Saxophone',
      family: 'woodwinds',
      familyName: 'Woodwinds',
      classification: 'Single-reed Aerophone',
      emoji: '🎷',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Yamaha_Saxophone_YAS-62.png/330px-Yamaha_Saxophone_YAS-62.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'D♭3 – A♭5',
      lowestFreqHz: 138,
      highestFreqHz: 830,
      vibratingMedium: 'Single cane reed vibrating against a conical brass body with keys',
      originCentury: '19th Century (Belgium/France)',
      originYear: 1846,
      register: 'alto',
      orchestraRole: 'Warm lyrical melodic bridge between woodwinds and brass; jazz lead',
      famousPiece: 'Maurice Ravel — Boléro (1928)',
      playingTechniques: ['Growl', 'Subtone', 'Altissimo', 'Slap-tonguing'],
      soundSynth: { type: 'reed-woodwind', baseFreq: 277.18, duration: 1.8 },
      funFacts: [
        'Invented in 1846 by Belgian instrument designer Adolphe Sax, who wanted an instrument bridging brass power and woodwind agility.',
        'Even though crafted from solid brass, it is formally classified as a woodwind because it produces sound via a wooden cane reed.',
        'Became the defining solo voice of 20th-century American Jazz through icons like Charlie Parker.'
      ]
    },
    {
      id: 'piccolo',
      name: 'Piccolo',
      family: 'woodwinds',
      familyName: 'Woodwinds',
      classification: 'Edge-blown Aerophone',
      emoji: '🪈',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Piccolo.jpg/330px-Piccolo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'D5 – C8',
      lowestFreqHz: 587,
      highestFreqHz: 4186,
      vibratingMedium: 'Miniature airstream split across an embouchure hole',
      originCentury: '18th Century (Europe)',
      originYear: 1735,
      register: 'soprano',
      orchestraRole: 'Highest pitched voice in the entire symphony orchestra',
      famousPiece: 'John Philip Sousa — The Stars and Stripes Forever (Piccolo Solo)',
      playingTechniques: ['Piercing High Register', 'Rapid Staccato', 'Trills'],
      soundSynth: { type: 'flute', baseFreq: 1174.66, duration: 1.6 },
      funFacts: [
        'Measures half the length of a concert flute and sounds one full octave higher than written in musical notation.',
        'Its piercing upper register can effortlessly cut through a 100-piece full orchestra playing triple forte (fff).',
        'The name "piccolo" simply translates to "small" in Italian.'
      ]
    },
    {
      id: 'pan-flute',
      name: 'Pan Flute (Syrinx)',
      family: 'woodwinds',
      familyName: 'Woodwinds',
      classification: 'Closed-pipe Edge-blown Aerophone',
      emoji: '🪈',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Flute_de_pan_MHNT_ETH_AC_NH_31_Sav%C3%A8s.jpg/330px-Flute_de_pan_MHNT_ETH_AC_NH_31_Sav%C3%A8s.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'G3 – G6',
      lowestFreqHz: 196,
      highestFreqHz: 1568,
      vibratingMedium: 'Multiple closed bamboo or wooden cane pipes of tuned lengths',
      originCentury: 'Ancient World',
      originYear: -2500,
      register: 'alto',
      orchestraRole: 'Ethno-folk world music, cinematic scores, and lyrical pan-harmonic melodies',
      famousPiece: 'Gheorghe Zamfir — The Lonely Shepherd (1977)',
      playingTechniques: ['Overblowing', 'Microtonal tilting', 'Staccato spitting'],
      soundSynth: { type: 'flute', baseFreq: 392, duration: 1.8 },
      funFacts: [
        'Named after Pan, the Greek god of nature and shepherds who fashioned pipes from river reeds.',
        'Each pipe is closed at the bottom; blowing across the top lip produces a pure quarter-wave acoustic resonance.',
        'A staple of traditional folklore in the Romanian Carpathians and the South American Andes mountains.'
      ]
    },
    {
      id: 'recorder',
      name: 'Recorder (Blockflöte)',
      family: 'woodwinds',
      familyName: 'Woodwinds',
      classification: 'Internal Fipple Flute Aerophone',
      emoji: '🪈',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/VariousRecorderFlutes.jpg/330px-VariousRecorderFlutes.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'C5 – D7',
      lowestFreqHz: 523,
      highestFreqHz: 2349,
      vibratingMedium: 'Internal wooden fipple block directing breath across a labium blade',
      originCentury: '14th Century (Medieval Europe)',
      originYear: 1350,
      register: 'soprano',
      orchestraRole: 'Renaissance and Baroque early music consort lead',
      famousPiece: 'G.F. Handel — Recorder Sonata in F Major (Op. 1 No. 11)',
      playingTechniques: ['Tonguing (tu-ku)', 'Thumb-hole pinching', 'Vibrato'],
      soundSynth: { type: 'flute', baseFreq: 698.46, duration: 1.6 },
      funFacts: [
        'King Henry VIII of England was an avid recorder enthusiast and owned an estate inventory of 76 recorders.',
        'Unlike the concert flute, the player blows straight into a mouthpiece containing a wooden block (fipple).',
        'Experienced a massive 20th-century revival in music education thanks to German composer Carl Orff.'
      ]
    },

    // --- BRASS (LABROSONES) ---
    {
      id: 'trumpet',
      name: 'B♭ Trumpet',
      family: 'brass',
      familyName: 'Brass',
      classification: 'Lip-reed Valve Aerophone',
      emoji: '🎺',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Yamaha_Trumpet_YTR-8335LA_crop.jpg/330px-Yamaha_Trumpet_YTR-8335LA_crop.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'F♯3 – D6',
      lowestFreqHz: 185,
      highestFreqHz: 1174,
      vibratingMedium: 'Musician’s embouchure lips buzzing into a cup mouthpiece through 3 piston valves',
      originCentury: 'Ancient / Modern 1818',
      originYear: 1818,
      register: 'soprano',
      orchestraRole: 'Brilliant soprano brass fanfares, heroic melodies, and jazz solos',
      famousPiece: 'Aaron Copland — Fanfare for the Common Man (1942)',
      playingTechniques: ['Harmon Mute', 'Cup Mute', 'Double Tonguing', 'Lip Slurs'],
      soundSynth: { type: 'brass-horn', baseFreq: 440, duration: 1.8 },
      funFacts: [
        'A standard B♭ trumpet uncurled measures approximately 1.4 meters (4.5 feet) of brass tubing.',
        'Before valves were invented in 1818, "natural trumpets" could only play notes of the natural harmonic overtone series.',
        'Miles Davis popularized the buzzing Harmon mute sound that came to define modern cool jazz.'
      ]
    },
    {
      id: 'french-horn',
      name: 'French Horn',
      family: 'brass',
      familyName: 'Brass',
      classification: 'Lip-reed Rotary Valve Aerophone',
      emoji: '📯',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Yamaha_Horn_YHR-667V.tif/lossy-page1-330px-Yamaha_Horn_YHR-667V.tif.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'B1 – F5',
      lowestFreqHz: 61,
      highestFreqHz: 698,
      vibratingMedium: 'Lip buzzing through a funnel mouthpiece and over 12 feet of coiled tubing',
      originCentury: '17th Century (Europe)',
      originYear: 1650,
      register: 'tenor',
      orchestraRole: 'Warm, majestic brass melodies bridging woodwinds and heavy brass',
      famousPiece: 'Richard Strauss — Horn Concerto No. 1 in E-flat Major (1883)',
      playingTechniques: ['Hand-stopping (Gestopft)', 'Cuivré (Brassy tone)', 'Glissando'],
      soundSynth: { type: 'brass-horn', baseFreq: 220, duration: 2.2 },
      funFacts: [
        'If uncoiled completely, the tubing of a modern double French horn stretches over 3.7 meters (12 to 13 feet) long.',
        'The player inserts their right hand inside the bell to adjust pitch micro-tuning and soften the timbre.',
        'Guinness World Records ranks the French horn among the hardest orchestral instruments in the world to master.'
      ]
    },
    {
      id: 'trombone',
      name: 'Tenor Trombone',
      family: 'brass',
      familyName: 'Brass',
      classification: 'Lip-reed Slide Aerophone',
      emoji: '🎺',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Yamaha_Tenor_trombone_YSL-891Z_%28re-crop%29.jpg/330px-Yamaha_Tenor_trombone_YSL-891Z_%28re-crop%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'E2 – F5',
      lowestFreqHz: 82,
      highestFreqHz: 698,
      vibratingMedium: 'Lips buzzing into a telescoping slide changing tube length continuously',
      originCentury: '15th Century (Europe)',
      originYear: 1450,
      register: 'tenor',
      orchestraRole: 'Powerful chordal backdrops, cantabile solos, and seamless glissandi',
      famousPiece: 'Ludwig van Beethoven — Symphony No. 5 (Finale entry, 1808)',
      playingTechniques: ['Slide Glissando', 'Plunger Mute', 'Wah-wah', 'Doodle-tonguing'],
      soundSynth: { type: 'brass-horn', baseFreq: 174.61, duration: 2.0 },
      funFacts: [
        'The only orchestral brass instrument that uses a continuous telescoping slide rather than valves to change pitch.',
        'Originally named the "Sackbut" during the Renaissance and Baroque eras.',
        'Beethoven’s 5th Symphony was the first major classical symphony to feature trombones in its finale movement.'
      ]
    },
    {
      id: 'tuba',
      name: 'Orchestral Tuba',
      family: 'brass',
      familyName: 'Brass',
      classification: 'Lip-reed Piston/Rotary Valve Aerophone',
      emoji: '🎺',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Yamaha_Bass_tuba_YFB-822.tif/lossy-page1-330px-Yamaha_Bass_tuba_YFB-822.tif.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'D1 – F4',
      lowestFreqHz: 36,
      highestFreqHz: 349,
      vibratingMedium: 'Deep cup mouthpiece feeding into 16 feet of massive conical brass tubing',
      originCentury: '19th Century (Prussia)',
      originYear: 1835,
      register: 'bass',
      orchestraRole: 'Heaviest bass foundation of the symphony orchestra brass section',
      famousPiece: 'Ralph Vaughan Williams — Tuba Concerto in F Minor (1954)',
      playingTechniques: ['Pedal Tones', 'Multiphonics', 'Staccato Marcato'],
      soundSynth: { type: 'brass-horn', baseFreq: 73.42, duration: 2.4 },
      funFacts: [
        'The largest and lowest-pitched instrument in the entire brass family, containing up to 5.5 meters (18 feet) of tubing.',
        'Weighs between 10 to 15 kilograms (22 to 33 lbs), resting across the lap of the seated tubist.',
        'Patented in Berlin in 1835 by Wilhelm Wieprecht and Johann Gottfried Moritz.'
      ]
    },
    {
      id: 'flugelhorn',
      name: 'Flugelhorn',
      family: 'brass',
      familyName: 'Brass',
      classification: 'Lip-reed Valve Aerophone',
      emoji: '🎺',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Yamaha_Flugelhorn_YFH-8310Z.jpg/330px-Yamaha_Flugelhorn_YFH-8310Z.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'F♯3 – C6',
      lowestFreqHz: 185,
      highestFreqHz: 1046,
      vibratingMedium: 'Lips buzzing into a wide conical bore creating a mellow, velvet tone',
      originCentury: '19th Century (Germany)',
      originYear: 1828,
      register: 'soprano',
      orchestraRole: 'Mellow, introspective soprano solos in brass bands and jazz ballads',
      famousPiece: 'Chuck Mangione — Feels So Good (1977)',
      playingTechniques: ['Velvet Tone Legato', 'Half-valving', 'Muted balladry'],
      soundSynth: { type: 'brass-horn', baseFreq: 349.23, duration: 2.0 },
      funFacts: [
        'Shares the exact same fingerings and pitch range as a trumpet, but features a much wider conical bore.',
        'Derived from the German word "Flügel", historically blown by forestry game huntsmen guiding birds through woods.',
        'Famous jazz trumpeter Chet Baker frequently switched to the flugelhorn for lyrical, contemplative ballads.'
      ]
    },
    {
      id: 'bugle',
      name: 'Military Bugle',
      family: 'brass',
      familyName: 'Brass',
      classification: 'Valveless Lip-reed Aerophone',
      emoji: '📯',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Bugle_in_C_MET_DP-12679-123.jpg/330px-Bugle_in_C_MET_DP-12679-123.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'C4 – G5 (Harmonic Series only)',
      lowestFreqHz: 261,
      highestFreqHz: 784,
      vibratingMedium: 'Lips buzzing into a simple coiled brass tube with no valves or keys',
      originCentury: 'Ancient / 18th Century',
      originYear: 1750,
      register: 'alto',
      orchestraRole: 'Military signaling, ceremonial salutes, and outdoor fanfare calls',
      famousPiece: 'Daniel Butterfield — Taps (1862)',
      playingTechniques: ['Embouchure Pitch Shifting', 'Open Harmonic Fanfares'],
      soundSynth: { type: 'brass-horn', baseFreq: 523.25, duration: 1.8 },
      funFacts: [
        'Possesses zero valves, slides, or keys; every note is produced purely by tightening or loosening the musician’s lips.',
        'Can only play the 5 notes of the natural harmonic series: C4, G4, C5, E5, and G5.',
        'The solemn 24-note ceremonial melody "Taps" was composed during the American Civil War in 1862.'
      ]
    },

    // --- PERCUSSION (IDIOPHONES & MEMBRANOPHONES) ---
    {
      id: 'timpani',
      name: 'Orchestral Timpani (Kettledrums)',
      family: 'percussion',
      familyName: 'Percussion',
      classification: 'Tuned Membranophone',
      emoji: '🥁',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/USAFE_Band_timpanist.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      pitchRangeNotes: 'D2 – A3',
      lowestFreqHz: 73,
      highestFreqHz: 220,
      vibratingMedium: 'Calfskin or mylar head stretched over a large hemispherical copper bowl',
      originCentury: '15th Century (Europe/Ottoman)',
      originYear: 1450,
      register: 'bass',
      orchestraRole: 'Pivotal harmonic bass rhythm and explosive dramatic crescendos',
      famousPiece: 'Ludwig van Beethoven — Symphony No. 9 in D Minor (Scherzo)',
      playingTechniques: ['Tuned Mallet Roll', 'Damping (Muffling)', 'Glissando via pedal'],
      soundSynth: { type: 'drum-membrane', baseFreq: 110, duration: 1.5 },
      funFacts: [
        'Unlike snare drums, timpani produce definite musical pitches adjusted by a foot pedal that tightens the skin.',
        'The bowl is beaten with mallets whose wooden cores are wrapped in soft layered felt.',
        'Orchestral timpanists often play four or five separate kettle bowls arranged in an arc around them.'
      ]
    },
    {
      id: 'snare-drum',
      name: 'Concert Snare Drum',
      family: 'percussion',
      familyName: 'Percussion',
      classification: 'Untuned Membranophone',
      emoji: '🥁',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Caisse_claire.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      pitchRangeNotes: 'Indefinite crisp snap',
      lowestFreqHz: 150,
      highestFreqHz: 4000,
      vibratingMedium: 'Two drumheads with coiled steel snare wires resting against bottom skin',
      originCentury: '14th Century (Medieval Europe)',
      originYear: 1350,
      register: 'tenor',
      orchestraRole: 'Marching cadences, rhythmic backbeats, and relentless percussive drive',
      famousPiece: 'Maurice Ravel — Boléro (Continuous Snare Ostinato, 1928)',
      playingTechniques: ['Buzz Roll', 'Flam', 'Paradiddle', 'Rimshot'],
      soundSynth: { type: 'drum-membrane', baseFreq: 220, duration: 0.8 },
      funFacts: [
        'The characteristic "crisp snap" comes from coiled metal wires vibrating against the bottom resonance head.',
        'In Ravel’s Boléro, the snare drummer plays the exact same two-bar rhythmic pattern 169 times uninterrupted.',
        'Originally called the "tabor" and paired with a one-handed flute in medieval military signaling.'
      ]
    },
    {
      id: 'marimba',
      name: 'Concert Marimba',
      family: 'percussion',
      familyName: 'Percussion',
      classification: 'Tuned Idiophone',
      emoji: '🪵',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Marimba_One_4000_Series.jpg/330px-Marimba_One_4000_Series.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'C2 – C7',
      lowestFreqHz: 65,
      highestFreqHz: 2093,
      vibratingMedium: 'Rosewood bars struck by mallets with vertical acoustic resonator pipes',
      originCentury: 'Ancient Mesoamerica / Africa',
      originYear: 1600,
      register: 'tenor',
      orchestraRole: 'Warm, mellow, woody melodic runs and lyrical chordal rolls',
      famousPiece: 'Ney Rosauro — Concerto for Marimba and String Orchestra (1990)',
      playingTechniques: ['Four-Mallet Technique (Stevens grip)', 'Dead Stroke', 'One-Hand Roll'],
      soundSynth: { type: 'struck-bell', baseFreq: 261.63, duration: 1.8 },
      funFacts: [
        'Bars are precision carved from Honduran Rosewood (Dalbergia stevensonii) aged for several years.',
        'The national musical instrument of Guatemala, where community marimba ensembles feature up to 7 players.',
        'Modern virtuoso marimbists hold two mallets in each hand to play complex four-part polyphonic counterpoint.'
      ]
    },
    {
      id: 'xylophone',
      name: 'Orchestral Xylophone',
      family: 'percussion',
      familyName: 'Percussion',
      classification: 'Tuned Idiophone',
      emoji: '🪵',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Xylophone.jpg/500px-Xylophone.jpg',
      pitchRangeNotes: 'F4 – C8',
      lowestFreqHz: 349,
      highestFreqHz: 4186,
      vibratingMedium: 'Hardwood bars struck with rubber or wooden mallets for a bright, brittle tone',
      originCentury: '9th Century (Southeast Asia)',
      originYear: 850,
      register: 'soprano',
      orchestraRole: 'Sharp, dry, skeleton-like rhythmic melodies and biting accents',
      famousPiece: 'Camille Saint-Saëns — Danse Macabre (Skeletons dancing, 1874)',
      playingTechniques: ['Hard Mallet Strikes', 'Rapid Alternating Rolls', 'Glissando'],
      soundSynth: { type: 'struck-bell', baseFreq: 698.46, duration: 0.9 },
      funFacts: [
        'The name is derived from the Greek words "xylon" (wood) and "phone" (sound/voice).',
        'Saint-Saëns famously used the xylophone in "Danse Macabre" to evoke the clicking bones of dancing skeletons.',
        'Unlike the warm, rich marimba, the xylophone has a dry, short, cutting attack that sounds one octave above.'
      ]
    },
    {
      id: 'djembe',
      name: 'West African Djembe',
      family: 'percussion',
      familyName: 'Percussion',
      classification: 'Single-head Goblet Membranophone',
      emoji: '🪘',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Lenke_djembe_from_Mali.jpeg/330px-Lenke_djembe_from_Mali.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'Dynamic Bass, Tone, and Slap',
      lowestFreqHz: 75,
      highestFreqHz: 2500,
      vibratingMedium: 'Shaved goatskin head tensioned by rope braids over carved hollow hardwood',
      originCentury: '12th Century (Mali Empire)',
      originYear: 1230,
      register: 'tenor',
      orchestraRole: 'Driving polyrhythms, community gatherings, and ritual celebrations',
      famousPiece: 'Traditional Malinke Rhythms (Kuku, Djole, Moribayassa)',
      playingTechniques: ['Bass (Center palm)', 'Tone (Knuckles)', 'Slap (Finger whip)'],
      soundSynth: { type: 'drum-membrane', baseFreq: 130, duration: 1.0 },
      funFacts: [
        'According to the Bambara people of Mali, the name djembe comes from the saying "Anke djé, anke bé", meaning "everyone gather together in peace".',
        'The entire body is carved from a single solid trunk of sacred Lenke or Tweneboa wood.',
        'A master djembe player (Djembefola) can coax three completely distinct sounds (Bass, Tone, Slap) using bare hands.'
      ]
    },
    {
      id: 'tubular-bells',
      name: 'Tubular Bells (Orchestral Chimes)',
      family: 'percussion',
      familyName: 'Percussion',
      classification: 'Tuned Metallic Idiophone',
      emoji: '🔔',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Tubular_bells_-_dusseldorf_germany_-_2014_12_27.webm/330px--Tubular_bells_-_dusseldorf_germany_-_2014_12_27.webm.jpg',
      pitchRangeNotes: 'C4 – F5',
      lowestFreqHz: 261,
      highestFreqHz: 698,
      vibratingMedium: 'Suspended brass tubes struck with leather or rawhide mallets',
      originCentury: '19th Century (England)',
      originYear: 1886,
      register: 'alto',
      orchestraRole: 'Grand cathedral bell simulations and apocalyptic orchestral climaxes',
      famousPiece: 'Pyotr Ilyich Tchaikovsky — 1812 Overture (Op. 49)',
      playingTechniques: ['Rawhide Hammer Strike', 'Damper Pedal Control', 'Chime Muting'],
      soundSynth: { type: 'struck-bell', baseFreq: 523.25, duration: 3.0 },
      funFacts: [
        'Invented to simulate massive church bells in concert halls without requiring multi-ton bronze cathedral bells.',
        'The musician strikes the top reinforced cap ring using a rawhide hammer held like a gavel.',
        'Mike Oldfield made the instrument globally famous in 1973 with his multi-million selling rock album "Tubular Bells".'
      ]
    },
    {
      id: 'gong',
      name: 'Orchestral Tam-Tam (Chau Gong)',
      family: 'percussion',
      familyName: 'Percussion',
      classification: 'Untuned Metallic Idiophone',
      emoji: '🪙',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/COLLECTIE_TROPENMUSEUM_Gong_hangend_in_een_standaard_onderdeel_van_gamelan_Semar_Pagulingan_TMnr_1340-13.jpg/330px-COLLECTIE_TROPENMUSEUM_Gong_hangend_in_een_standaard_onderdeel_van_gamelan_Semar_Pagulingan_TMnr_1340-13.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'Sub-bass shimmer (Indefinite pitch)',
      lowestFreqHz: 20,
      highestFreqHz: 5000,
      vibratingMedium: 'Hand-hammered B20 bronze disc with turned rim struck by heavy weighted beater',
      originCentury: '6th Century BCE (China)',
      originYear: -500,
      register: 'bass',
      orchestraRole: 'Cataclysmic sonic peaks, ominous subterranean rumbles, and mysterious fades',
      famousPiece: 'Gustav Mahler — Symphony No. 6 "Tragic" (1904)',
      playingTechniques: ['Pre-warming strike', 'Bowed Gong (Cello bow)', 'Felt beater roll'],
      soundSynth: { type: 'struck-bell', baseFreq: 80, duration: 3.5 },
      funFacts: [
        'Crafted from B20 bronze (80% copper and 20% tin), repeatedly hand-hammered and heat-treated over coal fires.',
        'Before striking a major climax, players gently "warm" the metal with inaudible taps to awaken the resonance.',
        'Bowing the edge of a tam-tam with a double bass bow produces chilling, eerie, metallic horror screams.'
      ]
    },
    {
      id: 'triangle',
      name: 'Concert Triangle',
      family: 'percussion',
      familyName: 'Percussion',
      classification: 'Untuned Metallic Idiophone',
      emoji: '🔺',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Triangle_001.jpg/330px-Triangle_001.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'Ultra-high overtone shimmer',
      lowestFreqHz: 800,
      highestFreqHz: 12000,
      vibratingMedium: 'Solid steel rod bent into a triangle with one open corner suspended by fishing line',
      originCentury: '14th Century (Medieval Europe)',
      originYear: 1380,
      register: 'soprano',
      orchestraRole: 'Punctuation, brilliant shimmer, and sparkling rhythmic glitter',
      famousPiece: 'Franz Liszt — Piano Concerto No. 1 in E-flat Major (The "Triangle Concerto")',
      playingTechniques: ['Tremolo inside corner', 'Finger damping', 'Heavy/Light beater'],
      soundSynth: { type: 'struck-bell', baseFreq: 2400, duration: 1.5 },
      funFacts: [
        'One corner of the steel triangle is always left unjoined, allowing the metal to vibrate freely without deadening.',
        'Franz Liszt was mockingly criticized by Viennese music critics for writing a famous solo for the triangle in his 1st Piano Concerto.',
        'Suspended using ultra-thin monofilament fishing line so the player’s fingers do not absorb the high vibrations.'
      ]
    },

    // --- KEYBOARDS ---
    {
      id: 'grand-piano',
      name: 'Concert Grand Piano',
      family: 'keyboards',
      familyName: 'Keyboards',
      classification: 'Struck Keyed Chordophone',
      emoji: '🎹',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Steinway_Vienna_002.JPG/330px-Steinway_Vienna_002.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'A0 – C8 (88 Keys)',
      lowestFreqHz: 27,
      highestFreqHz: 4186,
      vibratingMedium: 'Felt-covered wooden hammers striking tensioned steel strings over cast iron frame',
      originCentury: '18th Century (Italy)',
      originYear: 1700,
      register: 'soprano',
      orchestraRole: 'Supreme solo concert instrument, concerto soloist, and chamber accompaniment',
      famousPiece: 'Ludwig van Beethoven — Piano Sonata No. 14 "Moonlight" (1801)',
      playingTechniques: ['Sustain Pedal', 'Una Corda (Soft Pedal)', 'Staccato', 'Arpeggio'],
      soundSynth: { type: 'piano', baseFreq: 440, duration: 2.5 },
      funFacts: [
        'Invented around 1700 by Bartolomeo Cristofori in Padua, Italy, originally named "gravicembalo col piano e forte" (harpsichord with soft and loud).',
        'A 9-foot concert grand piano contains over 230 strings under an astonishing 20 tons of tension held by a cast-iron frame.',
        'The piano is technically classified as both a keyboard and a percussion-string hybrid because hammers physically strike the strings.'
      ]
    },
    {
      id: 'pipe-organ',
      name: 'Symphonic Pipe Organ',
      family: 'keyboards',
      familyName: 'Keyboards',
      classification: 'Keyed Aerophone',
      emoji: '🎹',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Neunkirchen_am_Brand_Kirche_Orgel-20210411-RM-155230.jpg/330px-Neunkirchen_am_Brand_Kirche_Orgel-20210411-RM-155230.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'C-1 – C9 (Extremes)',
      lowestFreqHz: 8,
      highestFreqHz: 8372,
      vibratingMedium: 'Pressurized air forced through thousands of flue and reed pipes',
      originCentury: 'Ancient / 8th Century',
      originYear: 757,
      register: 'bass',
      orchestraRole: 'Grand sacred majesty, immense sonic power ("King of Instruments")',
      famousPiece: 'J.S. Bach — Toccata and Fugue in D Minor (BWV 565)',
      playingTechniques: ['Pedalboard footwork', 'Registration stops', 'Manual switching'],
      soundSynth: { type: 'reed-woodwind', baseFreq: 130.81, duration: 2.8 },
      funFacts: [
        'Known as the "King of Instruments", Mozart proclaimed it the greatest musical achievement of humanity.',
        'The largest pipe organ in the world (Boardwalk Hall Auditorium in Atlantic City) has 33,112 pipes, including an open 64-foot pipe that vibrates at 8 Hz.',
        'Organists play with both hands across multiple manual keyboards and both feet on a full pedalboard simultaneously.'
      ]
    },
    {
      id: 'harpsichord',
      name: 'Baroque Harpsichord',
      family: 'keyboards',
      familyName: 'Keyboards',
      classification: 'Plucked Keyed Chordophone',
      emoji: '🎹',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/ClavecinRuckers%26Taskin.JPG/330px-ClavecinRuckers%26Taskin.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'F1 – F6',
      lowestFreqHz: 43,
      highestFreqHz: 1396,
      vibratingMedium: 'Quills (plectra) mechanically plucking strings when keys are depressed',
      originCentury: '14th Century (Europe)',
      originYear: 1397,
      register: 'alto',
      orchestraRole: 'Basso continuo harmonic engine in Baroque concertos and operas',
      famousPiece: 'J.S. Bach — Brandenburg Concerto No. 5 in D Major (1721)',
      playingTechniques: ['Basso Continuo Improv', 'Terraced Dynamics', 'Ornamentation'],
      soundSynth: { type: 'plucked-string', baseFreq: 440, duration: 1.4 },
      funFacts: [
        'Unlike the piano, pressing a harpsichord key harder does not make it louder; the strings are plucked by quills, not struck.',
        'The keys often feature inverted colors: black naturals made of ebony and white accidentals topped with ivory or bone.',
        'Bach’s Brandenburg Concerto No. 5 featured the first virtuosic, showstopping solo cadenza ever written for a keyboard instrument.'
      ]
    },
    {
      id: 'celesta',
      name: 'Orchestral Celesta',
      family: 'keyboards',
      familyName: 'Keyboards',
      classification: 'Struck Keyed Metallophone',
      emoji: '🎹',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Celesta_Schiedmayer_Studio.jpg/330px-Celesta_Schiedmayer_Studio.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'C4 – C8',
      lowestFreqHz: 261,
      highestFreqHz: 4186,
      vibratingMedium: 'Felt hammers striking suspended steel plates over wooden resonators',
      originCentury: '19th Century (France)',
      originYear: 1886,
      register: 'soprano',
      orchestraRole: 'Ethereal, heavenly, sparkling fairy-tale bells in orchestral textures',
      famousPiece: 'Pyotr Ilyich Tchaikovsky — Dance of the Sugar Plum Fairy (1892)',
      playingTechniques: ['Sparkling Bell Legato', 'Sustain Pedal Resonance'],
      soundSynth: { type: 'struck-bell', baseFreq: 1046.5, duration: 2.2 },
      funFacts: [
        'Resembles a small upright piano, but its hammers strike steel chime plates rather than strings.',
        'Its name derives from the French word "céleste", meaning "heavenly" or "celestial".',
        'Tchaikovsky discovered the newly invented instrument in Paris in 1891 and secretly smuggled it to Russia so no rival composer would use it first.'
      ]
    },
    {
      id: 'accordion',
      name: 'Chromatic Accordion',
      family: 'keyboards',
      familyName: 'Keyboards',
      classification: 'Free-reed Aerophone',
      emoji: '🪗',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/A_converter_free-bass_piano-accordion_and_a_Russian_bayan.jpg/330px-A_converter_free-bass_piano-accordion_and_a_Russian_bayan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      pitchRangeNotes: 'E1 – C8',
      lowestFreqHz: 41,
      highestFreqHz: 4186,
      vibratingMedium: 'Hand-operated bellows forcing air over tuned steel free reeds',
      originCentury: '19th Century (Austria/Germany)',
      originYear: 1829,
      register: 'tenor',
      orchestraRole: 'Folk traditions, French musette, Argentine tango, and cabaret melodies',
      famousPiece: 'Astor Piazzolla — Libertango (1974)',
      playingTechniques: ['Bellows Shake (Tremolo)', 'Bellows Accents', 'Chord Button Stabs'],
      soundSynth: { type: 'reed-woodwind', baseFreq: 261.63, duration: 2.0 },
      funFacts: [
        'Nicknamed the "squeezebox", the performer expands and compresses pleated bellows to generate continuous airflow.',
        'The left hand plays a matrix of up to 120 buttons producing complete pre-voiced bass chords (Stradella Bass System).',
        'Cyrill Demian of Vienna patented the first accordion in 1829.'
      ]
    }
  ];

  /* ==========================================================================
     GLOBAL BENCHMARKS & APP STATE
     ========================================================================== */
  const BENCHMARKS = {
    maxFreqHz: 4500, // C8 / Triangle / Piccolo harmonic upper ceiling
    maxDecibel: 120, // Full brass / Tam-tam peak dB
    maxWeightKg: 500 // Grand piano weight reference
  };

  const STATE = {
    pitchFormat: 'notes', // 'notes' or 'hz'
    activeView: 'gallery', // 'gallery', 'soundboard', 'compare', 'quiz'
    familyFilter: 'all',
    searchQuery: '',
    hsFilter: 'all',
    registerFilter: 'all',
    sortBy: 'name-asc',
    comparedIds: [], // Up to 3 instruments
    quiz: {
      round: 1,
      totalQuestions: 5,
      score: 0,
      streak: 0,
      activeQuestion: null,
      locked: false
    }
  };

  /* ==========================================================================
     WEB AUDIO PROCEDURAL SYNTHESIZER ENGINE (100% Client-Side Audio)
     ========================================================================== */
  let audioCtx = null;
  let activeAudioPlayingId = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playInstrumentSound(instrumentId) {
    const inst = INSTRUMENTS_DATA.find(i => i.id === instrumentId);
    if (!inst) return;

    const ctx = getAudioContext();
    if (!ctx) return;

    // Toggle pause if clicking already playing instrument
    if (activeAudioPlayingId === instrumentId) {
      stopAllAudio();
      showToast('Audio playback stopped');
      return;
    }

    activeAudioPlayingId = instrumentId;
    updateAudioUI(instrumentId);
    showToast(`🔊 Playing: ${inst.name} (${inst.pitchRangeNotes})`);

    const now = ctx.currentTime;
    const synth = inst.soundSynth;
    const f0 = synth.baseFreq;
    const dur = synth.duration;

    switch (synth.type) {
      case 'bowed-string': {
        // Dual rich sawtooth with warm resonant lowpass filter & subtle vibrato
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        // Vibrato LFO
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(5.5, now);
        lfoGain.gain.setValueAtTime(4.5, now);
        lfo.connect(lfoGain);
        lfoGain.connect(osc1.frequency);
        lfoGain.connect(osc2.frequency);

        osc1.type = 'sawtooth';
        osc2.type = 'sawtooth';
        osc1.frequency.setValueAtTime(f0, now);
        osc2.frequency.setValueAtTime(f0 * 1.003, now); // subtle chorusing

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(f0 * 3.5, now);
        filter.Q.setValueAtTime(2.0, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.25, now + 0.25); // gentle bowing attack
        gain.gain.setValueAtTime(0.22, now + dur - 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        lfo.start(now);
        osc1.start(now);
        osc2.start(now);
        lfo.stop(now + dur);
        osc1.stop(now + dur);
        osc2.stop(now + dur);
        break;
      }

      case 'plucked-string': {
        // Fast attack pluck with warm body decay
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f0, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(f0 * 6, now);
        filter.frequency.exponentialRampToValueAtTime(f0 * 1.5, now + dur);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.35, now + 0.02); // crisp pluck
        gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + dur);
        break;
      }

      case 'flute': {
        // Pure sinusoidal tone with subtle airy overtone
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f0, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.28, now + 0.15);
        gain.gain.setValueAtTime(0.25, now + dur - 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + dur);
        break;
      }

      case 'reed-woodwind': {
        // Square wave with odd harmonics through bandpass filter
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(f0, now);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(f0 * 2.2, now);
        filter.Q.setValueAtTime(1.8, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + dur);
        break;
      }

      case 'brass-horn': {
        // Saturated sawtooth wave with sweeping brassy lowpass envelope
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f0, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(f0 * 1.5, now);
        filter.frequency.linearRampToValueAtTime(f0 * 4.5, now + 0.15);
        filter.frequency.exponentialRampToValueAtTime(f0 * 2.0, now + dur);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.3, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + dur);
        break;
      }

      case 'struck-bell': {
        // Multi-frequency metallic inharmonic chime
        const ratios = [1.0, 2.76, 5.4];
        ratios.forEach((r, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(f0 * r, now);

          const vol = 0.25 / (idx + 1);
          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(vol, now + 0.005);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + dur);
        });
        break;
      }

      case 'drum-membrane': {
        // Pitch dropping sine strike + noise envelope
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f0 * 1.8, now);
        osc.frequency.exponentialRampToValueAtTime(f0, now + 0.08);

        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + dur);
        break;
      }

      case 'piano':
      default: {
        // Dual triangle/sine piano hammer strike
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'triangle';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(f0, now);
        osc2.frequency.setValueAtTime(f0 * 2, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.35, now + 0.015); // hammer strike
        gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + dur);
        osc2.stop(now + dur);
        break;
      }
    }

    setTimeout(() => {
      if (activeAudioPlayingId === instrumentId) {
        activeAudioPlayingId = null;
        updateAudioUI(null);
      }
    }, dur * 1000);
  }

  function stopAllAudio() {
    activeAudioPlayingId = null;
    updateAudioUI(null);
  }

  function updateAudioUI(playingId) {
    // 1. Update card audio buttons
    document.querySelectorAll('.btn-card-audio').forEach(btn => {
      const id = btn.getAttribute('data-sound-id');
      const isPlaying = id === playingId;
      btn.classList.toggle('playing', isPlaying);
      btn.innerHTML = isPlaying
        ? `<span>⏸</span> <span class="audio-equalizer"><span class="eq-bar"></span><span class="eq-bar"></span><span class="eq-bar"></span></span>`
        : `<span>▶ Play Tone</span>`;
    });

    // 2. Update soundboard tiles
    document.querySelectorAll('.sound-tile').forEach(tile => {
      const id = tile.getAttribute('data-sound-id');
      const isPlaying = id === playingId;
      tile.classList.toggle('playing', isPlaying);
      const btn = tile.querySelector('.sound-tile-btn');
      if (btn) {
        btn.innerHTML = isPlaying
          ? `<span>⏸ Playing</span> <span class="audio-equalizer"><span class="eq-bar"></span><span class="eq-bar"></span><span class="eq-bar"></span></span>`
          : `<span>▶ Hear Tone</span>`;
      }
    });

    // 3. Update modal button
    const modalBtn = document.getElementById('modalPlaySoundBtn');
    if (modalBtn) {
      modalBtn.innerHTML = playingId
        ? `<span>⏸ Pause Tone</span> <span class="audio-equalizer"><span class="eq-bar"></span><span class="eq-bar"></span><span class="eq-bar"></span></span>`
        : `<span>🔊 Play Acoustic Tone</span>`;
    }
  }

  /* ==========================================================================
     DOM ELEMENTS CACHE
     ========================================================================== */
  const DOM = {
    statInstrumentCount: document.getElementById('statInstrumentCount'),
    displayedCount: document.getElementById('displayedCount'),
    totalInstrumentsCount: document.getElementById('totalInstrumentsCount'),
    instrumentsGrid: document.getElementById('instrumentsGrid'),
    emptyResultsCard: document.getElementById('emptyResultsCard'),
    emptyResetBtn: document.getElementById('emptyResetBtn'),
    searchInput: document.getElementById('instrumentSearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    unitBtns: document.querySelectorAll('.unit-btn'),
    familyChips: document.querySelectorAll('.family-chip'),
    hsFilterSelect: document.getElementById('hsFilterSelect'),
    registerFilterSelect: document.getElementById('registerFilterSelect'),
    sortFilterSelect: document.getElementById('sortFilterSelect'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    modeTabBtns: document.querySelectorAll('.mode-tab-btn[data-view]'),
    randomInstrumentBtn: document.getElementById('randomInstrumentBtn'),
    appViews: document.querySelectorAll('.app-view'),
    compareCountBadge: document.getElementById('compareCountBadge'),

    // Soundboard
    soundboardGrid: document.getElementById('soundboardGrid'),

    // Comparator Elements
    compSelect1: document.getElementById('compSelect1'),
    compSelect2: document.getElementById('compSelect2'),
    compSelect3: document.getElementById('compSelect3'),
    comparatorMatrix: document.getElementById('comparatorMatrix'),

    // Floating Compare Dock
    compareDock: document.getElementById('compareDock'),
    dockCount: document.getElementById('dockCount'),
    dockChips: document.getElementById('dockChips'),
    dockClearBtn: document.getElementById('dockClearBtn'),
    dockLaunchBtn: document.getElementById('dockLaunchBtn'),

    // Modal Dossier Elements
    modalBackdrop: document.getElementById('instrumentModalBackdrop'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalDossierContent: document.getElementById('modalDossierContent'),

    // Quiz Elements
    quizStreak: document.getElementById('quizStreak'),
    quizScore: document.getElementById('quizScore'),
    quizQuestionBox: document.getElementById('quizQuestionBox'),
    quizQuestionCount: document.getElementById('quizQuestionCount'),
    quizTypeBadge: document.getElementById('quizTypeBadge'),
    quizPromptArea: document.getElementById('quizPromptArea'),
    quizOptionsGrid: document.getElementById('quizOptionsGrid'),
    quizFeedbackBox: document.getElementById('quizFeedbackBox'),
    quizFeedbackMsg: document.getElementById('quizFeedbackMsg'),
    quizNextBtn: document.getElementById('quizNextBtn'),
    quizFinishedCard: document.getElementById('quizFinishedCard'),
    quizFinalScore: document.getElementById('quizFinalScore'),
    quizRestartBtn: document.getElementById('quizRestartBtn'),
    quizReturnGalleryBtn: document.getElementById('quizReturnGalleryBtn'),

    // Toast Container
    toastContainer: document.getElementById('toastContainer')
  };

  /* ==========================================================================
     UTILITY HELPERS
     ========================================================================== */
  function showToast(message) {
    if (!DOM.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    DOM.toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3200);
  }

  function formatPitch(inst) {
    if (STATE.pitchFormat === 'hz') {
      return `${inst.lowestFreqHz} Hz – ${inst.highestFreqHz} Hz`;
    }
    return inst.pitchRangeNotes;
  }

  function getFamilyIcon(family) {
    switch (family) {
      case 'strings': return '🎻';
      case 'woodwinds': return '🪈';
      case 'brass': return '🎺';
      case 'percussion': return '🥁';
      case 'keyboards': return '🎹';
      default: return '🎶';
    }
  }

  /* ==========================================================================
     VIEW 1: GALLERY & CARDS RENDERING
     ========================================================================== */
  function filterAndSortInstruments() {
    let list = INSTRUMENTS_DATA.slice();

    // 1. Family filter
    if (STATE.familyFilter !== 'all') {
      list = list.filter(i => i.family === STATE.familyFilter);
    }

    // 2. Hornbostel-Sachs classification filter
    if (STATE.hsFilter !== 'all') {
      list = list.filter(i => i.classification.toLowerCase().includes(STATE.hsFilter.toLowerCase()));
    }

    // 3. Register filter
    if (STATE.registerFilter !== 'all') {
      list = list.filter(i => i.register === STATE.registerFilter);
    }

    // 4. Search query
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.toLowerCase().trim();
      list = list.filter(i => {
        return (
          i.name.toLowerCase().includes(q) ||
          i.familyName.toLowerCase().includes(q) ||
          i.classification.toLowerCase().includes(q) ||
          i.vibratingMedium.toLowerCase().includes(q) ||
          i.famousPiece.toLowerCase().includes(q) ||
          i.originCentury.toLowerCase().includes(q)
        );
      });
    }

    // 5. Sorting
    list.sort((a, b) => {
      switch (STATE.sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'freq-low':
          return a.lowestFreqHz - b.lowestFreqHz;
        case 'freq-high':
          return b.highestFreqHz - a.highestFreqHz;
        case 'origin-asc':
          return a.originYear - b.originYear;
        case 'origin-desc':
          return b.originYear - a.originYear;
        default:
          return 0;
      }
    });

    return list;
  }

  function renderGallery() {
    const filtered = filterAndSortInstruments();

    // Update tallies
    if (DOM.displayedCount) DOM.displayedCount.textContent = filtered.length;
    if (DOM.totalInstrumentsCount) DOM.totalInstrumentsCount.textContent = INSTRUMENTS_DATA.length;
    if (DOM.statInstrumentCount) DOM.statInstrumentCount.textContent = INSTRUMENTS_DATA.length;

    // Empty state
    if (filtered.length === 0) {
      if (DOM.instrumentsGrid) DOM.instrumentsGrid.innerHTML = '';
      if (DOM.emptyResultsCard) DOM.emptyResultsCard.classList.remove('hidden');
      return;
    } else {
      if (DOM.emptyResultsCard) DOM.emptyResultsCard.classList.add('hidden');
    }

    let html = '';
    filtered.forEach(inst => {
      const isPinned = STATE.comparedIds.includes(inst.id);
      const isPlaying = activeAudioPlayingId === inst.id;
      const pitchStr = formatPitch(inst);

      html += `
        <article class="instrument-card" data-instrument-id="${inst.id}">
          <div class="card-photo-banner">
            <img 
              src="${inst.imageUrl}" 
              alt="${inst.name}" 
              class="card-photo-img" 
              loading="lazy" 
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >
            <div class="card-photo-fallback" style="display: none;">${inst.emoji}</div>

            <div class="card-family-pill">
              <span>${getFamilyIcon(inst.family)}</span>
              <span>${inst.familyName}</span>
            </div>

            <button 
              type="button" 
              class="btn-card-compare ${isPinned ? 'pinned' : ''}" 
              data-action="toggle-compare" 
              data-instrument-id="${inst.id}" 
              title="${isPinned ? 'Remove from comparison' : 'Add to comparator'}"
              aria-label="${isPinned ? 'Remove from comparison' : 'Add to comparator'}"
            >
              ${isPinned ? '✓' : '⚖️'}
            </button>

            <button 
              type="button" 
              class="btn-card-audio ${isPlaying ? 'playing' : ''}" 
              data-action="play-tone" 
              data-sound-id="${inst.id}"
              title="Hear synthesized tone"
            >
              ${isPlaying 
                ? '<span>⏸</span> <span class="audio-equalizer"><span class="eq-bar"></span><span class="eq-bar"></span><span class="eq-bar"></span></span>' 
                : '<span>▶ Play Tone</span>'}
            </button>
          </div>

          <div class="card-body">
            <div class="card-title-row">
              <h3 class="instrument-name">${inst.name}</h3>
              <p class="instrument-sub">${inst.classification}</p>
            </div>

            <div class="card-metrics-grid">
              <div class="metric-cell">
                <span class="metric-lbl">Pitch Compass</span>
                <span class="metric-val">${pitchStr}</span>
              </div>
              <div class="metric-cell">
                <span class="metric-lbl">Acoustic Class</span>
                <span class="metric-val">${inst.register.toUpperCase()}</span>
              </div>
              <div class="metric-cell">
                <span class="metric-lbl">Origin Period</span>
                <span class="metric-val">${inst.originCentury}</span>
              </div>
              <div class="metric-cell">
                <span class="metric-lbl">Section Role</span>
                <span class="metric-val">${inst.family.toUpperCase()}</span>
              </div>
            </div>

            <div class="card-tags-row">
              <span class="info-pill">${inst.playingTechniques[0]}</span>
              <span class="info-pill">${inst.playingTechniques[1] || 'Expressive'}</span>
            </div>

            <div class="card-footer">
              <button 
                type="button" 
                class="btn-open-dossier" 
                data-action="open-dossier" 
                data-instrument-id="${inst.id}"
              >
                Inspect Acoustic Dossier ➔
              </button>
            </div>
          </div>
        </article>
      `;
    });

    if (DOM.instrumentsGrid) DOM.instrumentsGrid.innerHTML = html;
  }

  /* ==========================================================================
     VIEW 2: LIVE SOUNDBOARD
     ========================================================================== */
  function renderSoundboard() {
    if (!DOM.soundboardGrid) return;

    let html = '';
    INSTRUMENTS_DATA.forEach(inst => {
      const isPlaying = activeAudioPlayingId === inst.id;

      html += `
        <div class="sound-tile ${isPlaying ? 'playing' : ''}" data-sound-id="${inst.id}">
          <div class="sound-tile-avatar">
            <img 
              src="${inst.imageUrl}" 
              alt="${inst.name}" 
              class="sound-tile-img" 
              loading="lazy" 
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
            >
            <div style="display: none; font-size: 2.2rem;">${inst.emoji}</div>
          </div>
          <h4 class="sound-tile-name">${inst.name}</h4>
          <span class="sound-tile-note">${inst.pitchRangeNotes}</span>
          <div class="sound-tile-btn">
            ${isPlaying 
              ? '<span>⏸ Playing</span> <span class="audio-equalizer"><span class="eq-bar"></span><span class="eq-bar"></span><span class="eq-bar"></span></span>' 
              : '<span>▶ Hear Tone</span>'}
          </div>
        </div>
      `;
    });

    DOM.soundboardGrid.innerHTML = html;
  }

  /* ==========================================================================
     VIEW 3: ACOUSTIC COMPARATOR
     ========================================================================== */
  function toggleCompareInstrument(instrumentId) {
    const idx = STATE.comparedIds.indexOf(instrumentId);
    if (idx > -1) {
      STATE.comparedIds.splice(idx, 1);
      showToast('Instrument removed from comparison matrix.');
    } else {
      if (STATE.comparedIds.length >= 3) {
        showToast('Comparator limit reached (3 instruments max). Remove one first.');
        return;
      }
      STATE.comparedIds.push(instrumentId);
      const inst = INSTRUMENTS_DATA.find(i => i.id === instrumentId);
      showToast(`Added ${inst ? inst.name : 'instrument'} to comparator.`);
    }

    updateComparatorUI();
  }

  function updateComparatorUI() {
    const count = STATE.comparedIds.length;

    // 1. Update badges
    if (DOM.compareCountBadge) DOM.compareCountBadge.textContent = count;
    if (DOM.dockCount) DOM.dockCount.textContent = count;

    // 2. Floating Dock Visibility
    if (count > 0) {
      if (DOM.compareDock) DOM.compareDock.classList.remove('hidden');
    } else {
      if (DOM.compareDock) DOM.compareDock.classList.add('hidden');
    }

    // 3. Render Dock Chips
    if (DOM.dockChips) {
      DOM.dockChips.innerHTML = STATE.comparedIds.map(id => {
        const inst = INSTRUMENTS_DATA.find(item => item.id === id);
        if (!inst) return '';
        return `
          <div class="dock-chip">
            <span>${inst.emoji}</span>
            <span>${inst.name}</span>
            <span class="dock-chip-remove" data-action="remove-dock-chip" data-instrument-id="${inst.id}">&times;</span>
          </div>
        `;
      }).join('');
    }

    // 4. Synchronize Dropdowns
    syncComparatorDropdowns();

    // 5. Render Matrix
    renderComparatorMatrix();

    // 6. Refresh Gallery Pin States
    renderGallery();
  }

  function syncComparatorDropdowns() {
    const selects = [DOM.compSelect1, DOM.compSelect2, DOM.compSelect3];

    selects.forEach((select, idx) => {
      if (!select) return;
      const currentSelected = STATE.comparedIds[idx] || '';

      if (select.children.length <= 1) {
        let optionsHtml = `<option value="">-- Choose Slot ${idx + 1} Instrument --</option>`;
        INSTRUMENTS_DATA.forEach(i => {
          optionsHtml += `<option value="${i.id}">${i.emoji} ${i.name} (${i.familyName})</option>`;
        });
        select.innerHTML = optionsHtml;
      }

      select.value = currentSelected;
    });
  }

  function renderComparatorMatrix() {
    if (!DOM.comparatorMatrix) return;

    if (STATE.comparedIds.length === 0) {
      DOM.comparatorMatrix.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; color: var(--text-secondary); background: var(--bg-surface-elevated); border: 1px dashed var(--border-subtle); border-radius: var(--radius-xl); max-width: 650px; margin: 2rem auto;">
          <div style="font-size: 3.5rem; margin-bottom: 1rem;">⚖️</div>
          <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">No Instruments Selected</h3>
          <p style="margin-bottom: 1.5rem;">Pick instruments using the dropdown slots above, or click the ⚖️ icon on cards in the Catalog.</p>
          <button type="button" class="btn btn-primary" onclick="document.querySelector('.mode-tab-btn[data-view=\\'gallery\\']')?.click();">
            Browse Instruments Catalog →
          </button>
        </div>
      `;
      return;
    }

    let html = '';
    STATE.comparedIds.forEach(id => {
      const inst = INSTRUMENTS_DATA.find(i => i.id === id);
      if (!inst) return;

      const freqPercent = Math.min(100, Math.round((inst.highestFreqHz / BENCHMARKS.maxFreqHz) * 100));
      const isPlaying = activeAudioPlayingId === inst.id;

      html += `
        <div class="compare-card">
          <div class="compare-hero">
            <div class="compare-photo-frame">
              <img 
                src="${inst.imageUrl}" 
                alt="${inst.name}" 
                class="compare-photo-img" 
                onerror="this.src='favicon.svg';"
              >
            </div>
            <h3 class="compare-name">${inst.emoji} ${inst.name}</h3>
            <div class="compare-family">${inst.familyName} • ${inst.classification}</div>
          </div>

          <div class="compare-stats-stack">
            <!-- Highest Frequency Reach -->
            <div class="compare-stat-row">
              <div class="compare-stat-header">
                <span class="compare-stat-lbl">Frequency Ceiling</span>
                <span class="compare-stat-val">${inst.highestFreqHz} Hz</span>
              </div>
              <div class="stat-bar-track">
                <div class="stat-bar-fill fill-freq" style="width: ${freqPercent}%;"></div>
              </div>
            </div>

            <!-- Pitch Range Span -->
            <div class="compare-stat-row">
              <div class="compare-stat-header">
                <span class="compare-stat-lbl">Compass Range</span>
                <span class="compare-stat-val">${inst.pitchRangeNotes}</span>
              </div>
              <div class="stat-bar-track">
                <div class="stat-bar-fill fill-decibel" style="width: 75%;"></div>
              </div>
            </div>

            <!-- Vibrating Medium -->
            <div class="compare-stat-row">
              <div class="compare-stat-header">
                <span class="compare-stat-lbl">Acoustic Register</span>
                <span class="compare-stat-val">${inst.register.toUpperCase()}</span>
              </div>
              <div class="stat-bar-track">
                <div class="stat-bar-fill fill-weight" style="width: 85%;"></div>
              </div>
            </div>
          </div>

          <div class="compare-meta-grid">
            <div>
              <span style="color: var(--text-muted); font-size: 0.75rem;">ORIGIN</span><br>
              <strong>${inst.originCentury}</strong>
            </div>
            <div>
              <span style="color: var(--text-muted); font-size: 0.75rem;">LOWEST NOTE</span><br>
              <strong>${inst.lowestFreqHz} Hz</strong>
            </div>
            <div style="grid-column: 1 / -1;">
              <span style="color: var(--text-muted); font-size: 0.75rem;">ORCHESTRAL ROLE</span><br>
              <strong>${inst.orchestraRole}</strong>
            </div>
          </div>

          <div style="display: flex; gap: 8px; margin-top: auto;">
            <button 
              type="button" 
              class="btn btn-primary btn-sm" 
              style="flex: 1;" 
              data-action="play-tone" 
              data-sound-id="${inst.id}"
            >
              ${isPlaying ? '⏸ Pause' : '▶ Play Tone'}
            </button>
            <button 
              type="button" 
              class="btn btn-secondary btn-sm" 
              data-action="remove-compare" 
              data-instrument-id="${inst.id}"
              title="Remove from slot"
            >
              ✕
            </button>
          </div>
        </div>
      `;
    });

    DOM.comparatorMatrix.innerHTML = html;
  }

  /* ==========================================================================
     INSTRUMENT DOSSIER MODAL (Uncropped, Crystal Clear Presentation)
     ========================================================================== */
  function openInstrumentDossier(instrumentId) {
    const inst = INSTRUMENTS_DATA.find(i => i.id === instrumentId);
    if (!inst) return;

    const isPinned = STATE.comparedIds.includes(inst.id);
    const isPlaying = activeAudioPlayingId === inst.id;
    const pitchStr = formatPitch(inst);

    const techniquesHtml = inst.playingTechniques.map(t => `<span class="info-pill">${t}</span>`).join(' ');
    const factsHtml = inst.funFacts.map(fact => `<li>${fact}</li>`).join('');

    const contentHtml = `
      <!-- Uncropped High-Fidelity Photo Showcase -->
      <div class="modal-photo-hero">
        <img 
          src="${inst.imageUrl}" 
          alt="${inst.name}" 
          class="modal-photo-img" 
          onerror="this.src='favicon.svg';"
        >
      </div>

      <!-- Dedicated Header Strip Below Photo (Zero Blurring Overlay) -->
      <div class="modal-header-strip">
        <div class="modal-title-lockup">
          <h2 class="modal-instrument-name">${inst.emoji} ${inst.name}</h2>
          <div class="modal-instrument-family">${inst.familyName} • ${inst.classification}</div>
        </div>
        <button 
          type="button" 
          class="modal-play-btn" 
          id="modalPlaySoundBtn" 
          data-action="modal-play-tone" 
          data-sound-id="${inst.id}"
        >
          ${isPlaying 
            ? '<span>⏸ Pause Tone</span> <span class="audio-equalizer"><span class="eq-bar"></span><span class="eq-bar"></span><span class="eq-bar"></span></span>' 
            : '<span>🔊 Play Acoustic Tone</span>'}
        </button>
      </div>

      <div class="modal-body">
        <div class="modal-dossier-grid">
          <div class="dossier-cell">
            <div class="dossier-lbl">Pitch Range</div>
            <div class="dossier-val">${pitchStr}</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-lbl">Frequency Spectrum</div>
            <div class="dossier-val">${inst.lowestFreqHz} Hz – ${inst.highestFreqHz} Hz</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-lbl">Acoustic Register</div>
            <div class="dossier-val">${inst.register.toUpperCase()}</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-lbl">Historical Origin</div>
            <div class="dossier-val">${inst.originCentury}</div>
          </div>
          <div class="dossier-cell" style="grid-column: span 2;">
            <div class="dossier-lbl">Vibrating Medium</div>
            <div class="dossier-val">${inst.vibratingMedium}</div>
          </div>
          <div class="dossier-cell" style="grid-column: 1 / -1;">
            <div class="dossier-lbl">Standard Orchestral Role</div>
            <div class="dossier-val">${inst.orchestraRole}</div>
          </div>
          <div class="dossier-cell" style="grid-column: 1 / -1;">
            <div class="dossier-lbl">Benchmark Masterpiece</div>
            <div class="dossier-val">${inst.famousPiece}</div>
          </div>
        </div>

        <h4 class="modal-section-title">Acoustic Playing Techniques</h4>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.75rem;">
          ${techniquesHtml}
        </div>

        <h4 class="modal-section-title">Acoustic & Organological Facts</h4>
        <div class="modal-funfacts-box">
          <ul>
            ${factsHtml}
          </ul>
        </div>

        <div class="modal-footer-actions">
          <button 
            type="button" 
            class="btn ${isPinned ? 'btn-secondary' : 'btn-primary'}" 
            data-action="modal-toggle-compare" 
            data-instrument-id="${inst.id}"
          >
            ${isPinned ? 'Remove from Comparator ✕' : 'Add to Comparator ⚖️'}
          </button>
        </div>
      </div>
    `;

    if (DOM.modalDossierContent) DOM.modalDossierContent.innerHTML = contentHtml;
    if (DOM.modalBackdrop) {
      DOM.modalBackdrop.classList.add('open');
      DOM.modalBackdrop.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (DOM.modalBackdrop) {
      DOM.modalBackdrop.classList.remove('open');
      DOM.modalBackdrop.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  /* ==========================================================================
     VIEW 4: EAR-TRAINING & ORGANOLOGY QUIZ MASTER
     ========================================================================== */
  function startQuizRound() {
    STATE.quiz.round = 1;
    STATE.quiz.score = 0;
    STATE.quiz.streak = 0;
    updateQuizHeaderStats();

    if (DOM.quizQuestionBox) DOM.quizQuestionBox.classList.remove('hidden');
    if (DOM.quizFinishedCard) DOM.quizFinishedCard.classList.add('hidden');

    generateNextQuestion();
  }

  function updateQuizHeaderStats() {
    if (DOM.quizStreak) DOM.quizStreak.textContent = STATE.quiz.streak;
    if (DOM.quizScore) DOM.quizScore.textContent = `${STATE.quiz.score} / ${STATE.quiz.totalQuestions}`;
  }

  function generateNextQuestion() {
    STATE.quiz.locked = false;
    if (DOM.quizFeedbackBox) DOM.quizFeedbackBox.classList.add('hidden');

    if (STATE.quiz.round > STATE.quiz.totalQuestions) {
      finishQuiz();
      return;
    }

    if (DOM.quizQuestionCount) {
      DOM.quizQuestionCount.textContent = `Question ${STATE.quiz.round} of ${STATE.quiz.totalQuestions}`;
    }

    // Types: 'ear-test', 'family', 'pitch-register'
    const types = ['ear-test', 'family', 'pitch-register'];
    const selectedType = types[Math.floor(Math.random() * types.length)];

    const target = INSTRUMENTS_DATA[Math.floor(Math.random() * INSTRUMENTS_DATA.length)];
    const pool = INSTRUMENTS_DATA.filter(i => i.id !== target.id);
    const distractors = [];
    while (distractors.length < 3) {
      const rand = pool[Math.floor(Math.random() * pool.length)];
      if (!distractors.includes(rand)) {
        distractors.push(rand);
      }
    }

    let questionData = {
      type: selectedType,
      target: target,
      options: [],
      correctAnswer: ''
    };

    if (selectedType === 'ear-test') {
      if (DOM.quizTypeBadge) DOM.quizTypeBadge.textContent = 'Ear-Training Recognition';
      questionData.correctAnswer = target.name;
      questionData.options = shuffleArray([target.name, ...distractors.map(d => d.name)]);

      if (DOM.quizPromptArea) {
        DOM.quizPromptArea.innerHTML = `
          <div class="quiz-prompt-text">
            Listen to this synthesized acoustic sample. Which instrument is being played?
          </div>
          <div class="quiz-audio-trigger-box">
            <button type="button" class="quiz-play-btn" data-action="quiz-listen" data-sound-id="${target.id}">
              <span>🔊 Play Sound Sample</span>
            </button>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Click to trigger tone</span>
          </div>
        `;
      }
      // Auto-trigger sound for ear training
      setTimeout(() => playInstrumentSound(target.id), 300);

    } else if (selectedType === 'family') {
      if (DOM.quizTypeBadge) DOM.quizTypeBadge.textContent = 'Organology Family';
      questionData.correctAnswer = target.familyName;
      const allFamilies = ['Strings', 'Woodwinds', 'Brass', 'Percussion', 'Keyboards'];
      questionData.options = shuffleArray(allFamilies).slice(0, 4);
      if (!questionData.options.includes(target.familyName)) {
        questionData.options[0] = target.familyName;
        questionData.options = shuffleArray(questionData.options);
      }

      if (DOM.quizPromptArea) {
        DOM.quizPromptArea.innerHTML = `
          <div class="quiz-prompt-text">
            To which musical instrument family does the <strong>${target.emoji} ${target.name}</strong> belong?
          </div>
        `;
      }
    } else {
      if (DOM.quizTypeBadge) DOM.quizTypeBadge.textContent = 'Acoustic Compass';
      questionData.correctAnswer = target.name;
      questionData.options = shuffleArray([target.name, ...distractors.map(d => d.name)]);

      if (DOM.quizPromptArea) {
        DOM.quizPromptArea.innerHTML = `
          <div class="quiz-prompt-text">
            Which instrument is famous for playing: <br><em>"${target.famousPiece}"</em>?
          </div>
        `;
      }
    }

    STATE.quiz.activeQuestion = questionData;

    if (DOM.quizOptionsGrid) {
      DOM.quizOptionsGrid.innerHTML = questionData.options.map((opt, i) => {
        return `
          <button 
            type="button" 
            class="quiz-option-btn" 
            data-action="quiz-answer" 
            data-answer="${opt}"
          >
            <span style="opacity: 0.6; font-size: 0.85rem;">[${String.fromCharCode(65 + i)}]</span>
            <span>${opt}</span>
          </button>
        `;
      }).join('');
    }
  }

  function handleQuizAnswer(selectedAnswer, buttonElement) {
    if (STATE.quiz.locked) return;
    STATE.quiz.locked = true;

    const current = STATE.quiz.activeQuestion;
    const isCorrect = selectedAnswer === current.correctAnswer;

    const allButtons = DOM.quizOptionsGrid.querySelectorAll('.quiz-option-btn');
    allButtons.forEach(btn => {
      btn.disabled = true;
      const ans = btn.getAttribute('data-answer');
      if (ans === current.correctAnswer) {
        btn.classList.add('correct');
      } else if (ans === selectedAnswer && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) {
      STATE.quiz.score++;
      STATE.quiz.streak++;
      if (DOM.quizFeedbackMsg) {
        DOM.quizFeedbackMsg.className = 'feedback-msg correct';
        DOM.quizFeedbackMsg.textContent = '✓ Splendid Ear! Correct Answer!';
      }
    } else {
      STATE.quiz.streak = 0;
      if (DOM.quizFeedbackMsg) {
        DOM.quizFeedbackMsg.className = 'feedback-msg wrong';
        DOM.quizFeedbackMsg.textContent = `✗ Not quite! The correct answer is: ${current.correctAnswer}`;
      }
    }

    updateQuizHeaderStats();
    if (DOM.quizFeedbackBox) DOM.quizFeedbackBox.classList.remove('hidden');
  }

  function finishQuiz() {
    if (DOM.quizQuestionBox) DOM.quizQuestionBox.classList.add('hidden');
    if (DOM.quizFinishedCard) DOM.quizFinishedCard.classList.remove('hidden');

    if (DOM.quizFinalScore) {
      DOM.quizFinalScore.textContent = STATE.quiz.score;
    }

    const titleEl = document.getElementById('quizFinishTitle');
    const trophyEl = document.getElementById('quizFinishTrophy');
    if (STATE.quiz.score === 5) {
      if (titleEl) titleEl.textContent = 'Flawless Maestro Acumen! 🌟';
      if (trophyEl) trophyEl.textContent = '👑';
    } else if (STATE.quiz.score >= 3) {
      if (titleEl) titleEl.textContent = 'Fine Musical Ear! 🎼';
      if (trophyEl) trophyEl.textContent = '🏆';
    } else {
      if (titleEl) titleEl.textContent = 'Keep Listening and Honing Your Ear! 🎶';
      if (trophyEl) trophyEl.textContent = '🎻';
    }
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  /* ==========================================================================
     VIEW SWITCHER
     ========================================================================== */
  function switchView(viewName) {
    STATE.activeView = viewName;

    DOM.modeTabBtns.forEach(btn => {
      const v = btn.getAttribute('data-view');
      btn.classList.toggle('active', v === viewName);
    });

    DOM.appViews.forEach(view => {
      if (view.id === `view-${viewName}`) {
        view.classList.remove('hidden');
        view.classList.add('active');
      } else {
        view.classList.add('hidden');
        view.classList.remove('active');
      }
    });

    if (viewName === 'soundboard') {
      renderSoundboard();
    } else if (viewName === 'compare') {
      updateComparatorUI();
    } else if (viewName === 'quiz') {
      startQuizRound();
    }
  }

  /* ==========================================================================
     EVENT LISTENERS & BINDINGS
     ========================================================================== */
  function bindEvents() {
    // 1. Search text input
    if (DOM.searchInput) {
      DOM.searchInput.addEventListener('input', (e) => {
        STATE.searchQuery = e.target.value;
        renderGallery();
      });
    }

    if (DOM.clearSearchBtn) {
      DOM.clearSearchBtn.addEventListener('click', () => {
        if (DOM.searchInput) {
          DOM.searchInput.value = '';
          STATE.searchQuery = '';
          renderGallery();
          DOM.searchInput.focus();
        }
      });
    }

    // 2. Unit / Pitch format buttons
    DOM.unitBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.unitBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        STATE.pitchFormat = btn.getAttribute('data-pitch-format');
        renderGallery();
        renderComparatorMatrix();
      });
    });

    // 3. Family chips
    DOM.familyChips.forEach(chip => {
      chip.addEventListener('click', () => {
        DOM.familyChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        STATE.familyFilter = chip.getAttribute('data-family');
        renderGallery();
      });
    });

    // 4. Secondary filters
    if (DOM.hsFilterSelect) {
      DOM.hsFilterSelect.addEventListener('change', (e) => {
        STATE.hsFilter = e.target.value;
        renderGallery();
      });
    }

    if (DOM.registerFilterSelect) {
      DOM.registerFilterSelect.addEventListener('change', (e) => {
        STATE.registerFilter = e.target.value;
        renderGallery();
      });
    }

    if (DOM.sortFilterSelect) {
      DOM.sortFilterSelect.addEventListener('change', (e) => {
        STATE.sortBy = e.target.value;
        renderGallery();
      });
    }

    // 5. Reset filters
    function resetAllFilters() {
      STATE.familyFilter = 'all';
      STATE.hsFilter = 'all';
      STATE.registerFilter = 'all';
      STATE.sortBy = 'name-asc';
      STATE.searchQuery = '';

      if (DOM.searchInput) DOM.searchInput.value = '';
      if (DOM.hsFilterSelect) DOM.hsFilterSelect.value = 'all';
      if (DOM.registerFilterSelect) DOM.registerFilterSelect.value = 'all';
      if (DOM.sortFilterSelect) DOM.sortFilterSelect.value = 'name-asc';

      DOM.familyChips.forEach(c => {
        if (c.getAttribute('data-family') === 'all') c.classList.add('active');
        else c.classList.remove('active');
      });

      renderGallery();
      showToast('Filters reset to default.');
    }

    if (DOM.resetFiltersBtn) DOM.resetFiltersBtn.addEventListener('click', resetAllFilters);
    if (DOM.emptyResetBtn) DOM.emptyResetBtn.addEventListener('click', resetAllFilters);

    // 6. View tabs
    DOM.modeTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const v = btn.getAttribute('data-view');
        if (v) switchView(v);
      });
    });

    // Mystery Instrument Button
    if (DOM.randomInstrumentBtn) {
      DOM.randomInstrumentBtn.addEventListener('click', () => {
        const rand = INSTRUMENTS_DATA[Math.floor(Math.random() * INSTRUMENTS_DATA.length)];
        openInstrumentDossier(rand.id);
        playInstrumentSound(rand.id);
        showToast(`Mystery Discovery: Exploring ${rand.name}!`);
      });
    }

    // 7. Modal close
    if (DOM.modalCloseBtn) DOM.modalCloseBtn.addEventListener('click', closeModal);
    if (DOM.modalBackdrop) {
      DOM.modalBackdrop.addEventListener('click', (e) => {
        if (e.target === DOM.modalBackdrop) closeModal();
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // 8. Global Delegated Click Handler for Cards & Actions
    document.addEventListener('click', (e) => {
      // Priority 1: Audio Play Button
      const audioBtn = e.target.closest('[data-action="play-tone"]');
      if (audioBtn) {
        e.stopPropagation();
        const soundId = audioBtn.getAttribute('data-sound-id');
        if (soundId) playInstrumentSound(soundId);
        return;
      }

      // Priority 2: Modal Audio Play Button
      const modalAudioBtn = e.target.closest('[data-action="modal-play-tone"]');
      if (modalAudioBtn) {
        e.stopPropagation();
        const soundId = modalAudioBtn.getAttribute('data-sound-id');
        if (soundId) playInstrumentSound(soundId);
        return;
      }

      // Priority 3: Compare Toggle Button
      const compareBtn = e.target.closest('[data-action="toggle-compare"]');
      if (compareBtn) {
        e.stopPropagation();
        const id = compareBtn.getAttribute('data-instrument-id');
        if (id) toggleCompareInstrument(id);
        return;
      }

      // Priority 4: Clicking on Soundboard Tile
      const soundTile = e.target.closest('.sound-tile');
      if (soundTile) {
        const soundId = soundTile.getAttribute('data-sound-id');
        if (soundId) playInstrumentSound(soundId);
        return;
      }

      // Priority 5: Clicking anywhere on Instrument Card (opens dossier)
      const instrumentCard = e.target.closest('.instrument-card');
      if (instrumentCard) {
        const instId = instrumentCard.getAttribute('data-instrument-id');
        if (instId) {
          openInstrumentDossier(instId);
          return;
        }
      }

      // Priority 6: Other specific actions
      const target = e.target.closest('[data-action]');
      if (!target) return;

      const action = target.getAttribute('data-action');
      const instId = target.getAttribute('data-instrument-id');

      if (action === 'open-dossier') {
        openInstrumentDossier(instId);
      } else if (action === 'modal-toggle-compare') {
        toggleCompareInstrument(instId);
        openInstrumentDossier(instId); // Refresh modal button text
      } else if (action === 'remove-compare') {
        toggleCompareInstrument(instId);
      } else if (action === 'remove-dock-chip') {
        toggleCompareInstrument(instId);
      } else if (action === 'quiz-answer') {
        const ans = target.getAttribute('data-answer');
        handleQuizAnswer(ans, target);
      } else if (action === 'quiz-listen') {
        const soundId = target.getAttribute('data-sound-id');
        if (soundId) playInstrumentSound(soundId);
      }
    });

    // 9. Floating Dock Buttons
    if (DOM.dockClearBtn) {
      DOM.dockClearBtn.addEventListener('click', () => {
        STATE.comparedIds = [];
        updateComparatorUI();
        showToast('Comparator cleared.');
      });
    }

    if (DOM.dockLaunchBtn) {
      DOM.dockLaunchBtn.addEventListener('click', () => {
        switchView('compare');
      });
    }

    // 10. Comparator Dropdown Pickers
    function handleSlotSelect(slotIndex, selectEl) {
      const selectedId = selectEl.value;
      if (!selectedId) {
        if (STATE.comparedIds[slotIndex]) {
          STATE.comparedIds.splice(slotIndex, 1);
        }
      } else {
        if (STATE.comparedIds.includes(selectedId) && STATE.comparedIds[slotIndex] !== selectedId) {
          showToast('Instrument is already chosen in another comparison slot.');
          selectEl.value = STATE.comparedIds[slotIndex] || '';
          return;
        }
        STATE.comparedIds[slotIndex] = selectedId;
      }
      STATE.comparedIds = STATE.comparedIds.filter(Boolean);
      updateComparatorUI();
    }

    if (DOM.compSelect1) DOM.compSelect1.addEventListener('change', (e) => handleSlotSelect(0, e.target));
    if (DOM.compSelect2) DOM.compSelect2.addEventListener('change', (e) => handleSlotSelect(1, e.target));
    if (DOM.compSelect3) DOM.compSelect3.addEventListener('change', (e) => handleSlotSelect(2, e.target));

    // 11. Quiz Buttons
    if (DOM.quizNextBtn) {
      DOM.quizNextBtn.addEventListener('click', () => {
        STATE.quiz.round++;
        generateNextQuestion();
      });
    }

    if (DOM.quizRestartBtn) {
      DOM.quizRestartBtn.addEventListener('click', startQuizRound);
    }

    if (DOM.quizReturnGalleryBtn) {
      DOM.quizReturnGalleryBtn.addEventListener('click', () => switchView('gallery'));
    }
  }

  /* ==========================================================================
     APPLICATION INITIALIZATION
     ========================================================================== */
  function init() {
    renderGallery();
    renderSoundboard();
    syncComparatorDropdowns();
    bindEvents();

    // Check hash routing
    const hash = window.location.hash.replace('#', '');
    if (['gallery', 'soundboard', 'compare', 'quiz'].includes(hash)) {
      switchView(hash);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
