import { contentLoader } from "./contentLoader";
import { load } from "./functionailty/save";
export function search(title) {
  let page = load("currentPage");
  let genre = load("genre");
  let sorting = load("sorting");
  fetch(
    `https://api.jikan.moe/v4/anime?q=${title}&limit=9&page=${page}&type=${genre}&order_by=title&sort=${sorting}`
  )
    .then((res) => res.json())
    .then((json) => json.data)
    .then((data) => {
      let object = {};
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

      contentLoader(object);
      console.log(object[keys[0]]);
      console.log(data);
    });
}
