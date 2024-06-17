const songData = {
    songs: [
      {
        id: '001',
        name: 'Ghar aaja Pardesi...',
        url: '- Ghar Aaja Pardesi.mp3'
      },
      {
        id: '002',
        name: 'Pasoori...',
        url: 'Pasoori (Lofi remix) || Coke Studio  -Ali Seth × Shae Gill || Mohit Maindoliya 🌃.mp3'
      },
      {
        id: '003',
        name: 'Tu Jane Na...',
        url: 'TuJaaneNaIndianLoFi.mp3'
      },
      {
        id: '004',
        name: 'Tujh Mein Rab Dikhta hai...',
        url: 'TujhMeinBollywoodLofi.mp3'
      },
      {
        id: '005',
        name: 'Shayad...',
        url: 'Gravero & KASE - Shayad (Lofi Edit).mp3'
      },
      { id: '006', name: 'Pasoori...', url: 'Pasoori (lofi).mp3' },
      {
        id: '007',
        name: 'Tum Tak...',
        url: 'A.R. Rahman - Tum Tak (Gravero Lofi Remake).mp3'
      },
      { id: '008', name: 'Aadat...', url: 'Aadat (Lofi 2307 flip).mp3' },
      {
        id: '009',
        name: 'Aaye ho meri...',
        url: 'Aaye Ho Meri Zindagi Me | Special Song 2018 | Siddharth Slathia | Aamir Khan.mp3'
      },
      {
        id: '010',
        name: 'Aafreen Aafreen...',
        url: 'Afreen Afreen (Lofi Flip) - Momina Mustehan , Rahat Fateh Ali Khan | Indian Lofi | Bollywood lofi.mp3'
      },
      {
        id: '011',
        name: 'Chan Kithan...',
        url: 'Ali Sethi - Chan Kithan (Gravero & The Two Lofi Remake).mp3'
      },
      {
        id: '012',
        name: 'Beetein Lamhein...',
        url: 'Beete Lamhe- The Train.mp3'
      },
      {
        id: '013',
        name: 'Bol do na zara...',
        url: 'Bol do na zara (slowed + rain).mp3'
      },
      {
        id: '014',
        name: 'Dil ko karar aaya...',
        url: 'Dil ko karar Aaya - (Smooth Lofi Flip).mp3'
      },
      {
        id: '015',
        name: 'Dil Sambhal ja zara...',
        url: 'Dil sambhal ja zara ( slowed+reverbed ).mp3'
      },
      {
        id: '016',
        name: 'Galat Fehmi...',
        url: 'Ghalat Fehmi [Slowed+Reverb]- Textaudio Lyrics-320k.mp3.mp3'
      },
      {
        id: '017',
        name: 'Ishq Sufiyana...',
        url: 'Ishq Sufiyana (Gravero & Last Source Lofi Remake).mp3'
      },
      {
        id: '018',
        name: 'Jashn-e-Bahara...',
        url: 'JashnEBahaaraa  Javed Ali AR Rahman WORMONO Lofi Remake  Jodhaa Akbar  Bollywood Lofi.mp3.mp3'
      },
      {
        id: '019',
        name: 'Jo Bheji thi dua...',
        url: 'Jo Bheji Thi Dua Lofi remake.mp3'
      },
      {
        id: '020',
        name: 'Juda hoke bhi...',
        url: 'Juda Hoke Bhi - Aadat (Lofi Mix) | Atif Aslam.mp3'
      },
      {
        id: '021',
        name: 'Kabhi jo badal barse...',
        url: 'Kabhi Jo Badal Barse - Arijit Singh (Gravero Lofi Remake).mp3'
      },
      {
        id: '022',
        name: 'Kabira...',
        url: 'Kabira - Tochi Raina And Rekha Bhardwaj (Slowed & Reverbed).mp3'
      },
      {
        id: '023',
        name: 'Mast Magan...',
        url: 'Mast Magan ⦵ LoFi Remake by WORMONO.mp3'
      },
      {
        id: '024',
        name: 'Maula Mere...',
        url: 'Maula Mere Lo-Fi Mix - Jeff.mp3'
      },
      {
        id: '025',
        name: 'Maula Mere Maula...',
        url: 'Maula Mere Maula ( Harrlin x P.N.D.A Music Flip) Video - Sardarboiiii.mp3'
      },
      {
        id: '026',
        name: 'Milne hai mujhse aayi...',
        url: 'Milne Hai Mujhse Aayi Slowed And Reverb Aashiqui 2 Arijit Singh Lofi 💔.mp3.mp3'
      },
      {
        id: '027',
        name: 'Pee Loon...',
        url: 'Pee Loon (Lofi) | Once Upon A Time in Mumbai | Mohit Chauhan | SahuKings .mp3.mp3'
      },
      {
        id: '028',
        name: 'Pehla Nasha...',
        url: 'Pehla Nasha (Malhar Remix) | Bollywood LoFi | Udit Narayan , Sadhana Sargam.mp3'
      },
      {
        id: '029',
        name: 'Saibo...',
        url: 'Saibo [WORMONO] LOFI MIX.mp3.mp3'
      },
      {
        id: '030',
        name: 'Jadu hai nasha hai...',
        url: 'Shreya Ghoshal - Jaadu Hai Nasha Hai (Gravero & S.L.E.E.P Lofi Flip).mp3'
      },
      {
        id: '031',
        name: 'Tere Bina...',
        url: 'Tere Bina LOFI - A. R. Rahman MalharMusic Flip Indian LOFI Bollywood LOFI.mp3.mp3'
      },
      {
        id: '032',
        name: 'Tujhe Kitna Chahne ...',
        url: 'Tujhe Kitna Chahne Lage - Arjit Singh (Harrlin Flip) Indian Lofi Hip Hop Bollywood Lofi.mp3'
      },
      {
        id: '033',
        name: 'Tujhe kitna Chahne...',
        url: 'Tujhe Kitna Chahne Lage LoFi.mp3.mp3'
      },
      {
        id: '034',
        name: 'Waaliyan...',
        url: 'Waalian  Harnoor WORMONO Lofi Remake  Gifty  Jatt Life Studios  Punjabi Lofi.mp3.mp3'
      },
      {
        id: '035',
        name: 'Zara sa...',
        url: 'Zara Sa (Lofi 2307 flip).mp3'
      },
      {
        id: '036',
        name: 'Zara Zara...',
        url: 'Zara Zara ~ Chill LOFI FLIP | Aesthetic Bollywood Flip | DJ RohanGR.mp3'
      }
    ]
  }
  
  export default songData