// tslint:disable: variable-name
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'password_hash' })
  password_hash: string;

  @Column({ name: 'role_id' })
  role_id: number

  @Column({ name: 'first_name' })
  first_name: string;

  @Column({ name: 'middle_name' })
  middle_name: string;

  @Column({ name: 'last_name' })
  last_name: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'phone' })
  mobile: string;

  @Column({ name: 'birthday', type: 'timestamp with time zone' })
  birthday: Date;

  @Column({ name: 'gender' })
  gender: number;

  @Column({ name: 'is_staff' })
  is_staff: boolean;

  @Column({ name: 'is_active' })
  is_active: boolean;

  @Column({ name: 'register_at', type: 'timestamp with time zone' })
  register_at: Date;

  @Column({ name: 'last_login', type: 'timestamp with time zone' })
  last_login: Date;
}
