import { CreateUserUseCase } from "../../domain/useCases/createUserUseCase";
import { GetAllUseCase } from "../../domain/useCases/getAllUseCase";
import { UserData, User } from "../../domain/entities/users/user";

export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private getAllUseCase: GetAllUseCase
  ) {}

  async createUser(userData: UserData): Promise<void> {
    try {
      await this.createUserUseCase.execute(userData);
      console.log("User created successfully");
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async getAllUsers(): Promise<User[] | null> {
    try {
      const users = await this.getAllUseCase.execute();
      return users;
    } catch (error) {
      console.error("Error getting all users:", error);
      throw error;
    }
  }
}