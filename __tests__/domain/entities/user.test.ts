import { User } from "../../../app/domain/entities/users/user"



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
    expect(user1.equals(result)).not.toBe(false);
    expect(user1.name.equals(result.name)).not.toBe(true);
  })

  test('should return the name of the user', () => {
    const user1 = User.create(userMock);

    expect (user1.getName()).toBe(userMock.name);
    expect (user1.getName()).toBe(user1.name.name);
  })

  test('should return the email of the user', () => {
    const user1 = User.create(userMock);

    expect (user1.getEmail()).toBe(userMock.email);
    expect (user1.getEmail()).toBe(user1.email.email);
    
  })

  test('should return the password of the user', () => {
    const user1 = User.create(userMock);

    expect (user1.getPassword()).toBe(userMock.password);
    expect (user1.getPassword()).toBe(user1.password.password);
  })
})