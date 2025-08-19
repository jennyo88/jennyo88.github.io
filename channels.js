const channels = [
  // ========================================
  // CHANNEL NUMBERING GUIDE
  // ========================================
  // ========================================
  //       0s - Movies                   (22)
  // ========================================
  //        Action & Adventure     (1-5)  (5)
  //        Comedy & Family       (6-11)  (6)
  //        Drama & Romance      (12-14)  (2)
  //        Fantasy & Sci-Fi     (15-21)  (7)
  //        Horror & Thriller    (22-22)  (1)
  //        Romance & Comedy     (23-24)  (2)
  //        Disney Classics      (25-35)  (10)
  // ========================================
  // ========================================
  // 100-300s - Cartoons                 (11)
  // ========================================
  // 100s - Kids Programming   (101-105)  (5)
  // 200s - Classic Cartoons   (201-202)  (2)
  // 300s - Anime       (301-302)  (2)
  // 310s - Anime Acción       (311-312)  (2)
  // ========================================
  // ========================================
  // 400s - TV Shows           (401-401)  (1)
  // ========================================
  // ========================================
  
  // ========================================
  // 0s - Movies
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
    channelNumber: 23,
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
    channelNumber: 24,
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
    name: "Good Will Hunting",
    category: "Movies",
    subcategory: "Drama & Romance",
    channelNumber: 14,
    video: "https://archive.org/download/Good_Will_Hunting_ABC_WOC_2001-02-19/Good_Will_Hunting_ABC_WOC_2001-02-19.mp4",
    description: "",
    duration: 127,
    releaseYear: 1997,
    poster: "https://a.ltrbxd.com/resized/film-poster/5/1/6/2/1/51621-good-will-hunting-0-1000-0-1500-crop.jpg",
  },
  { 
    name: "Beneath the Planet of the Apes",
    category: "Movies",
    subcategory: "Fantasy & Sci-Fi",
    channelNumber: 15,
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
    channelNumber: 16,
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
    channelNumber: 17,
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
    channelNumber: 18,
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
    channelNumber: 19,
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
    channelNumber: 20,
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
    channelNumber: 21,
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
    channelNumber: 22,
    video: "https://archive.org/download/the-thing-1982-vhs/The%20Thing%201982%20VHS%20.mp4",
    description: "A tense sci-fi horror about an alien shape-shifter.",
    duration: 109,
    releaseYear: 1982,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/5519/lnMC0cOyI16BFfZVaIMFRtEx9Cb8eab4wMvqgYNW.webp",
  },

  {
    name: "101 Dalmatians",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 25,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/101%20Dalmatians%201996%20UK%20VHS.mp4",
    description: "",
    duration: 103,
    releaseYear: 1996,
    poster: "https://a.ltrbxd.com/resized/film-poster/4/5/0/7/9/45079-101-dalmatians-0-1000-0-1500-crop.jpg?v=20c15a79c3",
  },
  {
    name: "A Bug's Life",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 26,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/A%20Bug%27s%20Life%201999%20UK%20VHS.mp4",
    description: "",
    duration: 95,
    releaseYear: 1999,
    poster: "https://a.ltrbxd.com/resized/film-poster/4/7/1/1/1/47111-a-bug-s-life-0-1000-0-1500-crop.jpg?v=30ec62f056",
  },
  {
    name: "Aladdin",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 27,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/Aladdin%201994%20UK%20VHS.mp4",
    description: "",
    duration: 92,
    releaseYear: 1994,
    poster: "https://a.ltrbxd.com/resized/sm/upload/n3/26/lb/e2/trm94WPjW5ApKulhFvuRm5cT8KQ-0-1000-0-1500-crop.jpg?v=7aa7423779",
  },
  {
    name: "Aladdin and the King of Thieves",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 28,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/Aladdin%20and%20the%20King%20of%20Thieves%201997%20UK%20VHS.mp4",
    description: "",
    duration: 81,
    releaseYear: 1997,
    poster: "https://a.ltrbxd.com/resized/film-poster/4/5/4/7/1/45471-aladdin-and-the-king-of-thieves-0-1000-0-1500-crop.jpg?v=1d31844fca",
  },
  {
    name: "Bambi",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 29,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/Bambi%201994%20UK%20VHS.mp4",
    description: "",
    duration: 69,
    releaseYear: 1942,
    poster: "https://a.ltrbxd.com/resized/film-poster/4/9/8/1/6/49816-bambi-0-1000-0-1500-crop.jpg?v=3df9758764",
  },
  {
    name: "Beauty and the Beast",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 30,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/Beauty%20and%20the%20Beast%201993%20UK%20VHS.mp4",
    description: "",
    duration: 84,
    releaseYear: 1991,
    poster: "https://a.ltrbxd.com/resized/sm/upload/qw/zu/zk/ky/iLe8yMOF5we6lvYbKLHzho7ATQk-0-1000-0-1500-crop.jpg?v=c4c6ebbfa3",
  },
  {
    name: "Beauty and the Beast The Enchanted Christmas",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 31,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/Beauty%20and%20the%20Beast%20The%20Enchanted%20Christmas%201997%20UK%20VHS.mp4",
    description: "",
    duration: 72,
    releaseYear: 1997,
    poster: "https://a.ltrbxd.com/resized/film-poster/4/3/9/8/6/43986-beauty-and-the-beast-the-enchanted-christmas-0-1000-0-1500-crop.jpg?v=6c4c8a913d",
  },
  {
    name: "Cinderella",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 32,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/Cinderella%201992%20UK%20VHS.mp4",
    description: "",
    duration: 72,
    releaseYear: 1950,
    poster: "https://a.ltrbxd.com/resized/sm/upload/v2/rx/es/za/2wlK3RvdWK3zcyDYd5lUB5r4XMe-0-1000-0-1500-crop.jpg?v=5e0bf1e2f8",
  },
    {
    name: "Dumbo",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 33,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/Dumbo%201992%20UK%20VHS.mp4",
    description: "",
    duration: 64,
    releaseYear: 1941,
    poster: "https://a.ltrbxd.com/resized/film-poster/4/5/3/7/4/45374-dumbo-0-1000-0-1500-crop.jpg?v=b9339f84e9",
  },
  {
    name: "Fantasia",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 34,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/Fantasia%201991%20UK%20VHS.mp4",
    description: "",
    duration: 124,
    releaseYear: 1940,
    poster: "https://a.ltrbxd.com/resized/sm/upload/u3/vf/g6/w1/2jbLGpf4gRcoluzgMQMDjZaQ47l-0-1000-0-1500-crop.jpg?v=50e3632861",
  },
  {
    name: "Hercules",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 35,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/Hercules%201998%20UK%20VHS.mp4",
    description: "",
    duration: 93,
    releaseYear: 1997,
    poster: "https://a.ltrbxd.com/resized/film-poster/4/4/8/3/8/44838-hercules-0-1000-0-1500-crop.jpg?v=8a4f55aa27",
  },
  // Add more movies here...
  // ========================================
  // 100s - Kids Programming
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
  // ========================================
  // 200s - Classic Cartoons
  // ========================================
  {
    name: "The Tom and Jerry Show",
    category: "Cartoons",
    subcategory: "Classic Cartoons",
    channelNumber: 201,
    episodes: [
      {
        name: "Tom & Jerry Volumen 1",
        duration: 58,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%201.mp4",
      },
      {
        name: "Tom & Jerry Volumen 2",
        duration: 56,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%202.mp4",
      },
      {
        name: "Tom & Jerry Volumen 3",
        duration: 58,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%203.mp4",
      },
      {
        name: "Tom & Jerry Volumen 4",
        duration: 55,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%204.mp4",
      },
      {
        name: "Tom & Jerry Volumen 5",
        duration: 59,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%205.mp4",
      },
      {
        name: "Tom & Jerry Volumen 7",
        duration: 55,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%207.mp4",
      },
      {
        name: "Tom & Jerry Volumen 8",
        duration: 57,
        video: "https://archive.org/download/VHS-Tom-y-Jerry/Volumen%208.mp4",
      },
      {
        name: "Tom & Jerry Volumen Extra",
        duration: 54,
        video: "https://ia800504.us.archive.org/3/items/VHS-Tom-y-Jerry/Volumen%20Extra.mp4",
      },
      // Add more episodes here...
    ],
    releaseYear: 1975,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/shows/7731/season_c/FMXnlcve9WZjpvy5VoVMSH1lkIOlUxFetqObh9qo.webp",
  },
  {
    name: "The Flintstones",
    category: "Cartoons",
    subcategory: "Classic Cartoons",
    channelNumber: 202,
    episodes: [
      {
        name: "Los Picapiedra 01x01",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x01-El%20Picavion.mp4",
      },
      {
        name: "Los Picapiedra 01x02",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x02-Noche%20de%20Parranda.mp4",
      },
      {
        name: "Los Picapiedra 01x03",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x03-La%20piscina.mp4",
      },
      {
        name: "Los Picapiedra 01x04",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x04-%20No%20se%20Busca%20Ayuda.mp4",
      },
      {
        name: "Los Picapiedra 01x05",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x05-La%20doble%20personalidad.mp4",
      },
      {
        name: "Los Picapiedra 01x06",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x06-El%20monstruo%20del%20lago%20de%20brea.mp4",
      },
      {
        name: "Los Picapiedra 01x07",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x07-Las%20ni%C3%B1eras.mp4",
      },
      {
        name: "Los Picapiedra 01x08",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x08-En%20Las%20Carreras.mp4",
      },
      {
        name: "Los Picapiedra 01x09",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x09-El%20anillo%20de%20compromiso.mp4",
      },
      {
        name: "Los Picapiedra 01x10",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x10-Hollyrock%2C%20alla%20vamos.mp4",
      },
      {
        name: "Los Picapiedra 01x11",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x11-El%20campe%C3%B3n%20de%20golf.mp4",
      },
      {
        name: "Los Picapiedra 01x12",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x12-El%20boleto%20de%20la%20loter%C3%ADa.mp4",
      },
      {
        name: "Los Picapiedra 01x13",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x13-El%20Restaurant.mp4",
      },
      {
        name: "Los Picapiedra 01x14",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x14-El%20intruso.mp4",
      },
      {
        name: "Los Picapiedra 01x15",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x15-La%20noche%20de%20las%20chicas.mp4",
      },
      {
        name: "Los Picapiedra 01x16",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x16-Clases%20de%20Danza%20con%20Arturo%20Murrieta.mp4",
      },
      {
        name: "Los Picapiedra 01x17",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x17-El%20gran%20robo%20al%20banco.mp4",
      },
      {
        name: "Los Picapiedra 01x18",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x18-Los%20cazadores.mp4",
      },
      {
        name: "Los Picapiedra 01x19",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x19-El%20piano%20ardiente.mp4",
      },
      {
        name: "Los Picapiedra 01x20",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x20-El%20hipnotizador.mp4",
      },
      {
        name: "Los Picapiedra 01x21",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x21-Cartas%20de%20amor%20sobre%20las%20rocas.mp4",
      },
      {
        name: "Los Picapiedra 01x22",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x22-El%20magnate.mp4",
      },
      {
        name: "Los Picapiedra 01x23",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x23-Los%20astrolocos.mp4",
      },
      {
        name: "Los Picapiedra 01x24",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x24-El%20largo%2C%20largo%20fin%20de%20semana.mp4",
      },
      {
        name: "Los Picapiedra 01x25",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x25-En%20la%20masa.mp4",
      },
      {
        name: "Los Picapiedra 01x26",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x26-El%20buen%20explorador.mp4",
      },
      {
        name: "Los Picapiedra 01x27",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x27-Cuartos%20en%20renta.mp4",
      },
      {
        name: "Los Picapiedra 01x28",
        duration: 25,
        video: "https://archive.org/download/los-picapiedra-serie-completa-espanol-latino/Los%20picapiedra/Temporada%201/01x28-Pedro%20Picapiedra%2C%20Antes%20y%20Despu%C3%A9s.mp4",
      },
      // Add more episodes here...
    ],
    releaseYear: 1960,
    poster: "https://images.justwatch.com/poster/76219363/s718/los-picapiedra.jpg",
  },
  // Add more shows...
  
  // ========================================
  // 300s - Anime Romance
  // ========================================
  {
    name: "Candy Candy",
    category: "Cartoons",
    subcategory: "Anime Romance",
    channelNumber: 301,
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
      {
        name: "Candy Candy 016",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20016%20.%20Viaje%20a%20un%20pa%C3%ADs%20desconocido%20.mp4",
      },
      {
        name: "Candy Candy 017",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20017%20.%20En%20un%20lejano%20y%20sediento%20desierto.mp4",
      },
      {
        name: "Candy Candy 018",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20018%20.%20El%20crucifijo%20que%20conduce%20al%20destino.mp4",
      },
      {
        name: "Candy Candy 019",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20019%20.%20El%20fin%20de%20un%20viaje%20de%20sufrimientos.mp4",
      },
      {
        name: "Candy Candy 020",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20020%20.%20Soy%20tan%20feliz%20como%20en%20mis%20sue%C3%B1os.mp4",
      },
      {
        name: "Candy Candy 021",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20021%20.%20La%20paloma%20que%20transporta%20la%20amistad.mp4",
      },
      {
        name: "Candy Candy 022",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20022%20.%20%21No%20te%20rindas%20Anthony%21.mp4",
      },
      {
        name: "Candy Candy 023",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20023%20.%20La%20primera%20cita.mp4",
      },
      {
        name: "Candy Candy 024",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20024%20.%20Mi%20Anthony.mp4",
      },
      {
        name: "Candy Candy 025",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20025%20.%20Avanzanda%20al%20ma%C3%B1ana%20y%20supera%20tu%20tristeza.mp4",
      },
      {
        name: "Candy Candy 026",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20026%20.%20El%20padre%20%C3%A1rbol%20lo%20sabe%20todo.mp4",
      },
      {
        name: "Candy Candy 027",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20027%20.%20El%20regalo%20de%20un%20%C3%A1ngel.mp4",
      },
      {
        name: "Candy Candy 028",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20028%20.%20Cicatrices%20muy%20en%20el%20fondo%20de%20mi%20coraz%C3%B3n.mp4",
      },
      {
        name: "Candy Candy 029",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20029%20.%20Partida%20hacia%20la%20esperanza.mp4",
      },
      {
        name: "Candy Candy 030",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20030%20.%20El%20amor%20supera%20los%20torbellinos.mp4",
      },
      {
        name: "Candy Candy 031",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20031%20.%20Un%20nuevo%20d%C3%ADa%20en%20una%20vieja%20ciudad.mp4",
      },
      {
        name: "Candy Candy 032",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20032%20.%20La%20colina%20de%20Pony%20dentro%20de%20una%20prisi%C3%B3n.mp4",
      },
      {
        name: "Candy Candy 033",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20033%20.%20La%20nueva%20estudiante%20tiene%20arrugas.mp4",
      },
      {
        name: "Candy Candy 034",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20034%20.%20El%20reverso%20del%20sobre%20lacrado.mp4",
      },
      {
        name: "Candy Candy 035",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20035%20.%20Un%20maravilloso%20domingo.mp4",
      },
      {
        name: "Candy Candy 036",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20036%20.%20La%20sonrisa%20ha%20vuelto.mp4",
      },
      {
        name: "Candy Candy 037",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20037%20.%20Un%20encuentro%20maravilloso.mp4",
      },
      {
        name: "Candy Candy 038",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20038%20.%20El%20secreto%20de%20Terry.mp4",
      },
      {
        name: "Candy Candy 039",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20039%20.%20El%20tesoro%20que%20desata%20la%20ira.mp4",
      },
      {
        name: "Candy Candy 040",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20040%20.%20Reflexiones%20que%20entran%20y%20salen%20con%20libertad.mp4",
      },
      {
        name: "Candy Candy 041",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20041%20.%20Un%20hada%20en%20el%20festival%20del%20colegio.mp4",
      },
      {
        name: "Candy Candy 042",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20042%20.%20El%20p%C3%ADcnic%20de%20medianoche.mp4",
      },
      {
        name: "Candy Candy 043",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20043%20.%20El%20colegio%20de%20Verano%20en%20el%20lago.mp4",
      },
      {
        name: "Candy Candy 044",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20044%20.%20Lazos%20entre%20madre%20e%20hijo.mp4",
      },
      {
        name: "Candy Candy 045",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20045%20.%20Fiesta%20blanca%20para%20dos.mp4",
      },
      {
        name: "Candy Candy 046",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20046%20.%20Emoci%C3%B3n%20al%20final%20del%20verano.mp4",
      },
      {
        name: "Candy Candy 047",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20047%20.%20La%20oscura%20trampa%20de%20Eliza.mp4",
      },
      {
        name: "Candy Candy 048",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20048%20.%20Entre%20paredes%20fr%C3%ADas%20y%20gruesas.mp4",
      },
      {
        name: "Candy Candy 049",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20049%20.%20La%20decisi%C3%B3n%20de%20Terry.mp4",
      },
      {
        name: "Candy Candy 050",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20050%20.%20Viaje%20entre%20la%20niebla%20matutina.mp4",
      },
      // Add more episodes 51 - 114
      {
        name: "Candy Candy 115",
        duration: 23,
        video: "https://archive.org/download/candy.candy_202109/Capitulo%20115%20.%20Florecen%20las%20flores%20en%20la%20colina%20de%20Pony.mp4",
      },
    ],
    releaseYear: 1981,
    poster: "https://m.media-amazon.com/images/I/81KaTQ8QyhL.jpg",
  },
  {
    name: "Ranma ½",
    category: "Cartoons",
    subcategory: "Anime Romance",
    channelNumber: 302,
    episodes: [
      {
        name: "Ranma ½ 001",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20001%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 002",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20002%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 003",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20003%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 004",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20004%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 005",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20005%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 006",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20006%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 007",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20007%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 008",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20008%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 009",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20009%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 010",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20010%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 011",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20011%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 012",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20012%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 013",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20013%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 014",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20014%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 015",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20015%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 016",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20016%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 017",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20017%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 018",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20018%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 019",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20019%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 020",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20020%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 021",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20021%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 022",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20022%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 023",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20023%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 024",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20024%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 025",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20025%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 026",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20026%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 027",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20027%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 028",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20028-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 029",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20029%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 030",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20030%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 031",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20031%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 032",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20032%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 033",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20033%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 034",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20034%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 035",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20035%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 036",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20036%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 037",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20037%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 038",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20038%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 039",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20039%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 040",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20040%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 041",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20041%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 042",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20042%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 043",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20043%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 044",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20044%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 045",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20045%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 046",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20046%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 047",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20047%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 048",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20048%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 049",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20049%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 050",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20050%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 051",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20051%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 052",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20052%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 053",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20053%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 054",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20054%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 055",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20055%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 056",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20056%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 057",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20057%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 058",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20058%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 059",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20059%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 060",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20060%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 061",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20061%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 062",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20062%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 063",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20063%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 064",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20064%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 065",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20065%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 066",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20066%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 067",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20067%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 068",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20068%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 069",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20069%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 070",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20070%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 071",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20071%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 072",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20072%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 073",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20073%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 074",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20074%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 075",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20075%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 076",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20076%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 077",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20077%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 078",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20078%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 079",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20079%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 080",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20080%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 081",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20081%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 082",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20082%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 083",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20083%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 084",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20084%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 085",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20085%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 086",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20086%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 087",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20087%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 088",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20088%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 089",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20089%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 090",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20090%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 091",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20091%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 092",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20092%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 093",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20093%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 094",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20094%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 095",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20095%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 096",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20096%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 097",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20097%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 098",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20098%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 099",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20099%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 100",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20100%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 101",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20101%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 102",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20102%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 103",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20103%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 104",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20104%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 105",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20105%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 106",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20106%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 107",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20107%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 108",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20108%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 109",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20109%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 110",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20110%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 111",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20111%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 112",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20112%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 113",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20113%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 114",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20114%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 115",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20115%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 116",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20116%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 117",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20117%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 118",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20118%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 119",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20119%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 120",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20120%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 121",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20121%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 122",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20122%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 123",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20123%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 124",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20124%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 125",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20125%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 126",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20126%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 127",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20127%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 128",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20128%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 129",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20129%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 130",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20130%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 131",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20131%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 132",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20132%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 133",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20133%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 134",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20134%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 135",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20135%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 136",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20136%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 137",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20137%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 138",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20138%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 139",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20139%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 140",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20140%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 141",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20141%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 142",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20142%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 143",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20143%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 144",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20144%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 145",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20145%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 146",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20146%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 147",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20147%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 148",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20148%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 149",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20149%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 150",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20150%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 151",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20151%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 152",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20152%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 153",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20153%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 154",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20154%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 155",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20155%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 156",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20156%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 157",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20157%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 158",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20158%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 159",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20159%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 160",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20160%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
      {
        name: "Ranma ½ 161",
        duration: 23,
        video: "https://archive.org/download/ranma-nibunnoichi-espanol-latino-y-japones/Ranma%C2%BD%20%20-%20Episodio%20161%20-%20Espa%C3%B1ol%20Latino.mp4",
      },
    ],
    releaseYear: 1989,
    poster: "https://images.justwatch.com/poster/323469403/s718/ranma-1-2.jpg",
  },
  // ========================================
  // 310s - Anime Acción
  // ========================================
  {
    name: "Dragon Ball Z",
    category: "Cartoons",
    subcategory: "Anime Acción",
    channelNumber: 311,
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
      {
        name: "Dragon Ball Z 081",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B081%5D%20Pikoro%20se%20encarga%20de%20derrotar%20a%20Freezer.%20-%20Dragon%20Ball.mp4",
      },
      {
        name: "Dragon Ball Z 082",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B082%5D%20La%20segunda%20trasformaci%C3%B3n%20de%20Freezer.%20-%20Dragon%20Ball%20Sul.mp4",
      },
      {
        name: "Dragon Ball Z 083",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B083%5D%20Freezer%20tiene%20ganada%20la%20batalla%20con%20su%20tercera%20trasfor.mp4",
      },
      {
        name: "Dragon Ball Z 084",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B084%5D%20La%20muerte%20de%20Dende.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 085",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B085%5D%20Goku%20se%20recupera.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 086",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B086%5D%20Muere%20un%20orgulloso%20saiyajin.%20Vegeta.%20-%20Dragon%20Ball%20Sul.mp4",
      },
      {
        name: "Dragon Ball Z 087",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B087%5D%20La%20batalla%20final%20comienza.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 088",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B088%5D%20Un%20combate%20de%20cuerpo%20a%20cuerpo.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 089",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B089%5D%20Freezer%20pelea%20sin%20usar%20las%20dos%20manos.%20-%20Dragon%20Ball%20Su.mp4",
      },
      {
        name: "Dragon Ball Z 090",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B090%5D%20Goku%20es%20un%20sujeto%20muy%20audaz.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 091",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B091%5D%20Goku%20hace%20el%20Kaio-ken%20aumentado%20a%20veinte%20veces.%20-%20Drag.mp4",
      },
      {
        name: "Dragon Ball Z 092",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B092%5D%20La%20gigantesca%20Genki-dama%3B%20esta%20es%20la%20%C3%BAltima%20esperanza..mp4",
      },
      {
        name: "Dragon Ball Z 093",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B093%5D%20%C2%A1No%20dejes%20ir%20esta%20oportunidad%21%20Pikoro%20ayuda%20a%20Goku.%20-%20.mp4",
      },
      {
        name: "Dragon Ball Z 094",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B094%5D%20El%20poder%20destructivo%20de%20la%20Genki-dama.%20-%20Dragon%20Ball%20S.mp4",
      },
      {
        name: "Dragon Ball Z 095",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B095%5D%20Finalmente%20Goku%20se%20convierte%20en%20el%20Legendario%20Super%20Sa.mp4",
      },
      {
        name: "Dragon Ball Z 096",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B096%5D%20Goku%20vengar%C3%A1%20la%20muerte%20de%20todos.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 097",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B097%5D%20Un%20gran%20destello%20atraviesa%20Namekusei.%20-%20Dragon%20Ball%20Su.mp4",
      },
      {
        name: "Dragon Ball Z 098",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B098%5D%20Freezer%20utiliza%20su%20m%C3%A1ximo%20poder.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 099",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B099%5D%20Namekusei%20est%C3%A1%20a%20punto%20de%20estallar%3B%20Shen%20Long%2C%20cumple%20.mp4",
      },
      {
        name: "Dragon Ball Z 100",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B100%5D%20Yo%20soy%20el%20hijo%20de%20Goku%3B%20Gohan%20vuelve%20a%20aparecer%20en%20el%20.mp4",
      },
      {
        name: "Dragon Ball Z 101",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B101%5D%20El%20%C3%BAltimo%20deseo.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 102",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B102%5D%20La%20%C3%9Altima%20Esperanza.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 103",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B103%5D%20La%20desesperaci%C3%B3n%20de%20Freezer.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 104",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B104%5D%20La%20autodestrucci%C3%B3n%20de%20Freezer.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 105",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B105%5D%20Freezer%20pierde%20la%20pelea.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 106",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B106%5D%20Namekusei%20explota.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 107",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%2037-107/%5B107%5D%20Los%20Guerreros%20Z%20han%20revivido.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 108",
        duration: 24,
        description: "Saga Garlick Jr.",
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20108-117/%5B108%5D%20El%20Templo%20Sagrado%20est%C3%A1%20en%20problemas.%20-%20Dragon%20Ball%20Sul.mp4",
      },
      {
        name: "Dragon Ball Z 109",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20108-117/%5B109%5D%20La%20neblina%20del%20mal.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 110",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20108-117/%5B110%5D%20Pikoro%20forma%20parte%20de%20la%20familia%20del%20mal.%20-%20Dragon%20Bal.mp4",
      },
      {
        name: "Dragon Ball Z 111",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20108-117/%5B111%5D%20Pikoro%20enfrenta%20a%20Gohan.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 112",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20108-117/%5B112%5D%20El%20plan%20de%20Pikoro.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 113",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20108-117/%5B113%5D%20Kami%20sama%20y%20Mr.%20Popo%20van%20al%20lugar%20sagrado.%20-%20Dragon%20Ba.mp4",
      },
      {
        name: "Dragon Ball Z 114",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20108-117/%5B114%5D%20La%20vida%20de%20kami%20sama%20est%C3%A1%20en%20peligro.%20-%20Dragon%20Ball%20Su.mp4",
      },
      {
        name: "Dragon Ball Z 115",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20108-117/%5B115%5D%20El%20agua%20ultra%20sagrada%20salva%20al%20mundo.%20-%20Dragon%20Ball%20Su.mp4",
      },
      {
        name: "Dragon Ball Z 116",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20108-117/%5B116%5D%20Gohan%20destruye%20el%20planeta%20maligno.%20-%20Dragon%20Ball%20Sullc.mp4",
      },
      {
        name: "Dragon Ball Z 117",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20108-117/%5B117%5D%20Krilin%20le%20propone%20matrimonio%20a%20Maron.%20-%20Dragon%20Ball%20Su.mp4",
      },
      {
        name: "Dragon Ball Z 118",
        duration: 24,
        description: "Saga Cell",
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B118%5D%20Ese%20es%20el%20planeta%20Tierra%20Pap%C3%A1.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 119",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B119%5D%20Yo%20me%20encargar%C3%A9%20de%20derrotar%20a%20Freezer.%20-%20Dragon%20Ball%20S.mp4",
      },
      {
        name: "Dragon Ball Z 120",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B120%5D%20El%20Final%20de%20Freezer.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 121",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B121%5D%20Goku%20ha%20regresado.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 122",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B122%5D%20La%20identidad%20del%20joven%20misterioso.%20-%20Dragon%20Ball%20Sullc.mp4",
      },
      {
        name: "Dragon Ball Z 123",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B123%5D%20La%20t%C3%A9cnica%20especial%20de%20Goku.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 124",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B124%5D%20Superar%C3%A9%20a%20Goku.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 125",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B125%5D%20Una%20prueba%20muy%20dif%C3%ADcil%20para%20Goku.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 126",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B126%5D%20%C2%BFQuienes%20son%20los%20androides%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 127",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B127%5D%20Los%20Terribles%20Androides%20N%C3%BAmero%2019%20y%2020.%20-%20Dragon%20Ball%20.mp4",
      },
      {
        name: "Dragon Ball Z 128",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B128%5D%20Goku%20tiene%20dos%20Problemas.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 129",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B129%5D%20Vegeta%20se%20Convierte%20en%20Super%20Saiyajin.%20-%20Dragon%20Ball%20S.mp4",
      },
      {
        name: "Dragon Ball Z 130",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B130%5D%20El%20secreto%20del%20doctor%20Maki.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 131",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B131%5D%20La%20realidad%20es%20acaso%20mucho%20peor%20que%20el%20futuro%20-%20Dragon.mp4",
      },
      {
        name: "Dragon Ball Z 132",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B132%5D%20Hay%20que%20buscar%20el%20laboratorio%20del%20doctor%20Maki%20-%20Dragon.mp4",
      },
      {
        name: "Dragon Ball Z 133",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B133%5D%20Los%20androides%2017%20y%2018%20despiertan.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 134",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B134%5D%20El%20ej%C3%A9rcito%20encargado%20de%20matar%20a%20Goku.%20-%20Dragon%20Ball%20S.mp4",
      },
      {
        name: "Dragon Ball Z 135",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B135%5D%20Las%20Habilidades%20del%20Androide%20No.%2018.%20-%20Dragon%20Ball%20Sul.mp4",
      },
      {
        name: "Dragon Ball Z 136",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B136%5D%20%C2%BFEste%20ser%C3%A1%20el%20fin%20de%20los%20Guerreros%20Z%20-%20Dragon%20Ball%20Sul.mp4",
      },
      {
        name: "Dragon Ball Z 137",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B137%5D%20La%20decisi%C3%B3n%20de%20Pikoro.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 138",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B138%5D%20Los%20androides%20destructores.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 139",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B139%5D%20Bulma%20se%20entera%20de%20un%20gran%20misterio.%20-%20Dragon%20Ball%20Sul.mp4",
      },
      {
        name: "Dragon Ball Z 140",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20118-140/%5B140%5D%20Un%20misterioso%20huevo%20encontrado%20en%20la%20m%C3%A1quina%20del%20tiemp.mp4",
      },
      {
        name: "Dragon Ball Z 141",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B141%5D%20El%20nacimiento%20de%20un%20nuevo%20guerrero.%20-%20Dragon%20Ball%20Sull.mp4",
      },
      {
        name: "Dragon Ball Z 142",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B142%5D%20El%20monstruo%20que%20tiene%20el%20ki%20de%20Goku.%20-%20Dragon%20Ball%20Sul.mp4",
      },
      {
        name: "Dragon Ball Z 143",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B143%5D%20El%20androide%20Cell.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 144",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B144%5D%20Cell%20se%20escapa%20de%20las%20manos%20de%20Pikoro.%20-%20Dragon%20Ball%20S.mp4",
      },
      {
        name: "Dragon Ball Z 145",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B145%5D%20La%20habitaci%C3%B3n%20secreta%20del%20laboratorio%20del%20doctor%20Gero..mp4",
      },
      {
        name: "Dragon Ball Z 146",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B146%5D%20Goku%20se%20recupera.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 147",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B147%5D%20%C2%A1Vamos%20a%20la%20Habitaci%C3%B3n%20del%20Tiempo%21%20-%20Dragon%20Ball%20Sullc.mp4",
      },
      {
        name: "Dragon Ball Z 148",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B148%5D%20Pikoro%20VS%20El%20Androide%20No.%2017%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 149",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B149%5D%20Cell%20est%C3%A1%20a%20punto%20de%20perfeccionar%20su%20cuerpo.%20-%20Dragon%20.mp4",
      },
      {
        name: "Dragon Ball Z 150",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B150%5D%20Pikoro%20pelea%20con%20todas%20sus%20fuerzas.%20-%20Dragon%20Ball%20Sull.mp4",
      },
      {
        name: "Dragon Ball Z 151",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B151%5D%20La%20%C3%BAltima%20esperanza%2C%20el%20androide%20No.%2016%20-%20Dragon%20Ball%20.mp4",
      },
      {
        name: "Dragon Ball Z 152",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B152%5D%20Cell%20absorbe%20a%20No.%2017.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 153",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B153%5D%20El%20nuevo%20desaf%C3%ADo%20de%20Goku.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 154",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B154%5D%20Sal%20de%20ah%C3%AD%20No.%2018.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 155",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B155%5D%20El%20Super%20poder%20de%20Vegeta.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 156",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B156%5D%20Yo%20soy%20super%20Vegeta.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 157",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B157%5D%20Un%20guerrero%20orgulloso.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 158",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B158%5D%20La%20decisi%C3%B3n%20de%20Krilin.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 159",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B159%5D%20Cell%20busca%20perfeccionar%20su%20cuerpo.%20-%20Dragon%20Ball%20Sullc.mp4",
      },
      {
        name: "Dragon Ball Z 160",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B160%5D%20Cell%2C%20el%20dios%20de%20la%20destrucci%C3%B3n.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 161",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B161%5D%20Super%20Vegeta%20corre%20peligro.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 162",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B162%5D%20Trunks%20se%20pone%20furioso.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 163",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B163%5D%20Salva%20a%20pap%C3%A1.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 164",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B164%5D%20La%20desesperaci%C3%B3n%20de%20vivir%20en%20un%20futuro%20infernal.%20-%20Dra.mp4",
      },
      {
        name: "Dragon Ball Z 165",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B165%5D%20El%20punto%20d%C3%A9bil%20de%20Super%20Trunks.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 166",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B166%5D%20El%20misterio%20del%20nuevo%20torneo%20de%20artes%20marciales.%20-%20Dra.mp4",
      },
      {
        name: "Dragon Ball Z 167",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B167%5D%20El%20aviso%20del%20torneo%20de%20Cell.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 168",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B168%5D%20Los%20nuevos%20poderes%20de%20Goku%20y%20Gohan.%20-%20Dragon%20Ball%20Sull.mp4",
      },
      {
        name: "Dragon Ball Z 169",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B169%5D%20La%20tranquilidad%20de%20Goku.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 170",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B170%5D%20El%20descanso%20de%20los%20guerreros.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 171",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B171%5D%20Cuando%20Gohan%20era%20beb%C3%A9.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 172",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B172%5D%20Busquemos%20a%20un%20nuevo%20kami%20sama.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 173",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B173%5D%20Las%20esferas%20del%20drag%C3%B3n%20vuelven%20a%20existir.%20-%20Dragon%20Bal.mp4",
      },
      {
        name: "Dragon Ball Z 174",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B174%5D%20El%20sufrimiento%20de%20Goku.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 175",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B175%5D%20El%20torneo%20de%20Cell%20comienza.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 176",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B176%5D%20El%20ej%C3%A9rcito%20de%20Mr.%20Sat%C3%A1n.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 177",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B177%5D%20Goku%20vs.%20Cell.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 178",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B178%5D%20El%20super%20kame-hame-ha%20de%20Cell.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 179",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B179%5D%20Cell%20cambia%20las%20reglas%20del%20torneo.%20-%20Dragon%20Ball%20Sullc.mp4",
      },
      {
        name: "Dragon Ball Z 180",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B180%5D%20%C2%BFGoku%20se%20rinde%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 181",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B181%5D%20Gohan%2C%20el%20joven%20m%C3%A1s%20fuerte.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 182",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B182%5D%20Gohan%2C%20%C2%A1Expulsa%20todo%20tu%20poder%21%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 183",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B183%5D%20El%20ataque%20de%20los%20Cell%20juniors.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 184",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B184%5D%20Gohan%20se%20enfada.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 185",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B185%5D%20Destrucci%C3%B3n%20de%20los%20Cell%20Juniors.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 186",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B186%5D%20Cell%20es%20golpeado.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 187",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B187%5D%20La%20transformaci%C3%B3n%20de%20Cell.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 188",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B188%5D%20Adi%C3%B3s%20a%20todos.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 189",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B189%5D%20Una%20terrible%20pesadilla%20en%20pleno%20d%C3%ADa.%20-%20Dragon%20Ball%20Sul.mp4",
      },
      {
        name: "Dragon Ball Z 190",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B190%5D%20Un%20mensaje%20para%20Gohan.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 191",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B191%5D%20La%20pelea%20ha%20terminado...%20gracias%2C%20Goku%20-%20Dragon%20Ball%20S.mp4",
      },
      {
        name: "Dragon Ball Z 192",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B192%5D%20Goku%20se%20va%20a%20entrenar%20al%20m%C3%A1s%20all%C3%A1.%20-%20Dragon%20Ball%20Sullc.mp4",
      },
      {
        name: "Dragon Ball Z 193",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B193%5D%20%C2%A1Pap%C3%A1%2C%20jam%C3%A1s%20me%20dar%C3%A9%20por%20vencido%21%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 194",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B194%5D%20Otro%20final%20feliz.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 195",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B195%5D%20El%20peleador%20m%C3%A1s%20fuerte%20del%20otro%20mundo.%20-%20Dragon%20Ball%20S.mp4",
      },
      {
        name: "Dragon Ball Z 196",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B196%5D%20La%20reuni%C3%B3n%20de%20los%20peleadores%20mas%20valientes.%20-%20Dragon%20B.mp4",
      },
      {
        name: "Dragon Ball Z 197",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B197%5D%20El%20torneo%20se%20pone%20emocionante.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 198",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B198%5D%20%C2%BFQui%C3%A9n%20ganar%C3%A1%20Goku%20o%20Paikuhan.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 199",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20141-199/%5B199%5D%20Goku%20hace%20un%20Kame-Hame-Ha%20a%20toda%20velocidad.%20-%20Dragon%20B.mp4",
      },
      {
        name: "Dragon Ball Z 200",
        duration: 24,
        description: "Saga Majin Boo",
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20200-250/%5B200%5D%20Gohan%20asiste%20a%20la%20preparatoria.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 201",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20200-250/%5B201%5D%20El%20guerrero%20que%20lucha%20por%20la%20justicia%2C%20el%20Gran%20Saiyama.mp4",
      },
      {
        name: "Dragon Ball Z 202",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20200-250/%5B202%5D%20La%20primera%20cita%20de%20Gohan.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 203",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20200-250/%5B203%5D%20Gohan%20salva%20a%20Videl.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 204",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20200-250/%5B204%5D%20%C2%BFEl%20ladr%C3%B3n%20es%20el%20Gran%20Saiyaman%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 205",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20200-250/%5B205%5D%20%C2%BFGok%C3%BA%20regresa%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 206",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20200-250/%5B206%5D%20El%20sorprendente%20poder%20de%20Goten.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 207",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20200-250/%5B207%5D%20El%20entrenamiento%20para%20volar.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 208",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20200-250/%5B208%5D%20Los%20guerreros%20Z%20se%20re%C3%BAnen%20de%20nuevo.%20-%20Dragon%20Ball%20Sull.mp4",
      },
      {
        name: "Dragon Ball Z 209",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20200-250/%5B209%5D%20Ten%20cuidado%20gran%20Saiyaman.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      {
        name: "Dragon Ball Z 210",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20200-250/%5B210%5D%20El%20peque%C3%B1o%20Trunks.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      // Add more episodes here... 211 - 290
      {
        name: "Dragon Ball Z 291",
        duration: 24,
        video: "https://archive.org/download/dragon-ball-zvideoplaytv/Dragon%20ball%20Z%20251-291/%5B291%5D%20El%20sue%C3%B1o%20de%20Gok%C3%BA.%20-%20Dragon%20Ball%20Sullca.mp4",
      },
      // Add more episodes here...
    ],
    releaseYear: 1989,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/334f00b53cf3ef848ea7048b25711bc98e8236ce1685a096990c80d0965835ea.png",
  },
  {
    name: "Los caballeros del zodíaco",
    category: "Cartoons",
    subcategory: "Anime Acción",
    channelNumber: 312,
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
  // 400s - TV Shows
  // ========================================
  {
    name: "El Chavo del 8",
    category: "Shows",
    subcategory: "El Chavo del 8",
    channelNumber: 401,
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
