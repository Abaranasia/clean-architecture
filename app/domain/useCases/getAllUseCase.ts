import { User } from "../entities/users/user";
import { UserRepository } from "../repositories/UserRepository";

export class GetAllUseCase {
    constructor (
        private userRepository: UserRepository
    )
    {}
    async execute (): Promise<User[] | null> {
        try {
            const userList = await this.userRepository.getAll()
            
            return userList;
        } catch (error) {
            throw new Error ('Something happened when requesting the users')
        }
    }
}