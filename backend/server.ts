import express, { Request, Response, json } from "express";
import config from "./config/config.json";
import { getRoutes } from "./src/routes";
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());

app.use('/api', getRoutes());

(() => {
    app.listen(config.port, () => {
        console.log('Listening on port:', config.port);
    });
})();