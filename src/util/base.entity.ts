import {Column, CreateDateColumn, Generated, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";


export abstract class BaseTimeEntity {
    @Generated("increment")
    @PrimaryColumn({type : "int"})
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({nullable: true})
    deletedAt?: Date | null;
}