import { IsNotEmpty, IsEmail } from 'class-validator';

export class TokenPayloadDto {

  @IsNotEmpty()
  readonly id: number;

  @IsNotEmpty()
  readonly first_name: string;

  @IsNotEmpty()
  readonly last_name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly iat: number;

  @IsNotEmpty()
  readonly exp: number;
}