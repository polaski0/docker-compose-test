import mongodb, { MongoClient } from 'mongodb';
import dbConfig from '../../config/dbConfig.json';

// const db = new Promise<mongodb.MongoClient>((resolve) => {
//     const client = new mongodb.MongoClient(dbConfig.DB_CONN).connect();
//     resolve(client);
// }).then((client) => {
//     const db: mongodb.Db = client.db(dbConfig.DB_NAME);
//     return db;
// });

// const client: mongodb.MongoClient = new mongodb.MongoClient(dbConfig.DB_CONN);

// const db = async (): Promise<mongodb.Db> => {
//     // const client: mongodb.MongoClient = new mongodb.MongoClient(dbConfig.DB_CONN);
//     await client.connect();

//     const db: mongodb.Db = client.db(dbConfig.DB_NAME);

//     return db;
// };

// export { db };

// async function db() {
//     const client = await mongodb.MongoClient.connect(dbConfig.DB_CONN);
//     return client.db(dbConfig.DB_NAME);
// }

// export { db };

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