
import { IUserRepository } from "../adapters/iUserRepository";
import { UserData } from "../domain/entities/users/user";


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