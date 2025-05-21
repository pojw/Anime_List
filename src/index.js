//main file
import { save } from "./functionailty/save";
import { sideButtons } from "./functionailty/sideButtons";
import "./style.css";
import { contentLoader } from "./contentLoader";
import { sideButtonsLoader } from "./functionailty/sideButtonLoader";
//

sideButtons();
sideButtonsLoader();
save();
fetch("https://api.jikan.moe/v4/anime?q=one peice ball&limit=10&page=1")
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
let title = ""; // user input
let page = 1; //curpage
let limit = 10; //result per page

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
