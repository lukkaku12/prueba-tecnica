import { injectable } from "tsyringe";
import { BookCopy } from "../models";

@injectable()
export default class BookCopyRepository {

  async findById(copyId: number) {
    const copy = await BookCopy.findByPk(copyId);
    if (!copy) {
      throw new Error('Book copy not found');
    }
    return copy;
  }

  async markAsBorrowed(copyId: number) {
    const copy = await this.findById(copyId);
    if (copy.availability !== 'available') {
      throw new Error('Book copy is already borrowed');
    }
    await copy.update({ availability: 'borrowed' });
    return copy;
  }

  async markAsAvailable(copyId: number) {
    const copy = await this.findById(copyId);
    if (copy.availability !== 'borrowed') {
      throw new Error('Book copy is not currently borrowed');
    }
    await copy.update({ availability: 'available' });
    return copy;
  }

  async createCopy(bookId: number) {
    const copy = await BookCopy.create({
      book_id: bookId,
      availability: 'available',
    });
    return copy;
  }

  async deleteCopy(copyId: number) {
    const copy = await this.findById(copyId);
    await copy.destroy();
    return true;
  }

  async findAvailableCopies(bookId: number) {
    const copies = await BookCopy.findAll({
      where: {
        book_id: bookId,
        availability: 'available',
      }
    });
    return copies;
  }

}