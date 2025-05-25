import { save } from "./functionailty/save";
import { load } from "./functionailty/save";
import { remove } from "./remove";
export function sideButtonsContent() {
  let info = load("sideButtons")[0];
  let currentPage = load("currentPage");
  let container = document.getElementById("content");
  container.textContent = "";
  let i = 9 * currentPage - 8;
  for (; i <= currentPage * 9; i++) {
    //load information
    if (!info[i]) {
      continue;
    }
    if (info.length == 1) {
      console.log("none");
      break;
    }

    let card = document.createElement("div");

    let title = document.createElement("div");
    title.textContent = `Title: ${info[i].title}`;

    let duration = document.createElement("div");
    duration.textContent = `Duration: ${info[i].duration}`;

    let episodes = document.createElement("div");

    let type = document.createElement("div");
    type.textContent = `Genre: ${info[i].type}`;

    let description = document.createElement("div");
    description.textContent = `Description: ${info[i].description}`;
    description.classList.add("description");

    let score = document.createElement("div");
    score.textContent = `Score ${info[i].score} /10`;

    let demographics = document.createElement("div");
    demographics.textContent = info[i].demographics;

    let image = document.createElement("img");
    image.src = info[i].image;
    image.classList.add("photos");
    const index = i;
    let addButton = document.createElement("button");
    addButton.textContent = "remove";
    addButton.classList.add("remove");
    addButton.addEventListener("click", () => {
      remove(index);
    });
    let right = document.createElement("div");
    right.append(image);
    right.classList.add("right");
    let cardTop = document.createElement("div");
    cardTop.append(title, addButton);
    cardTop.classList.add("cardTop");
    if (info[i].type == "TV") {
      episodes.textContent = `Total Episodes ${info[i].episodes}`;
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
