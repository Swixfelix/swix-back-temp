import { Router } from 'express'

import BookingController  from './controllers/BookingController';
import NightController  from './controllers/NightsController';


const router = Router()

// Booking Routes
router.post("/booking", BookingController.createBooking)
router.get("/findAllBookings", BookingController.findAllBookings)
router.get("/booking/:bookingID", BookingController.findBooking)
router.put("/booking/:bookingID", BookingController.updateBooking)

// Night Routes


router.post("/night", NightController.createNights)


export { router };