import { 
    UserObjectData, 
    UsersListData, 
} from "../../domain/entities/shared/users.interface";
import { User } from "../../domain/entities/user";
import { Id } from "../../domain/value-objects/Id";

export class Users {
    public users: UsersListData;

    private constructor (user: UserObjectData) {
        this.users = [user];
    }

    public static create(user: UserObjectData): Users {
        return new Users(user)
    } 

    public addUser(user: UserObjectData): void {      
        this.users = [
            ...this.users,
            user,
            ];
    }

    public getUsers(): UsersListData {
        return this.users
      }

    public getById(id: string): User | unknown {
        const user =  this.users.find((user) => user.id.id=== id)
        return user 
    }

    public getByEmail(email: string): User | unknown {
        const user =  this.users.find((user) => user.email.email=== email)
        return user 
    }

    public removeUser(userId: Id): void {
        this.users.filter(user => user.id != userId); 
    }
}
