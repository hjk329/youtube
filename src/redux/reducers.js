import {combineReducers} from "redux";

import menuReducer from '../views/shared/redux/slice'

const rootReducer = combineReducers({
    menu : menuReducer
})

export default rootReducer;