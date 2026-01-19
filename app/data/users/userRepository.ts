
import { IUserRepository } from "../../domain/repositories/iUserRepository";

import { UserStorage } from "../api/userStorage";
import { User, UserData } from "../../domain/entities/users/user";

export class UserRepository implements IUserRepository {

    constructor (private userStorage: UserStorage) {}

    async getByEmail(email: string): Promise<User | null> {
        return this.userStorage.getByEmail(email)
      }

      async getAll(): Promise<User[] | null> {
        return this.userStorage.getUsers()
      }

      async createUser(newUser: UserData): Promise<void> {
        const user =  User.create(newUser);
        this.userStorage.addUser(user)
      }
}