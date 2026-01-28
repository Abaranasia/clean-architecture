import { CreateUserUseCase } from "./domain/useCases/createUserUseCase";
import { GetAllUseCase } from "./domain/useCases/getAllUseCase";
import { GetByEmailUseCase } from "./domain/useCases/getByEmailUseCase";
import { UserApiRepository } from "./data/users/userRepository";
import { UserStorage } from "./data/api/userStorage";
import { User, UserData } from "./domain/entities/users/user";

export const userStorage = new UserStorage();
export const userRepository = new UserApiRepository(userStorage);
export const createUserUseCase = new CreateUserUseCase(userRepository);
export const getAllUseCase = new GetAllUseCase(userRepository);
export const getByEmailUseCase = new GetByEmailUseCase(userRepository);

class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private getAllUseCase: GetAllUseCase,
    private getByEmailUseCase: GetByEmailUseCase,
  ) {}

  async createUser(userData: UserData): Promise<void> {
    await this.createUserUseCase.execute(userData);
  }

  async getAllUsers(): Promise<User[] | null> {
      const users = await this.getAllUseCase.execute();
      return users;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.getByEmailUseCase.execute(email);
    return user;
  }
}

export const userController = new UserController(createUserUseCase, getAllUseCase, getByEmailUseCase);
