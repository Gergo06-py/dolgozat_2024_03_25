import Kolcsonzok from '#models/kolcsonzok'
import type { HttpContext } from '@adonisjs/core/http'

export default class KolcsonzoksController {
  async getKolcsonzok({ response }: HttpContext) {
    const kolcsonzok = await Kolcsonzok.query().preload('kolcsonzesek')

    return response.ok(kolcsonzok)
  }

  async getKolcsonzo({ params, response }: HttpContext) {
    const kolcsonzok = await Kolcsonzok.query().preload('kolcsonzesek')
    kolcsonzok.find(params.id)

    return response.ok(kolcsonzok)
  }
}
