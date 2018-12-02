var QUERY_STRING = "immigration";

const TwitterSearch = require("./search/search.js");
const gCloud = require('./analyze/analyze.js');

//Get the tweets from a query
var tweetsPromised = TwitterSearch(QUERY_STRING);
var count = 0;
//Use the tweets to Search GCloud
tweetsPromised.then(tweets => {

  console.log("I've got the tweets");

  for (var tweet of tweets.statuses) {

    //Send result to GCloud
    gCloud.analyzeText(tweet.text).then(results => {

        //SAMPLE CODE FOR ANALYSIS
        const sentiment = results[0].documentSentiment;

        console.log(`Text: ${tweet.text}`);
        console.log(`Sentiment score: ${sentiment.score}`);
        console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
      })
      .catch(err => {
        console.error('ERROR:', err);
      });

      console.log(`Count = ${count++}`)
  }
});
