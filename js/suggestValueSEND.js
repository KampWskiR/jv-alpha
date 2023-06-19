 // Client ID and API key from the Google Developers Console
  const CLIENT_ID = '1001824560235-76nqfgra27vadln15tq2vfbqgtbnb7tk.apps.googleusercontent.com';

// Array containing the scopes required by the Google Sheets API
  const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

  // ID of the Google Sheets spreadsheet
  const SPREADSHEET_ID = '13WbqTcnhZRvaXHy6TS7NdI4_vm_BDvv-a0IyL86vOas';

  // Load the API client and sign in the user
  function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

  // Initialize the API client library and set up sign-in state listeners
  function initClient() {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      scope: SCOPES.join(' '),
    }).then(function () {
      // Listen for the form submission event
      $('#suggestForm').submit(function () {
        submitForm();
      });
    });
  }

  // Submit the form data to Google Sheets
  function submitForm() {
    const values = {
      pet: $('#choosedpet').val(),
      value: $('#suggestedvalue').val(),
      reason: $('#suggestreason').val(),
    };

    gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1',
      valueInputOption: 'RAW',
      resource: { values: [Object.values(values)] },
    }).then(function (response) {
      console.log('Form data submitted successfully');
      // Optionally, display a success message or perform any other actions
    }, function (error) {
      console.error('Error submitting form data:', error.result.error.message);
      // Optionally, display an error message or perform any other error handling
    });
  }

handleClientLoad();