import {combineReducers} from "redux";

import sidebarReducer from '../views/shared/redux/slice'

const rootReducer = combineReducers({
    sidebar : sidebarReducer
})

export default rootReducer;