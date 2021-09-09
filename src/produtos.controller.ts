import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './produto.model';
import { ProductsService } from './produtos.service';

@Controller('products')
export class ProductsController {
  constructor(private ProductsService: ProductsService) {}

  @Get()
  async showAll(): Promise<Produto[]> {
    return this.ProductsService.showAll();
  }

  @Get(':id')
  async showOne(@Param() params): Promise<Produto> {
    return this.ProductsService.showOne(params.id);
  }

  @Post()
  async create(@Body() produto: Produto) {
    this.ProductsService.create(produto);
  }

  @Put()
  async update(@Body() produto: Produto): Promise<[number, Produto[]]> {
    return this.ProductsService.update(produto);
  }

  @Delete(':id')
  async delete(@Param() params) {
    this.ProductsService.delete(params.id);
  }
}
