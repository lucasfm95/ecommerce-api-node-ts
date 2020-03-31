import * as express from "express";

import AuthController from "../controller/authController";

const authRouter = express.Router();

authRouter.route("/api/v1/auth/token").post(AuthController.token);

export default authRouter;