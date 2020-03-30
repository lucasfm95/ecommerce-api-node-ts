import * as HttpStatus from "http-status";

class Helper {

  sendResponseOkObjectResult(request, data: object) {
    request.status(HttpStatus.OK).json({ result: data });
  };

  sendResponseOkResult(request, message: string = null) {
    request.status(HttpStatus.OK).json({ message: message });
  };

  SendResponseBadResquest(request, message: string = null){
    request.status(HttpStatus.BAD_REQUEST).json({ message: message });
  }
}

export default new Helper();
