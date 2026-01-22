
import { CreateUserUseCase } from "../../../src/domain/useCases/createUserUseCase";
import { GetAllUseCase } from "../../../src/domain/useCases/getAllUseCase";

import { mockUserRepository } from "../../__mocks__/mockUserRepository";
import { mockUser1, mockUser2 } from "../../__mocks__/userEntity";

describe('Tests of createUser Use Case', () => {

    const userMock1 = {
        name: 'Pepe',
        email: 'pepe@gmail.com',
        password: 'abcd.1234',
      };

    const userMock2 = {
        name: 'Pipo',
        email: 'pipo@gmail.com',
        password: 'cdef.1234',
    };   
      
    beforeEach(() => {
        jest.clearAllMocks();    
      });

    test('should correctly create a user ', async () => {
        const userCase = new CreateUserUseCase(mockUserRepository);
        userCase.execute(userMock1)
        
        expect(mockUserRepository.createUser).toHaveBeenCalled()
    });
    
    test('should correctly create two users and be able to list them', async () => {
        const userCase = new CreateUserUseCase(mockUserRepository);
        userCase.execute(userMock1)
        userCase.execute(userMock2)

        const getAllUserCase = new GetAllUseCase(mockUserRepository);
        const result = await getAllUserCase.execute()
        
        expect(mockUserRepository.createUser).toHaveBeenCalledTimes(2);
        expect(result).toEqual([mockUser1, mockUser2]);
    }); 
});