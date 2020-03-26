import * as mongoose from 'mongoose';
import ProductEntity from '../entities/productEntity';

class ProductRepository{
    private model;

    constructor(){
        this.model = mongoose.model('Product', ProductEntity);
    }

    async getAll(){
        return this.model.find({});
    }

    async insert(product){
        return this.model.create(product);
    }
}

export default new ProductRepository();