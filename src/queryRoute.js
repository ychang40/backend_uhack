const qHandler = require('queryHandler.js');

module.exports = async ((event = {}), context => {

  const QUERY_STRING = (event.data ? event.data.searchString : "") || "immigration";

  var dataOut = await qHandler(QUERY_STRING);


  return {
    data: {
      searchString: QUERY_STRING,
      result: JSON.stringify(dataOut)

    }
  }

})