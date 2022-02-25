// tslint:disable: variable-name
import { Column, Entity, PrimaryColumn } from 'typeorm';

// Role-Permission
@Entity('role_permission', { schema: 'public' })
export class RolePermission {
    @PrimaryColumn({ type: 'integer', name: 'id' })
    id: number;

    @Column({ name: 'role_id' })
    role_id: number;

    @Column({ name: 'permission_id' })
    permission_id: number;
}
