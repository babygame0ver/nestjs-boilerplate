import * as Knex from 'knex';
import { timestamps } from '../helpers';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('storage_files', function(table) {
    table.bigIncrements('id');
    table.uuid('uuid').index();
    table.integer('source');
    table.string('name');
    table.string('original_name');
    table.integer('mime_type');
    table.integer('owner_type');
    table.integer('owner_id');
    table.integer('active');
    table.integer('file_type');
    table.integer('obj_type');
    timestamps(knex, table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('storage_files');
}
