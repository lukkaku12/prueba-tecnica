import { Router } from "express";
import { AuthorController } from "../controllers/authorController";

const authorRouter = Router();

// Crear un autor
authorRouter.post("/", AuthorController.createAuthor);

// Obtener todos los autores
authorRouter.get("/", AuthorController.getAllAuthors);

// Obtener un autor por ID
authorRouter.get("/:id", AuthorController.getAuthor);

// Actualizar un autor
authorRouter.put("/:id", AuthorController.updateAuthor);

// Eliminar un autor
authorRouter.delete("/:id", AuthorController.deleteAuthor);

export default authorRouter;