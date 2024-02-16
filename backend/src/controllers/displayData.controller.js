import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { fetchDataFromDatabase } from "../utils/FetchData.js";

const displayData = asyncHandler (async (_ ,res) => {
    const foodData = fetchDataFromDatabase('food_items');
    if(!global.food_items){
        throw new ApiError(500, "Internal Server Error!");
    }
    else{
        console.log(global.food_items);
        return res.status(201).json(
        new ApiResponse(200, global.food_items, "Data is displayed on screen")
    )
    }
})

export {displayData}

