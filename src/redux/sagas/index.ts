import { all, fork } from 'redux-saga/effects';
import { watchProfileSaga } from './profile/profile.saga';

export function* rootSaga() {
  yield all([
    fork(watchProfileSaga),
    // Add other sagas here
  ]);
}
