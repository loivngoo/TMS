import { Role } from "src/tms-typeorm-entity";
import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";

@EntityRepository(Role)
export class RoleRepo extends BaseRepository<Role>{ }