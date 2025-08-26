import { combineReducers } from 'redux';
import { profileReducer } from '../reducers/profile/profile.reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
