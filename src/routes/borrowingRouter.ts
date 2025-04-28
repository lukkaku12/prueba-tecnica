import { Router } from "express";
import { BorrowingsController } from "../controllers/borrowingController";

const borrowingsRouter = Router();

// Solicitar un libro prestado
borrowingsRouter.post("/borrow", BorrowingsController.borrowBook);

// Devolver un libro
borrowingsRouter.post("/return", BorrowingsController.returnBook);

export default borrowingsRouter;