import express, { Request, Response } from 'express';

const todoRoutes = () => {
    const router = express.Router();

    // Insert routes and their methods here...
    router.get('/', get);
    router.get('/:id', show);
    router.post('/', insert);
    router.put('/:id', update);
    router.delete('/:id', destroy);

    return router;
};

const get = async (req: Request, res: Response): Promise<Response> => {
    // code here...
    return res.status(200).json({ 'foo': 'bar' });
};

const show = async () => {
    // code here...
};

const insert = async () => {
    // code here...
};

const update = async () => {
    // code here...
};

const destroy = async () => {
    // code here...
};

export { todoRoutes };