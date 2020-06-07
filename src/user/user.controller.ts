import { Controller, Get, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/CreateUserDto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<string> {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  async getHello(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }
}
