import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {  connectDB } from './connect-db';
import './initialize-db';
import { authenticationRoute } from './authenticate';

let port = 8080;
let app = express();

app.listen(port, console.log("Server listening on port",port));

//app.get('/',(req, res)=>{
//    res.send("Boss Dedza")
//});


// what comes below app.use are plugins of the application
app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);

authenticationRoute(app);

// this function commmunicates with the database in order to verify if the post request is working
export const addNewTask = async task=> {
    let db = await connectDB();
    let collection = db.collection('tasks');
    await collection.insertOne(task);
};

export const updateTask = async task =>{
    let { id, group, isComplete, name} = task;
    let db = await connectDB();
    let collection = db.collection('tasks');

    if (group) {
        await collection.updateOne({id},{$set:{group}})
    }
    if (name) {
        await collection.updateOne({id},{$set:{name}})
    }
    if (isComplete !==undefined ) {
        await collection.updateOne({id},{$set:{isComplete}})
    }

}

app.post('/task/new',async (req, res)=>{
    let task = req.body.task;
    await addNewTask(task);
    res.status(200).send()
})

app.post('/task/update',async (req, res)=>{
    let task = req.body.task;
    await updateTask(task);
    res.status(200).send()
})