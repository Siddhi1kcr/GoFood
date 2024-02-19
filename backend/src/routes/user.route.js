import { Router } from "express";
import { logoutUser,loginUser, registerUser, refreshAccessToken,changeCurrentPassword,updateAccountDetails } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { foodData } from "../controllers/foodData.controller.js";

const router = Router();

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT,logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/change-password").post(verifyJWT,changeCurrentPassword)

router.route("/update-account-details").post(verifyJWT,updateAccountDetails)

router.route("/foodData").post(foodData);

export default router