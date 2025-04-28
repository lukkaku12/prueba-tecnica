import { Request, Response } from "express";
import { container } from "tsyringe";
import BookCopyService from "../services/copyService";

export default class BookCopyController {

  static async getCopyById(req: Request, res: Response) {
    const bookCopyService = container.resolve(BookCopyService);
    const copyId = parseInt(req.params.id, 10);
    const copy = await bookCopyService.getCopyById(copyId);
    res.json(copy);
  }

  static async borrowCopy(req: Request, res: Response) {
    const bookCopyService = container.resolve(BookCopyService);
    const copyId = parseInt(req.params.id, 10);
    const copy = await bookCopyService.borrowCopy(copyId);
    res.json(copy);
  }

  static async returnCopy(req: Request, res: Response) {
    const bookCopyService = container.resolve(BookCopyService);
    const copyId = parseInt(req.params.id, 10);
    const copy = await bookCopyService.returnCopy(copyId);
    res.json(copy);
  }

  static async createCopy(req: Request, res: Response) {
    const bookCopyService = container.resolve(BookCopyService);
    const { bookId } = req.body;
    const copy = await bookCopyService.createCopy(bookId);
    res.status(201).json(copy);
  }

  static async deleteCopy(req: Request, res: Response) {
    const bookCopyService = container.resolve(BookCopyService);
    const copyId = parseInt(req.params.id, 10);
    await bookCopyService.deleteCopy(copyId);
    res.status(204).send();
  }

  static async getAvailableCopies(req: Request, res: Response) {
    const bookCopyService = container.resolve(BookCopyService);
    const bookId = parseInt(req.params.bookId, 10);
    const copies = await bookCopyService.getAvailableCopies(bookId);
    res.json(copies);
  }
}