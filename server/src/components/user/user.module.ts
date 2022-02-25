import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import * as QueryHandlers from './queries/handlers'
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    CqrsModule
  ],
  controllers: [UserController],
  providers: [
    ...Object.values(QueryHandlers)
  ]
})
export class UserModule { }
