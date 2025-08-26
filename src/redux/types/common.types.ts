// Common action types
export const REQUEST_PENDING = 'REQUEST_PENDING';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

// Common state interface
export interface BaseState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Common action interfaces
export interface RequestPendingAction {
  type: typeof REQUEST_PENDING;
}

export interface RequestSuccessAction<T> {
  type: typeof REQUEST_SUCCESS;
  payload: T;
}

export interface RequestFailureAction {
  type: typeof REQUEST_FAILURE;
  payload: string;
}

// Helper type for all actions
export type BaseActionTypes<T> =
  | RequestPendingAction
  | RequestSuccessAction<T>
  | RequestFailureAction;
