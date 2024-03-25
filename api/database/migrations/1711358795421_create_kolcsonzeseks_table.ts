import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'kolcsonzeseks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('kolcsonzok_id').unsigned().references('id').inTable('kolcsonzoks')
      table.string('iro').nullable()
      table.string('mufaj').nullable()
      table.string('cim').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
