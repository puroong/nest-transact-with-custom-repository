import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 20,
  })
  name: string;
}
