import * as mongoose from 'mongoose';
import ProductSchema from '../schemas/productSchema';
import ProductEntity from '../entities/productEntity';

class ProductRepository{
    private schema;

    constructor(){
        this.schema = mongoose.model<ProductEntity>('Product', ProductSchema);
    }

    async getAll(): Promise<ProductEntity[]>{
        return this.schema.find({});
    }

    async getById(_id): Promise<ProductEntity> {
        return this.schema.find({id: _id});
    }

    async insert(product: ProductEntity){
        return this.schema.create(product);
    }
}

export default new ProductRepository();