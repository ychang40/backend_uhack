 process.env.GOOGLE_APPLICATION_CREDENTIALS = "C:\\Users\\Siobhan\\Documents\\Continued Ed\\UHack 2018\\backend_uhack\\src\\analyze\\gcloud_janus_auth.json";
// console.log(`${GOOGLE_APPLICATION_CREDENTIALS}`);

//Import GCloud library
const language = require('@google-cloud/language');

//Instantiate client
const client = new language.LanguageServiceClient();

module.exports = {
  analyzeText:  function (inputString) {
    const document = {
      content: inputString,
      type: 'PLAIN_TEXT',
    };
    
    // Detects the sentiment of the text
    return client.analyzeSentiment({document: document});
      
  }

}

