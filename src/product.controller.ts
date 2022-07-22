import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import{Product} from './product.model'

@Controller('produtos')
export class ProductController {

  @Get()
  obterTodos(): string {
    return 'Lista todos os produtos';
  }

  @Get(':id')
  obterUm(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`;
  }

  @Post()
  cria(@Body() body): string {
    console.log(body)
    return 'Produto criado'
  }

  @Put()
  altera(@Body() body): string {
    console.log(body)
    return 'Produto alterado'
  }

  @Delete(':id')
  apaga(@Param() params): string {
    return `Apaga o produto ${params.id}`;
  }
}