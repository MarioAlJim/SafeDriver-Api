const express = require("express");
const morgan = require("./middlewares/morgan");
const Logger = require("./utils/Logger");
const config = require("./config");

class Server {
    constructor() {
        this.app = express();
        this.config = config;
        this.logger = new Logger(this.config.logLevel);
        this.#initMiddlewares();
        this.#initRoutes();
    }

    #setRouteHandler(path, routerModulePath) {
        this.logger.debug(`Setting router for path "${path}"...`);
        this.app.use(path, require(routerModulePath));
    }

    #initMiddlewares() {
        this.app.use(morgan((message) => this.logger.debug({ prefix: "[morgan]", message })));
        this.app.use(express.json());
    }

    #initRoutes() {
        this.#setRouteHandler("/auth", "./routes/auth.js");
    }

    start() {
        this.app.listen(this.config.port, () => {
            this.logger.success(`Server started on port ${this.config.port}`);
        });
    }
}

module.exports = Server;
