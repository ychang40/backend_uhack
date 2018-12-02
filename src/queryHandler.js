const TwitterSearch = require("./search/search.js");
const GCloud = require('./analyze/analyze.js');

module.exports = async (QUERY_STRING = "") => {

  //Get the tweets from a query
  tweets = await TwitterSearch(QUERY_STRING);
  
  var jsons = [];

  //Use the tweets to Search GCloud
  for (var tweet of tweets.statuses) {

    var tweet_temp = tweet;
    var scores;
    var magnitudes;
    var dict = {};
  

    //Send result to GCloud
    var results = await GCloud.analyzeText(tweet.text);

        var entities = [];
        var entities_salience = [];
        var entities_tag = [];
        for (i = 0; i < results[0].entities.length; i++) {
          entities[i] = results[0].entities[i].name;
          entities_salience[i] = results[0].entities[i].salience;
          entities_tag[i] = results[0].entities[i].type;
        }
        dict.entities = entities;
        dict.entities_salience = entities_salience;
        dict.entities_tag = entities_tag;
        //SAMPLE CODE FOR ANALYSIS
        //const sentiment = results[0].documentSentiment;

        dict.user = tweet_temp.user.screen_name;
        dict.created_at = tweet_temp.user.created_at;
        dict.text = tweet_temp.text;
        dict.location = tweet_temp.user.location;
        dict.score = results[0].documentSentiment.score;
        dict.magnitude = results[0].documentSentiment.magnitude;

        jsons.push(JSON.stringify(dict));
        // cnt = cnt + 1;
        //console.log('Text: ${text}');
        //console.log('Sentiment score: ${sentiment.score}');
        //console.log('Sentiment magnitude: ${sentiment.magnitude}');

        //console.log(`Sentiment score: ${scores}`);
        // console.log(jsons);
        // return jsons;


    // console.log(scores);
  }

  return {jsons};

}
