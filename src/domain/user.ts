export interface IUser {
  id?: string | undefined;
  phone: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  is_active: boolean;
  is_reported: boolean;
  is_blocked: boolean;
  last_active_at: Date;
}

export interface LoginPayload {
  phone: string;
  password: string;
}

export interface RegisterPayload extends Partial<IUser> {}

export interface RefreshPayload {
  refresh_token: string;
}
