//main file
import { save } from "./functionailty/save";
import { sideButtons } from "./functionailty/sideButtons";
import "./style.css";
import { contentLoader } from "./contentLoader";
import { sideButtonsLoader } from "./functionailty/sideButtonLoader";
//
let page = 1; //curpage
let title = "One piece"; // user input
let limit = 10; //result per page

sideButtons();
sideButtonsLoader();
save();
fetch(`https://api.jikan.moe/v4/anime?q=${title}&limit=${limit}&page=${page}`)
  .then((res) => res.json())
  .then((json) => json.data)
  .then((data) => {
    let object = {};
    for (let i = 0; i < data.length; i++) {
      object[keys[i]] = {
        title: data[i].title,
        duration: data[i].duration,
        episodes: data[i].episodes,
        type: data[i].type,
        description: data[i].synopsis,
        score: data[i].score,
        demographics: data[i].demographics[0].name,
        image: data[i].images.jpg.image_url,
      };
    }

    contentLoader(object);
    console.log(object[keys[0]]);
    console.log(data);
  });
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
]; //vvairables/ options

let order = "score"; //  order by socre or poultauirioy
let sort = "desc"; //dess or asc
let type = "anime"; // movie msuic

//releavant information for each thign
//images
//score
//titiel
//duration
//ep
//type
