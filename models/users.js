import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    about:{
        type: String
    },
    profile_picture:{
        type: String
    },
    username: {
        type: String,
        required: [true, "Username is required"], 
    },
    password: {
        type: String,
        min: [8,"Password must be 8 characters"],
        required: true
    },
    dateofbirth: {
        type: Date,
    },
    email: {
        type: String,
    },
    provider_name: {
        type: String,
        required: false
    },
    provider_id: {
        type: String,
        required: false
    },
    verificationToken: {
        type: String,
        expires: '60',
    },
    role:{
        type: String
    },
    membership:{
        type: String
    },
    cardDetail:[{
        cardHolderName : {type: String},
        cardNumber : {type: Number,min: 12},
        exp_month : {type: String},
        exp_year : {type: String},
        CVCNumber : {type: Number, min:3},
        customerId : {type:String},
        cardType: {type: String}
    }],
    barInfo:{
        type: String
    }
});
export default mongoose.model('users',usersSchema);