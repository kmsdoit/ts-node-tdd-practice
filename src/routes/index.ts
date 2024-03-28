import express from "express";
import {UserController} from "../user/user.controller";

const userRouter = express.Router();
const userController = new UserController()
//
userRouter.get("/api/v1/user/id", userController.findById)
userRouter.post("/api/v1/user/save", userController.save)
export default userRouter