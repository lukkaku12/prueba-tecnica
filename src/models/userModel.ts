import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";


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
    email!:string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    password!:string;



}