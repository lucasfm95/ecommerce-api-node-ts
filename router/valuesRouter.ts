import * as express from "express";
import ValuesController from "../controller/valuesController";

const valuesRouter = express.Router();

valuesRouter.route("/api/v1/values").get(ValuesController.get);
valuesRouter.route("/api/v1/values/:id").get(ValuesController.getById);
valuesRouter.route("/api/v1/values").post(ValuesController.create);
valuesRouter.route("/api/v1/values/:id").put(ValuesController.update);
valuesRouter.route("/api/v1/values/:id").delete(ValuesController.delete);

export default valuesRouter;