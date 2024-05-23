
import { IUserRepository } from "../adapters/iUserRepository";
import { User } from "../domain/entities/user";

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