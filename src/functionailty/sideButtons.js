//

export function sideButtons() {
  //new user
  if (JSON.parse(localStorage.getItem("sideButtons")) == null) {
    let sideButtons = [
      ["Favorite"],
      ["Top Animes"],
      ["New Animes"],
      ["Random"],
      ["Math Topics"],
    ];
    localStorage.setItem("currentPage", JSON.stringify(1));
    localStorage.setItem("genre", JSON.stringify("tv"));
    localStorage.setItem("sideButtons", JSON.stringify(sideButtons));
    localStorage.setItem("sorting", JSON.stringify("asc"));
    localStorage.setItem("random", false);
    localStorage.setItem("newAnimes", false);
    localStorage.setItem("topAnimes", false);
    localStorage.setItem("title", JSON.stringify("One piece "));
    localStorage.setItem("favorites", false);
  }
}
