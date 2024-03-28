import express, {NextFunction, Response, Request} from "express";
import {createDataBaseConnection} from "./util/database";
import userRouter from "./routes";
class App {
    private app : express.Application = express()
    private port : number = 8081

    public constructor() {
        this.bootstrap()
    }

    private async bootstrap() {
        await this.dbConnection()
        this.setupMiddleware()
        this.controllerSetup()
        this.setUpServer()
    }

    private controllerSetup() {
        this.app.use(userRouter)
    }

    private setupMiddleware() {
        this.app.use(express.json())
    }

    private async dbConnection() {
        try {
            await createDataBaseConnection()
            console.log("데이터 베이스 접속 성공")
        }catch (error) {
            console.error("데이터 베이스 접속 실패")
            throw error
        }
    }

    private setUpServer() {
        const server = require('http').Server(this.app)

        this.app.get("/health", (req,res) => {
            return res.json({
                "server" : "on"
            })
        })

        server.listen(this.port, () => {
            console.log(`this server is Listening On ${this.port}`)
        })
    }
}

new App()