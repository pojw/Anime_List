import { load } from "./functionailty/save";

export function mathLoader() {
  let topics = load("sideButtons");
  let math = topics[4];

  let container = document.getElementById("content");
  container.textContent = "";
  let question = document.createElement("div");
  question.classList.add("questions");
  for (let i = 1; i < math.length; i++) {
    let div = document.createElement("div");
    div.textContent = `Question wrong was ${math[i]}`;
    question.append(div);
  }
  container.append(question);
}
