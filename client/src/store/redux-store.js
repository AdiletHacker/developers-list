import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddlware from "redux-thunk";
import { developer } from "./developer";


const reducers = combineReducers({ developer });

export const redux_store = createStore(reducers, applyMiddleware(thunkMiddlware));