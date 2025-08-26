import { ProfileData } from '../types/profile.types';

// Simulated API delay
const DELAY = 1000;

export const profileApi = {
  fetchProfile: async (): Promise<ProfileData> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, DELAY));
    
    return {
      name: 'John Doe',
      email: 'john@example.com',
      notificationEnabled: true,
      quietHours: {
        start: 22,
        end: 6
      }
    };
  },
};
