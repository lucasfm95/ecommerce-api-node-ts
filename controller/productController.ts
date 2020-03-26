import ProductRepository from "../DB/repositories/productRepository";
import * as HttpStatus from "http-status";
import Helper from "../infra/helper";

class ProductController {

    private readonly productRepository;

    constructor(){
        this.productRepository = ProductRepository;
    }

    async get(req, res) {
        try {
            //let result = await this.productRepository.get();

            let response: string[] = ["value1", "value2"];
            return Helper.sendResponse(res, HttpStatus.OK, response);
        } catch (error) {
            console.error(error);
        }
    }

    async create(req, res) {
        try {
            let vm = req.body;
            await this.productRepository.create(vm);
        } catch (error) {
            console.error(error);
        }
    }
}

export default new ProductController(); 