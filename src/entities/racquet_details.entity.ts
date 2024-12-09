import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('racquet_details_tbl')
export class RacquetDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  summary: string;

  @Column()
  racquet_id: number;

  @Column({ type: 'float', nullable: true })
  head_size: number;

  @Column({ type: 'float', nullable: true })
  length: number;

  @Column({ type: 'float', nullable: true })
  strung_weight: number;

  @Column({ type: 'float', nullable: true })
  balance: number;

  @Column({ type: 'float', nullable: true })
  swingweight: number;

  @Column({ type: 'float', nullable: true })
  stiffness: number;

  @Column({ nullable: true })
  beam_width: string;

  @Column({ nullable: true })
  composition: string;

  @Column({ nullable: true })
  power_level: string;

  @Column({ nullable: true })
  stroke_style: string;

  @Column({ nullable: true })
  swing_speed: string;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true })
  string_pattern: string;

  @Column({ nullable: true })
  string_tension: string;

  @Column({ nullable: true })
  image_url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;
}
