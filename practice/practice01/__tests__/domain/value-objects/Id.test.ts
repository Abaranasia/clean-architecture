import { Id } from "../../../domain/value-objects/Id"

describe('Tests of Name class methods', () => {

  test('should create a valid id', () => {
    const user = Id.create()
    expect(user.id).not.toBe('')
    expect(user.id).not.toBeUndefined()
  })

  test('should create different ids each time', () => {
    const user1 = Id.create()
    const user2 = Id.create()
    const userId1 = user1.id;
    const userId2 = user2.id;

    expect(userId1 !== userId2)
    expect(user1.equals(user2)).toBe(false)
  })
})