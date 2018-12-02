const qHandler = require('./queryHandler.js');

module.exports = async function (event = {}) {

  return {
    data: {
      searchString: "text",
      result: "more text"
    }
  }

  // const QUERY_STRING = "immigration";//(event.data ? event.data.searchString : "") || "immigration";

  // var dataOut = await qHandler(QUERY_STRING);


  // return {
  //   data: {
  //     searchString: QUERY_STRING,
  //     result: JSON.stringify(dataOut)

  //   }
  // }

};