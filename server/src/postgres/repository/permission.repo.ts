import { Permission } from "src/tms-typeorm-entity";
import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";

@EntityRepository(Permission)
export class PermissionRepo extends BaseRepository<Permission>{ }