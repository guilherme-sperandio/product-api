import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Produto } from './produto.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Produto)
    private productModel: typeof Produto,
  ) {}
  async showAll(): Promise<Produto[]> {
    return this.productModel.findAll();
  }

  async showOne(id: number): Promise<Produto> {
    return this.productModel.findByPk(id);
  }

  async create(produto: Produto) {
    this.productModel.create(produto);
  }

  async update(produto: Produto): Promise<[number, Produto[]]> {
    return this.productModel.update(produto, {
      where: {
        id: produto.id,
      },
    });
  }

  async delete(id: number) {
    const product: Produto = await this.showOne(id);
    product.destroy();
  }
}
