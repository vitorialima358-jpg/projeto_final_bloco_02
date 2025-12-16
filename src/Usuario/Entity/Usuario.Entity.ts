import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Medicamento } from '../../Medicamentos/Entity/Medicamento.entity'
@Entity({ name: 'tb_usuarios' })
export class Usuario {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100, nullable: false })
  nome: string

  @Column({ length: 100, nullable: false, unique: true })
  email: string

  @Column({ length: 20, nullable: true })
  telefone: string

  @ManyToMany(() => Medicamento, (medicamento) => medicamento.usuarios)
  medicamentos: Medicamento[]
}
