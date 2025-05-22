import { contentLoader } from "./contentLoader";

export function search(title, page, genre) {
  fetch(
    `https://api.jikan.moe/v4/anime?q=${title}&limit=9&page=${page}&type=${genre}`
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
