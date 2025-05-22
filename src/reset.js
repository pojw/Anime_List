//

import { sideButtons } from "./functionailty/sideButtons";
export function reset() {
  let reset = document.getElementById("reset");
  reset.addEventListener("click", () => {
    localStorage.clear();
    sideButtons();
    console.log("nice");
  });
}
