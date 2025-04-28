import { User } from '../models';
import { injectable } from "tsyringe";
import UserRepository from '../repository/userRepository';

@injectable()
export default class UserService {
 constructor(private userRepository:UserRepository) {}

 async getAllUsers() {
    const [rows] = await this.userRepository.findAllUsers();
    return rows;
 }


 async createUser(user: Partial<User>) {
    const result = await this.userRepository.create(user);
    return result;
 }

 async deleteUser(id:number) {
    const result = await this.userRepository.delete(id);
    return result;
 }

  async updateUser(id:number, user:Partial<User>) {
     return await this.userRepository.update(id,user)
   }

}