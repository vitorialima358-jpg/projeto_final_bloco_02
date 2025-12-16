import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Usuario } from '../Usuario/Entity/Usuario.Entity'
import { UsuarioService } from '../Usuario/Service/Usuario.service'
import { UsuarioController} from'../Usuario/Controller/Usuario.Controller'

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [TypeOrmModule]
})
export class UsuarioModule {}
