import React from "react";
import {TasksList} from "./TasksLIst";
import {connect} from "react-redux";

const TasksContainer = ({tasks}) => {
    return (
        <TasksList tasks={tasks}/>
    )
};

export const CTaskContainer = connect(state => ({tasks : state && state.data }))(TasksContainer);
