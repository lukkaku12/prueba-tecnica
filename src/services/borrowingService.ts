import { injectable } from "tsyringe";
import BorrowingRepository from "../repository/borrowingRepository";

@injectable()
export default class BorrowingService {
  constructor(private borrowingsRepository: BorrowingRepository) {}

  async borrowBook(userId: number, bookId: number) {
    const availableCopy = await this.borrowingsRepository.findAvailableCopy(bookId);

    if (!availableCopy) {
      throw new Error('No available copies for this book');
    }

    const borrowing = await this.borrowingsRepository.createBorrowing({
      user_id: userId,
      copy_id: availableCopy.id,
      borrowing_date: new Date(),
      borrowing_deadline: this.calculateDeadline(),
    });

    await this.borrowingsRepository.markCopyAsUnavailable(availableCopy.id);

    return borrowing;
  }

  private calculateDeadline() {
    const now = new Date();
    const deadline = new Date(now);
    deadline.setDate(now.getDate() + 15); // 15 días de préstamo
    return deadline;
  }

  async returnBook(userId: number, copyId: number) {
    // Buscar el préstamo relacionado con esta copia
    const borrowing = await this.borrowingsRepository.findBorrowingByCopyId(copyId);

    if (!borrowing) {
      throw new Error('No borrowing found for this book copy');
    }

    if (borrowing.user_id !== userId) {
      throw new Error('This user did not borrow the book');
    }

    // Marcar la copia como disponible
    await this.borrowingsRepository.markCopyAsAvailable(copyId);

    // Marcar el préstamo como devuelto
    await this.borrowingsRepository.markBorrowingAsReturned(borrowing.id);

    return borrowing;
  }
}