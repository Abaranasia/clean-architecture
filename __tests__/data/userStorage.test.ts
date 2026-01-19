import { UserStorage } from "../../app/data/api/userStorage";
import { User } from "../../app/domain/entities/users/user";


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
        const newUser = User.create(userMock1);
        const userList= new UserStorage();

        userList.addUser(newUser)

        const result = userList.users.filter((user) => user.id === newUser.id)
        
        expect(userList.users.length).not.toBe(0);
        expect(result).not.toEqual([]);
        expect(result).toEqual([newUser]);
    });

     test('should be able to add new users to a list of users', () => {
        const userList= new UserStorage();
        const newUser1 = User.create(userMock1)
        const newUser2 = User.create(userMock2)

        userList.addUser(newUser1)
        const userList1 =  userList.getUsers();

        userList.addUser(newUser2)
        const userList2 =  userList.getUsers();
        
        expect(userList1).not.toEqual(userList2);
        expect(userList.users.length).toBe(2)
    }); 

     test('getUsers should return a list of users', () => {
        const userList= new UserStorage();
        const newUser1 = User.create(userMock1)
        const newUser2 = User.create(userMock2)

        userList.addUser(newUser1)
        userList.addUser(newUser2)

        expect (userList.getUsers()).not.toEqual([])
        expect (userList.getUsers()).toEqual([newUser1, newUser2])
    });

     test('getById should return a user from a list of users by its id', () => {
        const userList= new UserStorage();
        const newUser = User.create(userMock1)
        userList.addUser(newUser)

        expect (userList.getById(newUser.id.id)).toEqual(newUser)
    });  
  
    test('getByEmail should return a user from a list of users by its email', () => {
        const userList= new UserStorage();
        const newUser = User.create(userMock1)
        userList.addUser(newUser)

        expect (userList.getByEmail(newUser.email.email)).toEqual(newUser)
    }); 

    test('removeUser should return a userList with from a list of users by its email', () => {
        const userList= new UserStorage();
        const newUser = User.create(userMock1)
      
        userList.removeUser(newUser.getId());
        
        expect (userList.users.length).toBe(0)
        expect (userList.getUsers()).toEqual([])
    }); 
  })