import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { validate } from 'class-validator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<string> {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  async getHello(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }
}
