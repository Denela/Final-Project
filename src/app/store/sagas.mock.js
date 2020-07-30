import { take, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as mutations from './mutations';
import uuid from 'uuid';
import {  }from 'react-router'
import { history } from './history';

// this saga(genrator function) creates the task
export function * taskCreationSaga() {
    while (true) {
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = yield select(state=>state.session.id);
        const taskID = uuid();
        yield put (mutations.createTask(taskID, groupID, ownerID)); 
        
    }
}


