import { UserRepository } from "../../app/domain/repositories/UserRepository";
import { mockUser1, mockUser2 } from "./userEntity";

export const mockUserRepository: UserRepository = {
  getByEmail: jest.fn().mockImplementation(() => mockUser1),
  getAll: jest.fn().mockImplementation(() => [mockUser1, mockUser2]),
  createUser: jest
    .fn()
    .mockImplementation((newUser) => console.log("newUser :>> ", newUser)),
};
