import { Router } from "express";
import userRouter from "./UserRouter";
import authorRouter from "./authorRouter";
import bookRouter from "./bookRouter";
import borrowingsRouter from "./borrowingRouter";
import bookCopyRouter from "./copyRouter";


const router = Router();

router.use('/borrowings', borrowingsRouter);
router.use('/user', userRouter);
router.use('/author', authorRouter);
router.use('/book', bookRouter);
router.use('/book-copy', bookCopyRouter)


export default router;