import { User } from "../../src/domain/entities/users/user";

export const mockUser1 = User.create({
    name: 'Pepe',
    email: 'pepe@gmail.com',
    password: 'abcd.1234',
});

export const mockUser2 = User.create({
    name: 'Pipo',
    email: 'pipo@gmail.com',
    password: 'cdef.1234',
});