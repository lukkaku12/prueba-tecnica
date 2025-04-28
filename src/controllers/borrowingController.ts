import { Request, Response } from "express";
import { container } from "tsyringe";
import BorrowingService from "../services/borrowingService";

export class BorrowingsController {
  static async borrowBook(req: Request, res: Response) {
    try {
      const { userId, bookId } = req.body;
      const borrowingsService = container.resolve(BorrowingService);

      const borrowing = await borrowingsService.borrowBook(userId, bookId);

      res.status(201).json({
        status: 201,
        message: "Book borrowed successfully",
        borrowing,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error instanceof Error ? error.message : "Unexpected error",
      });
    }
  }

  static async returnBook(req: Request, res: Response) {
    try {
      const { userId, copyId } = req.body;
      const BorrowingsService = container.resolve(BorrowingService);

      const borrowing = await BorrowingsService.returnBook(userId, copyId);

      res.status(200).json({
        status: 200,
        message: "Book returned successfully",
        borrowing,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error instanceof Error ? error.message : "Unexpected error",
      });
    }
  }
}