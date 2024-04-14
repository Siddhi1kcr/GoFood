import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const foodData = asyncHandler (async ( _ ,res) => {
    if(!global.food_items || !global.food_category){
        throw new ApiError(500, "Internal Server Error!");
    }
    else{
        // console.log(global.food_items,global.food_category);
        return res.status(201).json(
        new ApiResponse(200, [global.food_items, global.food_category], "Data is displayed on screen")
    )
    }
})

export {foodData}

