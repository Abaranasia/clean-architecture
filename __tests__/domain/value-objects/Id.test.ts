import { Id } from "../../../src/domain/value-objects/Id";

describe('Tests of Id class methods', () => {

  const noValidIdError = 'Id is required';

  test('should generate a valid id', () => {
    const user = Id.generate()
    expect(user.id).not.toBe('')
    expect(user.id).not.toBeUndefined()
  })

  test('should create a valid id', () => {
    const user = Id.create('123')
    expect(user.id).not.toBe('')
    expect(user.id).not.toBeUndefined()
  })

  test('should create an invalid id', () => {
    expect(() => { Id.create('') }).toThrow(noValidIdError);
  })

  test('should generate different ids each time', () => {
    const user1 = Id.generate()
    const user2 = Id.generate()
    const userId1 = user1.id;
    const userId2 = user2.id;

    expect(userId1 !== userId2)
    expect(user1.equals(user2)).toBe(false)
  })

  test('should indetify two users with same ids', () => {
    const user1 = Id.create('123')
    const user2 = Id.create('123')
    const userId1 = user1.id;
    const userId2 = user2.id;

    expect(userId1 == userId2)
    expect(user1.equals(user2)).toBe(true)
  })
})