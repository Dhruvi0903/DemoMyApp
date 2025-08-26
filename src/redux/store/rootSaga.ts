import { all } from 'redux-saga/effects';
import { watchProfileSaga } from '../sagas/profile/profile.saga';

export default function* rootSaga() {
  yield all([
    watchProfileSaga(),
  ]);
}
