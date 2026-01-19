import { UserData } from "../entities/users/user"
import { IUserRepository } from "../repositories/iUserRepository"

export class CreateUserUseCase {
    constructor (
        private userRepository: IUserRepository
    )
    {}
    async execute (newUser: UserData): Promise<void> {
        try {
            this.userRepository.createUser(newUser)            
        } catch (error) {
            throw new Error ('Something happened when creating a user')
        }


    }
}