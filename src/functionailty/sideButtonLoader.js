import { save } from "./save";
import { load } from "./save";
import { search } from "../search";
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
    save("topAnimes", true);
    search();
    save("topAnimes", false);
  });

  //New animes
  let newAnimes = document.createElement("button");
  newAnimes.textContent = sideButtons[2][0];

  newAnimes.addEventListener("click", function () {
    save("newAnimes", true);
    search();
    save("newAnimes", false);
  });

  //random

  let random = document.createElement("button");
  random.textContent = sideButtons[3][0];

  random.addEventListener("click", function () {
    save("random", true);
    search();
    save("random", false);
  });

  //math Topidw
  let math = document.createElement("button");
  math.textContent = sideButtons[4][0];

  math.addEventListener("click", function () {
    sideButtonsContent();
  });
  sideBar.append(favoirtes, topAnimes, newAnimes, random, math);
}
