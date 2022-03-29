let mongoose = require("mongoose");
let mongooseConfig = { useNewUrlParser: true };
mongoose.connect("mongodb://127.0.0.1:27017/Harry", mongooseConfig);

//getting house and characters data
let data = require("./lib/db/houses.json");
let characters = require("./lib/db/characters.json");

// getting character models
let House = require("./models/house");

let houses = [];

let updateMember = (houseIndex, memberIndex, characterObj) => {
  houses[houseIndex].members[memberIndex] = characterObj;
};

for (let i = 0; i < data.length; i++) {
  houses.push(data[i]);
  data[i].members.forEach((memberID, j) => {
    let found = characters.find((char) => char._id == memberID);
    if (!found) {
      found = null;
    }
    updateMember(i, j, found);
  });
}

houses.forEach((house, i) => {
  house.members = house.members.filter((member) => member != null);
});

House.deleteMany({})
  .then(() => House.create(houses))
  .then(() => {
    mongoose.disconnect();
  })
  .then(() => console.log("Done"))
  .catch((error) => console.error(error));
