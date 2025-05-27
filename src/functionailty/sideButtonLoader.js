import { save } from "./save";
import { load } from "./save";
import { search } from "../search";
import { sideButtonsContent } from "../sideButtonContent";
import { sideButtonsStorage } from "../sideButtonStorage";
import { mathPopUp } from "../mathPopUp";
import { mathLoader } from "../mathLoader";
export function sideButtonsLoader() {
  let sideButtons = load("sideButtons");
  let sideBar = document.getElementById("sideBar");
  sideBar.textContent = "";
  // favorite button
  let favoirtes = document.createElement("button");
  favoirtes.textContent = sideButtons[0][0];
  favoirtes.classList.add("sideButton");
  favoirtes.addEventListener("click", function () {
    mathPopUp(() => {
      sideButtonsStorage("favorites");
      sideButtonsContent();
    });
  });
  //top animes
  let topAnimes = document.createElement("button");
  topAnimes.textContent = sideButtons[1][0];
  topAnimes.classList.add("sideButton");

  topAnimes.addEventListener("click", function () {
    mathPopUp(() => {
      sideButtonsStorage("topAnimes");
      search();
    });
  });

  //New animes
  let newAnimes = document.createElement("button");
  newAnimes.textContent = sideButtons[2][0];
  newAnimes.classList.add("sideButton");

  newAnimes.addEventListener("click", function () {
    mathPopUp(() => {
      sideButtonsStorage("newAnimes");
      search();
    });
  });

  //random

  let random = document.createElement("button");
  random.textContent = sideButtons[3][0];
  random.classList.add("sideButton");

  random.addEventListener("click", function () {
    mathPopUp(() => {
      sideButtonsStorage("random");
      search();
    });
  });

  //math Topidw
  let math = document.createElement("button");
  math.textContent = sideButtons[4][0];
  math.classList.add("sideButton");

  math.addEventListener("click", function () {
    sideButtonsStorage("math");
    mathLoader();
  });
  let reset = document.createElement("button");
  reset.textContent = sideButtons[5][0];
  reset.classList.add("sideButton");
  reset.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
  sideBar.append(favoirtes, topAnimes, newAnimes, random, math, reset);
}
