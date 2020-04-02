import ProductController from "../../controller/productController";
import { expect } from "chai";
import "mocha";

describe('First test', 
  () => { 
    it('should return true', () => { 
      const result = ProductController.hello();
      expect(result).to.equal("Hello World!"); 
  }); 
});