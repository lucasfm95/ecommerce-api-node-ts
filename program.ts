import Startup from "./startup";

let port = process.env.PORT || "7005";

Startup.app.listen(port, function () {
  console.log(`server running in: ${port}`);
});
