const API_KEY = process.env.API_KEY;

function displayResult2(response) {
  const petnameIndex = response.result.values[0].indexOf("petname");
  const valueIndex = response.result.values[0].indexOf("value");
  const demandIndex = response.result.values[0].indexOf("demand");

  let tableBody = "";
  
  response.result.values.slice(1).forEach((row, index) => {
    const mountname = row[0];
    let value = row[1];
    let demand = row[2];
    const bgcolor = row[3]
    let mountdata;
    const formattedNumber = shortnumber(value)
    index = index + 1;

    switch(mountname) {
      case "Cloud":
        mountdata = "50% Speed <br> +5% All"
      break;
      case "Golden Cloud":
        mountdata = "50% Speed <br> +5% All"
      break;
      case "Storm Cloud":
        mountdata = "65% Speed <br> +10% All"
      break;
      case "Hell Cloud":
        mountdata = "80% Speed <br> +20% Coins <br> +20% Exp"
      break;
      case "Ballon":
        mountdata = "65% Speed <br> +10% All"
      break;
      case "Vespa":
        mountdata = "80% Speed <br> +20% Coins <br> +20% Exp"
      break;
      case "UFO":
        mountdata = "100% Speed <br> +50% Coins <br> +50% Exp <br> +1 Equiped Pet"
      break;
    }
    
    tableBody += `<main class="mountcontainer" style="background-image: url('assets/mounts/bg/${mountname}.png'); background-size: 1600px;">`;
    tableBody += `<div class="circle circle${bgcolor}"><img class="mountimg" src="assets/mounts/${mountname}.png"></div>`;
    tableBody += `<div class="mr">`;
    tableBody += `<div class="mountName" style="z-index: 90">${mountname}</div>`;
    tableBody += `<div class="right-align" style="z-index: 90; display: inline-block; float: right;"> ${mountdata}</div>`;
    tableBody += `<div class="left-align" style="z-index: 90; display: inline-block; float: left;">Value: ${formattedNumber}<br>Demand: ${demand}/10</div>`;
    tableBody += `</div>`;
    tableBody += `</main>`;
  });

  document.body.innerHTML += tableBody;
}

    function loadData() {
      // Spreadsheet ID
      const spreadsheetId = process.env.MOUNT_DB;
      const range = "A:Z";
      getPublicValues({ spreadsheetId, range }, displayResult2);
    }

    window.addEventListener("load", (e) => {
      initOAuthClient({ apiKey: API_KEY });
    });

    document.addEventListener("gapi-loaded", (e) => {
      loadData();
    });