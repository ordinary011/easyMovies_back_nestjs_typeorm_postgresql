import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenPayloadDto } from '../dto/TokenPayloadDto';
import { LoginUserDto } from '../dto/LoginUserDto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "big_secret",
    });
  }

  validate(payload: TokenPayloadDto): LoginUserDto {
    const {iat, exp, ...user} = payload;
    return user;
  }
}