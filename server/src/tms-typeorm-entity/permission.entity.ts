// tslint:disable: variable-name
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Permission
@Entity('permission', { schema: 'public' })
export class Permission {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
    id: number;

    @Column({ name: 'permission_name' })
    permission_name: string;

    @Column({ name: 'slug' })
    slug: string;

    @Column({ name: 'description' })
    description: string;

    @Column({ name: 'active' })
    active: boolean;
}
