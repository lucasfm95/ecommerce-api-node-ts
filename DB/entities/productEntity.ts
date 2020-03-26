import * as mongoose from 'mongoose';

const ProductEntity = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creteadDate:{
        type: Date,
        default: Date.now
    }
});

export default ProductEntity;