
    const mongoose = require("mongoose");
    const Test = require("../models/test-model");
    
    const addTestUser = async (req, res) => {
      try {
        const test = {
            name: "Benny the Bull",
            cdate: Date.now(),
        };
        const newTest = new Test(test);
        //creating new user model in the DB
        await newTest.save();
    
        res.status(201).json({
          message: "Review added sucessfully",
        });
      } catch (err) {
        res.status(500).json({
          message: "Internal server error " + err,
        });
      }
    };
    
    const getTestUser = async (req, res) => {

      try {
        const result = await Test.find({ });
        console.log(result);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error });
      }
    };
    
    module.exports = {
        addTestUser,
      getTestUser,
    };
    