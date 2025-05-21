import { save } from "./functionailty/save";
import { load } from "./functionailty/save";

export function contentLoader(object) {
  //retrieve information needed
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
  //   let content = load("sideButtons")[index];
  let container = document.getElementById("content");
  container.textContent = "";
  console.log(Object.keys(object).length);

  //load information
  for (let i = 0; i < Object.keys(object).length; i++) {
    let card = document.createElement("div");

    let title = document.createElement("div");
    title.textContent = object[keys[i]].title;

    let duration = document.createElement("div");
    duration.textContent = object[keys[i]].duration;

    let episodes = document.createElement("div");
    episodes.textContent = object[keys[i]].episodes;

    let type = document.createElement("div");
    type.textContent = object[keys[i]].type;

    let description = document.createElement("div");
    description.textContent = object[keys[i]].description;

    let score = document.createElement("div");
    score.textContent = object[keys[i]].score;

    let demographics = document.createElement("div");
    demographics.textContent = object[keys[i]].demographics;
    //url change
    // let image = document.createElement("div");
    // image.textContent = object[keys[i]].image;

    card.append(title, duration, episodes);
    card.classList.add("card");
    container.appendChild(card);
  }
}
