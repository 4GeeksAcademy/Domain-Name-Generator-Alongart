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

window.onload = function() {
  //write your code here
  domainGenerator();
};

let pronoun = ["the", "our", "your", "my", "their"];
let adj = ["great", "big", "awesome", "amazing", "fantastic"];
let noun = ["jogger", "racoon", "website", "company", "adventure"];
let extension = [".com", ".net", ".org", ".io", ".us"];

function domainGenerator() {
  let output = ""; // Variable to store the generated domains
  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        let domainHackGenerated = false; // Flag to check if domain hack is already generated
        for (let d = 0; d < extension.length; d++) {
          let domain = pronoun[a] + adj[b] + noun[c] + extension[d];
          output += "<p>" + domain + "</p>";

          if (noun[c].length > 3 && !domainHackGenerated) {
            let domainHack =
              pronoun[a] +
              adj[b] +
              noun[c].slice(0, 3) +
              "." +
              noun[c].slice(3);
            output += "<p>" + domainHack + "</p>";
            domainHackGenerated = true; // Set the flag to true after generating the domain hack
          }
        }
      }
    }
  }
  document.querySelector("#domains").innerHTML = output;
}

// function domains(pronoun, adj, noun, extension) {
//   let randPronoun;
//   let randAdj;
//   let randNoun;
//   let randExtension;
// }
