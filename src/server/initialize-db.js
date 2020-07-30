import { defaultState} from './defaultState';
import { connectDB } from './connect-db';


// this function initializes the database which was connected in connect-db
async function initializeDB() {
    let db = await connectDB();
    let user = await db.collection('users').findOne({id:"User1"});
    if (!user) {

        for (let collectionName in defaultState){
            let collection = db.collection(collectionName);
            await collection.insertMany(defaultState[collectionName]);
        }
    }
}

initializeDB();