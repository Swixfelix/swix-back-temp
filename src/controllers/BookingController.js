import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default {

async createBooking(req,res) {
        try {
            const { bookingID, user_address,    
                end ,            
                fullRefundUntil ,
                halfRefundUntil ,
                bookingPrice    , 
                tokenbackRate  ,
                kycHash          ,
                swixConfirmation  } = req.body

            let booking = await prisma.tb_bookings.findUnique({ where: { bookingID } })
    
            if(booking){
                return res.json({error: "booking already created"})
            }
    
           booking = await prisma.tb_bookings.create({
                data: {
                    bookingID,       
                    user_address,    
                    end ,            
                    fullRefundUntil ,
                    halfRefundUntil ,
                    bookingPrice    , 
                    tokenbackRate  ,
                    kycHash          ,
                    swixConfirmation          
      
                },
            });
    
            return res.json(booking)
    
        } catch (error) {

            return res.json({error})

        }
},

async findAllBookings(req, res) {
    try {
        const bookings = await prisma.tb_bookings.findMany()
        return res.json(bookings)
    } catch (error) {
        return res.json(error)
    }
    
}, 

async findBooking(req, res) {
    try {

        console.log('params'+ req.params)

        const {bookingID} = req.params;

        
        //console.log('aqui' + bookingID)

        const booking = await prisma.tb_bookings.findUnique({where: {bookingID: bookingID } })

        if(!booking) return res.json({error: "não possível"})

        return res.json(booking)
    } catch (error) {
        return res.json(error)
    }
    
},

async updateBooking(req,res) {
    try {
        const {bookingID} = req.params;
        const {  user_address,    
            end ,            
            fullRefundUntil ,
            halfRefundUntil ,
            bookingPrice    , 
            tokenbackRate  ,
            kycHash          ,
            swixConfirmation  } = req.body

        let booking = await prisma.tb_bookings.findUnique({where: {bookingID: bookingID  } })
        if(!booking) return res.json({error: "não possível"})

        booking = await prisma.tb_bookings.update({
            where: {bookingID: bookingID},
            data: {user_address,    
                end ,            
                fullRefundUntil ,
                halfRefundUntil ,
                bookingPrice    , 
                tokenbackRate  ,
                kycHash          ,
                swixConfirmation}
        })

        return res.json(booking);
    } catch (error) {
        return res.json({error})
    }
}


}