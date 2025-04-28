import { Router } from "express";
import BookCopyController from "../controllers/copyController";

const bookCopyRouter = Router();

// Crear una copia de un libro
bookCopyRouter.post("/", BookCopyController.createCopy);

// Eliminar una copia
bookCopyRouter.delete("/:id", BookCopyController.deleteCopy);

// Obtener una copia por ID
bookCopyRouter.get("/:id", BookCopyController.getCopyById);

// Marcar copia como prestada
bookCopyRouter.post("/:id/borrow", BookCopyController.borrowCopy);

// Marcar copia como disponible
bookCopyRouter.post("/:id/return", BookCopyController.returnCopy);

// Listar copias disponibles de un libro
bookCopyRouter.get("/available/:bookId", BookCopyController.getAvailableCopies);

export default bookCopyRouter;