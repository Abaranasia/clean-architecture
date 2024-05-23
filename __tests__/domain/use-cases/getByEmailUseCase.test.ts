
import { GetByEmailUseCase } from "../../../app/useCases/getByEmailUseCase";
import { mockUserRepository } from "../../__mocks__/mockUserRepository";
import { mockUser1 } from "../../__mocks__/userEntity";


const userEmail= 'pepe@gmail.com';

describe('Tests of getByEmail Use Case', () => {

    test('should get a user by its email', async () => {
        const userCase = new GetByEmailUseCase(mockUserRepository);
        const result = await userCase.execute(userEmail)

        expect(mockUserRepository.getByEmail).toHaveBeenCalled();
        expect(result).toEqual(mockUser1);
    });
});