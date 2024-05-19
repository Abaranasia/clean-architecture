import { IUserRepository } from "../adapters/iUserRepository";
import { UserData } from "../../domain/entities/shared/users.interface";
import { User } from "../../domain/entities/user";

export class UserRepository implements IUserRepository {

    constructor () {}

    async getByEmail(email: string): Promise<User | unknown> {
        // find user matching email in array of users
        const users: User[] =[]
        const user =  users.find((user) => user.email.email=== email)
        return user
      }

      async getById(id: string): Promise<User | unknown> {
        // find user matching id in array of users
        const users: User[] =[]
        const user =  users.find((user) => user.id.id=== id)
        return user
      }

      async getAll(): Promise<User[]> {
        // Lists all users contained in users
        const users: User[] =[]
        return users
      }

      async createUser(newUser: UserData): Promise<User> {
        // Creates a new user and adds it to users repository
        const users: User[] =[]
        const user =  User.create(newUser);
        users.push(user)
        return user
      }

      async updateUser(newUser: UserData): Promise<User> {
        // updates a user and adds it to users repository
        const users: User[] =[]
        
        const user = User.update(newUser);

        // First we remove the user from users
        users.filter(user => user.id.id != newUser.id);
        // Then we add the update user to users
        users.push(user)

        return user
      }
}