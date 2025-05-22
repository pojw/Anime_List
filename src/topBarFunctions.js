//
import { search } from "./search";
export function topBarFunctions() {
  //section for search bar
  let searchBar = document.getElementById("searchBar");

  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", () => {});
  searchBar.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      search(searchBar.value, 1, "tv");
    }
  });
  //section for genre
  let genre = document.getElementById("seriesOptions");
  genre.addEventListener("click", () => {
    // let anime = document.getElementById("anime");
  });
  //section for final thing idk yet
}
