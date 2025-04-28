import { User } from '../models';
import { injectable } from "tsyringe";
import UserRepository from '../repository/userRepository';

@injectable()
export default class UserService {
  constructor(private userRepository: UserRepository) {}

  async getAllUsers() {
    try {
      const users = await this.userRepository.findAllUsers();
      return users;
    } catch (error) {
      console.error("Error getting all users:", error);
      throw new Error("Failed to get users");
    }
  }

  async createUser(user: Partial<User>) {
    try {
      return await this.userRepository.create(user);
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Failed to create user");
    }
  }

  async deleteUser(id: number) {
    try {
      await this.userRepository.delete(id);
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Failed to delete user");
    }
  }

  async updateUser(id: number, user: Partial<User>) {
    try {
      return await this.userRepository.update(id, user);
    } catch (error) {
      console.error("Error updating user:", error);
      throw new Error("Failed to update user");
    }
  }
}