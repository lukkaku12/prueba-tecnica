import { injectable } from "tsyringe";
import { Author } from "../models";

@injectable()
export default class AuthorRepository {

  async createAuthor(data: {
    author_name: string;
    last_name: string;
    birth_date: Date;
  }) {
    const newAuthor = await Author.create(data);
    return newAuthor;
  }

  async updateAuthor(id: number, data: {
    author_name?: string;
    last_name?: string;
    birth_date?: Date;
  }) {
    const author = await Author.findByPk(id);
    if (!author) {
      throw new Error('Author not found');
    }
    await author.update(data);
    return author;
  }

  async findAuthorById(id: number) {
    const author = await Author.findByPk(id, {
      include: ['books']
    });
    return author;
  }

  async deleteAuthor(id: number) {
    const author = await Author.findByPk(id);
    if (!author) {
      throw new Error('Author not found');
    }
    await author.destroy();
    return;
  }

  async getAllAuthors() {
    const authors = await Author.findAll({ include: ['books'] });
    return authors;
  }
}