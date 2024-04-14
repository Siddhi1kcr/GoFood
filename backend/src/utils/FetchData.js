import mongoose from "mongoose"
import { displayData } from "../controllers/displayData.controller.js";

const fetchDataFromDatabase = (collectionName) => {
    const fetched_data = mongoose.connection.db.collection(collectionName);
    fetched_data.find({}).toArray() 
    .then(data => {
        global.collectionName = data;
        displayData(global.collectionName);
      })
      .catch(error => {
        console.log("Error fetching data:", error);
      });
}
export {fetchDataFromDatabase}