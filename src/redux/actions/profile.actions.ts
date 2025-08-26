import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  ProfileData,
  ProfileActionTypes
} from '../types/profile.types';

export const fetchProfile = (): ProfileActionTypes => ({
  type: FETCH_PROFILE
});

export const fetchProfileSuccess = (data: ProfileData): ProfileActionTypes => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: data
});

export const fetchProfileFailure = (error: string): ProfileActionTypes => ({
  type: FETCH_PROFILE_FAILURE,
  payload: error
});
