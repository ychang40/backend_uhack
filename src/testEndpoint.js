moudle.exports = async (req) => {
  //event object

  /*event: {
    data: {
      arg1: "arg1 value",
      arg2: "arg2 value"
    },
    headers: {
      "x-header-1": "header value"
    },
    body: "raw request body"
  }*/

  // let uParams = req.data.event;
  let uInput = req.body; 

  //Create a response object
  return {
    statusCode: 200,
    headers: {
      'My-Header': "Header Value"
    },
    body: JSON.stringify({
        success: true,
        data: uInput.toUpperCase(),
    })

  }
}