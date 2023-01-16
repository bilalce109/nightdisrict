import mongoose from 'mongoose';

const bar = new mongoose.Schema({
    logo:{
        type: String
    },
    coverPhoto:{
        type: String
    },
    color:{
        type: String
    },
    barName: {
        type: String
    },
    address:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    phone:{
        type: Number
    },
    url:{
        type: String
    },
    upload_document:{
        type: String
    }
});
export default mongoose.model('bar', bar);
