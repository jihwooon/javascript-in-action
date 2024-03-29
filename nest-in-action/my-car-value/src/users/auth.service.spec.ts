import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    const users: User[] = [];
    fakeUsersService = {
      find: (email: string) => {
        const filteredUsers = users.filter((user) => user.email === email);
        return Promise.resolve(filteredUsers);
      },
      create: (email: string, password: string) => {
        const user = {
          id: users.length + 1,
          email,
          password,
        } as User;
        users.push(user);
        return Promise.resolve(user);
      },
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();
    service = module.get(AuthService);
  });

  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('create a new with a salted and hashed password', async () => {
    const user = await service.signup('abcde@gmai.com', 'abdcd');

    expect(user.password).not.toEqual('asdf');
    const [salt, hash] = user.password.split('.');

    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error if user signs up with email that is in use', async () => {
    await service.signup('asdf@gmail.con', 'wrongpassword');

    expect(service.signup('asdf@gmail.con', '12345')).rejects.toThrow(
      BadRequestException,
    );
  });

  it('throw if signin is called with an unsed email', async () => {
    expect(service.signin('abcde@gmail.com', '12345')).rejects.toThrow(
      NotFoundException,
    );
  });

  it('throws if an invalid password is provided', async () => {
    await service.signup('asdf@gmail.com', '12345');

    expect(service.signin('asdf@gmail.com', 'asdf')).rejects.toThrow(
      BadRequestException,
    );
  });

  it('return a user if correct password is provided', async () => {
    await service.signup('abcdefgh@gmail.com', '12345');
    const user = await service.signin('abcdefgh@gmail.com', '12345');

    expect(user.id).toBe(1);
    expect(user.email).toBe('abcdefgh@gmail.com');
    expect(user.password).not.toBe('hashcode');
  });
});
