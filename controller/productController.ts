import ProductRepository from "../db/repositories/productRepository";
import Helper from "../utils/helper";
import ProductEntity from "../db/entities/productEntity";
import ProductModel from "../models/productModel";

class ProductController {

    async get(request, response) {
        try {
            let products: ProductEntity[] = await ProductRepository.getAll();

            Helper.sendResponseOkObjectResult(response, products);
        } catch (error) {
            console.error(error.message);
            Helper.sendResponseBadResquest(response, error.message);
        }
    }

    async getById(request, response) {
        try{
            let id = request.params.id;

            let product: ProductEntity = await ProductRepository.getById(id);

            if(product){
                Helper.sendResponseOkObjectResult(response, product);
            } else{
                Helper.sendResponseNoContent(response);
            }
        } catch(error){
            console.error(error.message);
            Helper.sendResponseBadResquest(response, error.message);
        }
    }

    async create(request, response) {
        try {
            let model: ProductModel = request.body as ProductModel;

            let entity: ProductEntity = <ProductEntity>{
                title: model.title,
                description: model.description,
                brand: model.brand,
                active: true
            };

            await ProductRepository.insert(entity);

            Helper.sendResponseOkResult(response, "Inserido produto com sucesso");
        } catch (error ) {
            console.error(error.message);
            Helper.sendResponseBadResquest(response, error.message);
        }
    }
}

export default new ProductController(); 