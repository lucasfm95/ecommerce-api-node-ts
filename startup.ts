import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as compression from "compression";

import Database from './db/database';
import valuesRouter from "./router/valuesRouter";
import productRouter from "./router/productsRouter";

class Startup {
  public app: express.Application;
  private database: Database;

  constructor() {
    this.app = express();
    this.middler();
    this.routes();
    this.database = new Database();
    this.dataBaseConnection();
  }

  enableCors() {
    const options: cors.CorsOptions = {
      methods: "GET,OPTIONS,PUT,POST,DELETE",
      origin: "*"
    };

    this.app.use(cors(options));
  }

  dataBaseConnection() {
    this.database.createConnection();
  }

  //middlers
  middler() {
    this.enableCors();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(compression());
  }
  
  //routes
  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.1" });
    });

    //To call your route
    this.app.use("/", valuesRouter);
    this.app.use("/", productRouter);
  }
}

export default new Startup();
