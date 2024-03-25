import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { DEVELOPERS_GENDER_ENUM } from '../enum/developers_gender.enum';
import { Position } from 'src/position/entity/position.entity';

@Entity()
export class Developer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Position, (position) => position.developers)
  position: Position;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: DEVELOPERS_GENDER_ENUM,
  })
  gender: DEVELOPERS_GENDER_ENUM;

  @Column()
  birthday: Date;

  @Column()
  age: number;

  @Column()
  hobby: string;
}
