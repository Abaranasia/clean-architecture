
import { IUserRepository } from "../adapters/iUserRepository";
import { UserData } from "../domain/entities/shared/users.interface";

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