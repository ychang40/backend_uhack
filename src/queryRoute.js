const qHandler = require('./queryHandler.js');

module.exports = async function (event = {}) {

  const QUERY_STRING = (event.data ? event.data.searchString : "") || "immigration";

  var dataOut = await qHandler(QUERY_STRING);


  return {
    data: {
      searchString: QUERY_STRING,
      searchResult: JSON.stringify(dataOut.jsons)

    }
  }

};