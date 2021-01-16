import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";
import { stringify } from "uuid";

export default class AddAvatarFieldToUsers1610295981189 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('users', new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('users', 'avatar');
    }

}
