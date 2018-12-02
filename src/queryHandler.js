var QUERY_STRING = "immigration";

const TwitterSearch = require("./search/search.js");
const gCloud = require('./analyze/analyze.js');


//Get the tweets from a query
var tweetsPromised = TwitterSearch(QUERY_STRING);
var count = 0;
//Use the tweets to Search GCloud
tweetsPromised.then(tweets => {


  for (var tweet of tweets.statuses) {

    var tweet_temp = tweet;
    var scores;
    var magnitudes;
    var dict = {};
    var jsons=[];
    cnt=0;
    //Send result to GCloud
      gCloud.analyzeText(tweet.text).then(results => {

        var entities=[];
        var entities_salience=[];
        var entities_tag=[];
        for (i = 0; i < results[0].entities.length; i++){
            entities[i]=results[0].entities[i].name;
            entities_salience[i]=results[0].entities[i].salience;
            entities_tag[i]=results[0].entities[i].type;
        }  
        dict.entities=entities;
        dict.entities_salience=entities_salience;
        dict.entities_tag=entities_tag;
        //SAMPLE CODE FOR ANALYSIS
        //const sentiment = results[0].documentSentiment;

        dict.user=tweet_temp.user.screen_name;
        dict.created_at=tweet_temp.user.created_at;
        dict.text=tweet_temp.text;
        dict.location=tweet_temp.user.location;
        dict.score=results[0].documentSentiment.score;
        dict.magnitude=results[0].documentSentiment.magnitude;

        jsons[cnt]=JSON.stringify(dict);
        cnt=cnt+1;
        //console.log('Text: ${text}');
        //console.log('Sentiment score: ${sentiment.score}');
        //console.log('Sentiment magnitude: ${sentiment.magnitude}');
        
        //console.log(`Sentiment score: ${scores}`);
        console.log(jsons);
      })
      .catch(err => {
        console.error('ERROR:', err);
      });

      console.log(scores);
  }

  



});
