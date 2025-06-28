import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";

function listener(request, response) {
    jsonHandler(request, response);
    console.log(request.body);
}

http.createServer(listener).listen(3333);
