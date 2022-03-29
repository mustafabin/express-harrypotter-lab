let mongoose = require("mongoose");

let Character = new mongoose.Schema({
  _id: String,
  name: String,
  role: String,
  house: String,
  school: String,
  __v: Number,
  ministryOfMagic: Boolean,
  orderOfThePhoenix: Boolean,
  dumbledoresArmy: Boolean,
  deathEater: Boolean,
  bloodStatus: String,
  species: String,
});

let House = new mongoose.Schema({
  _id: String,
  name: String,
  mascot: String,
  headOfHouse: String,
  houseGhost: String,
  founder: String,
  __v: Number,
  school: String,
  members: [Character],
  values: [String],
  colors: [String],
});

module.exports = mongoose.model("House", House);
