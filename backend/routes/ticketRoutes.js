const express = require("express")
const router = express.Router()
const {createTicket, getTickets, deleteTicket, updateTicket, getTicket } = require('../controllers/ticketController')


const {protect} = require('../middleware/authMiddleware')


//Re-route into note router
const nouteRouter = require('./noteRoutes')
router.use('/:ticketId/notes', nouteRouter)

router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/:id').get(protect, getTicket).delete(protect, deleteTicket).put(protect, updateTicket)

module.exports = router