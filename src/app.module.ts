import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'alex',
      password: 'alex',
      database: 'easy_movies',
      entities: [UserEntity],
      synchronize: false,
      // logging: true
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
