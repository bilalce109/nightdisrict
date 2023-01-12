import mongoose from 'mongoose';

const membership = new mongoose.Schema({
    name: {
        type: String
    },
    description:{
        type: [String]
    }
});
export default mongoose.model('membership', membership);
