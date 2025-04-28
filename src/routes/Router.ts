import { Router } from "express";
import userRouter from "./UserRouter";
import authorRouter from "./authorRouter";
import bookRouter from "./bookRouter";
import borrowingsRouter from "./borrowingRouter";


const router = Router();

router.use('/borrowings', borrowingsRouter);
router.use('/user', userRouter);
router.use('/author', authorRouter);
router.use('/book', bookRouter);


export default router;