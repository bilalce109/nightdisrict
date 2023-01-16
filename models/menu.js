import mongoose from 'mongoose';

const menu = new mongoose.Schema({
    name: {
        type: String
    },
    description:{
        type: [String]
    },
    category:{
        type: String
    },
    subCategory:{
        type: String
    },
    qtyPrice:{
        type: Number
    },
    shotPrice:{
        type: Number
    },
    rocksPrice:{
        type: Number
    }
});
export default mongoose.model('menu', menu);
