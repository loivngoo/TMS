import { User } from "src/tms-typeorm-entity";
import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";

@EntityRepository(User)
export class UserRepo extends BaseRepository<User>{ }