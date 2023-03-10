import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)
// GET /flights/new
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.get('/:id/edit', flightsCtrl.edit)
// POST /movies
router.post('/', flightsCtrl.create)
router.post('/:id/ticket', flightsCtrl.createTicket)
router.post('/:id/meals', flightsCtrl.addMeal)
router.delete('/:id', flightsCtrl.delete)
router.put('/:id/', flightsCtrl.update)

export {
  router
}
