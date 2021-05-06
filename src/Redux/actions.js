import {
    ADD_TASK,
    DELETE_TASK,
    COMPLETE_TASK,
    EDIT_TASK

} from "./actionTypes"

// An action is an inert plain object defined by a type and a payload . to be functional this action should be dispatched
export const addTask = (newTask)=>{
    return {
        type : ADD_TASK,
        payload : newTask,
    };
};
export const deleteTask = (id)=>{
    return {
        type : DELETE_TASK,  
        payload : id,
    };
};
export const completeTask = (id)=>{
    return {
        type : COMPLETE_TASK,
        payload :id,
    };
};
export const editTask = (editedTask)=>{
    return {
        type : EDIT_TASK,
        payload : editedTask,
    };
};