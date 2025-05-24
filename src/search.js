import { contentLoader } from "./contentLoader";
import { load } from "./functionailty/save";
export function search() {
  let title = load("title");
  let page = load("currentPage");
  let genre = load("genre");
  let sorting = load("sorting");
  let url = `https://api.jikan.moe/v4/anime?q=${title}&limit=9&page=${page}&type=${genre}&order_by=title&sort=${sorting}`;
  let random = load("random");
  let topAnimes = load("topAnimes");
  let newAnimes = load("newAnimes");

  if (topAnimes == true) {
    url = `https:api.jikan.moe/v4/anime?order_by=score&sort=desc&limit=9&page=1&type=tv
`;
  }
  if (random == true) {
    url = `https://api.jikan.moe/v4/random/anime
`;
  }
  if (newAnimes == true) {
    url = `https://api.jikan.moe/v4/anime?order_by=start_date&limit=9&sort=desc
`;
  }
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)
    .then((data) => {
      let object = {};

      if (random == false) {
        const keys = [
          "first",
          "second",
          "third",
          "fourth",
          "fifth",
          "sixth",
          "seventh",
          "eighth",
          "ninth",
          "tenth",
        ];
        for (let i = 0; i < data.length; i++) {
          object[keys[i]] = {
            title: data[i].title,
            duration: data[i].duration,
            episodes: data[i].episodes,
            type: data[i].type,
            description: data[i].synopsis,
            score: data[i].score,
            demographics: data[i].demographics?.[0]?.name || "N/A",
            image: data[i].images.jpg.image_url,
          };
        }
      } else {
        object["first"] = {
          title: data.title,
          duration: data.duration,
          episodes: data.episodes,
          type: data.type,
          description: data.synopsis,
          score: data.score,
          demographics: data.demographics?.[0]?.name || "N/A",
          image: data.images.jpg.image_url,
        };
      }
      contentLoader(object);
    });
}
