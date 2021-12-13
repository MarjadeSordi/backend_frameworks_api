import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('mercadoria')

class Mercadoria {
  @PrimaryGeneratedColumn('uuid') 
  uuid: string;
  @Column()
  name: string;
  @Column('int')
  price: number;
  @Column()
  categoria: string;
  @Column()
  imagem: string;
  @Column()
  tamanho: string; 
}

export default Mercadoria;