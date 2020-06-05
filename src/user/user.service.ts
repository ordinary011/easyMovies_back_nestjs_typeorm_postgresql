import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/CreateUserDto';
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

  // async findByEmail(email: string): Promise<any> {
  //   const qb = await getRepository(UserEntity)
  //     .createQueryBuilder('users')
  //     .where('users.email = :email', { email });
  //
  //   return await qb.getOne();
  // }

  async findOne(email: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async createUser(dto: CreateUserDto): Promise<string> {
    const { first_name, last_name, email, password } = dto;

    // check uniqueness of email
    const user = await this.findOne(email);
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
