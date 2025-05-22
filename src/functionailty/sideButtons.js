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

    localStorage.setItem("sideButtons", JSON.stringify(sideButtons));
  }
}
