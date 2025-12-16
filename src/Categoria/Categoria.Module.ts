import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Categoria } from '../Categoria/Entity/Categoria.Entity'
import { CategoriaService } from '../Categoria/Service/Categoria.Service'
import { CategoriaController } from '../Categoria/Controller/Categoria.Controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([Categoria])
  ],
  controllers: [CategoriaController],
  providers: [CategoriaService],
  exports: [
    TypeOrmModule   
  ]
})
export class CategoriaModule {}
