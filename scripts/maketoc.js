"use strict";

const tocHolder = document.querySelector(".autoToc");
var forToc;
if (tocHolder.dataset.depth == 1) {
  forToc = document.querySelectorAll("h1");
} else if (tocHolder.dataset.depth == 3) {
  forToc = document.querySelectorAll("h1", "h2", "h3");
} else {
  forToc = document.querySelectorAll("h1, h2");
}

makeToc();

function makeToc() {
  var makelink = "";

  for (var i of forToc) {
    console.log(i.tagName);
    if (i.tagName == "H1") {
      makelink += `<li class="h1toc"><a href="#${i.id}">${i.innerHTML}</a></li>
        `;
    } else if (i.tagName == "H2") {
      makelink += `<li class="h2toc"><a href="#${i.id}">${i.innerHTML}</a></li>
        `;
    }
  }

  tocHolder.innerHTML = makelink;
  console.log("TOC updated");
}
