import { Request, Response } from "express";
import { container } from "tsyringe";
import AuthorService from "../services/authorService";

export class AuthorController {
  static async createAuthor(req: Request, res: Response) {
    try {
      const { author_name, last_name, birth_date } = req.body;
      const authorService = container.resolve(AuthorService);
      const newAuthor = await authorService.createAuthor({ author_name, last_name, birth_date });

      res.status(201).json({
        status: 201,
        message: "Author created successfully",
        author: newAuthor,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error instanceof Error ? error.message : "Unexpected error",
      });
    }
  }

  static async updateAuthor(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { author_name, last_name, birth_date } = req.body;
      const authorService = container.resolve(AuthorService);

      const updatedAuthor = await authorService.updateAuthor(Number(id), {
        author_name,
        last_name,
        birth_date,
      });

      res.status(200).json({
        status: 200,
        message: "Author updated successfully",
        author: updatedAuthor,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error instanceof Error ? error.message : "Unexpected error",
      });
    }
  }

  static async getAuthor(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const authorService = container.resolve(AuthorService);
      const author = await authorService.getAuthorById(Number(id));

      res.status(200).json({
        status: 200,
        author,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error instanceof Error ? error.message : "Unexpected error",
      });
    }
  }

  static async deleteAuthor(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const authorService = container.resolve(AuthorService);
      await authorService.deleteAuthor(Number(id));

      res.status(200).json({
        status: 200,
        message: "Author deleted successfully",
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error instanceof Error ? error.message : "Unexpected error",
      });
    }
  }

  static async getAllAuthors(req: Request, res: Response) {
    try {
      const authorService = container.resolve(AuthorService);
      const authors = await authorService.getAllAuthors();

      res.status(200).json({
        status: 200,
        authors,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error instanceof Error ? error.message : "Unexpected error",
      });
    }
  }
}