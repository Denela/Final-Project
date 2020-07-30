import React from 'react';
import {connect} from 'react-redux';
import { requestTaskCreation } from '../store/mutations';
import { ConnectedTaskListItem } from './TaskListItem';



export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div className="card p-2 m-2" >
        <h3>
            {name}
        </h3>
    <div>
        {tasks.map(task=>(
            <ConnectedTaskListItem {...task} key={task.id}/>
        ))}
    </div>
    <div>
    // This button should create a new task
    <button onClick={ ()=>createNewTask(id)} className="btn btn-primary btn-block mt-2" >Add Task</button>
    </div>
    </div>
);

// this determines which tasks to include in the trasklist
const mapStateToProps = (state, {name, id})=>{
    
    return {
        name:name,
        id:id,
        tasks: state.tasks.filter(task=>task.group ===id)
    }; 
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createNewTask(id){
            console.log("New task Coming Baba...", id);
            dispatch(requestTaskCreation(id))
        }
    }
}

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);