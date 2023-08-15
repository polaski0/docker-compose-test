import express, { Request, Response } from "express";
import config from "./config/config.json";

const app = express();

app.get('/', (req: Request, res: Response) => {
    console.log('Returned a response.');
    res.send('Hello, world!');
});

(() => {
    app.listen(config.port, () => {
        console.log('Listening on port:', config.port);
    });
})();