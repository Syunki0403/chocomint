export type TUser = {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
};

export type TUserValidate = {
  name: string;
  email: string;
  password: string;
};

export type TUserValidateError = Record<keyof TUserValidate, string>;

export type TSignupUser = TUserValidate;

export type TLoginUser = Omit<TUserValidate, 'name'>;

export type TUserForm = TSignupUser | TLoginUser;
