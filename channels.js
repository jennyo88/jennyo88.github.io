const channels = [
  // ========================================
  // CHANNEL NUMBERING GUIDE
  // ========================================
  // ========================================
  //       0s - Movies                   (23)
  // ========================================
  //        Action & Adventure     (1-5)  (5)
  //        Comedy & Family        (6-9)  (4)
  //        Disney Classics      (10-22)  (12)
  //        Romance & Comedy     (23-24)  (2)
  //        Drama & Romance      (25-28)  (4)
  //        Fantasy & Sci-Fi     (29-35)  (7)
  //        Horror & Thriller    (36-41)  (5)
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
  // 400s - TV Shows           (401-403)  (3)
  // ========================================
  // ========================================
  
  // ========================================
  // 0s - Movies
  // ========================================
  {
    name: "Intro",
    category: "Movies",
    subcategory: "Intro",
    channelNumber: 1,
    video: "https://archive.org/download/tcm-feature-presentation-intro/TCM%20-%20Feature%20Presentation%20intro.mp4",
    duration: 1, // In minutes
  },
  {
    name: "The Terminator",
    category: "Movies",
    subcategory: "Action & Adventure",
    channelNumber: 2,
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
    channelNumber: 3,
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
    channelNumber: 4,
    video: "https://archive.org/download/the-mummy_202312/The%20Mummy.mp4",
    description: "An adventurer awakens an ancient curse in this thrilling action-horror.",
    duration: 124,
    releaseYear: 1999,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/5233/LJqDoR5PDs0u2sm6U9d4Gge6CpApok7SmMfbHMlG.webp",
  },
  {
    name: "Spider-Man",
    category: "Movies",
    subcategory: "Action & Adventure",
    channelNumber: 5,
    video: "https://archive.org/download/spider-man-screener/Spider-Man%20Screener.mp4",
    description: "Peter Parker, a teenager who gets spider powers and becomes a hero while fighting the Green Goblin.",
    duration: 120,
    releaseYear: 2002,
    poster: "https://image.tmdb.org/t/p/original/qFomxiOaP7lkdlELYOwkpgk1uic.jpg",
  },
  {
    name: "Spawn",
    category: "Movies",
    subcategory: "Action & Adventure",
    channelNumber: 6,
    video: "https://archive.org/download/spawn-vhs-rental-rip-mediahoarderz.com/Spawn%20%28VHS%20Rental%20Rip%29%20%5BMediaHoarderz.com%5D.mp4",
    description: "A murdered soldier who makes a deal with the devil, returns to Earth as a hellspawn, and struggles between vengeance and protecting the innocent.",
    duration: 113,
    releaseYear: 1997,
    poster: "https://image.tmdb.org/t/p/original/3svvunKXkhRvEKByGDua1Qu0otq.jpg",
  },
  {
    name: "Ghostbusters",
    category: "Movies",
    subcategory: "Comedy & Family",
    channelNumber: 7,
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
    channelNumber: 8,
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
    channelNumber: 9,
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
    channelNumber: 10,
    video: "https://archive.org/download/hocus-pocus_202312/Hocus%20Pocus.mp4",
    description: "A trio of witches is resurrected on Halloween night.",
    duration: 96,
    releaseYear: 1993,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/21799/yaO08fRNFidoJtuUvO017nHaxTdlObbsA9dKtq0K.webp",
  },
{
    name: "101 Dalmatians",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 11,
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
    channelNumber: 12,
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
    channelNumber: 13,
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
    channelNumber: 14,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/Aladdin%20and%20the%20King%20of%20Thieves%201997%20UK%20VHS.mp4",
    description: "",
    duration: 81,
    releaseYear: 1997,
    poster: "https://a.ltrbxd.com/resized/film-poster/4/5/4/7/1/45471-aladdin-and-the-king-of-thieves-0-1000-0-1500-crop.jpg?v=1d31844fca",
  },
  {
    name: "The Aristocats",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 15,
    video: "https://archive.org/download/the-aristocats/The%20Aristocats.mp4",
    description: "Disney's animated adventure of a family of cats lost in Paris.",
    duration: 78,
    releaseYear: 1970,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/34603/TbORWeJeKJNVKRCRZfBQV01cQgjoQ1lbNGPqj8Hf.webp",
  },
  {
    name: "Bambi",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 16,
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
    channelNumber: 17,
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
    channelNumber: 18,
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
    channelNumber: 19,
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
    channelNumber: 20,
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
    channelNumber: 21,
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
    channelNumber: 22,
    video: "https://archive.org/download/101-dalmatians-1996-uk-vhs_202404/Hercules%201998%20UK%20VHS.mp4",
    description: "",
    duration: 93,
    releaseYear: 1997,
    poster: "https://a.ltrbxd.com/resized/film-poster/4/4/8/3/8/44838-hercules-0-1000-0-1500-crop.jpg?v=8a4f55aa27",
  },
  {
    name: "Robin Hood",
    category: "Movies",
    subcategory: "Disney Classics",
    channelNumber: 23,
    video: "https://archive.org/download/robin-hood-1986-vhs/Robin%20Hood%20%281986%20VHS%29.mp4",
    description: "Disney's animated Robin Hood as a cunning fox outwits Prince John.",
    duration: 83,
    releaseYear: 1973,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/23952/hFKwLF3AENNdOLccAFMxqjzKmEPqVYqJBsghCpOL.webp",
  },
  {
    name: "My Girl Friday",
    category: "Movies",
    subcategory: "Romance & Comedy",
    channelNumber: 24,
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
    channelNumber: 25,
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
    channelNumber: 26,
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
    channelNumber: 27,
    video: "https://archive.org/download/tbyool435345435110/tbyool435345435110.mp4",
    description: "",
    duration: 169,
    releaseYear: 1946,
    poster: "https://image.tmdb.org/t/p/original/gd5EoAU4MM57sW3vlWxJ0NMM8cV.jpg",
  },
  {
    name: "City of Angels",
    category: "Movies",
    subcategory: "Drama & Romance",
    channelNumber: 28,
    video: "https://archive.org/download/city-of-angels_202401/City%20of%20Angels.mp4",
    description: "",
    duration: 128,
    releaseYear: 1998,
    poster: "https://image.tmdb.org/t/p/original/iuzxpUjHsbQJXV3kB9ZAdCimM60.jpg",
  },
  {
    name: "Good Will Hunting",
    category: "Movies",
    subcategory: "Drama & Romance",
    channelNumber: 29,
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
    channelNumber: 30,
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
    channelNumber: 31,
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
    channelNumber: 32,
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
    channelNumber: 33,
    video: "https://archive.org/download/star-wars-1977/Star-wars_1977.mp4",
    description: "The epic space opera that began a cultural phenomenon.",
    duration: 121,
    releaseYear: 1977,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/159/M9MM8ok5tph0fPXoBUP1iB0jL8jB6wXG7hRGODxD.webp",
  },
  {
    name: "The Lost World: Jurassic Park",
    category: "Movies",
    subcategory: "Fantasy & Sci-Fi",
    channelNumber: 34,
    video: "https://archive.org/download/ju-ra-ss-ic-pa-rk/JuRaSsIcPaRk2.mp4",
    description: "A team faces danger on an island of wild dinosaurs.",
    duration: 129,
    releaseYear: 1997,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/8032/PzUycNmvjSLt8nojOEK3Yf9zw3YDVKv3F7Izh3aC.webp",
  },
  {
    name: "War of the Worlds",
    category: "Movies",
    subcategory: "Fantasy & Sci-Fi",
    channelNumber: 35,
    video: "https://archive.org/download/war-of-the-worlds_202206/War%20of%20the%20Worlds.ia.mp4",
    description: "Ray Ferrier, a dockworker, is ready to spend a weekend together with his children. However, an alien tripod descends on Earth threatening to wipe out humanity.",
    duration: 123,
    releaseYear: 2005,
    poster: "https://image.tmdb.org/t/p/original/6Biy7R9LfumYshur3YKhpj56MpB.jpg",
  },
  {
    name: "The Time Machine",
    category: "Movies",
    subcategory: "Fantasy & Sci-Fi",
    channelNumber: 36,
    video: "https://archive.org/download/the-time-machine-1978-time-travel-sci-fi/The%20Time%20Machine%20%281978%20Time%20Travel%20SciFi%29.mp4",
    description: "A thrilling adaptation of H.G. Wells' classic time-travel adventure.",
    duration: 99,
    releaseYear: 1978,
    poster: "https://m.media-amazon.com/images/M/MV5BNTYwNDQ0NjYtNTgwMC00MTI4LWI1YWItMmQ4ODIwNDQ3ZWNmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "The Amityville Horror",
    category: "Movies",
    subcategory: "Horror & Thriller",
    channelNumber: 37,
    video: "https://archive.org/download/amityville-horror/Amityville%20horror.mp4",
    description: "",
    duration: 118,
    releaseYear: 1979,
    poster: "https://a.ltrbxd.com/resized/film-poster/4/5/2/9/3/45293-the-amityville-horror-0-1000-0-1500-crop.jpg?v=b0b2d6c810",
  },
  {
    name: "The Thing",
    category: "Movies",
    subcategory: "Horror & Thriller",
    channelNumber: 38,
    video: "https://archive.org/download/the-thing-1982-vhs/The%20Thing%201982%20VHS%20.mp4",
    description: "A tense sci-fi horror about an alien shape-shifter.",
    duration: 109,
    releaseYear: 1982,
    poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/5519/lnMC0cOyI16BFfZVaIMFRtEx9Cb8eab4wMvqgYNW.webp",
  },
  {
    name: "Children of the Corn",
    category: "Movies",
    subcategory: "Horror & Thriller",
    channelNumber: 39,
    video: "https://archive.org/download/children-of-the-corn-1992-vhs/Children%20of%20the%20Corn%20%281992%20VHS%29.ia.mp4",
    description: "",
    duration: 92,
    releaseYear: 1984,
    poster: "https://a.ltrbxd.com/resized/sm/upload/mj/ns/kg/kd/miJTMLdgrrgAs7blRjLutfLha9M-0-1000-0-1500-crop.jpg?v=607ce13732",
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
        video: "https://archive.org/download/zodiaco_202109/1-%20LAS%20LEYENDAS%20DE%20UNA%20NUEVA%20ERA.mp4",
      },
      {
        name: "Caballeros del zodíaco 002",
        duration: 24,
        video: "https://archive.org/download/zodiaco_202109/2-%20CUANDO%20SEIYA%20VISTE%20LA%20ARMADURA%20DE%20PEGASO.mp4",
      },
      {
        name: "Caballeros del zodíaco 003",
        duration: 24,
        video: "https://archive.org/download/zodiaco_202109/3-%20EL%20GUERRERO%20DE%20LOS%20HIELOS.mp4",
      },
      {
        name: "Caballeros del zodíaco 004",
        duration: 24,
        video: "https://archive.org/download/zodiaco_202109/4-%20EL%20CABALLERO%20DRAGON.mp4",
      },
      {
        name: "Caballeros del zodíaco 005",
        duration: 24,
        video: "https://archive.org/download/zodiaco_202109/5-%20LA%20RESURRECCION%20DEL%20DRAGON.mp4",
      },
      {
        name: "Caballeros del zodíaco 006",
        duration: 24,
        video: "https://archive.org/download/zodiaco_202109/6-%20EL%20GUERRERO%20QUE%20VIENE%20DEL%20INFIERNO.mp4",
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
    name: "Red Dwarf",
    category: "Shows",
    subcategory: "Red Dwarf",
    channelNumber: 401,
    episodes: [
      {
        name: "Red Dwarf I: Byte One - The End",
        duration: 90,
        video: "https://archive.org/download/red-dwarf-1-byte-01-the-end-full-uk-vhs-tape-1993/Red%20Dwarf%201%20-%20Byte%2001%20-%20The%20End%20%28Full%20UK%20VHS%20Tape%201993%29.mp4",
      },
      {
        name: "Red Dwarf I: Byte Two - Confidence & Paranoia",
        duration: 89,
        video: "https://archive.org/download/red-dwarf-1-byte-02-confidence-paranoia-full-uk-vhs-tape-1993/Red%20Dwarf%201%20-%20Byte%2002%20-%20Confidence%20%26%20Paranoia%20%28Full%20UK%20VHS%20Tape%201993%29.mp4",
      },
      {
        name: "Red Dwarf II: Byte One - Kryten",
        duration: 87,
        video: "https://archive.org/download/red-dwarf-2-byte-01-kryten-1992-uk-vhs/Red%20Dwarf%202%20-%20Byte%2001%20-%20Kryten%20%281992%20UK%20VHS%29.mp4",
      },
      {
        name: "Red Dwarf II: Byte Two - Stasis Leak",
        duration: 89,
        video: "https://archive.org/download/red-dwarf-2-byte-02-stasis-leak-1992-uk-vhs/Red%20Dwarf%202%20-%20Byte%2002%20-%20Stasis%20Leak%20%281992%20UK%20VHS%29.mp4",
      },
      {
        name: "Red Dwarf III: Byte One - Backwards",
        duration: 84,
        video: "https://archive.org/download/red-dwarf-3-byte-01-backwards-1991-uk-vhs/Red%20Dwarf%203%20-%20Byte%2001%20-%20Backwards%20%281991%20UK%20VHS%29.mp4",
      },
      {
        name: "Red Dwarf III: Byte Two - Timeslides",
        duration: 83,
        video: "https://archive.org/download/red-dwarf-3-byte-02-timeslides-1991-uk-vhs/Red%20Dwarf%203%20-%20Byte%2002%20-%20Timeslides%20%281991%20UK%20VHS%29.mp4",
      },
    ],
    description: "",
    releaseYear: 1989,
    poster: "https://welleyenever.com/wp-content/uploads/2019/03/fullsizeoutput_4404.jpeg",
  },
  {
    name: "The Young Ones",
    category: "Shows",
    subcategory: "The Young Ones",
    channelNumber: 402,
    episodes: [
      {
        name: "S01E01 - Demolition",
        duration: 33,
        video: "https://archive.org/download/the-young-ones-s-01-ep-04-bomb/The%20Young%20Ones%20-%20S01EP01%20Demolition.MP4",
      },
      {
        name: "S01E02 - Oil",
        duration: 32,
        video: "https://archive.org/download/the-young-ones-s-01-ep-04-bomb/The%20Young%20Ones%20-%20S01EP02%20Oil.MP4",
      },
      {
        name: "S01E03 - Boring",
        duration: 35,
        video: "https://archive.org/download/the-young-ones-s-01-ep-04-bomb/The%20Young%20Ones%20-%20S01EP03%20Boring.MP4",
      },
      {
        name: "S01E04 - Bomb",
        duration: 35,
        video: "https://archive.org/download/the-young-ones-s-01-ep-04-bomb/The%20Young%20Ones%20-%20S01EP04%20Bomb.mp4",
      },
      {
        name: "S01E05 - Interesting",
        duration: 32,
        video: "https://archive.org/download/the-young-ones-s-01-ep-04-bomb/The%20Young%20Ones%20-%20S01EP05%20Interesting.mp4",
      },
      {
        name: "S01E06 - Flood",
        duration: 30,
        video: "https://archive.org/download/the-young-ones-s-01-ep-04-bomb/The%20Young%20Ones%20-%20S01EP06%20Flood.mp4",
      },
      {
        name: "S02E01 - Bambi",
        duration: 35,
        video: "https://archive.org/download/the-young-ones-s-01-ep-04-bomb/The%20Young%20Ones%20-%20S02EP01%20Bambi.mp4",
      },
      {
        name: "S02E02 - Cash",
        duration: 34,
        video: "https://archive.org/download/the-young-ones-s-01-ep-04-bomb/The%20Young%20Ones%20-%20S02EP02%20Cash.mp4",
      },
      {
        name: "S02E03 - Nasty",
        duration: 35,
        video: "https://archive.org/download/the-young-ones-s-01-ep-04-bomb/The%20Young%20Ones%20-%20S02EP03%20Nasty.mp4",
      },
      {
        name: "S02E04 - Time",
        duration: 34,
        video: "https://archive.org/download/the-young-ones-s-01-ep-04-bomb/The%20Young%20Ones%20-%20S02EP04%20Time.mp4",
      },
      {
        name: "S02E05 - Sick",
        duration: 34,
        video: "https://archive.org/download/the-young-ones-s-01-ep-04-bomb/The%20Young%20Ones%20-%20S02EP05%20Sick.mp4",
      },
      {
        name: "S02E06 - Summer Holiday",
        duration: 35,
        video: "https://archive.org/download/the-young-ones-s-01-ep-04-bomb/The%20Young%20Ones%20-%20S02EP06%20Summer%20Holiday.mp4",
      },
    ],
    description: "",
    releaseYear: 1982,
    poster: "https://i.ebayimg.com/images/g/EVIAAOSwnpZh0EBv/s-l1200.jpg",
  },
  {
    name: "Fawlty Towers",
    category: "Shows",
    subcategory: "Fawlty Towers",
    channelNumber: 403,
    episodes: [
      {
        name: "S02E01 | S02E05 | S02E06",
        duration: 95,
        video: "https://archive.org/download/fawlty-towers-vhs-set-bbc-video-cbs-fox-1986/Basil%20The%20Rat.mp4",
      },
      {
        name: "S01E01 | S01E04 | S01E06",
        duration: 92,
        video: "https://archive.org/download/fawlty-towers-vhs-set-bbc-video-cbs-fox-1986/The%20Germans.mp4",
      },
      {
        name: "S01E05 | S02E03 | S02E04",
        duration: 93,
        video: "https://archive.org/download/fawlty-towers-vhs-set-bbc-video-cbs-fox-1986/The%20Kipper%20And%20The%20Corpse.mp4",
      },
      {
        name: "S01E02 | S01E03 | S02E02",
        duration: 99,
        video: "https://archive.org/download/fawlty-towers-vhs-set-bbc-video-cbs-fox-1986/The%20Psychiatrist.mp4",
      },
    ],
    description: "",
    releaseYear: 1986,
    poster: "https://m.media-amazon.com/images/M/MV5BYWNlZGU4NWMtNjdmOS00MDBmLTkwMmYtY2M3ZTU0YzJiNDk1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  // Add more TV shows here...
  
];

// Export for use in GitHub Pages
if (typeof module !== "undefined") {
  module.exports = channels;
}
