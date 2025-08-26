import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_PROFILE,
  ProfileData
} from '../../types/profile.types';
import {
  fetchProfileSuccess,
  fetchProfileFailure
} from '../../actions/profile.actions';

// API call function
const fetchProfileAPI = async (): Promise<ProfileData> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  return {
    id: response.data.id,
    name: response.data.name,
    email: response.data.email,
    bio: response.data.company.catchPhrase
  };
};

function* fetchProfileSaga() {
  try {
    const profile: ProfileData = yield call(fetchProfileAPI);
    yield put(fetchProfileSuccess(profile));
  } catch (error) {
    yield put(fetchProfileFailure(error instanceof Error ? error.message : 'An error occurred'));
  }
}

export function* watchProfileSaga() {
  yield takeLatest(FETCH_PROFILE, fetchProfileSaga);
}
