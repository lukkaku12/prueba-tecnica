import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Author } from "./authorModel";
import { BookCopy } from "./copyModel";


@Table({
    tableName:'Book',
    timestamps:false
})
export class Book extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;

    @ForeignKey(() => Author)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    author_id!:number;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!:string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    date_created!:Date;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    isAvailable!:boolean;


    @BelongsTo(() => Author)
    author!: Author;

    @HasMany(() => BookCopy)
    copy!: BookCopy[];



}