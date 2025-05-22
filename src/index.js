//main file
import { save } from "./functionailty/save";
import { sideButtons } from "./functionailty/sideButtons";
import "./style.css";
import { sideButtonsLoader } from "./functionailty/sideButtonLoader";
import { topBarFunctions } from "./topBarFunctions";
import { search } from "./search";
//

sideButtons();
sideButtonsLoader();
save();
topBarFunctions();

search("one peiece", 1, "");
//vvairables/ options

let order = "score"; //  order by socre or poultauirioy
let sort = "desc"; //dess or asc
let type = "anime"; // movie msuic

//releavant information for each thign
//images
//score
//titiel
//duration
//ep
//type
