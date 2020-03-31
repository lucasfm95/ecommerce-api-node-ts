import * as jwt from "jsonwebtoken";

import Helper from "../utils/helper";
import UserModel from "../models/userModel";
import Configs from "../utils/configs"

class AuthController {

    async token(request, response) {
        let user: UserModel = request.body as UserModel;

        if (user.login === "admin" && user.password === "admin@20.") {
            let payload = {
                iss: "localhost",
                iat: new Date().getSeconds(),
                exp: new Date().setHours(24),
                name: "Lucas Martins"
            }

            let token = jwt.sign(payload, Configs.secret);

            Helper.sendResponseOkObjectResult(response, { toke: token });
        } else {
            Helper.sendResponseBadResquest(response, "login or password invalid");
        }
    }
}

export default new AuthController();
