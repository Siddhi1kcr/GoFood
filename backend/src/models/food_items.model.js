import mongoose, {Schema} from "mongoose";
const sizeSchema = new Schema({ type: String });
const foodItemsSchema = new Schema({
   CategoryName: {
     type: String,
     required: true
   },
   name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  options: {
    type: [sizeSchema],
    required: true
  },
  description: {
    type: String,
    required: true
  }
},{timestamps:true})

export const FoodItems = mongoose.model("FoodItems", foodItemsSchema);