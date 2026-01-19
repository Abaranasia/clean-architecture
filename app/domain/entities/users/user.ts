import { Entity } from "../../entities/shared/entity"

import { Id } from "../../value-objects/Id";
import { Name } from "../../value-objects/Name";
import { Email } from "../../value-objects/Email";
import { Password } from "../../value-objects/Password";

export interface UserObjectData {
  id: Id;
  name: Name;
  email: Email;
  password: Password;
}

export interface UserData {
  id?: string,
  name: string;
  email: string;
  password: string;
}

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

  public update(props: UserData): User {
    const updatedUser: UserObjectData = {
      id: props.id ? Id.create(props.id) : this.id,
      name: props.name ? Name.create(props.name) : this.name,
      email: props.email ? Email.create(props.email) : this.email,
      password: props.password ? Password.create(props.password) : this.password,
    };
    return new User(updatedUser);
  }

  public get user(): UserObjectData {
    const userData = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };
    
    return userData
  }

  public getId(): string{
    return this.id.id
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

  public toJSON(): UserData{
    return {
      id: this.getId(),
      name: this.getName(),
      email: this.getEmail(),
      password: this.getPassword(),
    }
  }
}