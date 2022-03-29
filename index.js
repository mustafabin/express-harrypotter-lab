let mongoose = require("mongoose");

// For Mongoose backwards compatability
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Harry", mongooseConfig);

const db = mongoose.connection;
// Set up event listeners for our Mongoose Connection
db.on("connected", () => console.log("Connected to database"));
db.on("disconnected", () => console.log("Disconnected from database"));
db.on("error", (error) => console.error("Database error", error));

let express = require("express");
const app = express();
const House = require("./models/house");

app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/house");
});
app.get("/house", (req, res) => {
  House.find().then((house) => res.json(house));
});
app.get("/house/:id", (req, res) => {
  House.find({ _id: req.params.id }).then((house) => res.json(house));
}); //example house : 5a05da69d45bd0a11bd5e06f
app.post("/house", (req, res) => {
  House.create(req.body).then((created) => {
    res.send(created);
  });
});

//start the server
app.listen(9000, () => {
  console.log("Server Started");
});
