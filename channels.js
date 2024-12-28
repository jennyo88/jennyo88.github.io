const channels = [
  /* Template:
  {
    name: "Example Name",
    category: "Movies",
    subcategory: "Genre",
    channelNumber: 1,
    video: "https://example.com/video.mp4",
    description: "Example description.",
    duration: "1h 30m",
    releaseYear: 1970,
    poster: "https://example.com/poster.jpg",
  },
  */

// Movies

  {
    name: "The Terminator",
    category: "Movies",
    subcategory: "Action",
    channelNumber: 10,
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
    channelNumber: 15,
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
    channelNumber: 2,
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
    channelNumber: 3,
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
    channelNumber: 11,
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
    channelNumber: 7,
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
    channelNumber: 12,
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
    channelNumber: 9,
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
    channelNumber: 13,
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
    channelNumber: 1,
    video: "https://archive.org/download/beneath-the-planet-of-the-apes_202208/BeneathThePlanetOfTheApes.mp4",
    description: "A sci-fi sequel where astronauts discover the dark truth about Earth's future.",
    duration: "1h 35m",
    releaseYear: 1970,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/1880/fLrzUkj1CTPrLgz57JjsTEXNvLktlLySJG609b8U.webp",
  },
  {
    name: "Star Wars",
    category: "Movies",
    subcategory: "Sci-Fi",
    channelNumber: 4,
    video: "https://dn720403.ca.archive.org/0/items/star-wars-1977_202301/Star%20Wars%20%281977%29.mp4",
    description: "The epic space opera that began a cultural phenomenon.",
    duration: "2h 1m",
    releaseYear: 1977,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/159/M9MM8ok5tph0fPXoBUP1iB0jL8jB6wXG7hRGODxD.webp",
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
    channelNumber: 6,
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
    channelNumber: 5,
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
    channelNumber: 8,
    video: "https://archive.org/download/full-vhs-superman-ii-1981-warner-home-video-rental-edition/FULL%20VHS%20Superman%20II%20%281981%29%20%5BWarner%20Home%20Video%5D%20%28Rental%20Edition%29.mp4",
    description: "Superman faces General Zod in an epic battle for Earth.",
    duration: "1h 56m",
    releaseYear: 1980,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/9732/mKrX3QjoV8Wdg9LHuXm9ojXWtzszFgYwSfcvt79u.webp",
  },
  
// Cartoons

  {
    name: "Kids WB Part 1",
    category: "Cartoons",
    subcategory: "Kids WB",
    channelNumber: 101.1, // Unique identifier for part 1
    video: "https://archive.org/download/kids-wb-cartoon-network-toonami-full-block-july-2001-woc-monster-rancher-batman-/Kids%20WB%20Cartoon%20Network%20Toonami%20Full%20Block%20July%202001%20WOC%20%28Monster%20Rancher%20Batman%20Beyond%20Pokemon%20Yu-Gi-Oh%20Dragon%20Ball%20Z%20Mobile%20Suit%20Gundam%20Cartoon%20Network%27s%20Toonami%20Block%20On%20Kids%20WB%20July%202001%20Full%20Recording%20WOC%29/VTS_01_1.mp4",
    description: "A Saturday morning kids block from WB.",
    releaseYear: 2001,
    poster: "https://abcdvdvideo.myshopify.com/cdn/shop/products/35m-6691_large.jpg",
  },
  {
    name: "Kids WB Part 2",
    category: "Cartoons",
    subcategory: "Kids WB",
    channelNumber: 101.2,
    video: "https://archive.org/download/kids-wb-cartoon-network-toonami-full-block-july-2001-woc-monster-rancher-batman-/Kids%20WB%20Cartoon%20Network%20Toonami%20Full%20Block%20July%202001%20WOC%20%28Monster%20Rancher%20Batman%20Beyond%20Pokemon%20Yu-Gi-Oh%20Dragon%20Ball%20Z%20Mobile%20Suit%20Gundam%20Cartoon%20Network%27s%20Toonami%20Block%20On%20Kids%20WB%20July%202001%20Full%20Recording%20WOC%29/VTS_01_2.mp4",
    description: "A Saturday morning kids block from WB.",
    releaseYear: 2001,
    poster: "https://abcdvdvideo.myshopify.com/cdn/shop/products/35m-6691_large.jpg",
  },
  {
    name: "Kids WB Part 3",
    category: "Cartoons",
    subcategory: "Kids WB",
    channelNumber: 101.3,
    video: "https://archive.org/download/kids-wb-cartoon-network-toonami-full-block-july-2001-woc-monster-rancher-batman-/Kids%20WB%20Cartoon%20Network%20Toonami%20Full%20Block%20July%202001%20WOC%20%28Monster%20Rancher%20Batman%20Beyond%20Pokemon%20Yu-Gi-Oh%20Dragon%20Ball%20Z%20Mobile%20Suit%20Gundam%20Cartoon%20Network%27s%20Toonami%20Block%20On%20Kids%20WB%20July%202001%20Full%20Recording%20WOC%29/VTS_01_3.mp4",
    description: "A Saturday morning kids block from WB.",
    releaseYear: 2001,
    poster: "https://abcdvdvideo.myshopify.com/cdn/shop/products/35m-6691_large.jpg",
  },
  {
    name: "ABC Saturday Morning Part 1",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 102.1,
    video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_1.mp4",
    description: "A Saturday morning kids block from ABC.",
    releaseYear: 1981,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 2",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 102.2,
    video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_2.mp4",
    description: "A Saturday morning kids block from ABC.",
    releaseYear: 1981,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 3",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 102.3,
    video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_3.mp4",
    releaseYear: 1981,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 4",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 102.4,
    video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_4.mp4",
    releaseYear: 1981,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 5",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 102.5,
    video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_5.mp4",
    releaseYear: 1981,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 1",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 103.1,
    video: "https://archive.org/download/vts-01-1_20200929_2234/ABC%20Saturday%20Morning%20Cartoons%2012-20-86%20WOC/VIDEO_TS/VTS_01_1.mp4",
    releaseYear: 1986,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 2",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 103.2,
    video: "https://archive.org/download/vts-01-1_20200929_2234/ABC%20Saturday%20Morning%20Cartoons%2012-20-86%20WOC/VIDEO_TS/VTS_01_2.mp4",
    releaseYear: 1986,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 3",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 103.3,
    video: "https://archive.org/download/vts-01-1_20200929_2234/ABC%20Saturday%20Morning%20Cartoons%2012-20-86%20WOC/VIDEO_TS/VTS_01_3.mp4",
    releaseYear: 1986,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 1",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 104.1,
    video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_1.mp4",
    releaseYear: 1989,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 2",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 104.2,
    video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_2.mp4",
    releaseYear: 1989,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 3",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 104.3,
    video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_3.mp4",
    releaseYear: 1989,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 4",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 104.4,
    video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_4.mp4",
    releaseYear: 1989,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 5",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 104.5,
    video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_5.mp4",
    releaseYear: 1989,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 1",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 105.1,
    video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_1.mp4",
    releaseYear: 1993,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 2",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 105.2,
    video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_2.mp4",
    releaseYear: 1993,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 3",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 105.3,
    video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_3.mp4",
    releaseYear: 1993,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 4",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 105.4,
    video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_4.mp4",
    releaseYear: 1993,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "ABC Saturday Morning Part 5",
    category: "Cartoons",
    subcategory: "ABC Saturday Morning",
    channelNumber: 105.5,
    video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_5.mp4",
    releaseYear: 1993,
    poster: "https://static.wikia.nocookie.net/parody/images/8/88/Playtimeland_Fun_DVD_Cover.png",
  },
  {
    name: "Candy Candy Ep 1",
    category: "Cartoons",
    subcategory: "Candy Candy",
    channelNumber: 106,
    video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D01.mp4",
    releaseYear: 1981,
    poster: "https://m.media-amazon.com/images/I/81KaTQ8QyhL.jpg",
  },
  {
    name: "Candy Candy Ep 2",
    category: "Cartoons",
    subcategory: "Candy Candy",
    channelNumber: 106,
    video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D02.mp4",
    releaseYear: 1981,
    poster: "https://m.media-amazon.com/images/I/81KaTQ8QyhL.jpg",
  },
  {
    name: "Candy Candy Ep 3",
    category: "Cartoons",
    subcategory: "Candy Candy",
    channelNumber: 106,
    video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D03.mp4",
    releaseYear: 1981,
    poster: "https://m.media-amazon.com/images/I/81KaTQ8QyhL.jpg",
  },
  {
    name: "Candy Candy Ep 4",
    category: "Cartoons",
    subcategory: "Candy Candy",
    channelNumber: 106,
    video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D04.mp4",
    releaseYear: 1981,
    poster: "https://m.media-amazon.com/images/I/81KaTQ8QyhL.jpg",
  },
  {
    name: "Candy Candy Ep 12",
    category: "Cartoons",
    subcategory: "Candy Candy",
    channelNumber: 106,
    video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D012.mp4",
    releaseYear: 1981,
    poster: "https://m.media-amazon.com/images/I/81KaTQ8QyhL.jpg",
  },
  {
    name: "Candy Candy Ep 13",
    category: "Cartoons",
    subcategory: "Candy Candy",
    channelNumber: 106,
    video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D013.mp4",
    releaseYear: 1981,
    poster: "https://m.media-amazon.com/images/I/81KaTQ8QyhL.jpg",
  },
  {
    name: "Candy Candy Ep 16",
    category: "Cartoons",
    subcategory: "Candy Candy",
    channelNumber: 106,
    video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D016.mp4",
    releaseYear: 1981,
    poster: "https://m.media-amazon.com/images/I/81KaTQ8QyhL.jpg",
  },
];

const blocks = [
  {
    name: "Morning Cartoons",
    startTime: "06:00", // 6:00 AM
    endTime: "09:00", // 9:00 AM
    content: [
      { video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_1.mp4", duration: 3600 }, // duration in seconds
      { video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_2.mp4", duration: 3600 },
      { video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_3.mp4", duration: 3600 },
    ],
  },
  {
    name: "Action Time",
    startTime: "09:00", // 9:00 AM
    endTime: "13:00", // 1:00 PM
    content: [
      { video: "https://archive.org/download/the-terminator-1984_202206/The%20Terminator%20%281984%29.mp4", duration: 7200 },
      { video: "https://ia601201.us.archive.org/23/items/the-mummy_202312/The%20Mummy.mp4", duration: 7200 },
    ],
  },
  {
    name: "Sci-Fi Marathon",
    startTime: "13:00", // 1:00 PM
    endTime: "16:30", // 4:30 PM
    content: [
      { video: "https://archive.org/download/beneath-the-planet-of-the-apes_202208/BeneathThePlanetOfTheApes.mp4", duration: 5400 },
      { video: "https://dn720403.ca.archive.org/0/items/star-wars-1977_202301/Star%20Wars%20%281977%29.mp4", duration: 7200 },
    ],
  },
  {
    name: "Comedy Marathon",
    startTime: "16:30", // 4:30 PM
    endTime: "24:00", // 12:00 PM
    content: [
      { video: "https://archive.org/download/spice-world_202208/SPICE%20WORLD.mp4", duration: 5400 },
      { video: "https://archive.org/download/full-vhs-monty-pythons-life-of-brian-1979-wci-home-video-1980-vhs/FULL%20VHS%20Monty%20Python%27s%20Life%20of%20Brian%20%281979%29%20%5BWCI%20Home%20Video%5D%20%281980%20VHS%29.mp4", duration: 5400 },
      { video: "https://archive.org/download/ghostbusters-from-the-original-vhs-release-in-1985/Ghostbusters%20from%20the%20Original%20VHS%20Release%20in%201985.ia.mp4", duration: 6000 },
      { video: "https://archive.org/download/hocus-pocus_202312/Hocus%20Pocus.mp4", duration: 6000 },
      { video: "https://archive.org/download/the-aristocats/The%20Aristocats.mp4", duration: 4200 },
    ],
  },
];
