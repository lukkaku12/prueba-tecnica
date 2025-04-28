import { Request, Response } from "express";
import { container } from "tsyringe";
import UserService from "../services/userService";

export class userController {
  static async getAll(_req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const response = await userService.getAllUsers();
      res.status(200).json({
        status: 200,
        result: response
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }


  static async createUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const reponse = await userService.createUser(req.body);
      res.status(201).json({
        status: 201,
        response: "user created successfully",
        extra: reponse,
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  static async editUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);

      const reponse = await userService.updateUser(parseInt(req.params.id), req.body); //will expect quantity, name
      res.status(214).json({
        status: 214,
        response: "product transformed successfully",
        extra: reponse,
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const response = await userService.deleteUser(parseInt(req.params.id));
      res.status(204).json({
        status: 204,
        response: `${response} eliminated successfully`,
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

}