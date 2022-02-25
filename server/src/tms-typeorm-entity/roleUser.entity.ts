// tslint:disable: variable-name
import { Column, Entity, PrimaryColumn } from 'typeorm';

// User-Role
@Entity('role_user', { schema: 'public' })
export class V2RoleUser {
    @PrimaryColumn({ type: 'integer', name: 'id' })
    id: number;

    @Column({ name: 'role_name' })
    role_name: number;

    @Column({ name: 'slug' })
    slug: string;

    @Column({ name: 'description' })
    description: string;

    @Column({ name: 'active' })
    active: boolean;
}
