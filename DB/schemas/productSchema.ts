import * as mongoose from 'mongoose';

const ProductShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    creteadDate:{
        type: Date,
        default: Date.now
    },
    active:{
        type: Boolean
    }
});

export default ProductShema;