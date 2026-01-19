import { UserRepository } from "../domain/repositories/UserRepository";
import { User } from "../domain/entities/users/user";

export class GetByEmailUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(email: string): Promise<User | null> {
    try {
      const user = await this.userRepository.getByEmail(email);

      if (!user) throw new Error("User not found");
      return user;
    } catch (error) {
      throw new Error("Something happened when requesting a user by Email");
    }
  }
}
