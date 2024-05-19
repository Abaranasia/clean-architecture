import { Entity } from "./entity"
import { UserData, UserObjectData } from "./shared/users.interface";

import { Id } from "../value-objects/Id";
import { Name } from "../value-objects/Name";
import { Email } from "../value-objects/Email";
import { Password } from "../value-objects/Password";

export class User extends Entity<UserObjectData> {
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
    const userData: UserObjectData = {
      id: !data.id ? Id.generate() : Id.create(data.id),
      name: Name.create(data.name),
      email: Email.create(data.email),
      password: Password.create(data.password),
    };

    return new User(userData)
  }

  public static update(props: UserData): User{
    const newData = {...props}
    return User.create(newData);
  };

  public get user(): UserObjectData {
    const userData = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };
    
    return userData
  }

  public getId(): Id{
    return this.id
  }
  
  public getName(): string{
    return this.name.name
  }

  public getEmail(): string{
    return this.email.email
  }

  public getPassword(): string{
    return this.password.password
  }
}