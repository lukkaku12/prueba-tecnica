import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./userModel";
import { BookCopy } from "./copyModel";


@Table({
    tableName:'borrowings',
    timestamps:false
})
export class Borrowings extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id!: number;

    @ForeignKey(() => BookCopy)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    copy_id!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    borrowing_date!: Date;
    
    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    borrowing_deadline!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true, 
    })
    returned_at?: Date;

    @BelongsTo(() => User)
    user!: User;

    @BelongsTo(() => BookCopy)
    copy!: BookCopy


}