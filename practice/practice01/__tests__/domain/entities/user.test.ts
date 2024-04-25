import { User } from "../../../domain/entities/user";

describe('Tests of User entity methods', () => {
  const userMock = {
    name: 'Pepe',
    email: 'pepe@gmail.com',
    password: 'abcd.1234',
  }

  test('should create a valid user', () => {
    const user = User.create(userMock)
   // const newUser = user;
    console.log('newUser', user)
    // console.log('newUser', newUser.name.getName())

    expect(user.equals(user)).toBe(true)
  })

  test('should create two different users', () => {
    const user1 = User.create(userMock)
    const user2 = User.create(userMock)

    expect(user1.equals(user2)).not.toBe(true)
  })
})