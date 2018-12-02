var QUERY_STRING = "immigration";

const TwitterSearch = require("./search/search.js");
const gCloud = require('./analyze/analyze.js');

//Get the tweets from a query
var tweetsPromised = TwitterSearch(QUERY_STRING);

//Use the tweets to Search GCloud
tweetsPromised.then(tweets => {

  console.log("I've got the tweets");

  for (let tweet of tweets.statuses) {

    //Send result to GCloud
    gCloud.analyzeText(tweet.text).then(results => {

        //SAMPLE CODE FOR ANALYSIS
        const sentiment = results[0].documentSentiment;

        console.log(`Text: ${text}`);
        console.log(`Sentiment score: ${sentiment.score}`);
        console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
      })
      .catch(err => {
        console.error('ERROR:', err);
      });

  }
});
