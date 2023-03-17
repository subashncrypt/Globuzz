const mongoose = require("mongoose");

const _DBUrl = "MONGO DB URL";

mongoose
  .connect(_DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(`Error : ${err}`));
