const mongoose = require("mongoose");
const app = require("./app");

// const DB_HOST =
//   "mongodb+srv://Evgen:VmDexTpdtV3qGqjm@cluster0.ymunumi.mongodb.net/db-contacts?retryWrites=true&w=majority";

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(5000, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
