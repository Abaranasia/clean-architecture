
import { IUserRepository } from "../../adapters/iUserRepository";

import { UserStorage } from "../../data/userStorage";
import { User, UserData } from "../entities/users/user";

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