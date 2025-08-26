import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  ProfileState,
  ProfileActionTypes
} from '../../types/profile.types';

const initialState: ProfileState = {
  data: null,
  loading: false,
  error: null
};

export const profileReducer = (
  state = initialState,
  action: ProfileActionTypes
): ProfileState => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
