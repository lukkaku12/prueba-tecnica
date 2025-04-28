import { Router } from "express";
import { userController } from "../controllers/userController";

const userRouter = Router();

// Obtener todos los usuarios
userRouter.get('/', userController.getAll);

// Crear un nuevo usuario
userRouter.post('/', userController.createUser);

// Editar un usuario existente (por ID)
userRouter.put('/:id', userController.editUser);

// Eliminar un usuario por ID
userRouter.delete('/:id', userController.delete);

export default userRouter;