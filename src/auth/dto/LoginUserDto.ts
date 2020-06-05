import { IsNotEmpty, IsEmail } from 'class-validator';

export class LoginUserDto {

  @IsNotEmpty()
  readonly id: number;

  @IsNotEmpty()
  readonly first_name: string;

  @IsNotEmpty()
  readonly last_name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}