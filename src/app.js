
import "bootstrap";
import "./style.css";


window.onload = function() {
  //write your code here
  domainGenerator();
};

let pronoun = ["the", "our", "your", "my", "their"];
let adj = ["great", "big", "awesome", "amazing", "fantastic"];
let noun = ["jogger", "racoon", "website", "company", "adventure"];
let extension = [".com", ".net", ".org", ".io", ".us"];

function domainGenerator() {
  let output = ""; 
  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        // check if domain hack (shorten) is already generated
        let domainHackGenerated = false; 
        for (let d = 0; d < extension.length; d++) {
          let domain = pronoun[a] + adj[b] + noun[c] + extension[d];
          output += "<p>" + domain + "</p>";

          // Set to true after generating the domain hack
          
          if (noun[c].length > 3 && !domainHackGenerated) {
            let domainHack =
              pronoun[a] +
              adj[b] +
              noun[c].slice(0, 3) +
              "." +
              noun[c].slice(3);
            output += "<p>" + domainHack + "</p>";
            domainHackGenerated = true; 
          }
        }
      }
    }
  }
  document.querySelector("#domains").innerHTML = output;
}
