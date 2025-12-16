import { 
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  ParseIntPipe,
  HttpCode,
  HttpStatus
} from '@nestjs/common'


import { Medicamento } from '../Entity/Medicamento.entity';
import { MedicamentoService } from '../Service/Medicamento.service'

@Controller('/medicamentos')
export class MedicamentoController {
  constructor(
    private readonly medicamentoService: MedicamentoService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Medicamento[]> {
    return this.medicamentoService.findAll();
  }

 @Get('/:id')
@HttpCode(HttpStatus.OK)
findById(
  @Param('id', ParseIntPipe) id: number
): Promise<Medicamento | null> {
  return this.medicamentoService.findById(id)
}

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(
    @Param('nome') nome: string,
  ): Promise<Medicamento[]> {
    return this.medicamentoService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() medicamento: Medicamento,
  ): Promise<Medicamento> {
    return this.medicamentoService.create(medicamento);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(
    @Body() medicamento: Medicamento,
  ): Promise<Medicamento> {
    return this.medicamentoService.update(medicamento);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return this.medicamentoService.delete(id);
  }
}
