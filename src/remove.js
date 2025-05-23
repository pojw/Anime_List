import { load } from "./functionailty/save";
import { save } from "./functionailty/save";
import { sideButtonsContent } from "./sideButtonContent";
export function remove(index) {
  let sidebuttons = load("sideButtons");
  let favoirtes = sidebuttons[0];
  favoirtes.splice(index, 1);
  sidebuttons[0] = favoirtes;
  save("sideButtons", sidebuttons);
  sideButtonsContent();
}
