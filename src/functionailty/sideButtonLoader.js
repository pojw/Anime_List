import { save } from "./save";
import { load } from "./save";

import { sideButtonsContent } from "../sideButtonContent";

export function sideButtonsLoader() {
  let sideButtons = load("sideButtons");
  console.log(sideButtons[0]);
  let sideBar = document.getElementById("sideBar");
  for (let i = 0; i < sideButtons.length; i++) {
    let btn = document.createElement("button");
    btn.addEventListener("click", function () {
      sideButtonsContent();
    });
    btn.textContent = sideButtons[i][0];
    sideBar.appendChild(btn);
    console.log("okay");
  }
  console.log(sideButtons);
}
