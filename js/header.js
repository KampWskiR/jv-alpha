let header = "";

header += `<img class="logo" src="assets/LogoNew.png" onclick="window.location.href='index'">`;
header += `<div class="nav">`;
  header += `<a class="NavButton NBPets basic" href="pets"">Pets</a>`;
  header += `<a class="NavButton NBMounts blue" href="mounts"">Mounts</a>`;
      header += `<div class="NavButton NBMore">`;
      header += `<p>More</p>`;
      header += `<ul class="list">`;
      header += `<li><a href="credits">Credits</a></li>`;
      header += `<li><a href="changelog">Changelog</a></li>`;
      header += `<li><a href="themes">Themes</a></li>`;
      header += `</ul>`;
      header += `</div>`;
header += `</div>`;

document.querySelector('header').innerHTML = header;


// popup test
//document.getElementById("popupButton").addEventListener("click", function() {
  //document.getElementById("popupText").textContent = "IUHFWSUEGFHIUSHJIFUJHDSUFH";
  //document.getElementById("popupContainer").classList.add("active");
//});

//document.getElementById("closeButton").addEventListener("click", function() {
  //document.getElementById("popupContainer").classList.remove("active");
//});

  //<button id="popupButton">Open Popup</button>

 // <div id="popupContainer">
   // <div id="popupContent">
    //  <div class="popupcloud"></div>
    //  <p id="popupText"></p>
  //    <button id="closeButton">Close</button>
 //   </div>
 // </div>