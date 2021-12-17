const shows = [
  {
    backdrop_path: "/1R68vl3d5s86JsS2NPjl8UoMqIS.jpg",
    first_air_date: "2021-11-24",
    genre_ids: [10759, 18],
    id: 88329,
    name: "Hawkeye",
    origin_country: ["US"],
    original_language: "en",
    original_name: "Hawkeye",
    overview:
      "Former Avenger Clint Barton has a seemingly simple mission: get back to his family for Christmas. Possible? Maybe with the help of Kate Bishop, a 22-year-old archer with dreams of becoming a superhero. The two are forced to work together when a presence from Barton’s past threatens to derail far more than the festive spirit.",
    popularity: 4413.324,
    poster_path: "/pqzjCxPVc9TkVgGRWeAoMmyqkZV.jpg",
    vote_average: 8.5,
    vote_count: 762,
  },
  {
    backdrop_path: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
    first_air_date: "2021-10-12",
    genre_ids: [10765, 80],
    id: 90462,
    name: "Chucky",
    origin_country: ["US"],
    original_language: "en",
    original_name: "Chucky",
    overview:
      "After a vintage Chucky doll turns up at a suburban yard sale, an idyllic American town is thrown into chaos as a series of horrifying murders begin to expose the town’s hypocrisies and secrets. Meanwhile, the arrival of enemies — and allies — from Chucky’s past threatens to expose the truth behind the killings, as well as the demon doll’s untold origins.",
    popularity: 2707.23,
    poster_path: "/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg",
    vote_average: 8,
    vote_count: 2648,
  },
  {
    backdrop_path: "/1P3QtW1IkivqDrKbbwuR0zCYIf8.jpg",
    first_air_date: "2021-11-18",
    genre_ids: [10765, 18, 10759],
    id: 71914,
    name: "The Wheel of Time",
    origin_country: ["US"],
    original_language: "en",
    original_name: "The Wheel of Time",
    overview:
      "Follow Moiraine, a member of the shadowy and influential all-female organization called the “Aes Sedai” as she embarks on a dangerous, world-spanning journey with five young men and women. Moiraine believes one of them might be the reincarnation of an incredibly powerful individual, whom prophecies say will either save humanity or destroy it.",
    popularity: 2133.624,
    poster_path: "/mpgDeLhl8HbhI03XLB7iKO6M6JE.jpg",
    vote_average: 8.1,
    vote_count: 567,
  },
  {
    backdrop_path: "/pkOSjcllDSs4WP9i8DGkw9VgF5Q.jpg",
    first_air_date: "2015-07-06",
    genre_ids: [10764, 10751],
    id: 63452,
    name: "Wer weiß denn sowas?",
    origin_country: ["DE"],
    original_language: "de",
    original_name: "Wer weiß denn sowas?",
    overview: "",
    popularity: 2031.422,
    poster_path: "/abKjah96esLWObidBcWmvKJv61E.jpg",
    vote_average: 8,
    vote_count: 7,
  },
  {
    backdrop_path: "/pCeDvEx7Fg5Lk5ufc6tILx13Lk6.jpg",
    first_air_date: "2018-10-01",
    genre_ids: [16, 10762],
    id: 82728,
    name: "Bluey",
    origin_country: ["AU"],
    original_language: "en",
    original_name: "Bluey",
    overview:
      "Bluey is an inexhaustible six year-old Blue Heeler dog, who loves to play and turns everyday family life into extraordinary adventures, developing her imagination as well as her mental, physical and emotional resilience.",
    popularity: 1907.046,
    poster_path: "/9p4pNoGcuyCfHcGWKNrTopqMWtq.jpg",
    vote_average: 7.1,
    vote_count: 20,
  },
  {
    backdrop_path: "/yfXSvNfF43S0cxpxCEKaU17yZ64.jpg",
    first_air_date: "1983-09-19",
    genre_ids: [10751],
    id: 2778,
    name: "Wheel of Fortune",
    origin_country: ["US"],
    original_language: "en",
    original_name: "Wheel of Fortune",
    overview:
      "This game show sees contestants solve word puzzles, similar to those used in Hangman, to win cash and prizes determined by spinning a giant carnival wheel.",
    popularity: 1790.504,
    poster_path: "/2fvAIyVfFHQdhJ7OsJWuMlF7836.jpg",
    vote_average: 7.1,
    vote_count: 36,
  },
  {
    backdrop_path: "/wlvnysn2hHctqP5JUPiUE2OsHA.jpg",
    first_air_date: "2017-12-01",
    genre_ids: [35, 10767],
    id: 96502,
    name: "Natholdets julekalender",
    origin_country: ["DK"],
    original_language: "da",
    original_name: "Natholdets julekalender",
    overview: "",
    popularity: 1609.695,
    poster_path: "/gFy3KtzEuipjQv9SNRvmSEA4N6D.jpg",
    vote_average: 0,
    vote_count: 0,
  },
  {
    backdrop_path: "/vjcuLy14kxgxCaBToAudZWrGQQh.jpg",
    first_air_date: "2021-01-18",
    genre_ids: [],
    id: 117031,
    name: "People Puzzler",
    origin_country: [],
    original_language: "en",
    original_name: "People Puzzler",
    overview:
      'Three lucky contestants put their pop culture knowledge to the test to complete iconic, People Puzzler crosswords. The player with the most points at the end of three rounds wins the game and goes on to play the "Fast Puzzle Round" for an enormous cash prize.',
    popularity: 1503.183,
    poster_path: "/gELQSCY5KKIGQAmOHbcgcRGNlp5.jpg",
    vote_average: 6.2,
    vote_count: 5,
  },
];
let showGenres = new Map();
[
  {
    id: 10759,
    name: "Action & Adventure",
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
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  },
].forEach(({ id, name }) => {
  showGenres.set(id, name);
});

export { shows, showGenres };
