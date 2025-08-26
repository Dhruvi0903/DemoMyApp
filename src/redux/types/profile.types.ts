export interface ProfileData {
  name: string;
  email: string;
  notificationEnabled: boolean;
  quietHours: {
    start: number;
    end: number;
  };
}

export interface ProfileState extends ProfileData {
  isLoading: boolean;
  error: string | null;
}
