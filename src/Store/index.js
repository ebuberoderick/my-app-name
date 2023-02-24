import {combineReducers ,createStore} from 'redux'
import {TodoReducer}  from './Reducers/TodoReducer'
import { UserReducer } from './Reducers/UserReducer'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const config = {
    key: 'root',
    version:1,
    storage,
}

export const store = createStore(
    persistReducer(config,combineReducers({TodoReducer,UserReducer}))
);