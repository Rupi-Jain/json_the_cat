const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName , (error, response, body) => {
    console.log("error:", error);  
    console.log("len..", body.length, body)
    
  if (body.length > 2 && error === null ) {
      const data = JSON.parse(body);
      callback(error, data[0]['description']);
    }
    else {
      error = "No matching breed found!!! Please check your spellings";
      callback(error, null);
   }
  });
};

module.exports = { fetchBreedDescription };
