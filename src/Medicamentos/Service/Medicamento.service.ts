import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, ILike } from 'typeorm'
import { Medicamento } from '../Entity/Medicamento.entity'
import { Categoria } from '../../Categoria/Entity/Categoria.Entity'

@Injectable()
export class MedicamentoService {

  constructor(
    @InjectRepository(Medicamento)
    private medicamentoRepository: Repository<Medicamento>,

    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Medicamento[]> {
    return await this.medicamentoRepository.find({
      relations: {
        categoria: true
      }
    })
  }

 async findById(id: number): Promise<Medicamento | null> {
  return await this.medicamentoRepository.findOne({
    where: { id },
    relations: {
      categoria: true
    }
  })
}


  async findByNome(nome: string): Promise<Medicamento[]> {
    return await this.medicamentoRepository.find({
      where: {
        nome: ILike(`%${nome}%`)
      },
      relations: {
        categoria: true
      }
    })
  }

 async create(medicamento: Medicamento): Promise<Medicamento> {

  const categoria = await this.categoriaRepository.findOne({
    where: { id: medicamento.categoria.id }
  });

  return await this.medicamentoRepository.save(medicamento);
}

  async update(medicamento: Medicamento): Promise<Medicamento> {

  if (medicamento.categoria?.id) {
    const categoria = await this.categoriaRepository.findOne({
      where: { id: medicamento.categoria.id }
    })

    if (categoria) {
      medicamento.categoria = categoria
    }
  }

  return await this.medicamentoRepository.save(medicamento)
}


  async delete(id: number): Promise<void> {
    await this.medicamentoRepository.delete(id)
  }
}
