import { Users } from "../../app/repositories/users";

describe('Tests of Users entity methods', () => {
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

    test('should create a valid user', () => {
      const userList=Users.create(userMock1)
      console.log('userList.getUsers() 1 :>> ', userList.getUsers());
      userList.addUser(userMock2)
      console.log('userList.getUsers() 2 :>> ', userList.getUsers());
        
/*         expect(user.equals(user)).toBe(true)
        expect(user).toBeInstanceOf(User); */
      });
    })