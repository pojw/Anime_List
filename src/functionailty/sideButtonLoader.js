import { save } from "./save";
import { load } from "./save";

export function sideButtonsLoader() {
  let sideButtons = load("sideButtons");

  let sideBar = document.getElementById("sideBar");
  for (let i = 0; i < sideButtons.length; i++) {
    let btn = document.createElement("button");
    btn.addEventListener("click", function () {
      console.log(sideButtons[i]);
    });
    btn.textContent = sideButtons[i][0];
    sideBar.appendChild(btn);
    console.log("okay");
  }
  save("sideButtons", sideButtons);
  console.log(sideButtons);
}
