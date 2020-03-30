import * as HttpStatus from "http-status";

class Helper {

  sendResponseOkObjectResult(response, data: object): void {
    response.status(HttpStatus.OK).json({ result: data });
  };

  sendResponseOkResult(response, message: string = null): void {
    response.status(HttpStatus.OK).json({ message: message });
  };

  sendResponseBadResquest(response, message: string = null): void{
    response.status(HttpStatus.BAD_REQUEST).json({ error: message });
  }

  sendResponseNoContent(response): void{
    response.status(HttpStatus.NO_CONTENT).json();
  }
}

export default new Helper();
