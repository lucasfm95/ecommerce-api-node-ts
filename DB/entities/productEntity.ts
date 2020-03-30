import * as mongoose from 'mongoose';

class ProductEntity extends mongoose.Document { 
    
    title: string;
    description: string;
    brand: string;
    createDate: Date;
    active: boolean;
}

export default ProductEntity;