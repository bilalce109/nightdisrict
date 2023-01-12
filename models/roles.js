import mongoose from 'mongoose';

const roles = new mongoose.Schema({
    name: {
        type: String
    },
    description:{
        type: [String]
    }
});
export default mongoose.model('roles', roles);
