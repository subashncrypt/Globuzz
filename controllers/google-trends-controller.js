const mongoose = require("mongoose");
const googleTrends = require('google-trends-api');

const getGoogleTrends = async (req, res) => {

    let result =  await(
    googleTrends.interestOverTime({keyword: 'Leo Messi'})
    .then(function(results){
        return results;
    })
    .catch(function(err){
      console.error(err);
    }));

    try {
        res.json(result);
    } catch (err) {
      res.status(500).json({
        message: "Internal server error " + err,
      });
    }
  };

  module.exports = {
    getGoogleTrends,
  };