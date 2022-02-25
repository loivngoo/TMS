import { Module } from '@nestjs/common';
import { PostgresConnection } from './postgres/PostgresConnection.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PostgresConnection, UserModule]
})
export class AppModule { }
