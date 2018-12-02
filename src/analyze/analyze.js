 process.env.GOOGLE_APPLICATION_CREDENTIALS = "./src/analyze/gcloud_janus_auth.json";

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

    const features = {
        extractSyntax:true,
        extractEntities:true,
        extractDocumentSentiment:true,
      };

    // Detects the sentiment of the text
    return client.annotateText({document: document, features: features});
      
  }

}

