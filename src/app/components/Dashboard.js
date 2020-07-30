/*
 * This  React component  contains several lists of tasks,
 * one for each group that belongs to the user.
 */



import React from "react";
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList'

// this object will return a js tag
export const Dashboard = ({groups})=>(
    <div className= "row" >
        <h2>DashBoard</h2>
        {groups.map(group=>(
           <ConnectedTaskList key={group.id} id={group.id} name={group.name} className="col" />
        ))}
    </div>
);
// this connects the dashboard to the groups
const mapStateToProps = ({groups})=>({groups});

export const ConnectedDashboard = connect(mapStateToProps) (Dashboard);