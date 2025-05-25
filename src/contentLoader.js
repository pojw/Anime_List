import { save } from "./functionailty/save";
import { load } from "./functionailty/save";
import { add } from "./addButton";
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
    //load information
    if (!object[keys[i]]) {
      continue;
    }
    if (!object[keys[i]]) {
      console.log("none");
      break;
    }

    let card = document.createElement("div");

    let title = document.createElement("div");
    title.textContent = `Title: ${object[keys[i]].title}`;

    let duration = document.createElement("div");
    duration.textContent = `Duration: ${object[keys[i]].duration}`;

    let episodes = document.createElement("div");

    let type = document.createElement("div");
    type.textContent = `Genre: ${object[keys[i]].type}`;

    let description = document.createElement("div");
    description.textContent = `Description: ${object[keys[i]].description}`;
    description.classList.add("description");

    let score = document.createElement("div");
    score.textContent = `Score ${object[keys[i]].score} /10`;

    let demographics = document.createElement("div");
    demographics.textContent = object[keys[i]].demographics;

    let image = document.createElement("img");
    image.src = object[keys[i]].image;
    image.classList.add("photos");
    const index = i;
    let addButton = document.createElement("button");
    addButton.textContent = "add";
    addButton.classList.add("addButton");
    addButton.addEventListener("click", () => {
      add(object[keys[i]]);
    });
    let right = document.createElement("div");
    right.append(image);
    right.classList.add("right");
    let cardTop = document.createElement("div");
    cardTop.append(title, addButton);
    cardTop.classList.add("cardTop");
    if (object[keys[i]].type == "TV") {
      episodes.textContent = `Total Episodes ${object[keys[i]].episodes}`;
      card.append(cardTop, duration, episodes, type, score, description);
    } else {
      card.append(cardTop, duration, type, score, description);
    }

    card.classList.add("left");
    let cardFull = document.createElement("div");
    cardFull.append(right, card);
    cardFull.classList.add("card");
    container.appendChild(cardFull);
  }
}
