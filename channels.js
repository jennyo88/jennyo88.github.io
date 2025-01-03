const channels = [
  // ==========================
  // CHANNEL NUMBERING GUIDE
  // ==========================
  // 000s - Movies (current: 019)
  //        Action & Adventure
  //        Drama & Romance
  //        Comedy & Family
  //        Horror & Thriller
  //        Fantasy & Sci-Fi
  // 100s - Kids Programming (current: 105)
  // 200s - Cartoon Designated (current: 203)
  // 300s - TV Show Designated (current: 301)
  // ==========================
  //
  // ==========================
  // Movies
  // ==========================
  {
    name: "The Terminator",
    category: "Movies",
    subcategory: "Action& Adventure",
    channelNumber: 001,
    video: "https://archive.org/download/the-terminator-1984_202206/The%20Terminator%20%281984%29.mp4",
    description: "A cyborg is sent to the past to kill Sarah Connor.",
    duration: 107, // In minutes
    releaseYear: 1984,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/3450/WiKOlPsK0eb9wia5Nd4WRvch7WX9lCKNfl9tVU8h.webp",
  },
  {
    name: "Deep Rising",
    category: "Movies",
    subcategory: "Action& Adventure",
    channelNumber: 002,
    video: "https://archive.org/download/VHSPreservationProject/Deep%20Rising%20%281998%29.mp4",
    description: "A group of mercenaries and passengers battle a deadly sea creature aboard a luxury cruise ship.",
    duration: 106, // In minutes
    releaseYear: 1998,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/60977/7nEIIabSwXwYczMjJrhNrEGklBRGCOcPXz4RsmQG.webp",
  },
  {
    name: "The Mummy",
    category: "Movies",
    subcategory: "Action& Adventure",
    channelNumber: 003,
    video: "https://archive.org/download/the-mummy_202312/The%20Mummy.mp4",
    description: "An adventurer awakens an ancient curse in this thrilling action-horror.",
    duration: 124,
    releaseYear: 1999,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/5233/LJqDoR5PDs0u2sm6U9d4Gge6CpApok7SmMfbHMlG.webp",
  },
  {
    name: "Superman: The Movie",
    category: "Movies",
    subcategory: "Action& Adventure",
    channelNumber: 004,
    video: "https://archive.org/download/Superman1978BRRipDualAudio720pByeArnavSinha_201903/Superman%201978-BRRip%20Dual%20Audio%20720p%20Bye%20Arnav%20Sinha.mp4",
    description: "The first big-screen superhero movie starring Christopher Reeve.",
    duration: 143,
    releaseYear: 1978,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/9730/guZXgOs6SZDYo8sWV0Kjysn3T0R21CZeeVLJy3xN.webp",
  },
  {
    name: "Superman II",
    category: "Movies",
    subcategory: "Action& Adventure",
    channelNumber: 005,
    video: "https://archive.org/download/vts-01-1-merge-2/VTS_01_1_Merge%282%29.ia.mp4",
    description: "Superman faces General Zod in an epic battle for Earth.",
    duration: 116,
    releaseYear: 1980,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/9732/mKrX3QjoV8Wdg9LHuXm9ojXWtzszFgYwSfcvt79u.webp",
  },
  {
    name: "The Aristocats",
    category: "Movies",
    subcategory: "Comedy & Family",
    channelNumber: 006,
    video: "https://archive.org/download/the-aristocats/The%20Aristocats.mp4",
    description: "Disney's animated adventure of a family of cats lost in Paris.",
    duration: 78,
    releaseYear: 1970,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/34603/TbORWeJeKJNVKRCRZfBQV01cQgjoQ1lbNGPqj8Hf.webp",
  },
  {
    name: "Robin Hood",
    category: "Movies",
    subcategory: "Comedy & Family",
    channelNumber: 007,
    video: "https://archive.org/download/robin-hood-1986-vhs/Robin%20Hood%20%281986%20VHS%29.mp4",
    description: "Disney's animated Robin Hood as a cunning fox outwits Prince John.",
    duration: 83,
    releaseYear: 1973,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/23952/hFKwLF3AENNdOLccAFMxqjzKmEPqVYqJBsghCpOL.webp",
  },
  {
    name: "Ghostbusters",
    category: "Movies",
    subcategory: "Comedy & Family",
    channelNumber: 008,
    video: "https://archive.org/download/ghostbusters-from-the-original-vhs-release-in-1985/Ghostbusters%20from%20the%20Original%20VHS%20Release%20in%201985.ia.mp4",
    description: "A comedic take on ghost-hunting in New York City.",
    duration: 105,
    releaseYear: 1985,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/8037/oiupZ4QWzdbSRqyaOFPqO7o0U4ahYLLrYbkO2fqp.webp",
  },
  {
    name: "Monty Python's Life of Brian",
    category: "Movies",
    subcategory: "Comedy & Family",
    channelNumber: 009,
    video: "https://archive.org/download/full-vhs-monty-pythons-life-of-brian-1979-wci-home-video-1980-vhs/FULL%20VHS%20Monty%20Python%27s%20Life%20of%20Brian%20%281979%29%20%5BWCI%20Home%20Video%5D%20%281980%20VHS%29.mp4",
    description: "A satirical musical comedy on religious epics by Monty Python.",
    duration: 94,
    releaseYear: 1979,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/9002/IzJf3NsBqbzZ3l2Jv5eIskvmzQ8S3oTWH5pEjATO.webp",
  },
  {
    name: "Spice World",
    category: "Movies",
    subcategory: "Comedy & Family",
    channelNumber: 010,
    video: "https://archive.org/download/spice-world_202208/SPICE%20WORLD.mp4",
    description: "The Spice Girls embark on a wild, comedic adventure.",
    duration: 93,
    releaseYear: 1998,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/1960/Klof9nzovBpjzRrlalSalr6p1kr77l71LDYV3Pg8.webp",
  },
  {
    name: "Hocus Pocus",
    category: "Movies",
    subcategory: "Comedy & Family",
    channelNumber: 011,
    video: "https://archive.org/download/hocus-pocus_202312/Hocus%20Pocus.mp4",
    description: "A trio of witches is resurrected on Halloween night.",
    duration: 96,
    releaseYear: 1993,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/21799/yaO08fRNFidoJtuUvO017nHaxTdlObbsA9dKtq0K.webp",
  },
  {
    name: "The Thing",
    category: "Movies",
    subcategory: "Horror & Thriller",
    channelNumber: 012,
    video: "https://archive.org/download/the-thing-1982-vhs/The%20Thing%201982%20VHS%20.mp4",
    description: "A tense sci-fi horror about an alien shape-shifter.",
    duration: 109,
    releaseYear: 1982,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/5519/lnMC0cOyI16BFfZVaIMFRtEx9Cb8eab4wMvqgYNW.webp",
  },
  { 
    name: "Beneath the Planet of the Apes",
    category: "Movies",
    subcategory: "Fantasy & Sci-Fi",
    channelNumber: 013,
    video: "https://archive.org/download/beneath-the-planet-of-the-apes_202208/BeneathThePlanetOfTheApes.mp4",
    description: "A sci-fi sequel where astronauts discover the dark truth about Earth's future.",
    duration: 95,
    releaseYear: 1970,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/1880/fLrzUkj1CTPrLgz57JjsTEXNvLktlLySJG609b8U.webp",
  },
  { 
    name: "Godzilla",
    category: "Movies",
    subcategory: "Fantasy & Sci-Fi",
    channelNumber: 014,
    video: "https://archive.org/download/godzilla_20230622/Godzilla.mp4",
    description: "A giant lizard attacks New York City, and a team tries to stop it.",
    duration: 139,
    releaseYear: 1998,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/4147/UtNrbf3Mb1K43mMbTmwhMZ3OvVKXjWnAjnbHewyT.webp",
  },
  {
    name: "Starship Troopers",
    category: "Movies",
    subcategory: "Fantasy & Sci-Fi",
    channelNumber: 015,
    video: "https://archive.org/download/VHSPreservationProject/Starship%20Troopers%20%281997%29.mp4",
    description: "Humans battle alien Bugs in a dystopian, satirical sci-fi war.",
    duration: 129,
    releaseYear: 1997,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/12836/naJOadZBchYblCxFdZJLRIfv1G5pw89vJ5Y9P5Vz.webp",
  },
  {
    name: "Star Wars",
    category: "Movies",
    subcategory: "Fantasy & Sci-Fi",
    channelNumber: 016,
    video: "https://archive.org/download/star-wars-1977_202301/Star%20Wars%20%281977%29.mp4",
    description: "The epic space opera that began a cultural phenomenon.",
    duration: 121,
    releaseYear: 1977,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/159/M9MM8ok5tph0fPXoBUP1iB0jL8jB6wXG7hRGODxD.webp",
  },
  {
    name: "The Lost World: Jurassic Park",
    category: "Movies",
    subcategory: "Fantasy & Sci-Fi",
    channelNumber: 017,
    video: "https://archive.org/download/jurassic-park-the-lost-world/Jurassic%20Park%20The%20Lost%20World.mp4",
    description: "A team faces danger on an island of wild dinosaurs.",
    duration: 129,
    releaseYear: 1997,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/8032/PzUycNmvjSLt8nojOEK3Yf9zw3YDVKv3F7Izh3aC.webp",
  },
  {
    name: "The Matrix",
    category: "Movies",
    subcategory: "Fantasy & Sci-Fi",
    channelNumber: 018,
    video: "https://archive.org/download/the-matrix-fullscreen/4.The%20Matrix%20FS%20%28VCD%29.mp4",
    description: "A hacker learns the truth about his simulated reality.",
    duration: 136,
    releaseYear: 1999,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/633/ivJrTlaYC4LbgF2Zlg1Dt0WFrtgd9LpP07GTNsjA.webp",
  },
  {
    name: "The Time Machine",
    category: "Movies",
    subcategory: "Fantasy & Sci-Fi",
    channelNumber: 019,
    video: "https://archive.org/download/the-time-machine-1978-time-travel-sci-fi/The%20Time%20Machine%20%281978%20Time%20Travel%20SciFi%29.mp4",
    description: "A thrilling adaptation of H.G. Wells' classic time-travel adventure.",
    duration: 99,
    releaseYear: 1978,
    poster: "https://m.media-amazon.com/images/M/MV5BNTYwNDQ0NjYtNTgwMC00MTI4LWI1YWItMmQ4ODIwNDQ3ZWNmXkEyXkFqcGc@._V1_.jpg",
  },
  // Add more movies here...

  // ==========================
  // Cartoons
  // ==========================
  {
    name: "Kids WB Block",
    category: "Cartoons",
    subcategory: "Kids Programming",
    channelNumber: 101,
    episodes: [
      {
        name: "2001 - Part 1",
        duration: 86,
        video: "https://archive.org/download/kids-wb-cartoon-network-toonami-full-block-july-2001-woc-monster-rancher-batman-/Kids%20WB%20Cartoon%20Network%20Toonami%20Full%20Block%20July%202001%20WOC%20%28Monster%20Rancher%20Batman%20Beyond%20Pokemon%20Yu-Gi-Oh%20Dragon%20Ball%20Z%20Mobile%20Suit%20Gundam%20Cartoon%20Network%27s%20Toonami%20Block%20On%20Kids%20WB%20July%202001%20Full%20Recording%20WOC%29/VTS_01_1.mp4",
      },
      {
        name: "2001 - Part 2",
        duration: 87,
        video: "https://archive.org/download/kids-wb-cartoon-network-toonami-full-block-july-2001-woc-monster-rancher-batman-/Kids%20WB%20Cartoon%20Network%20Toonami%20Full%20Block%20July%202001%20WOC%20%28Monster%20Rancher%20Batman%20Beyond%20Pokemon%20Yu-Gi-Oh%20Dragon%20Ball%20Z%20Mobile%20Suit%20Gundam%20Cartoon%20Network%27s%20Toonami%20Block%20On%20Kids%20WB%20July%202001%20Full%20Recording%20WOC%29/VTS_01_2.mp4",
      },
      {
        name: "2001 - Part 3",
        duration: 75,
        video: "https://archive.org/download/kids-wb-cartoon-network-toonami-full-block-july-2001-woc-monster-rancher-batman-/Kids%20WB%20Cartoon%20Network%20Toonami%20Full%20Block%20July%202001%20WOC%20%28Monster%20Rancher%20Batman%20Beyond%20Pokemon%20Yu-Gi-Oh%20Dragon%20Ball%20Z%20Mobile%20Suit%20Gundam%20Cartoon%20Network%27s%20Toonami%20Block%20On%20Kids%20WB%20July%202001%20Full%20Recording%20WOC%29/VTS_01_3.mp4",
      },
    ],
    description: "A Saturday morning kids block from WB.",
    releaseYear: 2001,
    poster: "https://abcdvdvideo.myshopify.com/cdn/shop/products/35m-6691_large.jpg",
  },
  {
    name: "ABC Saturday Morning",
    category: "Cartoons",
    subcategory: "Kids Programming",
    channelNumber: 102,
    episodes: [
      {
        name: "1981 - Part 1",
        duration: 27,
        video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_1.mp4",
      },
      {
        name: "1981 - Part 2",
        duration: 27,
        video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_2.mp4",
      },
      {
        name: "1981 - Part 3",
        duration: 27,
        video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_3.mp4",
      },
      {
        name: "1981 - Part 4",
        duration: 27,
        video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_4.mp4",
      },
      {
        name: "1981 - Part 5",
        duration: 27,
        video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_5.mp4",
      },
    ],
    description: "A Saturday morning kids block from ABC.",
    releaseYear: 1981,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning",
    category: "Cartoons",
    subcategory: "Kids Programming",
    channelNumber: 103,
    episodes: [
      {
        name: "1986 - Part 1",
        duration: 30,
        video: "https://archive.org/download/vts-01-1_20200929_2234/ABC%20Saturday%20Morning%20Cartoons%2012-20-86%20WOC/VIDEO_TS/VTS_01_1.mp4",
      },
      {
        name: "1986 - Part 2",
        duration: 30,
        video: "https://archive.org/download/vts-01-1_20200929_2234/ABC%20Saturday%20Morning%20Cartoons%2012-20-86%20WOC/VIDEO_TS/VTS_01_2.mp4",
      },
      {
        name: "1986 - Part 3",
        duration: 05,
        video: "https://archive.org/download/vts-01-1_20200929_2234/ABC%20Saturday%20Morning%20Cartoons%2012-20-86%20WOC/VIDEO_TS/VTS_01_3.mp4",
      },
    ],
    description: "A Saturday morning kids block from ABC.",
    releaseYear: 1986,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning",
    category: "Cartoons",
    subcategory: "Kids Programming",
    channelNumber: 104,
    episodes: [
      {
        name: "1989 - Part 1",
        duration: 38,
        video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_1.mp4",
      },
      {
        name: "1989 - Part 2",
        duration: 38,
        video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_2.mp4",
      },
      {
        name: "1989 - Part 3",
        duration: 38,
        video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_3.mp4",
      },
      {
        name: "1989 - Part 4",
        duration: 38,
        video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_4.mp4",
      },
      {
        name: "1989 - Part 5",
        duration: 12,
        video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_5.mp4",
      },
    ],
    description: "A Saturday morning kids block from ABC.",
    releaseYear: 1989,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning",
    category: "Cartoons",
    subcategory: "Kids Programming",
    channelNumber: 105,
    episodes: [
      {
        name: "1993 - Part 1",
        duration: 29,
        video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_1.mp4",
      },
      {
        name: "1993 - Part 2",
        duration: 29,
        video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_2.mp4",
      },
      {
        name: "1993 - Part 3",
        duration: 29,
        video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_3.mp4",
      },
      {
        name: "1993 - Part 4",
        duration: 29,
        video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_4.mp4",
      },
      {
        name: "1993 - Part 5",
        duration: 02,
        video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_5.mp4",
      },
    ],
    description: "A Saturday morning kids block from ABC.",
    releaseYear: 1993,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "Candy Candy",
    category: "Cartoons",
    subcategory: "Candy Candy",
    channelNumber: 201,
    episodes: [
      {
        name: "Capítulo 001",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20001.%20Una%20ni%C3%B1a%20h%C3%A1bil%20que%20no%20renuncia.mp4",
      },
      {
        name: "Capítulo 002",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20002%20.%20%C2%A1Viaje%21%20Aventuras%20juntas.mp4",
      },
      {
        name: "Capítulo 003",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20003%20.%20El%20carruaje%20que%20transporta%20un%20adi%C3%B3s.mp4",
      },
      {
        name: "Capítulo 004",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20004%20.%20%C2%A1Est%C3%A1s%20preciosa%20cuando%20sonr%C3%ADes%21.mp4",
      },
      {
        name: "Capítulo 005",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20005%20.%20Desde%20hoy%20soy%20una%20princesa.mp4",
      },
      {
        name: "Capítulo 006",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20006%20.%20La%20persona%20que%20encontr%C3%A9%20en%20la%20verja%20de%20las%20rosas.mp4",
      },
      {
        name: "Capítulo 007",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20007%20.%20%C2%BFEstoy%20elegante.mp4",
      },
      {
        name: "Capítulo 008",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20008%20.%20Invitaci%C3%B3n%20a%20la%20felicidad.mp4",
      },
      {
        name: "Capítulo 009",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20009%20.%20El%20baile%20en%20el%20que%20encontr%C3%A9%20a%20aquella%20persona.mp4",
      },
      {
        name: "Capítulo 010",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20010%20.%20Una%20dama%20en%20el%20establo.mp4",
      },
      {
        name: "Capítulo 011",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20011%20.%20Una%20peque%C3%B1a%20cinta%20amarra%20los%20corazones.mp4",
      },
      {
        name: "Capítulo 012",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20012%20.%20Cumplea%C3%B1os%20con%20olor%20a%20rosas.mp4",
      },
      {
        name: "Capítulo 013",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20013%20.%20Los%20tres%20solitarios.mp4",
      },
      {
        name: "Capítulo 014",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20014%20.%20El%20gran%20%C3%A1rbol%20lleno%20de%20brisa%20primaveral.mp4",
      },
      {
        name: "Capítulo 015",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20015%20.%20La%20decisi%C3%B3n%20que%20arrebata%20la%20felicidad.mp4",
      },
      // Add more episodes here...
    ],
    releaseYear: 1981,
    poster: "https://m.media-amazon.com/images/I/81KaTQ8QyhL.jpg",
  },
  {
    name: "Dragon Ball Z",
    category: "Cartoons",
    subcategory: "Dragon Ball",
    channelNumber: 202,
    episodes: [
      {
        name: "Capítulo 001",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/%5B001%5D%20Aparece%20un%20mini%20Goku%2C%20su%20nombre%20es%20Gohan.mp4",
      },
      // Add more episodes here...
    ],
    releaseYear: 1989,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/334f00b53cf3ef848ea7048b25711bc98e8236ce1685a096990c80d0965835ea.png",
  },
  {
    name: "The Tom and Jerry Show",
    category: "Cartoons",
    subcategory: "Tom & Jerry",
    channelNumber: 203,
    episodes: [
      {
        name: "Volumen 1",
        duration: 58,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%201.mp4",
      },
      {
        name: "Volumen 2",
        duration: 56,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%202.mp4",
      },
      {
        name: "Volumen 3",
        duration: 58,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%203.mp4",
      },
      {
        name: "Volumen 4",
        duration: 55,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%204.mp4",
      },
      {
        name: "Volumen 5",
        duration: 59,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%205.mp4",
      },
      {
        name: "Volumen 7",
        duration: 55,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%207.mp4",
      },
      {
        name: "Volumen 8",
        duration: 57,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%208.mp4",
      },
      {
        name: "Volumen Extra",
        duration: 54,
        video: "https://ia800504.us.archive.org/3/items/VHS-Tom-y-Jerry/Volumen%20Extra.mp4",
      },
      // Add more episodes here...
    ],
    releaseYear: 1975,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/shows/7731/season_c/FMXnlcve9WZjpvy5VoVMSH1lkIOlUxFetqObh9qo.webp",
  },
  // Add more cartoons here...

  // ==========================
  // TV Shows
  // ==========================
  {
    name: "El Chavo del 8",
    category: "Shows",
    subcategory: "El Chavo del 8",
    channelNumber: 301,
    episodes: [
      {
        name: "Volumen 1",
        duration: 104,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-1/LoMejorDelChavo_DVDR1.mp4",
      },
      {
        name: "Volumen 2",
        duration: 63,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-2/LoMejorDelChavo_DVDR2.mp4",
      },
      {
        name: "Volumen 3",
        duration: 60,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-3/LoMejorDelChavo_DVDR3.mp4",
      },
      {
        name: "Volumen 4",
        duration: 70,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-4/LoMejorDelChavo_DVDR4.mp4",
      },
      {
        name: "Volumen 5",
        duration: 65,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-5/LoMejorDelChavo_DVDR5.mp4",
      },
      {
        name: "Volumen 6a",
        duration: 106,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-6/LoMejorDelChavo_DVDR6.mp4",
      },
      {
        name: "Volumen 6b",
        duration: 8,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-6/LoMejorDelChavo_DVDR62.mp4",
      },
      {
        name: "Volumen 7a",
        duration: 104,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-7/LoMejorDelChavo_DVDR7.mp4",
      },
      {
        name: "Volumen 7b",
        duration: 104,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-7/LoMejorDelChavo_DVDR73.mp4",
      },
      {
        name: "Volumen 8a",
        duration: 92,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-8/LoMejorDelChavo_DVDR8.mp4",
      },
      {
        name: "Volumen 8b",
        duration: 90,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-8/LoMejorDelChavo_DVDR83.mp4",
      },
      {
        name: "Volumen 8c",
        duration: 22,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-8/LoMejorDelChavo_DVDR84.mp4",
      },
      {
        name: "Volumen 9a",
        duration: 75,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-9/LoMejorDelChavo_DVDR9.mp4",
      },
      {
        name: "Volumen 9b",
        duration: 73,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-9/LoMejorDelChavo_DVDR93.mp4",
      },
      {
        name: "Volumen 9c",
        duration: 29,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-9/LoMejorDelChavo_DVDR94.mp4",
      },
      {
        name: "Volumen 10a",
        duration: 107,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-10/LoMejorDelChavo_DVDR10.mp4",
      },
      {
        name: "Volumen 10b",
        duration: 105,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-10/LoMejorDelChavo_DVDR103.mp4",
      },
      {
        name: "Volumen 10c",
        duration: 5,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-10/LoMejorDelChavo_DVDR104.mp4",
      },
      {
        name: "Volumen 11a",
        duration: 81,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-11/LoMejorDelChavo_DVDR11.mp4",
      },
      {
        name: "Volumen 11b",
        duration: 79,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-11/LoMejorDelChavo_DVDR113.mp4",
      },
      {
        name: "Volumen 11c",
        duration: 21,
        video: "https://archive.org/download/lo-mejor-del-chavo-dvdr-11/LoMejorDelChavo_DVDR114.mp4",
      },
    ],
    description: "Las desventuras del Chavo, un huerfanito de 8 años que vive solo en la vecindad.",
    releaseYear: 1971,
    poster: "https://image.tmdb.org/t/p/original/d2xJ6xmrchmnVL0S9gsbiGHskxp.jpg",
  },
  // Add more TV shows here...
  
];

// Export for use in GitHub Pages
if (typeof module !== "undefined") {
  module.exports = channels;
}
