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
        message: "Book created successfully",
        result: response,
      });
    } catch (error) {
      console.error("Error creating book:", error);
      res.status(400).json({ message: "Failed to create book" });
    }
  }

  static async updateBook(req: Request, res: Response) {
    try {
      const bookService = container.resolve(BookService);
      const id = parseInt(req.params.id);
      const response = await bookService.updateBook(id, req.body);
      res.status(200).json({
        status: 200,
        message: "Book updated successfully",
        result: response,
      });
    } catch (error) {
      console.error("Error updating book:", error);
      res.status(400).json({ message: "Failed to update book" });
    }
  }

  static async deleteBook(req: Request, res: Response) {
    try {
      const bookService = container.resolve(BookService);
      const id = parseInt(req.params.id);
      await bookService.deleteBook(id);
      res.status(204).send(); 
    } catch (error) {
      console.error("Error deleting book:", error);
      res.status(400).json({ message: "Failed to delete book" });
    }
  }
}