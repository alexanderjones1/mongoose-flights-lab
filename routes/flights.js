import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)
// GET /flights/new
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
// POST /movies
router.post('/', flightsCtrl.create)
router.delete('/:id', flightsCtrl.delete)

export {
  router
}
