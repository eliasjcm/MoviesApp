const movies = [
  {
    adult: false,
    backdrop_path: "/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg",
    genre_ids: [878, 28, 12],
    id: 580489,
    original_language: "en",
    original_title: "Venom: Let There Be Carnage",
    overview:
      "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
    popularity: 6972.003,
    poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    release_date: "2021-09-30",
    title: "Venom: Let There Be Carnage",
    video: false,
    vote_average: 7.2,
    vote_count: 4500,
  },
  {
    adult: false,
    backdrop_path: "/7ajHGIAYNMiIzejy1LJWdPrcAx8.jpg",
    genre_ids: [28, 35, 80, 53],
    id: 512195,
    original_language: "en",
    original_title: "Red Notice",
    overview:
      "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
    popularity: 4496.76,
    poster_path: "/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
    release_date: "2021-11-04",
    title: "Red Notice",
    video: false,
    vote_average: 6.8,
    vote_count: 2016,
  },
  {
    adult: false,
    backdrop_path: "/5RuR7GhOI5fElADXZb0X2sr9w5n.jpg",
    genre_ids: [16, 35, 10751, 14],
    id: 568124,
    original_language: "en",
    original_title: "Encanto",
    overview:
      "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
    popularity: 2579.114,
    poster_path: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    release_date: "2021-11-24",
    title: "Encanto",
    video: false,
    vote_average: 7.4,
    vote_count: 328,
  },
  {
    adult: false,
    backdrop_path: "/gSq4IvnsMKJQf0FaKn9bDE2Sggq.jpg",
    genre_ids: [16, 35, 10751],
    id: 585245,
    original_language: "en",
    original_title: "Clifford the Big Red Dog",
    overview:
      "As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.",
    popularity: 2509.512,
    poster_path: "/ygPTrycbMSFDc5zUpy4K5ZZtQSC.jpg",
    release_date: "2021-11-10",
    title: "Clifford the Big Red Dog",
    video: false,
    vote_average: 7.6,
    vote_count: 568,
  },
  {
    adult: false,
    backdrop_path: "/mFbS5TwN95BcSEfiztdchLgTQ0v.jpg",
    genre_ids: [28, 18, 36],
    id: 617653,
    original_language: "en",
    original_title: "The Last Duel",
    overview:
      "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.",
    popularity: 2326.27,
    poster_path: "/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg",
    release_date: "2021-10-13",
    title: "The Last Duel",
    video: false,
    vote_average: 7.6,
    vote_count: 917,
  },
  {
    adult: false,
    backdrop_path: "/1aHMaBE40pU77XUHqSi7FSCngQ2.jpg",
    genre_ids: [16, 878, 10751, 35],
    id: 482321,
    original_language: "en",
    original_title: "Ron's Gone Wrong",
    overview:
      "In a world where walking, talking, digitally connected bots have become children's best friends, an 11-year-old finds that his robot buddy doesn't quite work the same as the others do.",
    popularity: 1917.981,
    poster_path: "/gA9QxSravC2EVEkEKgyEmDrfL0e.jpg",
    release_date: "2021-10-15",
    title: "Ron's Gone Wrong",
    video: false,
    vote_average: 8.5,
    vote_count: 343,
  },
  {
    adult: false,
    backdrop_path: "/upOi9aVqPPky7Ba4GsiyFdjc82I.jpg",
    genre_ids: [37, 28, 53],
    id: 887767,
    original_language: "en",
    original_title: "Last Shoot Out",
    overview:
      "Soon after a newlywed learns that her husband had her father shot down, she flees from the Callahan ranch in fear. She's rescued by a gunman who safeguards her at a remote outpost as he staves off her husband's attempts to reclaim his bride.",
    popularity: 1483.724,
    poster_path: "/pvEtPxotI3POlVPvNxgrHJuDXfe.jpg",
    release_date: "2021-12-03",
    title: "Last Shoot Out",
    video: false,
    vote_average: 7.1,
    vote_count: 27,
  },
  {
    adult: false,
    backdrop_path: "/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg",
    genre_ids: [12, 28, 53],
    id: 370172,
    original_language: "en",
    original_title: "No Time to Die",
    overview:
      "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    popularity: 1474.837,
    poster_path: "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    release_date: "2021-09-29",
    title: "No Time to Die",
    video: false,
    vote_average: 7.6,
    vote_count: 2543,
  },
];

let movieGenres = new Map();
[
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
].forEach(({ id, name }) => {
  movieGenres.set(id, name);
});

export { movies, movieGenres };
