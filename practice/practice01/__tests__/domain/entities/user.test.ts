import { User } from "../../../domain/entities/user";

describe('Tests of User entity methods', () => {
  const userMock = {
    name: 'Pepe',
    email: 'pepe@gmail.com',
    password: 'abcd.1234',
  }

  test('should create a valid user', () => {
    const user = User.create(userMock)
    console.log('newUser', user)

    expect(user.equals(user)).toBe(true)
    expect(user).toBeInstanceOf(User);
  })

  test('should create two different users', () => {
    const user1 = User.create(userMock)
    const user2 = User.create(userMock)

    expect(user1).toBeInstanceOf(User);
    expect(user2).toBeInstanceOf(User);
    expect(user1.equals(user2)).not.toBe(true)
  })

  test('should update an existing user', () => {
    const user1 = User.create(userMock)
    
    // Review this:
    const result = user1.update({
      name: 'José',
      id: user1.id.id,
      email: user1.email.email,
      password: user1.password.password,
    }); 

    expect(result).toBeInstanceOf(User);
    expect(user1.equals(result)).not.toBe(false)
    expect(user1.name.equals(result.name)).not.toBe(true)
  })
})