//

export function sideButtons() {
  //new user
  if (JSON.parse(localStorage.getItem("sideButtons")) == null) {
    let sideButtons = [
      ["Favorite", "one piece", "drgaon ball"],
      ["Top Animes"],
      ["New Animes"],
      ["Random"],
      ["Math Topics"],
    ];
    localStorage.setItem("sideButtons", JSON.stringify(sideButtons));
  }
}
