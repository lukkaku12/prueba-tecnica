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
        result: response,
      });
    } catch (error) {
      console.error("Error getting all users:", error);
      res.status(500).json({ message: "Failed to get users" });
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const response = await userService.createUser(req.body);
      res.status(201).json({
        status: 201,
        message: "User created successfully",
        result: response,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(400).json({ message: "Failed to create user" });
    }
  }

  static async editUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const response = await userService.updateUser(
        parseInt(req.params.id),
        req.body
      );
      res.status(200).json({
        status: 200,
        message: "User updated successfully",
        result: response,
      });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(400).json({ message: "Failed to update user" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      await userService.deleteUser(parseInt(req.params.id));
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(400).json({ message: "Failed to delete user" });
    }
  }
}