import { IUserRepository } from "../adapters/iUserRepository";
import { UserData, UsersListData } from "../../domain/entities/shared/users.interface";
import { User } from "../../domain/entities/user";
import { Users } from "./users";

export class UserRepository implements IUserRepository {

    constructor (private users: Users) {}

    async getByEmail(email: string): Promise<User | unknown> {
        return this.users.getByEmail(email)
      }

      async getById(id: string): Promise<User | unknown> {
        return this.users.getById(id);
      }

      async getAll(): Promise<UsersListData | unknown> {
        return this.users.getUsers()
      }

      async createUser(newUser: UserData): Promise<User> {
        const user =  User.create(newUser);
        this.users.addUser(user)
        return user
      }

      async updateUser(newUser: UserData): Promise<User> {
        const user = User.update(newUser);

        // First we remove the user from users
        this.users.removeUser(user.id)
        // Then we add the update user to users
        this.users.addUser(user)

        return user
      } 
}