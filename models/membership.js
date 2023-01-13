import mongoose from 'mongoose';

const membership = new mongoose.Schema({
    name: {
        type: String
    },
    description:{
        type: [String]
    },
    type:{
        type: String
    },
    duration:{
        type: String
    },
    price:{
        type: Number
    }
});
export default mongoose.model('membership', membership);
