import { IsNotEmpty, IsNumber } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categoria } from '../../Categoria/Entity/Categoria.Entity';

@Entity({ name: 'tb_medicamentos' })
export class Medicamento {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  laboratorio: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.medicamentos)
  categoria: Categoria;
}
