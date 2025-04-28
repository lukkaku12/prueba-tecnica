import { Router } from "express";
import { BookController } from "../controllers/bookController";

const bookRouter = Router();

// Crear un nuevo libro
bookRouter.post("/", BookController.createBook);

// Actualizar un libro por ID
bookRouter.put("/:id", BookController.updateBook);

// Eliminar un libro por ID
bookRouter.delete("/:id", BookController.deleteBook);

export default bookRouter;