import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationName implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE example (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE example`);
    }
}
