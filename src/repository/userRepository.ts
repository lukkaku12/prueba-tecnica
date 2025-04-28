import { injectable } from 'tsyringe';
import { User } from '../models';

@injectable()
export default class UserRepository {
  async findAllUsers() {
    return await User.findAll();
  }

  async findById(id: number) {
    return await User.findByPk(id);
  }

  async create(user: Partial<User>) {
    return await User.create(user);
  }

  async update(id: number, user: Partial<User>) {
    const [affectedRows] = await User.update(user, { where: { id } });
    if (affectedRows === 0) {
      throw new Error('No se encontró el usuario para actualizar');
    }
    return await this.findById(id);
  }

  async delete(id: number) {
    const userDelete = await User.findByPk(id);
    if (!userDelete) {
      throw new Error('No se encontró el usuario para eliminar');
    }
    await userDelete.destroy();
  }
}