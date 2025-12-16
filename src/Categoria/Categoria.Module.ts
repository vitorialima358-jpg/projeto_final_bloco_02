import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './Entity/Categoria.Entity';
import { CategoriaController } from './Controller/Categoria.Controller';
import { CategoriaService } from './Service/Categoria.Service';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
