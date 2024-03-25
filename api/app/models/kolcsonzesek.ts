import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Kolcsonzok from './kolcsonzok.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Kolcsonzesek extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare kolcsonzokId: number

  @column()
  declare iro: string

  @column()
  declare mufaj: string

  @column()
  declare cim: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Kolcsonzok)
  declare kolcsonzok: BelongsTo<typeof Kolcsonzok>
}
