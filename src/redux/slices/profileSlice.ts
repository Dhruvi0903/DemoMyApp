import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  email: string;
  notificationEnabled: boolean;
  quietHours: {
    start: number;
    end: number;
  };
}

const initialState: ProfileState = {
  name: '',
  email: '',
  notificationEnabled: true,
  quietHours: {
    start: 0,
    end: 0,
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
      return { ...state, ...action.payload };
    },
    toggleNotifications: (state) => {
      state.notificationEnabled = !state.notificationEnabled;
    },
    updateQuietHours: (state, action: PayloadAction<{ start: number; end: number }>) => {
      state.quietHours = action.payload;
    },
    resetProfile: () => initialState,
  },
});

export const { updateProfile, toggleNotifications, updateQuietHours, resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
