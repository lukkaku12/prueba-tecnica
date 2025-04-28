import { injectable } from "tsyringe";
import BookCopyRepository from "../repository/copyRepository";

@injectable()
export default class BookCopyService {
  constructor(private readonly bookCopyRepository: BookCopyRepository) {}

  async getCopyById(copyId: number) {
    return await this.bookCopyRepository.findById(copyId);
  }

  async borrowCopy(copyId: number) {
    return await this.bookCopyRepository.markAsBorrowed(copyId);
  }

  async returnCopy(copyId: number) {
    return await this.bookCopyRepository.markAsAvailable(copyId);
  }

  async createCopy(bookId: number) {
    if (bookId <= 0) {
      throw new Error("Invalid book ID");
    }
    return await this.bookCopyRepository.createCopy(bookId);
  }

  async deleteCopy(copyId: number) {
    return await this.bookCopyRepository.deleteCopy(copyId);
  }

  async getAvailableCopies(bookId: number) {
    return await this.bookCopyRepository.findAvailableCopies(bookId);
  }
}