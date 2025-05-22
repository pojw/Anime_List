import { save } from "./functionailty/save";
import { load } from "./functionailty/save";

export function add(card) {
  let sideButtons = load("sideButtons");
  let favoirtes = sideButtons[0];
  favoirtes.push(card);
  sideButtons[0] = favoirtes;

  save("sideButtons", sideButtons);
  console.log(favoirtes);
}
