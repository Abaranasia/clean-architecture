import { UserData } from "../entities/users/user";
import { UserRepository } from "../repositories/UserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(newUser: UserData): Promise<void> {
    try {
      this.userRepository.createUser(newUser);
    } catch (error) {
      throw new Error("Something happened when creating a user");
    }
  }
}
