import mongoose from "mongoose"

const fetchDataFromDatabase = (collectionName) => {
    const fetched_data = mongoose.connection.db.collection(collectionName);
    fetched_data.find({}).toArray() 
    .then(data => {
        global.collectionName = data;
        // console.log(`Data from ${collectionName} collection:`, global.collectionName);
      })
      .catch(error => {
        console.log("Error fetching data:", error);
      });
}
export {fetchDataFromDatabase}