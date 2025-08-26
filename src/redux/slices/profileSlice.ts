import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileState } from '../types/profile.types';
import { profileApi } from '../services/profileApi';

const initialState: ProfileState = {
  name: '',
  email: '',
  notificationEnabled: true,
  quietHours: {
    start: 0,
    end: 0,
  },
  isLoading: false,
  error: null,
};

// Async thunks
export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async () => {
    const response = await profileApi.fetchProfile();
    return response;
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfile: () => initialState,
  },
  extraReducers: (builder) => {
    // Fetch Profile
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.notificationEnabled = action.payload.notificationEnabled;
        state.quietHours = action.payload.quietHours;
        state.error = null;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch profile';
      })

    
  },
});

export const { resetProfile } = profileSlice.actions;
export default profileSlice.reducer;