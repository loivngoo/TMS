import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Enity from '../tms-typeorm-entity'
import { PostgresRepoModule } from './PostgresRepo';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            entities: Object.values(Enity),
            logging: true,
            host: "127.0.0.1",
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'timesheet-management-system',
            synchronize: true,
        }),
        PostgresRepoModule
    ]
})
export class PostgresConnection { }
