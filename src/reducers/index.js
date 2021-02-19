import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from 'redux-logger'
import thunk from "redux-thunk";



const reducers = {
    data(state = [], {id, text, isCompleted, type}){
        if(type ==='ADD_TASK'){
            return [...state, {id, text, isCompleted}]
        }
        if (type === 'DELETE_TASK'){
            return [...state].filter(item => item.id !== id);
        }
        if (type === 'COMPLETE_TASK'){
            return [...state].map(item =>{
                if (item.id === id){
                    item.isCompleted = !item.isCompleted
                }
                return item
            })
        }
        return state;
    }
};

let store = createStore(combineReducers(reducers), applyMiddleware(logger, thunk));
export default store;