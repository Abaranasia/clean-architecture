import { Users } from "../../app/repositories/users";
import { User } from "../../domain/entities/user";

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
      const newUser = User.create(userMock1)

      const userList=Users.create(newUser)
      const result = userList.users.filter((user) => user.id === newUser.id)
      
      expect(userList.users.length).not.toBe(0);
      expect(result).not.toEqual({});
    });

    test('should be able to add new users to a list of users', () => {
      const newUser1 = User.create(userMock1)
      const newUser2 = User.create(userMock2)

      const userList=Users.create(newUser1)
      const userList1 =  userList.getUsers();

      userList.addUser(newUser2)
      const userList2 =  userList.getUsers();
      
      expect(userList1).not.toEqual(userList2);
      expect(userList.users.length).toBe(2)
    }); 

    test('should return a user from a list of users by its id', () => {
      const newUser = User.create(userMock1)
      const userList=Users.create(newUser)

      expect (userList.getById(newUser.id.id)).toEqual(newUser)
    });
  
    test('should return a user from a list of users by its email', () => {
      const newUser = User.create(userMock1)
      const userList=Users.create(newUser)

      expect (userList.getByEmail(newUser.email.email)).toEqual(newUser)
    });
  })