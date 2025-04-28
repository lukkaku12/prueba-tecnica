import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Book } from "./bookModel";


@Table({
    tableName:'author',
    timestamps:false
})
export class Author extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    author_name!:string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    last_name!:string;

    @Column({
        type:DataType.DATE,
        allowNull:false
    })
    birth_date!:Date;

    @HasMany(() => Book)
    books?: Book[]



}