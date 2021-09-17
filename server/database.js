const mongoose = require("mongoose");

//mongoose.set('applyPluginsToChildSchemas', false);
export async function connect() {
  await mongoose
    .connect(
      "mongodb+srv://cristo:1094507788cristofer@cluster0.utkoi.mongodb.net/db_close_up?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    )
    .then((bd) => console.log("db_close_up is connected!..."))
    .catch((err) => console.log(err));
}
