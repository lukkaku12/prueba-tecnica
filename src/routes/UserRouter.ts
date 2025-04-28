import { Router } from "express";
import { userController } from "../controllers/userController";


const userRouter = Router()



userRouter.get('/', userController.getAll);
userRouter.post('/', userController.createUser);
userRouter.put('/:id', userController.editUser);
userRouter.delete('/:id', userController.delete)

//funciona

export default userRouter;