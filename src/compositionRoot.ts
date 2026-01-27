// import { UserController } from "./presentation/controllers/UserController";
import { CreateUserUseCase } from "./domain/useCases/createUserUseCase";
import { GetAllUseCase } from "./domain/useCases/getAllUseCase";
import { UserApiRepository } from "./data/users/userRepository";
import { UserStorage } from "./data/api/userStorage";
import { User, UserData } from "./domain/entities/users/user";

export const userStorage = new UserStorage();
export const userRepository = new UserApiRepository(userStorage);
export const createUserUseCase = new CreateUserUseCase(userRepository);
export const getAllUseCase = new GetAllUseCase(userRepository);

class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private getAllUseCase: GetAllUseCase,
  ) {}

  async createUser(userData: UserData): Promise<void> {
    await this.createUserUseCase.execute(userData);
  }

  async getAllUsers(): Promise<User[] | null> {
      const users = await this.getAllUseCase.execute();
      return users;
  }
}

export const userController = new UserController(createUserUseCase, getAllUseCase);
