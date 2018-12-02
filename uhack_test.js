'use strict';

const args = require('yargs').argv;


var Twitter = require('twitter');

const fs = require('fs');


var client = new Twitter({
  consumer_key: '3FBvhdWzCyojUJ6i6WnUp0loI',
  consumer_secret: 'AA8xYoatm7mhSp5rSwts7sgLj0mSt8wTRF4cM3HWG16SfJp6SO',
  access_token_key: '1068990524370100224-Vi2YWgq0Q8OHjf1qRvxxVVVuCXUVhd',
  access_token_secret: 'xiQsO0AlbMAOf19JpaYGMlGThkHBkPgNTQrzHU0G6ddrH'
});

fs.writeFile("test.json","",function (err){});

client.get('search/tweets', {q: args.search}, function(error, tweets, response) {
   
   
   for (var i = 0; i < tweets.statuses.length	; i++) {
	   
	   fs.appendFile("test.json", JSON.stringify(tweets.statuses[i]), function(err) {
    if(err) {
        return console.log(err);
    }

    //console.log("The file was saved!");
}); 
	//console.log(tweets.statuses[i].text);
   }

   
});

//return JSON.stringify(tweets.statuses[i]);

