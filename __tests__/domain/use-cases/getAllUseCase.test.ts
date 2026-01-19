
import { GetAllUseCase } from "../../../app/domain/useCases/getAllUseCase";
import { mockUserRepository } from "../../__mocks__/mockUserRepository";
import { mockUser1, mockUser2 } from "../../__mocks__/userEntity";

describe('Tests of getAll Use Case', () => {

    test('should return a list of all users', async () => {
        const userCase = new GetAllUseCase(mockUserRepository);
        const result = await userCase.execute()

        expect(mockUserRepository.getAll).toHaveBeenCalled();
        expect(result).toEqual([mockUser1, mockUser2]);
    });
});