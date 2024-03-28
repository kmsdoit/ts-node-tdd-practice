import {UserService} from "./user.service";
import {Request, Response, NextFunction} from "express";
import {UserSaveDto} from "./constants/user-save.dto";
import {SuccessResponse} from "../util/response";

export class UserController {
    userService = new UserService()

    findById = async (req : Request,res : Response,next : NextFunction) => {
        const {id}= req.query
        const response  = await this.userService.findById(Number(id))

        return res.status(response.statusCode).json(response)
    }
    //
    save = async (req : Request,res : Response,next : NextFunction) => {
        const {email, password, name} = req.body
        const userSaveDto : UserSaveDto = {
            email,
            password,
            name
        }
        console.log(userSaveDto)
        const response = await this.userService.save(userSaveDto)

        return res.status(response.statusCode).json(response)
    }

}