import "../scss/app.scss";
import * as ram from "ramda";

// const ram = require("ramda");

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ]; 

  var pluckName = ram.pluck("class");
  const rPluck = pluckName(arrayToPluck);

  const articles = document.querySelectorAll("article");

  for (var i = 0; i < articles.length; i++) {
    articles[i].classList.add(rPluck[i]);
  }
});