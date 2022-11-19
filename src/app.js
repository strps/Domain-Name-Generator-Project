/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  var pronouns = ["the", "our"];
  var adjs = ["great", "big"];
  var nouns = ["jogger", "racoon"];
  var extensions = [".com", ".biz", ".inc"];

  var listgroup = document.getElementById("domain-name-list");

  var liList = "";

  for (let pronoun = 0; pronoun < pronouns.length; pronoun++) {
    for (let adj = 0; adj < adjs.length; adj++) {
      for (let noun = 0; noun < nouns.length; noun++) {
        for (let extension = 0; extension < extensions.length; extension++) {
          let domainName =
            pronouns[pronoun] + adjs[adj] + nouns[noun] + extensions[extension];
          liList += '<li class="list-group-item">' + domainName + "</li>";
        }
      }
    }
  }

  listgroup.innerHTML = liList;
};
