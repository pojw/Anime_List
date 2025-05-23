import { save } from "./save";
import { load } from "./save";

import { sideButtonsContent } from "../sideButtonContent";

export function sideButtonsLoader() {
  let sideButtons = load("sideButtons");
  let sideBar = document.getElementById("sideBar");
  sideBar.textContent = "";
  // favorite button
  let favoirtes = document.createElement("button");
  favoirtes.textContent = sideButtons[0][0];
  favoirtes.addEventListener("click", function () {
    sideButtonsContent();
  });
  //top animes
  let topAnimes = document.createElement("button");
  topAnimes.textContent = sideButtons[1][0];

  topAnimes.addEventListener("click", function () {
    sideButtonsContent();
  });

  //New animes
  let newAnimes = document.createElement("button");
  newAnimes.textContent = sideButtons[2][0];

  newAnimes.addEventListener("click", function () {
    sideButtonsContent();
  });

  //random

  let random = document.createElement("button");
  random.textContent = sideButtons[3][0];

  random.addEventListener("click", function () {
    sideButtonsContent();
  });

  //math Topidw
  let math = document.createElement("button");
  math.textContent = sideButtons[4][0];

  math.addEventListener("click", function () {
    sideButtonsContent();
  });
  sideBar.append(favoirtes, topAnimes, newAnimes, random, math);
}
