import mongoose from "mongoose"

const fetchDataFromDatabase = (collectionName) => {
    const fetched_data = mongoose.connection.db.collection(collectionName);
    fetched_data.find({}).toArray() 
    .then(data => {
        console.log(`Data from ${collectionName} collection:`, data);
      })
      .catch(error => {
        console.log("Error fetching data:", error);
      });
}
export {fetchDataFromDatabase}