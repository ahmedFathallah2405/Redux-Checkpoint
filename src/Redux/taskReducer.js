//The reducer part of redux hold the main code of the dispatched action
//the reducer took the previous state and a particular action and give back a new state
import {
    ADD_TASK,
    DELETE_TASK,
    COMPLETE_TASK,
    EDIT_TASK

} from "./actionTypes"

const initial ={
    tasks :[{id: Math.random(), action:"wake up", isDone: true }],
};

const taskReducer = (state = initial, {type,payload}) => {
    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, payload],
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((el)=>el.id !== payload ),
            }; 
        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((el)=> 
                el.id===payload? {...el, isDone:!el.isDone}:el),
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((el)=>
                el.id===payload.id? payload:el),
            };        
        default :
            return state;
    };
};

export default taskReducer;
