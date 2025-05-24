import { load } from "./functionailty/save";
import { search } from "./search";
import { save } from "./functionailty/save";
import { sideButtonsStorage } from "./sideButtonStorage";
import { sideButtonsContent } from "./sideButtonContent";
export function topBarFunctions() {
  //section for search bar
  let searchBar = document.getElementById("searchBar");
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", () => {
    let title = searchBar.value;
    save("title", title);
    save("currentPage", 1);
    sideButtonsStorage("search");
    search();
  });
  searchBar.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let title = searchBar.value;
      save("currentPage", 1);
      save("title", title);
      sideButtonsStorage("search");

      search();
    }
  });
  //Add function to series buttons
  let anime = document.getElementById("anime");
  let movie = document.getElementById("movie");
  let both = document.getElementById("both");
  //anime button
  anime.addEventListener("click", () => {
    anime.classList.add("pressed");
    anime.classList.remove("notPressed");

    movie.classList.remove("pressed");
    both.classList.remove("pressed");

    movie.classList.add("notPressed");
    both.classList.add("notPressed");

    localStorage.setItem("genre", JSON.stringify("tv"));
  });
  //movie button
  movie.addEventListener("click", () => {
    movie.classList.add("pressed");
    movie.classList.remove("notPressed");

    anime.classList.remove("pressed");
    both.classList.remove("pressed");

    anime.classList.add("notPressed");
    both.classList.add("notPressed");
    localStorage.setItem("genre", JSON.stringify("movie"));
  });
  //both button
  both.addEventListener("click", () => {
    both.classList.add("pressed");
    both.classList.remove("notPressed");

    anime.classList.remove("pressed");
    movie.classList.remove("pressed");

    anime.classList.add("notPressed");
    movie.classList.add("notPressed");
    localStorage.setItem("genre", JSON.stringify(""));
  });
  // getting sorting options
  let asc = document.getElementById("asc");
  let desc = document.getElementById("desc");

  //asc button
  asc.addEventListener("click", () => {
    asc.classList.remove("notPressed");
    asc.classList.add("pressed");

    desc.classList.remove("pressed");
    desc.classList.add("notPressed");

    localStorage.setItem("sorting", JSON.stringify("asc"));
  });
  //desc bbutton
  desc.addEventListener("click", () => {
    desc.classList.remove("notPressed");
    desc.classList.add("pressed");

    asc.classList.remove("pressed");
    asc.classList.add("notPressed");

    localStorage.setItem("sorting", JSON.stringify("desc"));
  });
  let next = document.getElementById("next");
  next.addEventListener("click", () => {
    let content = document.getElementById("content");
    if (content.children.length == 9) {
      let currentPage = load("currentPage");
      currentPage += 1;
      save("currentPage", currentPage);
      let favoirtes = load("favorites");
      if (favoirtes == true) {
        sideButtonsContent();
      } else {
        search();
      }
    } else {
      alert("no more");
    }
  });

  let back = document.getElementById("back");
  back.addEventListener("click", () => {
    let currentPage = load("currentPage");
    if (currentPage <= 1) {
      alert("this page 1");
    } else {
      currentPage -= 1;
      save("currentPage", currentPage);
      let favoirtes = load("favorites");
      if (favoirtes == true) {
        sideButtonsContent();
      } else {
        search();
      }
    }
  });
  //section for final thing idk yet
}
