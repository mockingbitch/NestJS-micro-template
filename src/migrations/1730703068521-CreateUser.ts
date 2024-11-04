import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationName implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE `users`  (' +
        '`id` int NOT NULL AUTO_INCREMENT,' +
        '`username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,' +
        '`email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,' +
        '`phone_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,' +
        '`password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,' +
        '`is_confirmed` tinyint NULL DEFAULT 0,' +
        '`verified_at` datetime NULL DEFAULT NULL,' +
        '`created_at` timestamp NULL DEFAULT NULL,' +
        '`updated_at` timestamp NULL DEFAULT NULL,' +
        'PRIMARY KEY (`id`) USING BTREE' +
        ') ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE IF EXISTS `users`;');
    }
}
