import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Kolcsonzesek from './kolcsonzesek.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Kolcsonzok extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nev: string

  @column()
  declare szulIdo: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Kolcsonzesek)
  declare kolcsonzesek: HasMany<typeof Kolcsonzesek>
}
