import {Entity, Column} from 'typeorm';

@Entity('movimentacao_mercadoria')

class MovimentoMercadoria {
  @Column({ primary: true })
  id!: number;
  @Column()
  mercadoria!: string;
  @Column('int')
  price!: number;
  @Column('int')
  quantidade!: number;
  @Column('int')
  total!: number;
  @Column()
  pagamento!: string; 

}

export default MovimentoMercadoria;