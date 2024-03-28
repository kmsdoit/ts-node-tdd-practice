import {UserSaveDto} from "./constants/user-save.dto";
import {FailResponse, SuccessResponse} from "../util/response";
import {DataSource} from "typeorm";
import {User} from "./entity/user.entity";
import {SqlLiteSource} from "../util/database";

export class UserService {

    async findById(id : number) : Promise<SuccessResponse | FailResponse> {
        const user = await SqlLiteSource.getRepository(User).findOne({where : {id}})

        if(!user) {
            const failResponse : FailResponse = {
                statusCode : 404,
                message : "해당하는 id로 찾을 수 없습니다",
                error : null
            }

            return failResponse
        }

        const successResponse : SuccessResponse = {
            statusCode : 200,
            message : "해당하는 id의 대한 정보입니다",
            data : user
        }

        return successResponse
    }

    async save(userSaveDto : UserSaveDto) : Promise<SuccessResponse | FailResponse> {
        const {email, password, name} = userSaveDto
        const user = new User()
        user.email = email
        user.password = password
        user.name = name
        try {
            const saved_user = await SqlLiteSource.getRepository(User).save(user)

            const successResponse : SuccessResponse = {
                statusCode : 200,
                message : "저장에 성공 했습니다",
                data : saved_user
            }

            return successResponse
        }catch (e) {
            const failResponse : FailResponse = {
                statusCode : 500,
                message : "데이터를 저장할 수 없습니다",
                error : null
            }

            return failResponse
        }
    }
}