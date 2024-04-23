import { Entity } from "./entity"
import { UserData, UserObjectData } from "./shared/users.interface";

import { Id } from "../value-objects/Id";
import { Name } from "../value-objects/Name";
import { Email } from "../value-objects/Email";
import { Password } from "../value-objects/Password";

export class User extends Entity {
  public id: Id;
  private name: Name;
  private email: Email;
  private password: Password;

  constructor(data: UserObjectData) {
    super(data.id);
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }

  public static create(data: UserData): User {
    const userId = Id.create();
    const name = Name.create(data.name);
    const email = Email.create(data.email);
    const password = Password.create(data.password);

    return new User({ id: userId, name, email, password })
  }

  public getUser(): UserObjectData {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    }
  }

  public setUser(props: UserData) {
    this.name = Name.create(props.name);
    this.email = Email.create(props.email);
    this.password = Password.create(props.password);

  }
}