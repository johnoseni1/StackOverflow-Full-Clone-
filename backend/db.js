const mongoose = require("mongoose");

const url =
  "mongodb+srv://john:12345@cluster0.44lpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
