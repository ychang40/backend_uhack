var uhack = require('./uhack.js');
var Sentiment = require('sentiment');





var out = uhack('test');

out.then(function(result){
	var sentiment = new Sentiment();
	var r = sentiment.analyze(result.statuses[0].text);
	console.log(r);

})

