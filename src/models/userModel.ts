import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Borrowings } from "./borrowingModel";


@Table({
    tableName:'user',
    timestamps:false
})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    user_name!:string;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    email!:string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    password!:string;

    @HasMany(() => Borrowings)
    borrowings?: Borrowings[];

}