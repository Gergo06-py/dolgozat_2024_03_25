/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const KolcsonzesekController = () => import('#controllers/kolcsonzeseks_controller')
const KolcsonzoksController = () => import('#controllers/kolcsonzoks_controller')
import router from '@adonisjs/core/services/router'

router.get('/api/Kolcsonzesek', [KolcsonzesekController, 'getKolcsonzesek'])
router.post('/api/Kolcsonzesek', [KolcsonzesekController, 'createKolcsonzes'])
router.get('/api/Kolcsonzesek/:id', [KolcsonzesekController, 'getKolcsonzes'])
router.put('/api/Kolcsonzesek/:id', [KolcsonzesekController, 'updateKolcsonzes'])
router.delete('/api/Kolcsonzesek/:id', [KolcsonzesekController, 'deleteKolcsonzes'])

router.get('/api/Kolcsonzok', [KolcsonzoksController, 'getKolcsonzok'])
router.get('/api/Kolcsonzok/:id', [KolcsonzoksController, 'getKolcsonzo'])
