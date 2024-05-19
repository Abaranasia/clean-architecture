import { UserData, UserObjectData, UsersObjectData } from "../../domain/entities/shared/users.interface";
import { User } from "../../domain/entities/user";


export class Users {
    public users: UsersObjectData;

    private constructor (user: UserObjectData) {
        this.users = {
        ...this.users,
        [user.id.id]: user,
    };

    };
  

    public static addUser(props: UserData): Users {
        const user = User.create(props);
        
        return new Users(user)
    }
}
