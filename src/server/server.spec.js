// this file basically verisies to see if if addNewtask, updateTask are worling as expected

import { addNewTask, updateTask } from './server';
(async function myFunc() {
    await  addNewTask({
        name:"My task",
        id:"123"
    });

    await updateTask({
        id:"123",
        name:"My task - ayas!!!"
    })
    
}) ();