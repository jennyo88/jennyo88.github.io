const channels = [
  /* { name: " (xxxx)", category: "", subcategory: "", video: "" }, */
  { name: "Beneath the Planet of the Apes (1970)", category: "Movies", subcategory: "1970s", video: "https://archive.org/download/beneath-the-planet-of-the-apes_202208/BeneathThePlanetOfTheApes.mp4" },
  { name: "The Aristocats (1970)", category: "Movies", subcategory: "1970s", video: "https://archive.org/download/the-aristocats/The%20Aristocats.mp4" },
  { name: "Star Wars (1977)", category: "Movies", subcategory: "1970s", video: "https://dn720403.ca.archive.org/0/items/star-wars-1977_202301/Star%20Wars%20%281977%29.mp4" },
  { name: "Superman: The Movie (1978)", category: "Movies", subcategory: "1970s", video: "https://archive.org/download/superman-the-movie-1978-from-the-1979-wci-home-video-vhs/Superman%20The%20Movie%20%281978%29%20%5Bfrom%20the%201979%20WCI%20Home%20Video%20VHS%5D.mp4" },
  { name: "The Time Machine (1978)", category: "Movies", subcategory: "1970s", video: "https://archive.org/download/the-time-machine-1978-time-travel-sci-fi/The%20Time%20Machine%20%281978%20Time%20Travel%20SciFi%29.mp4" },
  { name: "Monty Python's Life of Brian (1979)", category: "Movies", subcategory: "1970s", video: "https://archive.org/download/full-vhs-monty-pythons-life-of-brian-1979-wci-home-video-1980-vhs/FULL%20VHS%20Monty%20Python%27s%20Life%20of%20Brian%20%281979%29%20%5BWCI%20Home%20Video%5D%20%281980%20VHS%29.mp4" },
  { name: "Superman II (1980)", category: "Movies", subcategory: "1980s", video: "https://archive.org/download/full-vhs-superman-ii-1981-warner-home-video-rental-edition/FULL%20VHS%20Superman%20II%20%281981%29%20%5BWarner%20Home%20Video%5D%20%28Rental%20Edition%29.mp4" },
  { name: "The Thing (1982)", category: "Movies", subcategory: "1980s", video: "https://archive.org/download/the-thing-1982-vhs/The%20Thing%201982%20VHS%20.mp4" },
  { name: "The Terminator (1984)", category: "Movies", subcategory: "1980s", video: "https://archive.org/download/the-terminator-1984_202206/The%20Terminator%20%281984%29.mp4" },
  { name: "Ghostbusters (1985)", category: "Movies", subcategory: "1980s", video: "https://archive.org/download/ghostbusters-from-the-original-vhs-release-in-1985/Ghostbusters%20from%20the%20Original%20VHS%20Release%20in%201985.ia.mp4" },
  { name: "Robin Hood (1986)", category: "Movies", subcategory: "1980s", video: "https://archive.org/download/robin-hood-1986-vhs/Robin%20Hood%20%281986%20VHS%29.mp4" },
  { name: "Hocus Pocus (1993)", category: "Movies", subcategory: "1990s", video: "https://archive.org/download/hocus-pocus_202312/Hocus%20Pocus.mp4" },
  { name: "Spice World (1998)", category: "Movies", subcategory: "1990s", video: "https://archive.org/download/spice-world_202208/SPICE%20WORLD.mp4" },
  { name: "The Matrix (1999)", category: "Movies", subcategory: "1990s", video: "https://archive.org/download/the-matrix-fullscreen/4.The%20Matrix%20FS%20%28VCD%29.mp4" },
  { name: "The Mummy (1999)", category: "Movies", subcategory: "1990s", video: "https://ia601201.us.archive.org/23/items/the-mummy_202312/The%20Mummy.mp4" },

  { name: "Kids WB (2001) Part 1", category: "Cartoons", subcategory: "WB", channelNumber: 101, video: "https://archive.org/download/kids-wb-cartoon-network-toonami-full-block-july-2001-woc-monster-rancher-batman-/Kids%20WB%20Cartoon%20Network%20Toonami%20Full%20Block%20July%202001%20WOC%20%28Monster%20Rancher%20Batman%20Beyond%20Pokemon%20Yu-Gi-Oh%20Dragon%20Ball%20Z%20Mobile%20Suit%20Gundam%20Cartoon%20Network%27s%20Toonami%20Block%20On%20Kids%20WB%20July%202001%20Full%20Recording%20WOC%29/VTS_01_1.mp4" },
  { name: "Kids WB (2001) Part 2", category: "Cartoons", subcategory: "WB", channelNumber: 101, video: "https://archive.org/download/kids-wb-cartoon-network-toonami-full-block-july-2001-woc-monster-rancher-batman-/Kids%20WB%20Cartoon%20Network%20Toonami%20Full%20Block%20July%202001%20WOC%20%28Monster%20Rancher%20Batman%20Beyond%20Pokemon%20Yu-Gi-Oh%20Dragon%20Ball%20Z%20Mobile%20Suit%20Gundam%20Cartoon%20Network%27s%20Toonami%20Block%20On%20Kids%20WB%20July%202001%20Full%20Recording%20WOC%29/VTS_01_2.mp4" },
  { name: "Kids WB (2001) Part 3", category: "Cartoons", subcategory: "WB", channelNumber: 101, video: "https://archive.org/download/kids-wb-cartoon-network-toonami-full-block-july-2001-woc-monster-rancher-batman-/Kids%20WB%20Cartoon%20Network%20Toonami%20Full%20Block%20July%202001%20WOC%20%28Monster%20Rancher%20Batman%20Beyond%20Pokemon%20Yu-Gi-Oh%20Dragon%20Ball%20Z%20Mobile%20Suit%20Gundam%20Cartoon%20Network%27s%20Toonami%20Block%20On%20Kids%20WB%20July%202001%20Full%20Recording%20WOC%29/VTS_01_3.mp4" },
  { name: "ABC Saturday Morning (1981) Part 1", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_1.mp4" },
  { name: "ABC Saturday Morning (1981) Part 2", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_2.mp4" },
  { name: "ABC Saturday Morning (1981) Part 3", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_3.mp4" },
  { name: "ABC Saturday Morning (1981) Part 4", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_4.mp4" },
  { name: "ABC Saturday Morning (1981) Part 5", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200929/ABC%20Saturday%20Morning%20Cartoons%2012-19-81%20WOC/VIDEO_TS/VTS_01_5.mp4" },
  { name: "ABC Saturday Morning (1986) Part 1", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200929_2234/ABC%20Saturday%20Morning%20Cartoons%2012-20-86%20WOC/VIDEO_TS/VTS_01_1.mp4" },
  { name: "ABC Saturday Morning (1986) Part 2", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200929_2234/ABC%20Saturday%20Morning%20Cartoons%2012-20-86%20WOC/VIDEO_TS/VTS_01_2.mp4" },
  { name: "ABC Saturday Morning (1986) Part 3", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200929_2234/ABC%20Saturday%20Morning%20Cartoons%2012-20-86%20WOC/VIDEO_TS/VTS_01_3.mp4" },
  { name: "ABC Saturday Morning (1989) Part 1", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_1.mp4" },
  { name: "ABC Saturday Morning (1989) Part 2", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_2.mp4" },
  { name: "ABC Saturday Morning (1989) Part 3", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_3.mp4" },
  { name: "ABC Saturday Morning (1989) Part 4", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_4.mp4" },
  { name: "ABC Saturday Morning (1989) Part 5", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-1_20200825/ABC%20Saturday%20Morning%20Cartoons%209-9-89%20WOC/VIDEO_TS/VTS_01_5.mp4" },
  { name: "ABC Saturday Morning (1993) Part 1", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_1.mp4" },
  { name: "ABC Saturday Morning (1993) Part 2", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_2.mp4" },
  { name: "ABC Saturday Morning (1993) Part 3", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_3.mp4" },
  { name: "ABC Saturday Morning (1993) Part 4", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_4.mp4" },
  { name: "ABC Saturday Morning (1993) Part 5", category: "Cartoons", subcategory: "ABC", channelNumber: 102, video: "https://archive.org/download/vts-01-2_20200824/ABC%20Saturday%20Morning%20Cartoons%20%208-21-93%20WOC/VIDEO_TS/VTS_01_5.mp4" },
  { name: "Candy Candy S01E01", category: "Anime", subcategory: "Candy Candy", video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D01.mp4" },
  { name: "Candy Candy S01E02", category: "Anime", subcategory: "Candy Candy", video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D02.mp4" },
  { name: "Candy Candy S01E03", category: "Anime", subcategory: "Candy Candy", video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D03.mp4" },
  { name: "Candy Candy S01E04", category: "Anime", subcategory: "Candy Candy", video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D04.mp4" },
  { name: "Candy Candy S01E05", category: "Anime", subcategory: "Candy Candy", video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D05.mp4" },
  { name: "Candy Candy S01E06", category: "Anime", subcategory: "Candy Candy", video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D06.mp4" },
  { name: "Candy Candy S01E07", category: "Anime", subcategory: "Candy Candy", video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D07.mp4" },
  { name: "Candy Candy S01E08", category: "Anime", subcategory: "Candy Candy", video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D08.mp4" },
  { name: "Candy Candy S01E09", category: "Anime", subcategory: "Candy Candy", video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D09.mp4" },
  { name: "Candy Candy S01E10", category: "Anime", subcategory: "Candy Candy", video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D010.mp4" },
  { name: "Candy Candy S01E11", category: "Anime", subcategory: "Candy Candy", video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D011.mp4" },
  { name: "Candy Candy S01E12", category: "Anime", subcategory: "Candy Candy", video: "https://archive.org/download/tauklv20210929anime1976candycandykyokomizukiyumikoigarashivoblat01p001/Anime/%281976%29%20Candy%20Candy%20%28Ky%C5%8Dko%20Mizuki%3B%20Yumiko%20Igarashi%E2%80%8E%29%20VOB%20%5BLAT%5D%2001/%281976%29%20Candy%20Candy%20COMPLETE%20LATiNO/Candy_Candy_Vol.1/CANDYCANDY_D012.mp4" },
  
];
