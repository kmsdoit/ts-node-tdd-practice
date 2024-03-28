import {Column, Entity} from "typeorm";
import {BaseTimeEntity} from "../../util/base.entity";


@Entity()
export class User extends BaseTimeEntity{
    @Column()
    email : string
    @Column()
    password : string
    @Column()
    name : string

    constructor() {
        super()
    }

    static save(email : string, password : string, name : string ) : User {
        const user = new User()
        user.email = email
        user.password = password
        user.name = name
        return user
    }

}