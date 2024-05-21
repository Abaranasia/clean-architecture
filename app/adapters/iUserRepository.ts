import { UserData } from "../domain/entities/shared/users.interface";
import { User } from "../domain/entities/user";

export interface IUserRepository {
    getByEmail(email: string): Promise<User | null>;     
    getAll(): Promise<User[] | null>;
    createUser(newUser: UserData): Promise<User>;
    // getById(id: string): Promise<User | null>;
    // updateUser(newUser: UserData): Promise<User>; 
}