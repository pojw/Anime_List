import { save } from "./functionailty/save";
import { load } from "./functionailty/save";

export function sideButtonsStorage(thing) {
  let list = [
    "favorites",
    "topAnimes",
    "newAnimes",
    "random",
    "math",
    "search",
  ];
  for (let i = 0; i < list.length; i++) {
    save(list[i], false);
  }
  save(thing, true);
  save("currentPage", 1);
}
