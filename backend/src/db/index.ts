import mongodb, { MongoClient } from 'mongodb';
import dbConfig from '../../config/dbConfig.json';

const client = new MongoClient(dbConfig.DB_CONN);

const connectDb = async () => {
    await client.connect();
};

const closeDb = async () => {
    if (client) {
        await client.close();
    }
};

const db = client.db(dbConfig.DB_NAME);

export { closeDb, connectDb, db };