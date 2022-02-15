import { Router } from 'express'

import BookingController  from './controllers/BookingController';
import NightController  from './controllers/NightsController';
import PropertyOnChain  from './controllers/PropertyOnChain';

const router = Router()


//test

app.get('/', (req, res) => {
    res.send('Hello World!')
  })



// Booking Routes
router.post("/booking", BookingController.createBooking)
router.get("/findAllBookings", BookingController.findAllBookings)
router.get("/booking/:bookingID", BookingController.findBooking)
router.put("/booking/:bookingID", BookingController.updateBooking)

// Night Routes


router.post("/night", NightController.createNights)
router.get("/nights", NightController.findAllNights)
router.get("/nights/:nightID", NightController.findNights)
router.put("/nights/:nightID", NightController.updateNights)

// property on chain

router.post("/propertyOnChain", PropertyOnChain.createPropertyOnChain);
router.get("/propertyOnChain", PropertyOnChain.findAllProperty);
router.get("/propertyById/:leaseID", PropertyOnChain.findProperties);
router.put("/property/:leaseID", PropertyOnChain.updateProperty);



export { router };