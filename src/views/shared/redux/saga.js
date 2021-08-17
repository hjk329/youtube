import {takeLatest, put} from 'redux-saga/effects'

import {Actions as Action} from "./slice";

function* showMenu({payload}) {
    yield put(Action.Creators.handleMenu(false))
}

function* saga (){
    yield takeLatest(Action.Types.SHOW_MENU, showMenu)
}

export default saga