fetch("https://api.jikan.moe/v4/anime?q=dragon ball&limit=10&page=1&type=tv")
  .then((res) => res.json())
  .then((json) => json.data)
  .then((data) => {
    let object = {};
    for (let i = 0; i < data.length; i++) {
      object[keys[i]] = {
        title: data[i].title,
      };
    }
    console.log(object);
    console.log(data);
  });
const keys = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
]; //vvairables/ options
let title = ""; // user input
let page = 1; //curpage
let limit = 10; //result per page

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
