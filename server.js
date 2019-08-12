const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/somedb", {
    useNewUrlParser: true
  })
  .then(() => console.log("Database connected..."));

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
