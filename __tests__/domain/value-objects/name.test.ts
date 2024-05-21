import { Name } from "../../../app/domain/value-objects/Name";

describe('Tests of Name class methods', () => {
  const goodName = 'Pepe';
  const untrimmedName = '   Pepe ';
  const noNameError = 'Name is required';
  const noValidNameError = 'Name is not valid';

  test('should create a valid name', () => {
    const user = Name.create(goodName)
    const userName = user.name;

    expect(userName === goodName)
  })

  test('should create a trimmed name from untrimmed input', () => {
    const user = Name.create(untrimmedName)
    const userName = user.name;

    expect(userName === goodName)
    expect(userName.length).toBe(4)
  })

  test('should return an error when there is no name', () => {
    expect(() => { Name.create('') }).toThrow(noNameError);
  })

  test('should be able to update the name', () => {
    const user = Name.create(goodName);
    const newName = 'Pepo';

    user.name = newName; // Updating the name

    expect(user.name).not.toBe(goodName);
    expect(user.name).toBe(newName);
  })

  test('should not be able to update the name', () => {
    const user = Name.create(goodName)
    expect(() => { user.name = "" }).toThrow(noValidNameError);
  })
})