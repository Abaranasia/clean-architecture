import { UserData } from "../../domain/entities/shared/users.interface";
import { User } from "../../domain/entities/user";

export interface IUserRepository {
    getByEmail(email: string): Promise<User | unknown>;     
    getById(id: string): Promise<User | unknown>;
    getAll(): Promise<User[]>;
    createUser(newUser: UserData): Promise<User>;
    updateUser(newUser: UserData): Promise<User>; 
}