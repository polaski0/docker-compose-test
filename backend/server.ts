import express, { Request, Response, json } from "express";
import config from "./config/config.json";
import { getRoutes } from "./src/routes";

const app = express();

app.use(json());

app.use('/api', getRoutes());

(() => {
    app.listen(config.port, () => {
        console.log('Listening on port:', config.port);
    });
})();