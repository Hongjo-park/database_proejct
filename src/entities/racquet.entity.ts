import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('racquet_tbl') // 테이블명 매핑
export class Racquet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image_url: string;

  @Column()
  manufacturer: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}
