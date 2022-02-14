import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default {

async createNights(req,res) {
        try {
            const { nightID, price, availab } = req.body

            let night = await prisma.nights.findUnique({ where: { nightID } })
    
            if(night){
                return res.json({error: "Night already created"})
            }
    
            night = await prisma.nights.create({
                data: {
                    nightID, 
                    price, 
                    availab   
                },
            });
    
            return res.json(night)
    
        } catch (error) {

            return res.json({error})

        }
},

async findAllNights(req, res) {
    try {
        const nights = await prisma.nights.findMany()
        return res.json(nights)
    } catch (error) {
        return res.json(error)
    }
    
}, 

async findNights(req, res) {
    try {


        const {nightID} = req.params;

        
        //console.log('aqui' + bookingID)

        const night = await prisma.nights.findUnique({where: {nightID: nightID } })

        if(!night) return res.json({error: "não possível"})

        return res.json(night)
    } catch (error) {
        return res.json(error)
    }
    
},

async updateNights(req,res) {
    try {
        const {nightID} = req.params;
        const {  price, availab  } = req.body

        let night = await prisma.nights.findUnique({where: {nightID: nightID  } })
        if(!night) return res.json({error: "não possível"})

        night = await prisma.nights.update({
            where: {nightID: nightID},
            data: {
                price, 
                availab
            }
        })

        return res.json(night);
    } catch (error) {
        return res.json({error})
    }
}


}