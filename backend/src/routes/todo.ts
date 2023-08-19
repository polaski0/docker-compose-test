import express from 'express';
import { get, show, insert, update, destroy } from '../controllers/todo';

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

export { todoRoutes };