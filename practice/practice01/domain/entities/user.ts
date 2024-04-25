import { Entity } from "./entity"
import { UserData, UserObjectData } from "./shared/users.interface";

import { Id } from "../value-objects/Id";
import { Name } from "../value-objects/Name";
import { Email } from "../value-objects/Email";
import { Password } from "../value-objects/Password";

export class User extends Entity {
  public readonly id: Id;
  public readonly name: Name;
  public readonly email: Email;
  public readonly password: Password;

 private constructor(data: UserObjectData) {
    super(data.id);
    this.id= data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }

  public static create(data: UserData): User {
    const id = Id.create();
    const name = Name.create(data.name);
    const email = Email.create(data.email);
    const password = Password.create(data.password);

    return new User({ id, name, email, password })
  }

  public get user(): UserObjectData {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    }
  }

  public update(props: UserData): User{
    const newData = {...props}
    return User.create(newData);
  };

/*   public set user(props: UserData): void {
    this.name = Name.create(props.name);
    this.email = Email.create(props.email);
    this.password = Password.create(props.password); 
  } */
}