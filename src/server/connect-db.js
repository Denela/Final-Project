import { MongoClient } from 'mongodb';
const url = `mongodb://localhost:27017/secondone`;
let db = null;


// THis function is the method that actually connects to the database
export async function connectDB(){
    // the database is returned only if it is defined
    if (db) return db;
    let client = await MongoClient.connect(url, {useNewUrlParser:true});
    db = client.db();
    console.info("Twabaam,", db);
    return db;

}

