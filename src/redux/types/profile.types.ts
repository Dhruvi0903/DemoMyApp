import { BaseState, BaseActionTypes } from './common.types';

// Action Types
export const FETCH_PROFILE = 'profile/FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'profile/FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'profile/FETCH_PROFILE_FAILURE';

// Data Interfaces
export interface ProfileData {
  id: number;
  name: string;
  email: string;
  bio: string;
}

// State Interface
export interface ProfileState extends BaseState<ProfileData> {}

// Action Interfaces
export interface FetchProfileAction {
  type: typeof FETCH_PROFILE;
}

export interface FetchProfileSuccessAction {
  type: typeof FETCH_PROFILE_SUCCESS;
  payload: ProfileData;
}

export interface FetchProfileFailureAction {
  type: typeof FETCH_PROFILE_FAILURE;
  payload: string;
}

export type ProfileActionTypes =
  | FetchProfileAction
  | FetchProfileSuccessAction
  | FetchProfileFailureAction;
