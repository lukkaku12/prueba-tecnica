import { injectable } from "tsyringe";
import { Borrowings } from "../models";
import { BookCopy } from "../models";

@injectable()
export default class BorrowingRepository {

  async findAvailableCopy(bookId: number) {
    const copy = await BookCopy.findOne({
      where: {
        book_id: bookId,
        isAvailable: true,
      }
    });
    return copy;
  }

  async createBorrowing(data: {
    user_id: number;
    copy_id: number;
    borrowing_date: Date;
    borrowing_deadline: Date;
  }) {
    const borrowing = await Borrowings.create(data);
    return borrowing;
  }

  async markCopyAsUnavailable(copyId: number) {
    const copy = await BookCopy.findByPk(copyId);
    if (!copy) {
      throw new Error('Copy not found');
    }
    await copy.update({ isAvailable: false });
    return copy;
  }

  async findBorrowingByCopyId(copyId: number) {
    const borrowing = await Borrowings.findOne({
      where: { copy_id: copyId, returned_at: null },
    });
    return borrowing;
  }

  async markCopyAsAvailable(copyId: number) {
    const copy = await BookCopy.findByPk(copyId);
    if (!copy) {
      throw new Error('Copy not found');
    }
    await copy.update({ isAvailable: true });
    return copy;
  }

  async markBorrowingAsReturned(borrowingId: number) {
    const borrowing = await Borrowings.findByPk(borrowingId);
    if (!borrowing) {
      throw new Error('Borrowing record not found');
    }
    await borrowing.update({ returned_at: new Date() });
    return borrowing;
  }
}