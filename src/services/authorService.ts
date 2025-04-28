import { injectable } from "tsyringe";
import AuthorRepository from "../repository/authorRepository";

@injectable()
export default class AuthorService {
  constructor(private authorRepository: AuthorRepository) {}

  // Crear un nuevo autor
  async createAuthor(data: { author_name: string; last_name: string; birth_date: Date }) {
    const author = await this.authorRepository.createAuthor(data);
    return author;
  }

  // Actualizar la información de un autor
  async updateAuthor(id: number, data: { author_name?: string; last_name?: string; birth_date?: Date }) {
    const author = await this.authorRepository.updateAuthor(id, data);
    return author;
  }

  // Obtener un autor por su ID
  async getAuthorById(id: number) {
    const author = await this.authorRepository.findAuthorById(id);
    if (!author) {
      throw new Error("Author not found");
    }
    return author;
  }

  // Eliminar un autor
  async deleteAuthor(id: number) {
    await this.authorRepository.deleteAuthor(id);
  }

  // Obtener todos los autores
  async getAllAuthors() {
    const authors = await this.authorRepository.getAllAuthors();
    return authors;
  }
}