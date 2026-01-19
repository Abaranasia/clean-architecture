
import { User, UserData } from "../domain/entities/user";

export interface IUserRepository {
    getByEmail(email: string): Promise<User | null>;     
    getAll(): Promise<User[] | null>;
    createUser(newUser: UserData): void;
    // getById(id: string): Promise<User | null>;
    // updateUser(newUser: UserData): Promise<User>; 
}