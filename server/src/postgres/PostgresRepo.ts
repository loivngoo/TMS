import { TypeOrmModule } from "@nestjs/typeorm";
import * as repositories from './repository'

export const PostgresRepoModule = TypeOrmModule.forFeature(Object.values(repositories))
PostgresRepoModule.global = true