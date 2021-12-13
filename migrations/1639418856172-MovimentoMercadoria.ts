import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class MovimentoMercadoria1639418856172 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'movimentacao_mercadoria',
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                 {
                    name: 'mercadoria',
                    type: 'varchar',
                 },
                 {
                    name: 'price',
                    type: 'int',
                 },
                 {
                    name: 'quantidade',
                    type: 'int',
                 },
                 {
                    name: 'total',
                    type: 'int',
                 },   
                 {
                    name: 'pagamento',
                    type: 'varchar',
                 },                 

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('movimento_mercadoria');
        await queryRunner.query("DROP EXTENSION 'movimento_mercadoria-ossp' ")
    }

}
