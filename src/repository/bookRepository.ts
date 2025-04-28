import { Book } from "../models/bookModel";

export class BookRepository {
  
  async createBook(data: {
    author_id: number;
    name: string;
    date_created: Date;
    isAvailable: boolean;
    books_quantity: number;
  }): Promise<Book> {
    const newBook = await Book.create(data);
    return newBook;
  }

  async updateBook(id: number, data: Partial<{
    author_id: number;
    name: string;
    date_created: Date;
    isAvailable: boolean;
    books_quantity: number;
  }>): Promise<Book | null> {
    const book = await Book.findByPk(id);
    if (!book) return null;

    await book.update(data);
    return book;
  }

  async deleteBook(id: number): Promise<boolean> {
    const deletedCount = await Book.destroy({
      where: { id },
    });
    return deletedCount > 0;
  }

  async getBookById(id: number): Promise<Book | null> {
    return await Book.findByPk(id);
  }

  async getAllBooks(): Promise<Book[]> {
    return await Book.findAll();
  }
}