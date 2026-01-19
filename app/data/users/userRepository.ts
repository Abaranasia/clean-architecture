import { UserRepository } from "../../domain/repositories/UserRepository";

import { UserStorage } from "../api/userStorage";
import { User, UserData } from "../../domain/entities/users/user";

export class UserApiRepository implements UserRepository {
  constructor(private userStorage: UserStorage) {}

  async getByEmail(email: string): Promise<User | null> {
    return this.userStorage.getByEmail(email);
  }

  async getAll(): Promise<User[] | null> {
    return this.userStorage.getUsers();
  }

  async createUser(newUser: UserData): Promise<void> {
    const user = User.create(newUser);
    this.userStorage.addUser(user);
  }
}
