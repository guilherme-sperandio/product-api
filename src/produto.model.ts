import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Produto extends Model<Produto> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  code: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  price: number;
}
