import { injectable } from "tsyringe";
import { Book } from '../models';

@injectable()
export class BookService {
  
  async createBook(data: {
    author_id: number;
    name: string;
    date_created: Date;
    isAvailable: boolean;
  }) {
    const newBook = await Book.create(data);
    return newBook;
  }

  async updateBook(id: number, data: {
    author_id?: number;
    name?: string;
    date_created?: Date;
    isAvailable?: boolean;
  }) {
    const book = await Book.findByPk(id);
    if (!book) {
      throw new Error('Book not found');
    }
    await book.update(data);
    return book;
  }

  async deleteBook(id: number) {
    const book = await Book.findByPk(id);
    if (!book) {
      throw new Error('Book not found');
    }
    await book.destroy();
    return;
  }
}