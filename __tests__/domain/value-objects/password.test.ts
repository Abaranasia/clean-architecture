import { Password } from "../../../src/domain/value-objects/Password";
import { PASSWORD_ERRORS } from "../../../src/domain/value-objects/shared/password_constants";


describe('Tests of Password class methods', () => {
  const validPassword = "abcd.1234"
  const noPasswordError = 'password is required';
  const invalidPasswordError = 'Password is invalid';

  test('should create a valid password', () => {
    const user = Password.create(validPassword)
    const userPassword = user.password;

    expect(userPassword === validPassword)
  });

  test('should return an error when password is empty', () => {
    expect(() => { Password.create('') }).toThrow(noPasswordError);
  })

  test('should return an error when password is invalid', () => {
    expect(() => { Password.create('1234567.') }).toThrow(`${invalidPasswordError}: ${PASSWORD_ERRORS.noLetters}`);
  })
})