let mongoose = require("mongoose");
let mongooseConfig = { useNewUrlParser: true };
mongoose.connect("mongodb://127.0.0.1:27017/Harry", mongooseConfig);
//getting  characters data
let data = require("./lib/db/characters.json");

// getting character models
let Character = require("./models/character");

let characters = [];

for (let i = 0; i < data.length; i++) {
  characters.push(data[i]);
}

Character.deleteMany({})
  .then(() => Character.create(characters))
  .then(() => console.log("Done"))
  .catch((error) => console.error(error));
