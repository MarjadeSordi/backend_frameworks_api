import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ProdutoTable1639407526402 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'mercadoria',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid', 
                    default: 'uuid_generate_v4()'
                 },
                 {
                    name: 'name',
                    type: 'varchar',
                 },
                 {
                    name: 'price',
                    type: 'int',
                 },
                 {
                    name: 'categoria',
                    type: 'varchar',
                 },
                 {
                    name: 'imagem',
                    type: 'varchar',
                 },
                 {
                    name: 'tamanho',
                    type: 'varchar',
                 },                 

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('mercadoria');
        await queryRunner.query("DROP EXTENSION 'mercadoria-ossp' ")
    }

}
