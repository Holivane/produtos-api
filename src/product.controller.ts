import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from './product.model'

@Controller('produtos')
export class ProductController {
  product: Product[] = [
    new Product("LIV0001", "JS para Back-End", 29.90),
    new Product("LIV0002", "Prisma", 19.99),
    new Product("LIV0003", "GraphQL", 39.50),
  ]

  @Get()
  obterTodos(): Product[] {
    return this.product;
  }

  @Get(':id')
  obterUm(@Param() params): Product {
    return this.product[0];
  }

  @Post()
  cria(@Body() body: Product) {
    this.product.push(body);
  }

  @Put()
  altera(@Body() body: Product): Product {
    return body;
  }

  @Delete(':id')
  apaga(@Param() params) {
    this.product.pop();
  }
}