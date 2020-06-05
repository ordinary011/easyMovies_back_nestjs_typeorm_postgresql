import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserService } from '../user/user.service';
import { LoginUserDto } from './dto/LoginUserDto';
import { JwtTokenDto } from './dto/JwtTokenDto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
  }

  async validateUser(email: string, pass: string): Promise<LoginUserDto> {
    const user = await this.userService.findOne(email);

    if (user && bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginUserDto): Promise<JwtTokenDto> {
    return { access_token: this.jwtService.sign(user) };
  }
}
