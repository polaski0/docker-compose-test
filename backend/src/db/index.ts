import mongodb from 'mongodb';
import dbConfig from '../../config/dbConfig.json';

const db = async () => {
    const client: mongodb.MongoClient = new mongodb.MongoClient(dbConfig.DB_CONN);
    client.connect();
    
    const db: mongodb.Db = client.db(dbConfig.DB_NAME);

    return db;
}

export { db };