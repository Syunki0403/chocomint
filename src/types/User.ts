export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type TSignupUser = Omit<TUser, 'id'>;

export type TLoginUser = Omit<TUser, 'id' | 'name'>;

export type TUserForm = TSignupUser | TLoginUser;
