import mongoose from 'mongoose';

const menuCategory = new mongoose.Schema({
    name: {
        type: String
    },
    description:{
        type: String
    },
    category_image:{
        type: String
    },
    parent_category:{
        type: String
    }
});
export default mongoose.model('menuCategory', menuCategory);
