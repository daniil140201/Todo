import {ADD_TASK, DELETE_TASK, SET_COMPLETED} from "./types";

export const AddTask = (id, text, isCompleted) => ({
    type : ADD_TASK,
    id,
    text,
    isCompleted
});
export const DeleteTask = (id) => ({
    type: DELETE_TASK,
    id
});
export const SetCompleted = (id) => ({
    type: SET_COMPLETED,
    id
})