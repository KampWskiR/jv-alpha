const API_KEY = "AIzaSyAFHVhDHl4Nix_Y65Qtspb__fCZa4e_gKQ";

function strengthShort() {
  var strengths = document.querySelectorAll(".strength");
  strengths.forEach(strength => {
    formattedNumber = shortnumber(strength.innerHTML);
    strength.innerHTML = `~${formattedNumber}`;
  });
}

function average(a, b) {
  return (parseInt(a) + parseInt(b)) / 2;
}


function displayResult2(response) {
  let tableBody = "";

  response.result.values.slice(1).forEach((row, index) => {
    const petname = row[0];
    let minvalue = row[1];
    let maxvalue = row[2];
    let trend = row[3];
    let demand = row[4];
    const type = row[5];
    let strength = row[6];
    const category = row[7];
    const main = row[8];
    let trendimg;
    let value = average(minvalue, maxvalue)

    switch (trend) {
      case '-1':
        trendimg = "assets/decrease.png";
        break;
      case '0':
        trendimg = "assets/stable.png";
        break;
      case '1':
        trendimg = "assets/rise.png";
        break;
    }

    index = index + 1
    tableBody += `<div class='petblock' category='${category}' main='${main}'>`;
    tableBody += `<img class='pet' src='../assets/pets/${petname}.png'>`;
    switch (true) {
      case petname === "Cowboy Capybara" || petname === "King Corgi" || petname === "Red Dragon" || petname === "UFO Capybara" || petname === "UFO Cow" || petname === "Cute o Bot":
        tableBody += `<p class='petname ${type}'>${petname}<a class='trendbox'><img class='trend' src='${trendimg}'></a></p>`;
        tableBody += `<p order='${index}' sortable='true' id='number' type='Value' min='${minvalue}' max='${maxvalue}' valuesort='${value}' value='${value}'><img class='gem' src='assets/gem.png'></p>`;
        tableBody += `<p id='number' type='Silver' min='${minvalue * 5}' max='${maxvalue * 5}' value='${value * 5}'><img class='gem' src='assets/gem.png'></p>`;
        tableBody += `<p id='number' type='Golden' min='${minvalue * 25}' max='${maxvalue * 25}' value='${value * 25}'><img class='gem' src='assets/gem.png'></p>`;
        tableBody += `<p id='demand' demand='${demand}'/>`;
        break;

      case type === "limited" || petname === "Beta Cat":
        tableBody += `<p class='petname ${type}'>${petname}<a class='trendbox'><img class='trend' src='${trendimg}'></a></p>`;
        tableBody += `<p order='${index}' sortable='true' id='number' type='Value' min='${minvalue}' max='${maxvalue}' valuesort='${value}' value='${value}'><img class='gem' src='assets/gem.png'></p>`;
        tableBody += `<p id='demand' demand='${demand}'/>`;
        break;

      case type === "legendary":
        tableBody += `<p class='strength normals'>${strength}</p>`;
        tableBody += `<p class='strength silvers'>${strength * 3}</p>`;
        tableBody += `<p class='strength goldens'>${strength * 9}</p>`;
        tableBody += `<p class='petname ${type}'>${petname}<a class='trendbox'><img class='trend' src='${trendimg}'></a></p>`;
        tableBody += `<p order='${index}' sortable='true' class='boostergui' id='number' type='Normal' min='${minvalue}' max='${maxvalue}' valuesort='${value}' value='${value}'><img class='gem' src='assets/gem.png'></p>`;
        tableBody += `<p order='${index}' class='boostergui' id='number' type='Silver' min='${minvalue * 3}' max='${maxvalue * 3}' value='${value * 3}'><img class='gem' src='assets/gem.png'></p>`;
        tableBody += `<p order='${index}' class='boostergui' id='number' type='Golden' min='${minvalue * 9}' max='${maxvalue * 9}' value='${value * 9}'><img class='gem' src='assets/gem.png'></p>`;
        break;

      case type === "secret":
        tableBody += `<p class='strength normals'>${strength}</p>`;
        tableBody += `<p class='strength silvers'>${strength * 5}</p>`;
        tableBody += `<p class='strength goldens'>${strength * 25}</p>`;
        tableBody += `<p class='petname ${type}'>${petname}<a class='trendbox'><img class='trend' src='${trendimg}'></a></p>`;
        tableBody += `<p order='${index}' sortable='true' class='boostergui' id='number' type='Normal' min='${minvalue}' max='${maxvalue}' valuesort='${value}' value='${value}'><img class='gem' src='assets/gem.png'></p>`;
        tableBody += `<p order='${index}' class='boostergui' id='number' type='Silver' min='${minvalue * 3}' max='${maxvalue * 3}' value='${value * 3}'><img class='gem' src='assets/gem.png'></p>`;
        tableBody += `<p order='${index}' class='boostergui' id='number' type='Golden' min='${minvalue * 9}' max='${maxvalue * 9}' value='${value * 9}'><img class='gem' src='assets/gem.png'></p>`;
        break;

      default:
        tableBody += `<p class='strength normals'>${strength}</p>`;
        tableBody += `<p class='strength silvers'>${strength * 3}</p>`;
        tableBody += `<p class='strength goldens'>${strength * 9}</p>`;
        tableBody += `<p class='petname ${type}'>${petname}<a class='trendbox'><img class='trend' src='${trendimg}'></a></p>`;
        tableBody += `<p order='${index}' sortable='true' id='number' type='Normal' valuesort='${value}' min='${minvalue}' max='${maxvalue}' value='${value}'><img class='gem' src='assets/gem.png'></p>`;
        tableBody += `<p order='${index}' id='number' type='Silver' min='${minvalue * 3}' max='${maxvalue * 3}' value='${value * 3}'><img class='gem' src='assets/gem.png'></p>`;
        tableBody += `<p order='${index}' id='number' type='Golden' min='${minvalue * 9}' max='${maxvalue * 9}' value='${value * 9}'><img class='gem' src='assets/gem.png'></p>`;
        break;
    }
        if (main === "potd" && window.location.pathname === "/pets/") tableBody += '<h1 id="rainbow">Pet Of The Day!</h1>'; tableBody += '<script src="js/potd.js"></script>';
        tableBody += `</div>`;
  });


  document.querySelectorAll("#table-content").forEach(function(element) {
    element.innerHTML = tableBody;
  });
  strengthShort()
  value()
  if (document.title == "JumpingValue") popularPets(); petOfTheDay();
  const petc = document.querySelectorAll(".petblock");

  petc.forEach(function(element) {
    element.addEventListener("click", function() {
      element.classList.toggle("clicked");
      const petImg = element.querySelector(".pet");
      petImg.classList.toggle("bpet");
    });
  });
}

function loadData() {
  const spreadsheetId = "1L2tW-v2oj6K0tMAlXd6kOx5cmD_r3gwazGK7ddZKWnU";
  const range = "A:Z";
  getPublicValues({ spreadsheetId, range }, displayResult2);
}

window.addEventListener("load", (e) => {
  initOAuthClient({ apiKey: API_KEY });
});

document.addEventListener("gapi-loaded", (e) => {
  loadData();
});