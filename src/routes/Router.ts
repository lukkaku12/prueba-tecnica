import { Router } from "express";
import userRouter from "./UserRouter";


const router = Router();

// router.use('/product', productRouter);
router.use('/user', userRouter);
// router.use('/order', orderRouter);
// router.use('/product-cart', productCartRouter);


export default router;