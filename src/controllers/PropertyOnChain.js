import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default {

async createPropertyOnChain(req,res) {
        try {
            const { leaseID  ,          
                leaseIndex,      
                city_address ,      
                numberOfGuests  ,  
                duration    ,        
                cancel_policyID   ,   
                start_timestamp 
                  } = req.body

            let property = await prisma.propertyOnChain.findUnique({ where: { leaseID } })
    
            if(property){
                return res.json({error: "property already created"})
            }
    
            property = await prisma.propertyOnChain.create({
                data: {
                    leaseID  ,          
                    leaseIndex,      
                    city_address ,      
                    numberOfGuests  ,  
                    duration    ,        
                    cancel_policyID   ,   
                    start_timestamp  
                },
            });
    
            return res.json(property)
    
        } catch (error) {

            return res.json({error})

        }
},

async findAllProperty(req, res) {
    try {
        const properties = await prisma.propertyOnChain.findMany()
        return res.json(properties)
    } catch (error) {
        return res.json(error)
    }
    
}, 

async findProperties(req, res) {
    try {

        const {leaseID} = req.params;

        const property = await prisma.propertyOnChain.findUnique({where: {leaseID: leaseID } })

        if(!property) return res.json({error: "não possível"})

        return res.json(property)
    } catch (error) {
        return res.json(error)
    }
    
},

async updateProperty(req,res) {
    try {
        const {leaseID} = req.params;
        const { leaseIndex,      
                city_address ,      
                numberOfGuests  ,  
                duration    ,        
                cancel_policyID   ,   
                start_timestamp } = req.body

        let property = await prisma.propertyOnChain.findUnique({where: {leaseID: leaseID  } })
        if(!property) return res.json({error: "não possível"})

        property = await prisma.propertyOnChain.update({
            where: {leaseID: leaseID},
            data: {
                leaseIndex,      
                city_address ,      
                numberOfGuests  ,  
                duration    ,        
                cancel_policyID   ,   
                start_timestamp
            }
        })

        return res.json(property);
    } catch (error) {
        return res.json({error})
    }
}

}