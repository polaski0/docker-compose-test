import { Request, Response } from 'express';
import { ObjectId, Filter, UpdateFilter } from 'mongodb';
import { db, closeDb, connectDb } from "../db";

interface Body {
    _id: ObjectId;
    text?: string;
    is_checked?: boolean;
};

const COLLECTION_NAME = 'todo';

const handleError = (error: any, res: Response) => {
    console.log('Error', error);

    if (error instanceof Error) {
        return res.status(404).json(error);
    }
}

const generateMessage = (message: string) => {
    return { message: message };
};

const get = async (req: Request, res: Response): Promise<Response> => {
    await connectDb();

    try {
        const query = await db.collection(COLLECTION_NAME).find({}).toArray();
        return res.status(200).json(query);
    } catch (error) {
        handleError(error, res);
    }

    await closeDb();
    return res.status(404).json(generateMessage("No data found."));
};

const show = async (req: Request, res: Response) => {
    const id: ObjectId | null = req.params.id ? new ObjectId(req.params.id) : null;

    if (!id) {
        return res.status(400).json(generateMessage("Invalid format."));
    }

    await connectDb();

    try {
        const query = await db.collection(COLLECTION_NAME).find({ _id: id }).toArray();
        return res.status(200).json(query);
    } catch (error) {
        handleError(error, res);
    }

    await closeDb();
    return res.status(404).json(generateMessage("No data found."));
};

const insert = async (req: Request, res: Response) => {
    const { text } = req.body;

    await connectDb();

    try {
        if (!text || text === '') {
            return res.status(400).json(generateMessage("Invalid format."));
        }

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
    } catch (error) {
        handleError(error, res);
    }

    await closeDb();
    return res.status(404).json(generateMessage("No data found."));
};

const update = async (req: Request, res: Response) => {
    const id: ObjectId | null = req.params.id ? new ObjectId(req.params.id) : null;
    const body: Body = req.body;

    if (!id || !body || !Object.entries(body).length) {
        return res.status(400).json(generateMessage("Invalid format."));
    }

    await connectDb();

    try {
        const { _id, ...value } = body;

        const update: UpdateFilter<Document> = { $set: value };
        const result = await db.collection(COLLECTION_NAME).updateOne({ _id: id }, update);

        if (result['modifiedCount']) {
            const payload = {
                _id,
                ...value
            };

            return res.status(200).json(payload);
        }

        return res.status(200).json(generateMessage("No updates."));
    } catch (error) {
        handleError(error, res);
    }

    await closeDb();
    return res.status(404).json(generateMessage("No data found."));
};

const destroy = async (req: Request, res: Response) => {
    const id: ObjectId | null = req.params.id ? new ObjectId(req.params.id) : null;

    if (!id) {
        return res.status(400).json(generateMessage("Invalid format."));
    }

    await connectDb();

    try {
        const result = await db.collection(COLLECTION_NAME).deleteOne({ _id: id });
        return res.status(200).json(result);
    } catch (error) {
        handleError(error, res);
    }

    await closeDb();
    return res.status(404).json(generateMessage("No data found."));
};

export { get, show, insert, update, destroy };