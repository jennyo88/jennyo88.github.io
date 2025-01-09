const channels = [
  // ========================================
  // CHANNEL NUMBERING GUIDE
  // ========================================
  //   0s - Movies                       (23)
  //        Action & Adventure     (1-5)  (5)
  //        Comedy & Family       (6-11)  (6)
  //        Drama & Romance      (12-13)  (2)
  //        Fantasy & Sci-Fi     (14-20)  (7)
  //        Horror & Thriller    (21-21)  (1)
  //        Romance & Comedy     (22-23)  (2)
  // ========================================
  // 100s - Kids Programming   (101-105)  (5)
  // 200s - Classic Cartoons       (201)  (1)
  // 210s - Anime              (211-213)  (3)
  //        Anime Romance          (211)  (1)
  //        Anime Acción       (212-213)  (2)
  // 300s - TV Show Designated (301-301)  (1)
  // ========================================
  //
  // ========================================
  // Movies
  // ========================================
  {
    name: "The Terminator",
    category: "Movies",
    subcategory: "Action & Adventure",
    channelNumber: 1,
    video: "https://archive.org/download/the-terminator-1984_202206/The%20Terminator%20%281984%29.mp4",
    description: "A cyborg is sent to the past to kill Sarah Connor.",
    duration: 107, // In minutes
    releaseYear: 1984,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/3450/WiKOlPsK0eb9wia5Nd4WRvch7WX9lCKNfl9tVU8h.webp",
  },
  {
    name: "Deep Rising",
    category: "Movies",
    subcategory: "Action & Adventure",
    channelNumber: 2,
    video: "https://archive.org/download/VHSPreservationProject/Deep%20Rising%20%281998%29.mp4",
    description: "A group of mercenaries and passengers battle a deadly sea creature aboard a luxury cruise ship.",
    duration: 106, // In minutes
    releaseYear: 1998,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/60977/7nEIIabSwXwYczMjJrhNrEGklBRGCOcPXz4RsmQG.webp",
  },
  {
    name: "The Mummy",
    category: "Movies",
    subcategory: "Action & Adventure",
    channelNumber: 3,
    video: "https://archive.org/download/the-mummy_202312/The%20Mummy.mp4",
    description: "An adventurer awakens an ancient curse in this thrilling action-horror.",
    duration: 124,
    releaseYear: 1999,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/5233/LJqDoR5PDs0u2sm6U9d4Gge6CpApok7SmMfbHMlG.webp",
  },
  {
    name: "Superman: The Movie",
    category: "Movies",
    subcategory: "Action & Adventure",
    channelNumber: 4,
    video: "https://archive.org/download/Superman1978BRRipDualAudio720pByeArnavSinha_201903/Superman%201978-BRRip%20Dual%20Audio%20720p%20Bye%20Arnav%20Sinha.mp4",
    description: "The first big-screen superhero movie starring Christopher Reeve.",
    duration: 143,
    releaseYear: 1978,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/9730/guZXgOs6SZDYo8sWV0Kjysn3T0R21CZeeVLJy3xN.webp",
  },
  {
    name: "Superman II",
    category: "Movies",
    subcategory: "Action & Adventure",
    channelNumber: 5,
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
    channelNumber: 6,
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
    channelNumber: 7,
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
    channelNumber: 8,
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
    channelNumber: 9,
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
    channelNumber: 10,
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
    channelNumber: 11,
    video: "https://archive.org/download/hocus-pocus_202312/Hocus%20Pocus.mp4",
    description: "A trio of witches is resurrected on Halloween night.",
    duration: 96,
    releaseYear: 1993,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/21799/yaO08fRNFidoJtuUvO017nHaxTdlObbsA9dKtq0K.webp",
  },
  {
    name: "My Girl Friday",
    category: "Movies",
    subcategory: "Romance & Comedy",
    channelNumber: 22,
    video: "https://archive.org/download/his_girl_friday/his_girl_friday.mp4",
    description: "",
    duration: 91,
    releaseYear: 1940,
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/His_Girl_Friday_%281940_poster%29_crop.jpg/1200px-His_Girl_Friday_%281940_poster%29_crop.jpg",
  },
  {
    name: "Tammy And The Millionaire",
    category: "Movies",
    subcategory: "Romance & Comedy",
    channelNumber: 23,
    video: "https://archive.org/download/tammy-and-the-millionaire-1967-may-dramady-romance/Tammy%20and%20the%20Millionaire%20%281967%20May%2C%20Dramady%2C%20Romance%29.mp4",
    description: "",
    duration: 90,
    releaseYear: 1967,
    poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSyU_xgZ_aWG4V5ONZPzDiKkz1oYOdo3vqvm1mOXBWmvtxHmV06l2WB0MO2O6y2QmBpP3d2",
  },
  {
    name: "That Hamilton Woman",
    category: "Movies",
    subcategory: "Drama & Romance",
    channelNumber: 12,
    video: "https://archive.org/download/The_Hamilton_Woman/That_Hamilton_Woman_1941.mp4",
    description: "",
    duration: 119,
    releaseYear: 1941,
    poster: "https://image.tmdb.org/t/p/original/zDXsdF9Eqk9hs9KyxakRYYijKxK.jpg",
  },
  {
    name: "The Best Years of Our Lives",
    category: "Movies",
    subcategory: "Drama & Romance",
    channelNumber: 13,
    video: "https://archive.org/download/tbyool435345435110/tbyool435345435110.mp4",
    description: "",
    duration: 169,
    releaseYear: 1946,
    poster: "https://image.tmdb.org/t/p/original/gd5EoAU4MM57sW3vlWxJ0NMM8cV.jpg",
  },
  { 
    name: "Beneath the Planet of the Apes",
    category: "Movies",
    subcategory: "Fantasy & Sci-Fi",
    channelNumber: 14,
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
    channelNumber: 15,
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
    channelNumber: 16,
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
    channelNumber: 17,
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
    channelNumber: 18,
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
    channelNumber: 19,
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
    channelNumber: 20,
    video: "https://archive.org/download/the-time-machine-1978-time-travel-sci-fi/The%20Time%20Machine%20%281978%20Time%20Travel%20SciFi%29.mp4",
    description: "A thrilling adaptation of H.G. Wells' classic time-travel adventure.",
    duration: 99,
    releaseYear: 1978,
    poster: "https://m.media-amazon.com/images/M/MV5BNTYwNDQ0NjYtNTgwMC00MTI4LWI1YWItMmQ4ODIwNDQ3ZWNmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "The Thing",
    category: "Movies",
    subcategory: "Horror & Thriller",
    channelNumber: 21,
    video: "https://archive.org/download/the-thing-1982-vhs/The%20Thing%201982%20VHS%20.mp4",
    description: "A tense sci-fi horror about an alien shape-shifter.",
    duration: 109,
    releaseYear: 1982,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/5519/lnMC0cOyI16BFfZVaIMFRtEx9Cb8eab4wMvqgYNW.webp",
  },
  // Add more movies here...

  // ========================================
  // Cartoons
  // ========================================
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
    subcategory: "Anime Romance",
    channelNumber: 211,
    episodes: [
      {
        name: "Candy Candy 001",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20001.%20Una%20ni%C3%B1a%20h%C3%A1bil%20que%20no%20renuncia.mp4",
      },
      {
        name: "Candy Candy 002",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20002%20.%20%C2%A1Viaje%21%20Aventuras%20juntas.mp4",
      },
      {
        name: "Candy Candy 003",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20003%20.%20El%20carruaje%20que%20transporta%20un%20adi%C3%B3s.mp4",
      },
      {
        name: "Candy Candy 004",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20004%20.%20%C2%A1Est%C3%A1s%20preciosa%20cuando%20sonr%C3%ADes%21.mp4",
      },
      {
        name: "Candy Candy 005",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20005%20.%20Desde%20hoy%20soy%20una%20princesa.mp4",
      },
      {
        name: "Candy Candy 006",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20006%20.%20La%20persona%20que%20encontr%C3%A9%20en%20la%20verja%20de%20las%20rosas.mp4",
      },
      {
        name: "Candy Candy 007",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20007%20.%20%C2%BFEstoy%20elegante.mp4",
      },
      {
        name: "Candy Candy 008",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20008%20.%20Invitaci%C3%B3n%20a%20la%20felicidad.mp4",
      },
      {
        name: "Candy Candy 009",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20009%20.%20El%20baile%20en%20el%20que%20encontr%C3%A9%20a%20aquella%20persona.mp4",
      },
      {
        name: "Candy Candy 010",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20010%20.%20Una%20dama%20en%20el%20establo.mp4",
      },
      {
        name: "Candy Candy 011",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20011%20.%20Una%20peque%C3%B1a%20cinta%20amarra%20los%20corazones.mp4",
      },
      {
        name: "Candy Candy 012",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20012%20.%20Cumplea%C3%B1os%20con%20olor%20a%20rosas.mp4",
      },
      {
        name: "Candy Candy 013",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20013%20.%20Los%20tres%20solitarios.mp4",
      },
      {
        name: "Candy Candy 014",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20014%20.%20El%20gran%20%C3%A1rbol%20lleno%20de%20brisa%20primaveral.mp4",
      },
      {
        name: "Candy Candy 015",
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
    subcategory: "Anime Acción",
    channelNumber: 212,
    episodes: [
      {
        name: "Dragon Ball Z 001",
        duration: 24,
        description: "Saga Saiyajin",
        video: "https://archive.org/download/episodio-1_202403/s%20%281%29.mp4",
      },
      {
        name: "Dragon Ball Z 002",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%282%29.mp4",
      },
      {
        name: "Dragon Ball Z 003",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%283%29.mp4",
      },
      {
        name: "Dragon Ball Z 004",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%284%29.mp4",
      },
      {
        name: "Dragon Ball Z 005",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%285%29%20%281%29.mp4",
      },
      {
        name: "Dragon Ball Z 006",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%286%29.mp4",
      },
      {
        name: "Dragon Ball Z 007",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%287%29.mp4",
      },
      {
        name: "Dragon Ball Z 008",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%288%29.mp4",
      },
      {
        name: "Dragon Ball Z 009",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%289%29.mp4",
      },
      {
        name: "Dragon Ball Z 010",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2810%29.mp4",
      },
      {
        name: "Dragon Ball Z 011",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2811%29.mp4",
      },
      {
        name: "Dragon Ball Z 012",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2812%29.mp4",
      },
      {
        name: "Dragon Ball Z 013",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2813%29.mp4",
      },
      {
        name: "Dragon Ball Z 014",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2814%29.mp4",
      },
      {
        name: "Dragon Ball Z 015",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2815%29.mp4",
      },
      {
        name: "Dragon Ball Z 016",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2816%29.mp4",
      },
      {
        name: "Dragon Ball Z 017",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2817%29.mp4",
      },
      {
        name: "Dragon Ball Z 018",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2818%29.mp4",
      },
      {
        name: "Dragon Ball Z 019",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2819%29.mp4",
      },
      {
        name: "Dragon Ball Z 020",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2820%29.mp4",
      },
      {
        name: "Dragon Ball Z 021",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2821%29.mp4",
      },
      {
        name: "Dragon Ball Z 022",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2822%29.mp4",
      },
      {
        name: "Dragon Ball Z 023",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2823%29.mp4",
      },
      {
        name: "Dragon Ball Z 024",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2824%29.mp4",
      },
      {
        name: "Dragon Ball Z 025",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2825%29.mp4",
      },
      {
        name: "Dragon Ball Z 026",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2826%29.mp4",
      },
      {
        name: "Dragon Ball Z 027",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2827%29.mp4",
      },
      {
        name: "Dragon Ball Z 028",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2828%29.mp4",
      },
      {
        name: "Dragon Ball Z 029",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2829%29.mp4",
      },
      {
        name: "Dragon Ball Z 030",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2830%29.mp4",
      },
      {
        name: "Dragon Ball Z 031",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2831%29.mp4",
      },
      {
        name: "Dragon Ball Z 032",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2832%29.mp4",
      },
      {
        name: "Dragon Ball Z 033",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2833%29.mp4",
      },
      {
        name: "Dragon Ball Z 034",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2834%29.mp4",
      },
      {
        name: "Dragon Ball Z 035",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2835%29.mp4",
      },
      {
        name: "Dragon Ball Z 036",
        duration: 24,
        description: "Saga Freezer",
        video: "https://archive.org/download/episodio-1_202403/s%20%2836%29.mp4",
      },
      {
        name: "Dragon Ball Z 037",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2837%29.mp4",
      },
      {
        name: "Dragon Ball Z 038",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2838%29.mp4",
      },
      {
        name: "Dragon Ball Z 039",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2839%29.mp4",
      },
      {
        name: "Dragon Ball Z 040",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2840%29.mp4",
      },
      {
        name: "Dragon Ball Z 041",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2841%29.mp4",
      },
      {
        name: "Dragon Ball Z 042",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2842%29.mp4",
      },
      {
        name: "Dragon Ball Z 043",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2843%29.mp4",
      },
      {
        name: "Dragon Ball Z 044",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2844%29.mp4",
      },
      {
        name: "Dragon Ball Z 045",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2845%29.mp4",
      },
      {
        name: "Dragon Ball Z 046",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2846%29.mp4",
      },
      {
        name: "Dragon Ball Z 047",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2847%29.mp4",
      },
      {
        name: "Dragon Ball Z 048",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2848%29.mp4",
      },
      {
        name: "Dragon Ball Z 049",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2849%29.mp4",
      },
      {
        name: "Dragon Ball Z 050",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2850%29.mp4",
      },
      {
        name: "Dragon Ball Z 051",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2851%29.mp4",
      },
      {
        name: "Dragon Ball Z 052",
        duration: 24,
        video: "https://archive.org/download/episodio-1_202403/s%20%2852%29.mp4",
      },
      {
        name: "Dragon Ball Z 053",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B053%5D%20La%20horrible%20transformaci%C3%B3n%20de%20Zaabon.%20-%20Dragon%20Ball%20Su.mp4",
      },
      {
        name: "Dragon Ball Z 054",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B054%5D%20Hay%20que%20proteger%20al%20planeta%20de%20la%20esperanza%21%20Krilin%20in.mp4",
      },
      {
        name: "Dragon Ball Z 055",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B055%5D%20Vegeta%20revive%20milagrosamente.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 056",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B056%5D%20El%20complot%20de%20Freezer%20se%20ha%20desvanecido.%20-%20Dragon%20Ball.mp4",
      },
      {
        name: "Dragon Ball Z 057",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B057%5D%20Goku%20entrena%20bajo%20la%20gravedad%20de%20cien.%20-%20Dragon%20Ball%20S.mp4",
      },
      {
        name: "Dragon Ball Z 058",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B058%5D%20El%20grupo%20secreto%20de%20Freezer.%20Las%20terribles%20fuerzas%20esp.mp4",
      },
      {
        name: "Dragon Ball Z 059",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B059%5D%20%C2%A1Ten%20cuidado%20Bulma%21%20La%20esfera%20de%204%20estrellas%20podr%C3%ADa%20ca.mp4",
      },
      {
        name: "Dragon Ball Z 060",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B060%5D%20La%20inquebrantable%20voluntad%20de%20Goku.%20-%20Dragon%20Ball%20Sull.mp4",
      },
      {
        name: "Dragon Ball Z 061",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B061%5D%20La%20batalla%20se%20acerca%2C%20han%20llegado%20las%20fuerzas%20especial.mp4",
      },
      {
        name: "Dragon Ball Z 062",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B062%5D%20%C2%A1Goku%20se%20acerca%21%20Los%20temibles%20hombres%20de%20Freezer.%20-%20Dr.mp4",
      },
      {
        name: "Dragon Ball Z 063",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B063%5D%20El%20se%C3%B1or%20Gurdo%20se%20enfada%20y%20utiliza%20un%20truco%20de%20magia.%20.mp4",
      },
      {
        name: "Dragon Ball Z 064",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B064%5D%20El%20terrible%20Rikum.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 065",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B065%5D%20%C2%A1No%20te%20mueras%20Gohan%21%20Goku%20finalmente%20llega%20al%20campo%20de.mp4",
      },
      {
        name: "Dragon Ball Z 066",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B066%5D%20El%20legendario%20Super%20Saiyajin%20Goku.%20-%20Dragon%20Ball%20Sullc.mp4",
      },
      {
        name: "Dragon Ball Z 067",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B067%5D%20%C2%A1Yiz%20y%20Boter%20atacan%20a%20Goku%21%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 068",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B068%5D%20La%20aparici%C3%B3n%20del%20capit%C3%A1n%20Gi-nyu.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 069",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B069%5D%20%C2%A1Ya%20viste%20el%20verdadero%20poder%20de%20Goku%21%20-%20Dragon%20Ball%20Su.mp4",
      },
      {
        name: "Dragon Ball Z 070",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B070%5D%20Freezer%20llega%20con%20el%20patriarca.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 071",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B071%5D%20%C2%BFGoku%20es%20Gin-yu%20y%20Gin-yu%20es%20Goku%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 072",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B072%5D%20%C2%A1Sal%20de%20ah%C3%AD%20Super%20Shen%20Long%2C%20y%20cumple%20mi%20deseo%21%20-%20Drag.mp4",
      },
      {
        name: "Dragon Ball Z 073",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B073%5D%20%C2%A1Yo%20no%20soy%20%C3%A9l%21%20Gohan%2C%20ataca%20a%20tu%20padre%20sin%20temor.%20-%20Dr.mp4",
      },
      {
        name: "Dragon Ball Z 074",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B074%5D%20Gi-nyu%20se%20convierte%20en%20rana.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 075",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B075%5D%20Di%20la%20clave%20secreta%20de%20las%20Esferas%20de%20Drag%C3%B3n.%20-%20Dragon.mp4",
      },
      {
        name: "Dragon Ball Z 076",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B076%5D%20Pikoro%20y%20Kami-Sama%20reviven%20con%20la%20ayuda%20del%20Super%20Shen.mp4",
      },
      {
        name: "Dragon Ball Z 077",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B077%5D%20%C2%BFLa%20aparici%C3%B3n%20de%20un%20nuevo%20guerrero%20Pikoro%20y%20Neil%20se%20fu.mp4",
      },
      {
        name: "Dragon Ball Z 078",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B078%5D%20%C2%A1Una%20trasformaci%C3%B3n%20de%20pesadilla%21%20Freezer%20tiene%20un%20pode.mp4",
      },
      {
        name: "Dragon Ball Z 079",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B079%5D%20Gohan%20es%20atacado%20por%20el%20malvado%20Freezer.%20-%20Dragon%20Ball.mp4",
      },
      {
        name: "Dragon Ball Z 080",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B080%5D%20La%20llegada%20de%20Pikoro.%20-%20Dragon%20Ball%20Sullca.mp4",
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
    channelNumber: 201,
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
  {
    name: "Los caballeros del zodíaco",
    category: "Cartoons",
    subcategory: "Anime Acción",
    channelNumber: 213,
    episodes: [
      {
        name: "Caballeros del zodíaco 001",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-01/Caballeros%20Del%20Zodiaco%20Ep%20001%20-%20Las%20leyendas%20de%20una%20nueva%20era%20-%20Warner%20Channel%20-%2016-10-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 002",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-01/Caballeros%20Del%20Zodiaco%20Ep%20002%20-%20Cuando%20Seiya%20viste%20la%20armadura%20de%20Pegaso%20-%20Warner%20Channel%20-%2017-10-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 003",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-01/Caballeros%20Del%20Zodiaco%20Ep%20003%20-%20El%20Guerrero%20De%20Los%20Hielos%20-%20Warner%20Channel%20-%2018-10-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 004",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-01/Caballeros%20Del%20Zodiaco%20Ep%20004%20-%20El%20Caballero%20Drag%C3%B3n%20-%20Warner%20Channel%20-%2019-10-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 005",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-02/Caballeros%20Del%20Zodiaco%20Ep%20005%20-%20La%20Resurrecci%C3%B3n%20Del%20Drag%C3%B3n%20-%20Warner%20Channel%20-%2023-10-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 006",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-02/Caballeros%20Del%20Zodiaco%20Ep%20006%20-%20El%20Guerrero%20Que%20Viene%20Del%20Infierno%20-%20Warner%20Channel%20-%2024-10-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 007",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-02/Caballeros%20Del%20Zodiaco%20Ep%20007%20-%20La%20Venganza%20Del%20Caballero%20F%C3%A9nix%20-%20Warner%20Channel%20-%2025-10-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 008",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-02/Caballeros%20Del%20Zodiaco%20Ep%20008%20-%20En%20Busca%20De%20La%20Armadura%20De%20Oro%20-%20Warner%20Channel%20-%2026-10-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 009",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-03/Caballeros%20Del%20Zodiaco%20Ep%20009%20-%20Los%20Caballeros%20Del%20Apocalipsis%20-%20Warner%20Channel%20-%2030-10-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 010",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-03/Caballeros%20Del%20Zodiaco%20Ep%20010%20-%20La%20Tumba%20De%20La%20Armadura%20Sagrada%20-%20Warner%20Channel%20-%2031-10-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 011",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-03/Caballeros%20Del%20Zodiaco%20Ep%20011%20-%20Seiya%20Se%20Enfrenta%20Con%20Su%20Doble%20-%20Warner%20Channel%20-%2001-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 012",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-03/Caballeros%20Del%20Zodiaco%20Ep%20012%20-%20Las%20Cadenas%20De%20La%20Amistad%20-%20Warner%20Channel%20-%2002-10-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 013",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-04/Caballeros%20Del%20Zodiaco%20Ep%20013%20-%20Haza%C3%B1as%20Explosivas%20-%20Warner%20Channel%20-%2006-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 014",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-04/Caballeros%20Del%20Zodiaco%20Ep%20014%20-%20La%20Derrota%20Del%20Fantasma%20Del%20Diablo%20-%20Warner%20Channel%20-%2007-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 015",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-04/Caballeros%20Del%20Zodiaco%20Ep%20015%20-%20El%20Secreto%20Del%20F%C3%A9nix%20-%20Warner%20Channel%20-%2008-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 016",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-04/Caballeros%20Del%20Zodiaco%20Ep%20016%20-%20El%20Ataque%20A%20La%20Fundaci%C3%B3n%20-%20Warner%20Channel%20-%2009-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 017",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-05/Caballeros%20Del%20Zodiaco%20Ep%20017%20-%20El%20Rescate%20De%20Saori%20-%20Warner%20Channel%20-%2013-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 018",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-05/Caballeros%20Del%20Zodiaco%20Ep%20018%20-%20Los%20Caballeros%20De%20Los%20Abismos%20-%20Warner%20Channel%20-%2014-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 019",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-05/Caballeros%20Del%20Zodiaco%20Ep%20019%20-%20La%20Isla%20Del%20Espectro%20-%20Warner%20Channel%20-%2015-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 020",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-05/Caballeros%20Del%20Zodiaco%20Ep%20020%20-%20La%20Traici%C3%B3n%20Del%20Se%C3%B1or%20De%20Los%20Hielos%20-%20Warner%20Channel%20-%2016-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 021",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-06/Caballeros%20Del%20Zodiaco%20Ep%20021%20-%20La%20Pir%C3%A1mide%20De%20Hielo%20-%20Warner%20Channel%20-%2020-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 022",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-06/Caballeros%20Del%20Zodiaco%20Ep%20022%20-%20El%20Caballero%20De%20La%20Llama%20-%20Warner%20Channel%20-%2021-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 023",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-06/Caballeros%20Del%20Zodiaco%20Ep%20023%20-%20El%20%C3%81ngel%20De%20La%20Muerte%20-%20Warner%20Channel%20-%2022-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 024",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-06/Caballeros%20Del%20Zodiaco%20Ep%20024%20-%20El%20Vuelo%20De%20Pegaso%20-%20Warner%20Channel%20-%2023-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 025",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-07/Caballeros%20Del%20Zodiaco%20Ep%20025%20-%20La%20Revelaci%C3%B3n%20-%20Warner%20Channel%20-%2027-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 026",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-07/Caballeros%20Del%20Zodiaco%20Ep%20026%20-%20Amigos%20O%20Enemigos%20-%20Warner%20Channel%20-%2028-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 027",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-07/Caballeros%20Del%20Zodiaco%20Ep%20027%20-%20Seiya%20Se%20Convierte%20En%20Piedra%20-%20Warner%20Channel%20-%2029-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 028",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-07/Caballeros%20Del%20Zodiaco%20Ep%20028%20-%20El%20Sacrificio%20Del%20Drag%C3%B3n%20-%20Warner%20Channel%20-%2030-11-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 029",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-08/Caballeros%20Del%20Zodiaco%20Ep%20029%20-%20El%20Secuestro%20De%20Saori%20-%20Warner%20Channel%20-%2004-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 030",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-08/Caballeros%20Del%20Zodiaco%20Ep%20030%20-%20El%20Ardiente%20Cosmos%20Del%20Amor%20-%20Warner%20Channel%20-%2005-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 031",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-08/Caballeros%20Del%20Zodiaco%20Ep%20031%20-%20La%20L%C3%ADnea%20Entre%20La%20Vida%20Y%20La%20Muerte%20-%20Warner%20Channel%20-%2007-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 032",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-09/Caballeros%20Del%20Zodiaco%20Ep%20032%20-%20La%20Isla%20De%20La%20Reina%20Muerte%20-%20Warner%20Channel%20-%2011-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 033",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-09/Caballeros%20Del%20Zodiaco%20Ep%20033%20-%20El%20Llanto%20Del%20Drag%C3%B3n%20-%20Warner%20Channel%20-%2012-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 034",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-09/Caballeros%20Del%20Zodiaco%20Ep%20034%20-%20Adi%C3%B3s%20Camarada%20-%20Warner%20Channel%20-%2014-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 035",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-10/Caballeros%20Del%20Zodiaco%20Ep%20035%20-%20La%20Esperanza%20De%20Seiya%20-%20Warner%20Channel%20-%2018-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 036",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-10/Caballeros%20Del%20Zodiaco%20Ep%20036%20-%20Doce%20Juegos%20De%20Ropa%20Dorada%20-%20Warner%20Channel%20-%2019-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 037",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-09/Caballeros%20Del%20Zodiaco%20Ep%20037%20-%20Ladecisi%C3%B3n%20Del%20Casco%20-%20Warner%20Channel%20-%2013-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 038",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-11/Caballeros%20Del%20Zodiaco%20Ep%20038%20-%20Ataquen%20Santos%20Dorados%20-%20Warner%20Channel%20-%2025-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 039",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-11/Caballeros%20Del%20Zodiaco%20Ep%20039%20-%20Shiryu%20Contra%20M%C3%A1scara%20Mortal%20-%20Warner%20Channel%20-%2026-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 040",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-11/Caballeros%20Del%20Zodiaco%20Ep%20040%20-%20La%20Partida%20-%20Warner%20Channel%20-%2028-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 041",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-12/Caballeros%20Del%20Zodiaco%20Ep%20041%20-%20La%20Crisis%20De%20Athena%20-%20Warner%20Channel%20-%2001-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 042",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-10/Caballeros%20Del%20Zodiaco%20Ep%20042%20-%20Cosmo%20Final%20-%20Warner%20Channel%20-%2020-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 043",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-12/Caballeros%20Del%20Zodiaco%20Ep%20043%20-%20Batalla%20En%20La%20Casa%20De%20Tauro%20-%20Warner%20Channel%20-%2003-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 044",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-12/Caballeros%20Del%20Zodiaco%20Ep%20044%20-%20G%C3%A9minis%2C%20El%20Laberinto%20De%20Luz%20Y%20Sombras%20-%20Warner%20Channel%20-%2004-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 045",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-13/Caballeros%20Del%20Zodiaco%20Ep%20045%20-%20Enviados%20A%20Otra%20Dimensi%C3%B3n%20-%20Warner%20Channel%20-%2008-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 046",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-11/Caballeros%20Del%20Zodiaco%20Ep%20046%20-%20La%20Cadena%20De%20La%20Nebulosa%20De%20Andr%C3%B3meda%20Ataca%20Esta%20Vez%20-%20Warner%20Channel%20-%2027-12-2023.mp4",
      },
      {
        name: "Caballeros del zodíaco 047",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-13/Caballeros%20Del%20Zodiaco%20Ep%20047%20-%20El%20Valeroso%20Hyoga%20Ahora%20Dormir%C3%A1%20Apaciblemente%20-%20Warner%20Channel%20-%2010-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 048",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-13/Caballeros%20Del%20Zodiaco%20Ep%20048%20-%20Shiryu%20Vuelve%20Del%20Pa%C3%ADs%20De%20Los%20Muertos%20-%20Warner%20Channel%20-%2011-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 049",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-14/Caballeros%20Del%20Zodiaco%20Ep%20049%20-%20Shunrei%20Reza%20Por%20Shiryu%20-%20Warner%20Channel%20-%2015-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 050",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-14/Caballeros%20Del%20Zodiaco%20Ep%20050%20-%20Arriba%20Drag%C3%B3n%2C%20Tu%20Cosmos%20Puede%20Derrotar%20A%20Los%20Caballeros%20De%20Oro%20-%20Warner%20Channel%20-%2016-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 051",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-14/Caballeros%20Del%20Zodiaco%20Ep%20051%20-%20Por%20Qu%C3%A9%20El%20Le%C3%B3n%20Dorado%20Trata%20De%20Matar%20A%20Seiya%20-%20Warner%20Channel%20-%2017-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 052",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-14/Caballeros%20Del%20Zodiaco%20Ep%20052%20-%20El%20Legendario%20Golpe%20Sat%C3%A1nico%20De%20Arles%20-%20Warner%20Channel%20-%2018-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 053",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-15/Caballeros%20Del%20Zodiaco%20Ep%20053%20-%20Cassios%20Muere%20Por%20Amor%20-%20Warner%20Channel%20-%2022-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 054",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-15/Caballeros%20Del%20Zodiaco%20Ep%20054%20-%20Ikki%2C%20El%20Ave%20F%C3%A9nix%20Sin%20Alas%20-%20Warner%20Channel%20-%2023-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 055",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-15/Caballeros%20Del%20Zodiaco%20Ep%20055%20-%20El%20Grito%20De%20Athena%20-%20Warner%20Channel%20-%2024-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 056",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-15/Caballeros%20Del%20Zodiaco%20Ep%20056%20-%20Shaka%2C%20El%20Caballero%20M%C3%A1s%20Cercano%20Al%20Gran%20Maestro%20-%20Warner%20Channel%20-%2025-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 057",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-16/Caballeros%20Del%20Zodiaco%20Ep%20057%20-%20Shaka%20Abre%20Sus%20Ojos%20-%20Warner%20Channel%20-%2029-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 058",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-16/Caballeros%20Del%20Zodiaco%20Ep%20058%20-%20Ikki%20Muere%20Valientemente%20Por%20Amistad%20-%20Warner%20Channel%20-%2030-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 059",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-16/Caballeros%20Del%20Zodiaco%20Ep%20059%20-%20Hyoga%20Vuelve%20A%20La%20Vida%20-%20Warner%20Channel%20-%2031-01-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 060",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-16/Caballeros%20Del%20Zodiaco%20Ep%20060%20-%20El%20Renacimiento%20De%20Hyoga%20-%20Warner%20Channel%20-%2001-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 061",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-17/Caballeros%20Del%20Zodiaco%20Ep%20061%20-%20R%C3%ADndete%20O%20Morir%C3%A1s%20-%20Warner%20Channel%20-%2005-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 062",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-17/Caballeros%20Del%20Zodiaco%20Ep%20062%20-%20Hyoga%2C%20El%20Valiente%20Guerrero%20-%20Warner%20Channel%20-%2006-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 063",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-17/Caballeros%20Del%20Zodiaco%20Ep%20063%20-%20Todas%20Las%20Armaduras%20Doradas%20Se%20Reunieron%20En%20El%20Santuario%20-%20Warner%20Channel%20-%2007-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 064",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-17/Caballeros%20Del%20Zodiaco%20Ep%20064%20-%20Amigos%2C%20Encomendar%C3%A9%20Atenea%20A%20Ustedes%20-%20Warner%20Channel%20-%2008-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 065",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-18/Caballeros%20Del%20Zodiaco%20Ep%20065%20-%20Ruge%20La%20Espada%20Sagrada%20-%20Warner%20Channel%20-%2012-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 066",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-18/Caballeros%20Del%20Zodiaco%20Ep%20066%20-%20Shiryu%20Se%20Convierte%20En%20Una%20Estrella%20Fugaz%20-%20Warner%20Channel%20-%2013-02-2024%20-%20Emisi%C3%B3n%20Nocturna.mp4",
      },
      {
        name: "Caballeros del zodíaco 067",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-18/Caballeros%20Del%20Zodiaco%20Ep%20067%20-%20Adi%C3%B3s%20Mi%20Maestro%20Y%20Mis%20Amigos%20-%20Warner%20Channel%20-%2013-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 068",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-18/Caballeros%20Del%20Zodiaco%20Ep%20068%20-%20Un%20Hermoso%20Guerrero%20Afrodita%20-%20Warner%20Channel%20-%2014-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 069",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-18/Caballeros%20Del%20Zodiaco%20Ep%20069%20-%20Dulce%20Aroma%20De%20Muerte%20-%20Warner%20Channel%20-%2015-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 070",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-19/Caballeros%20Del%20Zodiaco%20Ep%20070%20-%20Duerme%20En%20Paz%20Shun%20-%20Warner%20Channel%20-%2019-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 071",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-19/Caballeros%20Del%20Zodiaco%20Ep%20071%20-%20El%20Reloj%20De%20Fuego%20Se%20Extingue%20-%20Warner%20Channel%20-%2020-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 072",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-19/Caballeros%20Del%20Zodiaco%20Ep%20072%20-%20No%20Pierdas%20A%20Tus%20Amigos%20Seiya%20-%20Warner%20Channel%20-%2021-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 073",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-19/Caballeros%20Del%20Zodiaco%20Ep%20073%20-%20Amigos%2C%20Re%C3%BAnanse%20Con%20Athena%20-%20Warner%20Channel%20-%2022-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 074",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-20/Caballeros%20Del%20Zodiaco%20Ep%20074%20-%20Enemigos%20Del%20Polo%20Norte%20-%20Warner%20Channel%20-%2029-02-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 075",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-20/Caballeros%20Del%20Zodiaco%20Ep%20075%20-%20%C2%A1Hilda%21%20La%20Diosa%20Encantada%20Por%20El%20Diablo%20-%20Warner%20Channel%20-%2001-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 076",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-21/Caballeros%20Del%20Zodiaco%20Ep%20076%20-%20El%20Cosmos%20De%20Thor%20Est%C3%A1%20Lleno%20De%20Odio%20-%20Warner%20Channel%20-%2004-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 077",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-21/Caballeros%20Del%20Zodiaco%20Ep%20077%20-%20Thor%20Muere%20Por%20Hilda%20-%20Warner%20Channel%20-%2005-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 078",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-21/Caballeros%20Del%20Zodiaco%20Ep%20078%20-%20Phenril%2C%20El%20Lobo%20Del%20Norte%20Muestra%20Sus%20Colmillos%20-%20Warner%20Channel%20-%2006-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 079",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-21/Caballeros%20Del%20Zodiaco%20Ep%20079%20-%20Pobres%20Lobos%20Del%20Norte%20-%20Warner%20Channel%20-%2007-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 080",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-22/Caballeros%20Del%20Zodiaco%20Ep%20080%20-%20Lamentos%20En%20El%20Hielo%20-%20Warner%20Channel%20-%2011-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 081",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-22/Caballeros%20Del%20Zodiaco%20Ep%20081%20-%20La%20Batalla%20Mortal%20De%20Fler%20-%20Warner%20Channel%20-%2012-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 082",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-22/Caballeros%20Del%20Zodiaco%20Ep%20082%20-%20Cisne%2C%20El%C3%A9vate%20Del%20Infierno%20Hirviente%20-%20Warner%20Channel%20-%2013-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 083",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-22/Caballeros%20Del%20Zodiaco%20Ep%20083%20-%20%C2%A1Arpa%20Misteriosa%21%20Preludio%20Intenta%20Enviar%20A%20Shun%20A%20La%20Muerte%20-%20Warner%20Channel%20-%2014-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 084",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-23/Caballeros%20Del%20Zodiaco%20Ep%20084%20-%20%C2%A1Condenado%20A%20Muerte%21%20Requiem%20De%20Cuerdas%20-%20Warner%20Channel%20-%2018-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 085",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-23/Caballeros%20Del%20Zodiaco%20Ep%20085%20-%20Un%20Guerrero%20Triste%20Y%20Valeroso%20-%20Warner%20Channel%20-%2019-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 086",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-23/Caballeros%20Del%20Zodiaco%20Ep%20086%20-%20F%C3%A9nix%20Y%20Sus%20Alas%20Ardientes%20-%20Warner%20Channel%20-%2020-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 087",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-23/Caballeros%20Del%20Zodiaco%20Ep%20087%20-%20La%20Coraza%20Amatista%20-%20Warner%20Channel%20-%2021-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 088",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-24/Caballeros%20Del%20Zodiaco%20Ep%20088%20-%20%C2%A1La%20Espada%20De%20Fuego%21%20La%20Ambici%C3%B3n%20Maligna%20-%20Warner%20Channel%20-%2025-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 089",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-24/Caballeros%20Del%20Zodiaco%20Ep%20089%20-%20%C2%A1El%20Sacrificio%20Al%20Mal%21%20El%20Bosque%20De%20Los%20Esp%C3%ADritus%20-%20Warner%20Channel%20-%2026-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 090",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-24/Caballeros%20Del%20Zodiaco%20Ep%20090%20-%20%C2%A1No%20Veas%20Hacia%20Atr%C3%A1s%20Seiya%21%20La%20Cosmoenerg%C3%ADa%20Del%20Drag%C3%B3n%20Naciente%20-%20Warner%20Channel%20-%2027-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 091",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-24/Caballeros%20Del%20Zodiaco%20Ep%20091%20-%20%C2%A1Quema%20Tu%20Cosmoenerg%C3%ADa%20Shun%21%20Secreto%20Oculto%20Del%20Colmillo%20Negro%20-%20Warner%20Channel%20-%2028-03-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 092",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-25/Caballeros%20Del%20Zodiaco%20Ep%20092%20-%20Shun%2C%20Gira%20Tu%20%C3%9Altimo%20Vapor%20Nebuloso%20-%20Warner%20Channel%20-%2001-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 093",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-25/Caballeros%20Del%20Zodiaco%20Ep%20093%20-%20%C2%A1Bud%21%20Los%20Gemelos%20Del%20Destino%20-%20Warner%20Channel%20-%2002-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 094",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-25/Caballeros%20Del%20Zodiaco%20Ep%20094%20-%20Lazos%20Entre%20Hermanos%20-%20Warner%20Channel%20-%2003-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 095",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-25/Caballeros%20Del%20Zodiaco%20Ep%20095%20-%20El%20H%C3%A9roe%20De%20La%20Leyenda%20Ha%20Revivido%20-%20Warner%20Channel%20-%2004-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 096",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-26/Caballeros%20Del%20Zodiaco%20Ep%20096%20-%20Drag%C3%B3n%20Contra%20Drag%C3%B3n%2C%20Una%20Oportunidad%20En%20Cienmil%20-%20Warner%20Channel%20-%2008-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 097",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-26/Caballeros%20Del%20Zodiaco%20Ep%20097%20-%20Un%20Brujo%20Del%20Mal%2C%20La%20Canci%C3%B3n%20De%20La%20Muerte%20-%20Warner%20Channel%20-%2009-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 098",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-26/Caballeros%20Del%20Zodiaco%20Ep%20098%20-%20La%20Milagrosa%20Aparici%C3%B3n%20De%20La%20Armadura%20De%20Od%C3%ADn%20-%20Warner%20Channel%20-%2010-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 099",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-26/Caballeros%20Del%20Zodiaco%20Ep%20099%20-%20%C2%A1Athena%21%20Mi%20Oraci%C3%B3n%20Eterna%20Por%20Ti%20-%20Warner%20Channel%20-%2011-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 100",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-27/Caballeros%20Del%20Zodiaco%20Ep%20100%20-%20%C2%A1Poseid%C3%B3n%2C%20El%20Emperador%20Del%20Oc%C3%A9ano%21%20Una%20Nueva%20Guerra%20Santa%20-%20Warner%20Channel%20-%2015-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 101",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-27/Caballeros%20Del%20Zodiaco%20Ep%20101%20-%20Destruyan%20Todos%20Los%20Pilares%20De%20Los%20Siete%20Mares%20-%20Warner%20Channel%20-%2016-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 102",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-27/Caballeros%20Del%20Zodiaco%20Ep%20102%20-%20El%20Misterioso%20Brillo%20De%20La%20Armadura%20De%20Bronce%20-%20Warner%20Channel%20-%2017-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 103",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-27/Caballeros%20Del%20Zodiaco%20Ep%20103%20-%20Shun%20Es%20Atacado%20Por%20Las%20Seis%20Bestias%20De%20Escila%20-%20Warner%20Channel%20-%2018-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 104",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-28/Caballeros%20Del%20Zodiaco%20Ep%20104%20-%20Muerte%20De%20Las%20Seis%20Bestias%20Por%20La%20Poderosa%20Cadena%20Dorada%20-%20Warner%20Channel%20-%2022-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 105",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-28/Caballeros%20Del%20Zodiaco%20Ep%20105%20-%20Excalibur%20Habita%20En%20El%20Brazo%20De%20Shiryu%20-%20Warner%20Channel%20-%2023-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 106",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-28/Caballeros%20Del%20Zodiaco%20Ep%20106%20-%20Seiya%20Se%20Encuentra%20A%20Su%20Ser%20M%C3%A1s%20Querido%20-%20Warner%20Channel%20-%2024-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 107",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-28/Caballeros%20Del%20Zodiaco%20Ep%20107%20-%20Lymnades%20El%20Despiadado%20-%20Warner%20Channel%20-%2025-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 108",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-29/Caballeros%20Del%20Zodiaco%20Ep%20108%20-%20Isaac%2C%20El%20Hombre%20Que%20Olvid%C3%B3%20Los%20Sentimientos%20-%20Warner%20Channel%20-%2029-04-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 109",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-29/Caballeros%20Del%20Zodiaco%20Ep%20109%20-%20Cuidado%20Ikki%2C%20Otra%20Triste%20Batalla%20Mortal%20-%20Warner%20Channel%20-%2030-04-2024%20%28Incompleto%29.mp4",
      },
      {
        name: "Caballeros del zodíaco 111",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-29/Caballeros%20Del%20Zodiaco%20Ep%20111%20-%20Amigos%2C%20Cuando%20Morimos%20Lo%20Hacemos%20Juntos%20-%20Warner%20Channel%20-%2002-05-2024%20%28Transmisi%C3%B3n%20Nocturna%29.mp4",
      },
      {
        name: "Caballeros del zodíaco 112",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-30/Caballeros%20Del%20Zodiaco%20Ep%20112%20-%20El%20Misterio%20Del%20Renacimiento%20De%20Poseid%C3%B3n%20-%20Warner%20Channel%20-%2006-05-2024%20%28Emisi%C3%B3n%20Nocturna%29.mp4",
      },
      {
        name: "Caballeros del zodíaco 113",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-29/Caballeros%20Del%20Zodiaco%20Ep%20113%20-%20%C2%A1Flecha%20Dorada%2C%20Ataca%20A%20Poseid%C3%B3n%21%20-%20Warner%20Channel%20-%2002-05-2024.mp4",
      },
      {
        name: "Caballeros del zodíaco 114",
        duration: 24,
        video: "https://archive.org/download/Caballeros-Del-Zodiaco-Warner-Channel-Parte-30/Caballeros%20Del%20Zodiaco%20Ep%20114%20-%20Viva%20La%20Amistad%2C%20Larga%20Vida%2C%20Leyenda%20De%20Los%20Caballeros%20-%20Warner%20Channel%20-%2006-05-2024.mp4",
      },
      // Add more episodes here...
    ],
    releaseYear: 1986,
    poster: "https://images.justwatch.com/poster/305117882/s718/saint-seiya-knights-of-the-zodiac.jpg",
  },
  
  // Add more cartoons here...

  // ========================================
  // TV Shows
  // ========================================
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
