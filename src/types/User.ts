export type TUser = {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
};

export type TSignupUser = {
  name: string;
  email: string;
  password: string;
};

export type TLoginUser = Omit<TSignupUser, 'name'>;

export type TUserForm = TSignupUser | TLoginUser;
