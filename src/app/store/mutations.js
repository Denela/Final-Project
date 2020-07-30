
// This file is a template for all the changes to the app state i would like to do


export const SET_TASK_COMPLETE = `SET_TASK_COMPLETE`;
export const SET_TASK_GROUP = `SET_TASK_GROUP`;
export const SET_TASK_NAME = `SET_TASK_NAME`;
export const ADD_TASK_COMMENT = `ADD_TASK_COMMENT`;
export const REQUEST_TASK_CREATION = `REQUEST_TASK_CREATION`;
export const CREATE_TASK = `CREATE_TASK`;
export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;
export const PROCESSING_AUTHENTICATE_USER = `PROCESSING_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
export const SET_STATE = `SET_STATE`;
export const USERNAME_RESERVED = `USERNAME_RESERVED`;
export const REQUEST_USER_ACCOUNT_CREATION = `REQUEST_USER_ACCOUNT_CREATION`;

//these methods automatically creates objects to do the mutations
    export const setTaskCompletion = (id, isComplete = true)=>({
        type:SET_TASK_COMPLETE,
        taskID:id,
        isComplete
    });

    export const addTaskComment = (commentID, taskID, ownerID, content)=>({
        type:ADD_TASK_COMMENT,
        id:commentID,
        task: taskID,
        owner: ownerID,
        content
    });

export const requestTaskCreation = (groupID)=>({
    type: REQUEST_TASK_CREATION,
    groupID
});

export const createTask = (taskID, groupID, ownerID) => ({
    type:CREATE_TASK,
    taskID,
    groupID,
    ownerID
});

export const setTaskGroup = (id, groupID)=>({
    type:SET_TASK_GROUP,
    taskID: id,
    groupID
});

export const setTaskName = (id, name)=>({
    type:SET_TASK_NAME,
    taskID: id,
    name
});


export const requstAuthenticateUser = (username, password)=>({
    type: REQUEST_AUTHENTICATE_USER,
    username,
    password
});

export const processAuthenticateUser = (status = AUTHENTICATING, session = null ) => ({
    type: PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status
});


export const setState = (state = {}) => ({
    type: SET_STATE,
    state
});


export const requestCreateUserAccount = (username,password)=>({
    type:REQUEST_USER_ACCOUNT_CREATION,
    username,
    password
});