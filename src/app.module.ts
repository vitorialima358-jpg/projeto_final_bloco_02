import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './Categoria/Categoria.Module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hanna23',
      database: 'dbprojeto_final_bloco_02',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CategoriaModule, 
  ],
})
export class AppModule {}
