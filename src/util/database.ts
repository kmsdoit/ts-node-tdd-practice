import "reflect-metadata";
import { DataSource } from "typeorm";
import {User} from "../user/entity/user.entity";


export const SqlLiteSource = new DataSource({
    type : "sqlite",
    database : "board.db",
    synchronize : true,
    logging : true,
    dropSchema : true,
    entities : [User]
})

export async function createDataBaseConnection(): Promise<void> {
    // DataSource 인스턴스 생성
    try {
        // 데이터베이스 연결 초기화
        await SqlLiteSource.initialize();
        console.log("Database connection has been established successfully.");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}
