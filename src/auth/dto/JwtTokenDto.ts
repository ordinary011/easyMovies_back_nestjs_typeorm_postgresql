import { IsNotEmpty } from 'class-validator';

export class JwtTokenDto {

  @IsNotEmpty()
  readonly access_token: string;

}