import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MondoDB connected!! DB host :", connectionInstance.connection.host);
    const food_items = mongoose.connection.db.collection("food_items");
    food_items.find({}).toArray() 
    .then(data => {
      const food_category = mongoose.connection.db.collection("food_category");
      food_category.find({}).toArray() 
      .then(catData => {
          global.food_items = data;
          global.food_category = catData;
        })
        .catch(error => {
          console.log("Error fetching data:", error);
        });
      })
      .catch(error => {
        console.log("Error fetching food data:", error);
      });
      
  } catch (error) {
    console.log("MongoDB connection Failed", error);
    process.exit(1);
  }
};
export default connectDB;
