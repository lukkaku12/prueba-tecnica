import { Request, Response } from "express";
import { container } from "tsyringe";
import { BookService } from "../services/bookService";

export class BookController {

  static async createBook(req: Request, res: Response) {
    try {
      const bookService = container.resolve(BookService);
      const response = await bookService.createBook(req.body);
      res.status(201).json({
        status: 201,
        response: "Book created successfully",
        extra: response,
      });
    } catch (error: any) {
      throw new Error(`${error}`);
    }
  }

  static async updateBook(req: Request, res: Response) {
    try {
      const bookService = container.resolve(BookService);
      const id = parseInt(req.params.id);
      const response = await bookService.updateBook(id, req.body);
      res.status(200).json({
        status: 200,
        response: "Book updated successfully",
        extra: response,
      });
    } catch (error: any) {
      throw new Error(`${error}`);
    }
  }

  static async deleteBook(req: Request, res: Response) {
    try {
      const bookService = container.resolve(BookService);
      const id = parseInt(req.params.id);
      await bookService.deleteBook(id);
      res.status(204).json({
        status: 204,
        response: `Book with ID ${id} deleted successfully`,
      });
    } catch (error: any) {
      throw new Error(`${error}`);
    }
  }
}