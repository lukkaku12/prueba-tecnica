import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import  { Author, Book, Borrowings, User, BookCopy }  from '../models';

dotenv.config();

const sequelize: Sequelize = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
    models: [Author, Book, BookCopy, Borrowings, User]
});

export default sequelize;