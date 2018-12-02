var GQ = require('./queryHandler');

// var resultsPromised = GQ("Mariah").then(res=> {
//   console.log(res)
// }).catch(err => {
//   console.log("NOOOOO!")
// });

var qRoute = require('./queryRoute');

var results = qRoute({}).then(res=> {
  var output = res;
  console.log(res)
}).catch(err => {
  console.log("NOOOOO!")
});
var x=3;