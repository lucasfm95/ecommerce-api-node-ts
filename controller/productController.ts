import ProductRepository from "../DB/repositories/productRepository";
import Helper from "../utils/helper";
import ProductEntity from "../DB/entities/productEntity";
import ProductModel from "../models/productModel";

class ProductController {

    async get(request, response) {
        try {
            let products: ProductEntity[] = await ProductRepository.getAll();

            Helper.sendResponseOkObjectResult(response, products);
        } catch (error) {
            console.error(error);
            Helper.SendResponseBadResquest(response, error);
        }
    }

    async getById(request, response) {
        try{
            let _id = request.params.id;

            let product: ProductEntity = await ProductRepository.getById(_id);

            Helper.sendResponseOkObjectResult(response, product);
        } catch(error){
            console.error(error);
            Helper.SendResponseBadResquest(response, error);
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

            Helper.sendResponseOkResult(response, "Inserido com sucesso");
        } catch (error) {
            console.error(error);
            Helper.SendResponseBadResquest(response, error);
        }
    }
}

export default new ProductController(); 