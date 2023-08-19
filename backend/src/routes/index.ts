import express from 'express';
import { todoRoutes } from './todo';

const getRoutes = () => {
    const router = express.Router();

    // Insert routes here...
    router.use('/todo', todoRoutes());

    return router;
};

export { getRoutes };