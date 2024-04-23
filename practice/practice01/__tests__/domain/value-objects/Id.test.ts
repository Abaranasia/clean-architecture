import { Id } from "../../../domain/value-objects/Id"

describe('Tests of Name class methods', () => {

  test('should create a valid id', () => {
    const user = Id.create()
    expect(user.getId).not.toBe('')
    expect(user.getId).not.toBeUndefined()
  })

  test('should create different ids each time', () => {
    const user1 = Id.create()
    const user2 = Id.create()
    const userId1 = user1.getId();
    const userId2 = user2.getId();

    expect(userId1 !== userId2)
    expect(user1.equals(user2)).toBe(false)
  })
})