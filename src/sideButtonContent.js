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
    title.textContent = info[i].title;

    let duration = document.createElement("div");
    duration.textContent = info[i].duration;

    let episodes = document.createElement("div");
    episodes.textContent = info[i].episodes;

    let type = document.createElement("div");
    type.textContent = info[i].type;

    let description = document.createElement("div");
    description.textContent = info[i].description;

    let score = document.createElement("div");
    score.textContent = info[i].score;

    let demographics = document.createElement("div");
    demographics.textContent = info[i].demographics;

    let image = document.createElement("img");
    image.src = info[i].image;
    image.classList.add("photos");
    const index = i;
    let addButton = document.createElement("button");
    addButton.textContent = "remove";
    addButton.classList.add("addButton");
    addButton.addEventListener("click", () => {
      remove(index);
    });

    card.append(title, addButton, image, duration, episodes);
    card.classList.add("card");
    container.appendChild(card);
  }
}
