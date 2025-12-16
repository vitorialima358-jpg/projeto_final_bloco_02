import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  JoinTable,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Categoria} from '../../Categoria/Entity/Categoria.Entity'
import { Usuario } from '../../Usuario/Entity/Usuario.Entity'

@Entity({ name: 'tb_medicamentos' })
export class Medicamento {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 255, nullable: false })
  nome: string

  @Column({ length: 255, nullable: false })
  laboratorio: string

  @ManyToOne(() => Categoria, (categoria) => categoria.medicamentos)
  categoria: Categoria

  @ManyToMany(() => Usuario, (usuario) => usuario.medicamentos)
  @JoinTable({
    name: 'tb_usuario_medicamento'
  })
  usuarios: Usuario[]
}

