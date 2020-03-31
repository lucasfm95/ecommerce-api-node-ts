import * as jwt from "jsonwebtoken";
import * as HttpStatus from "http-status"; 

import Configs from "./configs";

class Auth {
    validate(request, response, next) {
        let token = request.headers["authorization"];

        if (token) {
            jwt.verify(token, Configs.secret, (error, decoded) => {
                if (error) {
                    return response.status(HttpStatus.FORBIDDEN).send({
                        success: false,
                        message: "403 - Invalid Token"
                    })
                } else {
                    next();
                }
            });
        } else {
            return response.status(HttpStatus.UNAUTHORIZED).send({
                success: false,
                message: "401 - Unauthorized"
            });
        }
    }
}

export default new Auth();