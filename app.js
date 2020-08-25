const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/aliendb";
const alienRoutes = require("./routes/aliens");
const app = express();

app.use(express.json());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => {
  console.log("connected to db");
});

//routes
app.use("/aliens", alienRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
