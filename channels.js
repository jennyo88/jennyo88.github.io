const channels = [
  // ==========================
  // Movies
  // ==========================
  {
    name: "The Terminator",
    category: "Movies",
    subcategory: "Action",
    channelNumber: 1,
    video: "https://archive.org/download/the-terminator-1984_202206/The%20Terminator%20%281984%29.mp4",
    description: "A cyborg is sent to the past to kill Sarah Connor.",
    duration: "1h 47m",
    releaseYear: 1984,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/3450/WiKOlPsK0eb9wia5Nd4WRvch7WX9lCKNfl9tVU8h.webp",
  },
  {
    name: "The Mummy",
    category: "Movies",
    subcategory: "Adventure",
    channelNumber: 2,
    video: "https://ia601201.us.archive.org/23/items/the-mummy_202312/The%20Mummy.mp4",
    description: "An adventurer awakens an ancient curse in this thrilling action-horror.",
    duration: "2h 4m",
    releaseYear: 1999,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/5233/LJqDoR5PDs0u2sm6U9d4Gge6CpApok7SmMfbHMlG.webp",
  },
  {
    name: "The Aristocats",
    category: "Movies",
    subcategory: "Animation",
    channelNumber: 3,
    video: "https://archive.org/download/the-aristocats/The%20Aristocats.mp4",
    description: "Disney's animated adventure of a family of cats lost in Paris.",
    duration: "1h 18m",
    releaseYear: 1970,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/34603/TbORWeJeKJNVKRCRZfBQV01cQgjoQ1lbNGPqj8Hf.webp",
  },
  {
    name: "Robin Hood",
    category: "Movies",
    subcategory: "Animation",
    channelNumber: 4,
    video: "https://archive.org/download/robin-hood-1986-vhs/Robin%20Hood%20%281986%20VHS%29.mp4",
    description: "Disney's animated Robin Hood as a cunning fox outwits Prince John.",
    duration: "1h 23m",
    releaseYear: 1973,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/23952/hFKwLF3AENNdOLccAFMxqjzKmEPqVYqJBsghCpOL.webp",
  },
  {
    name: "Ghostbusters",
    category: "Movies",
    subcategory: "Comedy",
    channelNumber: 5,
    video: "https://archive.org/download/ghostbusters-from-the-original-vhs-release-in-1985/Ghostbusters%20from%20the%20Original%20VHS%20Release%20in%201985.ia.mp4",
    description: "A comedic take on ghost-hunting in New York City.",
    duration: "1h 45m",
    releaseYear: 1985,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/8037/oiupZ4QWzdbSRqyaOFPqO7o0U4ahYLLrYbkO2fqp.webp",
  },
  {
    name: "Monty Python's Life of Brian",
    category: "Movies",
    subcategory: "Comedy",
    channelNumber: 6,
    video: "https://archive.org/download/full-vhs-monty-pythons-life-of-brian-1979-wci-home-video-1980-vhs/FULL%20VHS%20Monty%20Python%27s%20Life%20of%20Brian%20%281979%29%20%5BWCI%20Home%20Video%5D%20%281980%20VHS%29.mp4",
    description: "A satirical musical comedy on religious epics by Monty Python.",
    duration: "1h 34m",
    releaseYear: 1979,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/9002/IzJf3NsBqbzZ3l2Jv5eIskvmzQ8S3oTWH5pEjATO.webp",
  },
  {
    name: "Hocus Pocus",
    category: "Movies",
    subcategory: "Fantasy",
    channelNumber: 7,
    video: "https://archive.org/download/hocus-pocus_202312/Hocus%20Pocus.mp4",
    description: "A trio of witches is resurrected on Halloween night.",
    duration: "1h 36m",
    releaseYear: 1993,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/21799/yaO08fRNFidoJtuUvO017nHaxTdlObbsA9dKtq0K.webp",
  },
  {
    name: "The Thing",
    category: "Movies",
    subcategory: "Horror",
    channelNumber: 8,
    video: "https://archive.org/download/the-thing-1982-vhs/The%20Thing%201982%20VHS%20.mp4",
    description: "A tense sci-fi horror about an alien shape-shifter.",
    duration: "1h 49m",
    releaseYear: 1982,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/5519/lnMC0cOyI16BFfZVaIMFRtEx9Cb8eab4wMvqgYNW.webp",
  },
  {
    name: "Spice World",
    category: "Movies",
    subcategory: "Musical",
    channelNumber: 9,
    video: "https://archive.org/download/spice-world_202208/SPICE%20WORLD.mp4",
    description: "The Spice Girls embark on a wild, comedic adventure.",
    duration: "1h 33m",
    releaseYear: 1998,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/1960/Klof9nzovBpjzRrlalSalr6p1kr77l71LDYV3Pg8.webp",
  },
  { 
    name: "Beneath the Planet of the Apes",
    category: "Movies",
    subcategory: "Sci-Fi",
    channelNumber: 10,
    video: "https://archive.org/download/beneath-the-planet-of-the-apes_202208/BeneathThePlanetOfTheApes.mp4",
    description: "A sci-fi sequel where astronauts discover the dark truth about Earth's future.",
    duration: "1h 35m",
    releaseYear: 1970,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/1880/fLrzUkj1CTPrLgz57JjsTEXNvLktlLySJG609b8U.webp",
  },
  { 
    name: "Godzilla",
    category: "Movies",
    subcategory: "Sci-Fi",
    channelNumber: 11,
    video: "https://archive.org/download/godzilla_20230622/Godzilla.mp4",
    description: "A giant lizard attacks New York City, and a team tries to stop it.",
    duration: "2h 19mm",
    releaseYear: 1998,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/4147/UtNrbf3Mb1K43mMbTmwhMZ3OvVKXjWnAjnbHewyT.webp",
  },
  {
    name: "Star Wars",
    category: "Movies",
    subcategory: "Sci-Fi",
    channelNumber: 12,
    video: "https://dn720403.ca.archive.org/0/items/star-wars-1977_202301/Star%20Wars%20%281977%29.mp4",
    description: "The epic space opera that began a cultural phenomenon.",
    duration: "2h 1m",
    releaseYear: 1977,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/159/M9MM8ok5tph0fPXoBUP1iB0jL8jB6wXG7hRGODxD.webp",
  },
  {
    name: "The Lost World: Jurassic Park",
    category: "Movies",
    subcategory: "Sci-Fi",
    channelNumber: 13,
    video: "https://archive.org/download/jurassic-park-the-lost-world/Jurassic%20Park%20The%20Lost%20World.mp4",
    description: "A team faces danger on an island of wild dinosaurs.",
    duration: "2h 9m",
    releaseYear: 1997,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/8032/PzUycNmvjSLt8nojOEK3Yf9zw3YDVKv3F7Izh3aC.webp",
  },
  {
    name: "The Matrix",
    category: "Movies",
    subcategory: "Sci-Fi",
    channelNumber: 14,
    video: "https://archive.org/download/the-matrix-fullscreen/4.The%20Matrix%20FS%20%28VCD%29.mp4",
    description: "A hacker learns the truth about his simulated reality.",
    duration: "2h 16m",
    releaseYear: 1999,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/633/ivJrTlaYC4LbgF2Zlg1Dt0WFrtgd9LpP07GTNsjA.webp",
  },
  {
    name: "The Time Machine",
    category: "Movies",
    subcategory: "Sci-Fi",
    channelNumber: 15,
    video: "https://archive.org/download/the-time-machine-1978-time-travel-sci-fi/The%20Time%20Machine%20%281978%20Time%20Travel%20SciFi%29.mp4",
    description: "A thrilling adaptation of H.G. Wells' classic time-travel adventure.",
    duration: "1h 39m",
    releaseYear: 1978,
    poster: "https://m.media-amazon.com/images/M/MV5BNTYwNDQ0NjYtNTgwMC00MTI4LWI1YWItMmQ4ODIwNDQ3ZWNmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Superman: The Movie",
    category: "Movies",
    subcategory: "Superhero",
    channelNumber: 16,
    video: "https://archive.org/download/superman-the-movie-1978-from-the-1979-wci-home-video-vhs/Superman%20The%20Movie%20%281978%29%20%5Bfrom%20the%201979%20WCI%20Home%20Video%20VHS%5D.mp4",
    description: "The first big-screen superhero movie starring Christopher Reeve.",
    duration: "2h 23m",
    releaseYear: 1978,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/9730/guZXgOs6SZDYo8sWV0Kjysn3T0R21CZeeVLJy3xN.webp",
  },
  {
    name: "Superman II",
    category: "Movies",
    subcategory: "Superhero",
    channelNumber: 17,
    video: "https://archive.org/download/full-vhs-superman-ii-1981-warner-home-video-rental-edition/FULL%20VHS%20Superman%20II%20%281981%29%20%5BWarner%20Home%20Video%5D%20%28Rental%20Edition%29.mp4",
    description: "Superman faces General Zod in an epic battle for Earth.",
    duration: "1h 56m",
    releaseYear: 1980,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/9732/mKrX3QjoV8Wdg9LHuXm9ojXWtzszFgYwSfcvt79u.webp",
  },
  // Add more movies here...

  // ==========================
  // Cartoons
  // ==========================
  {
    name: "Kids WB Block",
    category: "Cartoons",
    subcategory: "Kids WB",
    channelNumber: 101,
    episodes: [
      {
        part: 1,
        video: "https://archive.org/download/kids-wb-cartoon-network-toonami-full-block-july-2001-woc-monster-rancher-batman-/Kids%20WB%20Cartoon%20Network%20Toonami%20Full%20Block%20July%202001%20WOC%20%28Monster%20Rancher%20Batman%20Beyond%20Pokemon%20Yu-Gi-Oh%20Dragon%20Ball%20Z%20Mobile%20Suit%20Gundam%20Cartoon%20Network%27s%20Toonami%20Block%20On%20Kids%20WB%20July%202001%20Full%20Recording%20WOC%29/VTS_01_1.mp4",
      },
      {
        part: 2,
        video: "https://archive.org/download/kids-wb-cartoon-network-toonami-full-block-july-2001-woc-monster-rancher-batman-/Kids%20WB%20Cartoon%20Network%20Toonami%20Full%20Block%20July%202001%20WOC%20%28Monster%20Rancher%20Batman%20Beyond%20Pokemon%20Yu-Gi-Oh%20Dragon%20Ball%20Z%20Mobile%20Suit%20Gundam%20Cartoon%20Network%27s%20Toonami%20Block%20On%20Kids%20WB%20July%202001%20Full%20Recording%20WOC%29/VTS_01_2.mp4",
      },
      {
        part: 3,
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
    subcategory: "1981 Programming",
    channelNumber: 102,
    episodes: [
      {
        part: 1,
        video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_1.mp4",
      },
      {
        part: 2,
        video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_2.mp4",
      },
      {
        part: 3,
        video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_3.mp4",
      },
      {
        part: 4,
        video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_4.mp4",
      },
      {
        part: 5,
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
    subcategory: "1986 Programming",
    channelNumber: 103,
    episodes: [
      {
        part: 1,
        video: "https://archive.org/download/vts-01-1_20200929_2234/ABC%20Saturday%20Morning%20Cartoons%2012-20-86%20WOC/VIDEO_TS/VTS_01_1.mp4",
      },
      {
        part: 2,
        video: "https://archive.org/download/vts-01-1_20200929_2234/ABC%20Saturday%20Morning%20Cartoons%2012-20-86%20WOC/VIDEO_TS/VTS_01_2.mp4",
      },
      {
        part: 3,
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
    subcategory: "1989 Programming",
    channelNumber: 104,
    episodes: [
      {
        part: 1,
        video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_1.mp4",
      },
      {
        part: 2,
        video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_2.mp4",
      },
      {
        part: 3,
        video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_3.mp4",
      },
      {
        part: 4,
        video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_4.mp4",
      },
      {
        part: 5,
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
    subcategory: "1993 Programming",
    channelNumber: 105,
    episodes: [
      {
        part: 1,
        video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_1.mp4",
      },
      {
        part: 2,
        video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_2.mp4",
      },
      {
        part: 3,
        video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_3.mp4",
      },
      {
        part: 4,
        video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_4.mp4",
      },
      {
        part: 5,
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
    subcategory: "Anime",
    channelNumber: 106,
    episodes: [
      {
        title: "Cap 001 - Una niña hábil que no renuncia",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20001.%20Una%20ni%C3%B1a%20h%C3%A1bil%20que%20no%20renuncia.mp4",
      },
      {
        title: "Cap 002 - ¡Viaje! Aventuras juntas",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20002%20.%20%C2%A1Viaje%21%20Aventuras%20juntas.mp4",
      },
      {
        title: "Cap 003 - El carruaje que transporta un adiós",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20003%20.%20El%20carruaje%20que%20transporta%20un%20adi%C3%B3s.mp4",
      },
      {
        title: "Cap 004 - ¡Estás preciosa cuando sonríes!",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20004%20.%20%C2%A1Est%C3%A1s%20preciosa%20cuando%20sonr%C3%ADes%21.mp4",
      },
      {
        title: "Cap 005 - Desde hoy soy una princesa",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20005%20.%20Desde%20hoy%20soy%20una%20princesa.mp4",
      },
      {
        title: "Cap 006 - La persona que encontré en la verja de las rosas",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20006%20.%20La%20persona%20que%20encontr%C3%A9%20en%20la%20verja%20de%20las%20rosas.mp4",
      },
      {
        title: "Cap 007 - ¿Estoy elegante?",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20007%20.%20%C2%BFEstoy%20elegante.mp4",
      },
      {
        title: "Cap 008 - Invitación a la felicidad",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20008%20.%20Invitaci%C3%B3n%20a%20la%20felicidad.mp4",
      },
      {
        title: "Cap 009 - El baile en el que encontré a aquella persona",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20009%20.%20El%20baile%20en%20el%20que%20encontr%C3%A9%20a%20aquella%20persona.mp4",
      },
      {
        title: "Cap 010 - Una dama en el establo",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20010%20.%20Una%20dama%20en%20el%20establo.mp4",
      },
      {
        title: "Cap 011 - Una pequeña cinta amarra los corazones",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20011%20.%20Una%20peque%C3%B1a%20cinta%20amarra%20los%20corazones.mp4",
      },
      {
        title: "Cap 012 - Cumpleaños con olor a rosas",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20012%20.%20Cumplea%C3%B1os%20con%20olor%20a%20rosas.mp4",
      },
      {
        title: "Cap 013 - Los tres solitarios",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20013%20.%20Los%20tres%20solitarios.mp4",
      },
      {
        title: "Cap 014 - El gran árbol lleno de brisa primaveral",
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20014%20.%20El%20gran%20%C3%A1rbol%20lleno%20de%20brisa%20primaveral.mp4",
      },
      {
        title: "Cap 015 - La decisión que arrebata la felicidad",
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
    subcategory: "Anime",
    channelNumber: 107,
    episodes: [
      {
        title: "Cap 001 - Aparece un mini Goku, su nombre es Gohan",
        video: "https://dn720407.ca.archive.org/0/items/dragon-ball-zvideoplaytv/%5B001%5D%20Aparece%20un%20mini%20Goku%2C%20su%20nombre%20es%20Gohan.mp4",
      },
      // Add more episodes here...
    ],
    releaseYear: 1989,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/334f00b53cf3ef848ea7048b25711bc98e8236ce1685a096990c80d0965835ea.png",
  },
  // Add more cartoons here...
];

// Export for use in GitHub Pages
if (typeof module !== "undefined") {
  module.exports = channels;
}
