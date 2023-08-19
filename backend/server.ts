import express, { Request, Response } from "express";
import config from "./config/config.json";
import { getRoutes } from "./src/routes";

const app = express();

app.use('/api', getRoutes());

(() => {
    app.listen(config.port, () => {
        console.log('Listening on port:', config.port);
    });
})();