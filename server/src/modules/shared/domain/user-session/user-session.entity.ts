import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column({name: 'expires_at'})
  expiresAt: Date;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'is_active' })
  isActive: boolean;
}
