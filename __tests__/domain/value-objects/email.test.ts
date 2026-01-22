import { Email } from "../../../src/domain/value-objects/Email";


describe('Tests of Name class methods', () => {
  const goodEmail = 'pepe@gmail.com';
  const invalidEmail1 = 'pepe';
  const invalidEmail2 = 'PEPE@';
  const invalidEmail3 = 'pepe.com';
  const invalidEmail4 = 'pe pe @x.com';

  const noEmailError = 'Email is required';
  const invalidEmailError = 'Email is invalid';

  test('should create a valid email', () => {
    const user = Email.create(goodEmail)
    const userEmail = user.email;

    expect(userEmail === goodEmail)
  })

  test('should return an error when no email is provided', () => {
    expect(() => { Email.create('') }).toThrow(noEmailError);
  })

  test('should return an error when email is not valid', () => {
    expect(() => { Email.create(invalidEmail1) }).toThrow(invalidEmailError);
    expect(() => { Email.create(invalidEmail2) }).toThrow(invalidEmailError);
    expect(() => { Email.create(invalidEmail3) }).toThrow(invalidEmailError);
    expect(() => { Email.create(invalidEmail4) }).toThrow(invalidEmailError);
  })
})