const mongoose = require("mongoose");

const _DBUrl = "mongodb+srv://subash:aZrv357wklLnFATk@cluster0.imqurxt.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(_DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(`Error : ${err}`));
