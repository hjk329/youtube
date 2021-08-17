import {fork, all} from 'redux-saga/effects'

import menuSaga from '../views/shared/redux/saga'

function* sagas() {
    yield all([
        fork(menuSaga)
    ])

}
export default sagas;