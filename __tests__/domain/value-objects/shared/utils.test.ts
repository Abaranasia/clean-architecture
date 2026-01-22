import { PASSWORD_ERRORS } from "../../../../src/domain/value-objects/shared/password_constants"
import { uidGenerator, validatePassword } from "../../../../src/domain/value-objects/shared/utils"


describe('Tests of ValidatePassword helper function', () => {
  test('should return no errors with a valid password', () => {
    const validPassword = "abcd.1234"
    const response = validatePassword(validPassword)
    expect(response).toEqual([])
  })

  test('should return an error due to invalid length', () => {
    const response = validatePassword('abcd.1')
    expect(response).toEqual([PASSWORD_ERRORS.invalidLength])
  })

  test('should return an error due to a lack of numbers', () => {
    const response = validatePassword('abcdefg.')
    expect(response).toEqual([PASSWORD_ERRORS.noNumbers])
  })

  test('should return an error due to a lack of letters', () => {
    const response = validatePassword('1234567.')
    expect(response).toEqual([PASSWORD_ERRORS.noLetters])
  })

  test('should return an error due to a lack of numbers', () => {
    const response = validatePassword('abcd1234')
    expect(response).toEqual([PASSWORD_ERRORS.noSymbols])
  })

  test('should return an error due to a lack of symbols', () => {
    const response = validatePassword('a bcd.1234')
    expect(response).toEqual([PASSWORD_ERRORS.hasWhiteSpace])
  })
})

describe('Tests of uidGenerator helper function', () => {
  test('should return a new id', () => {
    const uid = uidGenerator()

    expect(uid).not.toBe('')
  })

  test('should return two different ids', () => {
    const uid1 = uidGenerator()
    const uid2 = uidGenerator()

    expect(uid1 !== uid2)
  })
})