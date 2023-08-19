import { Request, Response } from 'express';
// import mongodb from 'mongodb';
import { db, closeDb, connectDb } from "../db";

const COLLECTION_NAME = 'todo';

const handleError = (error: any, res: Response) => {
    console.log('Error', error);

    if (error instanceof Error) {
        return res.status(404).json(error);
    }
}

const get = async (req: Request, res: Response): Promise<Response> => {
    // code here...
    return res.status(200).json({ 'foo': 'bar' });
};

const show = async (req: Request, res: Response) => {
    const { id } = req.params;

    await connectDb();

    try {

    } catch (error) {
        handleError(error, res);
    }

    await closeDb();
};

const insert = async (req: Request, res: Response) => {
    const { text } = req.body;

    await connectDb();

    try {
        if (text) {
            const value = {
                text: text,
                is_checked: false
            }

            const result = await db.collection(COLLECTION_NAME).insertOne(value);
            
            const payload = {
                _id: result['insertedId'],
                ...value,
            }

            return res.status(200).json(payload);
        }
    } catch (error) {
        handleError(error, res);
    }

    await closeDb();
};

const update = async (req: Request, res: Response) => {
    // code here...
};

const destroy = async (req: Request, res: Response) => {
    // code here...
};

export { get, show, insert, update, destroy };