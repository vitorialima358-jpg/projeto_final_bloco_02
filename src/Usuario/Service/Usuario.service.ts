import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Usuario } from '../Entity/Usuario.Entity'

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find({
      relations: {
        medicamentos: true
      }
    })
  }

  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
      relations: {
        medicamentos: true
      }
    })

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado')
    }

    return usuario
  }

  create(usuario: Usuario): Promise<Usuario> {
    return this.usuarioRepository.save(usuario)
  }

  async update(usuario: Usuario): Promise<Usuario> {
    await this.findById(usuario.id)
    return this.usuarioRepository.save(usuario)
  }

  async delete(id: number): Promise<void> {
    const usuario = await this.findById(id)
    await this.usuarioRepository.remove(usuario)
  }
}
