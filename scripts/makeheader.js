"use strict";
const pageHeader = document.querySelector("header");

const headerContent = ` 
<div class="overlay"></div>
<div class="hamburger">
<img src="assets/hamburger.svg" class="menuburger" />
</div>

<ul id="navigator">
<li><a href="index.html">About</a></li>
<li><a href="rules.html">Rules</a></li>
<li><a href="shiningsea.html">The Shining Sea</a></li>
<li><a href="silverglass.html">Cities of Silverglass</a></li>
<li><a href="pcs.html">Characters</a></li>
<li><a href="npcs.html">People of Note</a></li>
<li><a href="notes.html">Notes and Rulings</a></li>
</ul>
<div class="totop"><a href="#top">Back to Top</a><div>

`;

makeHeader();
function makeHeader() {
  pageHeader.innerHTML = headerContent;
  console.log("Header updated");
}
