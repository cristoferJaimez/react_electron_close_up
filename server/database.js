const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `${process.env.CONNECT_ATLAS_DATA_BASE}`,
    {
      useNewUrlParser: true,
    }
  )
  .then((bd) =>
    console.log(">>>Data Base Close Up in mongoDB Atlas is connected!...")
  )
  .catch((err) => console.log(err));
