/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

// function that for loops each array, and returns concatenation of all 4.
// then use foreach(?) on the function to return array.length number of times.

let pronoun = ["the", "our", "your", "my", "their"];
let adj = ["great", "big", "awesome", "amazing", "fantastic"];
let noun = ["jogger", "racoon", "website", "company", "adventure"];
let extension = [".com", ".net", ".org", ".io", ".co"];

for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      for (let d = 0; d < extension.length; d++) {
        console.log([pronoun[a], adj[b], noun[c], extension[d]].join(""));
      }
    }
  }
}

// function domains(pronoun, adj, noun, extension) {
//   let randPronoun;
//   let randAdj;
//   let randNoun;
//   let randExtension;
// }
