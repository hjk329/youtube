import {fork, all} from 'redux-saga/effects'

import sidebarSaga from '../views/shared/redux/saga'

function* sagas() {
    yield all([
        fork(sidebarSaga)
    ])

}
export default sagas;