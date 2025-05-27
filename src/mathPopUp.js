import { simplify, equal, evaluate } from "mathjs";
import { save } from "./functionailty/save";
import { load } from "./functionailty/save";
import { sideButtons } from "./functionailty/sideButtons";

export function mathPopUp(callbackIfCorrect) {
  let random = Math.floor(Math.random() * questionBank.length);
  let currentQuesiton = questionBank[random];

  let popUp = document.getElementById("modal");
  let question = document.getElementById("questions");
  let subButton = document.getElementById("math1");
  let input = document.getElementById("value");
  let background = document.getElementById("background");
  background.style.display = "block";
  question.textContent = `${currentQuesiton.question}`;
  popUp.style.display = "flex";
  subButton.onclick = function () {
    if (input.value === currentQuesiton.answer) {
      popUp.style.display = "none";
      background.style.display = "none";
      callbackIfCorrect(); // Only call if correct
    } else {
      popUp.style.display = "none";
      background.style.display = "none";
      let topics = load("sideButtons");
      let math = topics[4];
      math.push(currentQuesiton.question);
      topics[4] = math;
      save("sideButtons", topics);
    }
  };
  input.value = "";
}

const questionBank = [
  // Easy Addition/Subtraction
  { question: "4 + 3", answer: "7" },
  { question: "9 - 5", answer: "4" },
  { question: "6 + 2", answer: "8" },

  // Medium 2-digit Addition/Subtraction
  { question: "23 + 15", answer: "38" },
  { question: "47 - 19", answer: "28" },
  { question: "56 + 32", answer: "88" },

  // Hard 3-digit Addition/Subtraction
  { question: "245 + 138", answer: "383" },
  { question: "621 - 274", answer: "347" },
  { question: "789 + 456", answer: "1245" },

  // Easy Multiplication
  { question: "3 * 4", answer: "12" },
  { question: "6 * 2", answer: "12" },
  { question: "5 * 5", answer: "25" },

  // Medium Multiplication (2-digit × 1-digit)
  { question: "12 * 4", answer: "48" },
  { question: "23 * 5", answer: "115" },
  { question: "34 * 7", answer: "238" },

  // Hard Multiplication (2-digit × 3-digit)
  { question: "24 * 123", answer: "2952" },
  { question: "47 * 256", answer: "12032" },
  { question: "39 * 341", answer: "13299" },
];
