function displayResult2(response) {
  let tableBody = "";
  response.result.values.slice(1).forEach((row, index) => {
    const petname = row[0];
    const type = row[3];
    index = index+1

    tableBody += `<option class="${type}" value="${petname}">${petname}</option>`;
    
  });
  document.getElementById("choosedpet").innerHTML = tableBody;
};


    function loadData() {
      // Spreadsheet ID
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