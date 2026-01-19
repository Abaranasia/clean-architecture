import { User } from "../entities/users/user";
import { IUserRepository } from "../repositories/iUserRepository";

export class GetAllUseCase {
    constructor (
        private userRepository: IUserRepository
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