import { User } from "../../domain/entities/users/user";
import { Id } from "../../domain/value-objects/Id";

export class UserStorage {
  public users: User[];

  public constructor() {
    this.users = [];
  }

  public addUser(user: User): void {
    this.users = [...this.users, user];
  }

  public getUsers(): User[] {
    return this.users;
  }

  public getById(id: string): User | null {
    const user = this.users.find((user) => user.id.id === id);
    if (!user) return null;
    return user;
  }

  public getByEmail(email: string): User | null {
    const user = this.users.find((user) => user.email.email === email);
    if (!user) return null;
    return user;
  }

  public removeUser(userId: Id): void {
    this.users = this.users.filter((user) => user.id !== userId);
  }
}
