import SimpleSchema from 'simpl-schema';
import Membership from '../models/membership.js';
import Joi from 'joi';


const createMembership = async(req,res) =>
{
    try
    {
        let {name} = req.body;   
        const membershipExists = await Membership.findOne({name});
        if (membershipExists) {
            return res.status(409).json({
                status: "error",
                message: "Membership Already Exists",
                data: null,
            });
        }
        
        let membership = await Membership(req.body);
        membership.save();
        return res.send({
            message:"Successfully Created",
            user:Membership
        })
    }
    catch(err)
    {
        return res.send({
            status: "error",
            message: err.message,
        })
    }
    
    
}

export  default{
    createMembership
}