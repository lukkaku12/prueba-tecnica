import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Book } from "./bookModel";
import { Borrowings } from "./borrowingModel";

@Table({
    tableName:'book_copies',
    timestamps:false
})
export class BookCopy extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;

    @ForeignKey(() => Book)
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    book_id!: number;

    @Column({
        type:DataType.ENUM('available', 'borrowed'),
        allowNull:false
    })
    availability!: 'available' | 'borrowed';

    @BelongsTo(() => Book)
    book!: Book;

    @HasMany(() => Borrowings)
    borrowings?: Borrowings[];

}