import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async createUser(dto: CreateUserDto): Promise<string> {
    // check uniqueness of email
    const { first_name, last_name, email, password } = dto;
    const qb = await getRepository(UserEntity)
      .createQueryBuilder('users')
      .where('users.email = :email', { email });

    const user = await qb.getOne();
    if (user) {
      const errors = { createUser: 'Email must be unique.' };
      throw new HttpException(
        { message: 'Input data validation failed', errors },
        HttpStatus.BAD_REQUEST,
      );
    }
    
    // create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserEntity();
    newUser.first_name = first_name;
    newUser.last_name = last_name;
    newUser.email = email;
    newUser.password = hashedPassword;

    await this.userRepository.save(newUser);
    return 'successfully saved';
  }
}
