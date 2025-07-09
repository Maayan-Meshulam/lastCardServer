const mongoose = require("mongoose");

const connectionStringForAtlas = "mongodb+srv://Maayan:Maayan2005@maayanmeshulam.dlzthrs.mongodb.net/cardsServer?retryWrites=true&w=majority&appName=maayanMeshulam";

const connectToAtlasDB = async () => {
  try {
    await mongoose.connect(connectionStringForAtlas);
    console.log("Conneted to MongoDb in Atlas");
  } catch (error) {
    console.error("Could not connect MongoDB in Atlas", error);
  }
};

module.exports = connectToAtlasDB;
