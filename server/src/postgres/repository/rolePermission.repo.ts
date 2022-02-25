import { RolePermission } from "src/tms-typeorm-entity";
import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";

@EntityRepository(RolePermission)
export class RolePermissionRepo extends BaseRepository<RolePermission>{ }