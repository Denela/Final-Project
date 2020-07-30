import { take, put, select } from "redux-saga/effects";
import uuid from 'uuid';
import axios from 'axios';
import * as mutations from './mutations';
import { history } from './history';

const url = "http://localhost:8080";

export function * taskCreationSaga() {
    while (true) {
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = yield select(state=>state.session.id);
        const taskID = uuid();
        let mutation = mutations.createTask(taskID, groupID, ownerID);
        const {res} = yield axios.post(url + `task/new`, {
            task: {
                id: taskID,
                group: groupID,
                owner: ownerID,
                isComplete: false,
                name: "New task"
            }
        })
        yield put(mutation);
    }
}

export function* commentCreationSaga(){
    while (true) {
        const comment = yield take (mutations.ADD_TASK_COMMENT);
        axios.post(url + `/comment/new`,{comment})
    }
}




export function * taskModificationSaga() {
    while (true) {
        const task = yield take([
            mutations.SET_TASK_GROUP,
            mutations.SET_TASK_NAME,
            mutations.SET_TASK_COMPLETE
        ]);
        axios.paost(url + `/task/update`,{
            task:{
                id: task.taskID,
                group: task.groupID,
                name: task.name,
                isComplete: task.isComplete
            }
        })
    }
}








