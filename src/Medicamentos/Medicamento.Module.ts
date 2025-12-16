import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Medicamento } from '../Medicamentos/Entity/Medicamento.entity'
import { MedicamentoService } from '../Medicamentos/Service/Medicamento.service'
import { MedicamentoController } from '../Medicamentos/Controller/Medicameto.Controller'
import { CategoriaModule } from '../Categoria/Categoria.Module'

@Module({
  imports: [
    TypeOrmModule.forFeature([Medicamento]),
    CategoriaModule   
  ],
  controllers: [MedicamentoController],
  providers: [MedicamentoService],
})
export class MedicamentoModule {}
