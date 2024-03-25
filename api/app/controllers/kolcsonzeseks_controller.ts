import Kolcsonzesek from '#models/kolcsonzesek'
import type { HttpContext } from '@adonisjs/core/http'

export default class KolcsonzeseksController {
  async getKolcsonzesek({ response }: HttpContext) {
    const kolcsonzesek = await Kolcsonzesek.all()

    return response.ok(kolcsonzesek)
  }

  async getKolcsonzes({ params, response }: HttpContext) {
    const kolcsonzes = await Kolcsonzesek.find(params.id)

    return response.ok(kolcsonzes)
  }

  async createKolcsonzes({ request, response }: HttpContext) {
    const data = request.only(['kolcsonzokId', 'iro', 'mufaj', 'cim'])

    const kolcsonzesek = await Kolcsonzesek.create(data)

    return response.created(kolcsonzesek)
  }

  async updateKolcsonzes({ params, request, response }: HttpContext) {
    const data = request.only(['kolcsonzokId', 'iro', 'mufaj', 'cim'])

    const kolcsonzesek = await Kolcsonzesek.findOrFail(params.id)

    kolcsonzesek.kolcsonzokId = data.kolcsonzokId
    kolcsonzesek.iro = data.iro
    kolcsonzesek.mufaj = data.mufaj
    kolcsonzesek.cim = data.cim

    await kolcsonzesek.save()

    return response.ok(kolcsonzesek)
  }

  async deleteKolcsonzes({ params, response }: HttpContext) {
    const kolcsonzesek = await Kolcsonzesek.findOrFail(params.id)

    await kolcsonzesek.delete()

    return response.ok(kolcsonzesek)
  }
}
