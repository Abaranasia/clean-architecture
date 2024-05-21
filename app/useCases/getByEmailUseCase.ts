import { User } from "../../domain/entities/user";
import { IUserRepository } from "../adapters/iUserRepository";

export class GetByEmailUseCase {
    constructor (
        private userRepository: IUserRepository
    )
    {}
    async execute (email: string): Promise<User | unknown> {
        try {
            const user= await this.userRepository.getByEmail(email)
            
            if (!user) throw new Error ('User not found')
            return user;
        } catch (error) {
            throw new Error ('Something happened when requesting a user by Email')
        }


    }
}