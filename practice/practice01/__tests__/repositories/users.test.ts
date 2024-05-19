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

    test('should create a valid list of users', () => {
      const userList=Users.create(userMock1)
      const result = userList.users.filter((user) => user.email.email === userMock1.email)
      
      expect(userList.users.length).not.toBe(0);
      expect(result).not.toEqual({});
      });

    test('should be able to add new users to a list of users', () => {
      const userList=Users.create(userMock1)
      const userList1 =  userList.getUsers();

      userList.addUser(userMock2)
      const userList2 =  userList.getUsers();
      
      expect(userList1).not.toEqual(userList2);
      expect(userList.users.length).toBe(2)
      });
    })