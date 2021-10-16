import { TUserForm, TUserValidateError } from '../../types/User';
import { validBlank, validMaxNum, emailFormat, validRange, validhankakuEngNum } from '../index';

export const signupAndLoginValidate = <T>(values: TUserForm, errors: TUserValidateError): T => {
  // ユーザー名
  if ('name' in values) {
    if (validBlank.check(values.name)) {
      errors.name = validBlank.message('ユーザー名');
    }
    if (validMaxNum.check(values.name, 50)) {
      errors.name = validMaxNum.message('ユーザー名', 50);
    }
  }
  // メールアドレス
  if (validBlank.check(values.email)) {
    errors.email = validBlank.message('メールアドレス');
  }
  if (validMaxNum.check(values.email, 255)) {
    errors.email = validMaxNum.message('メールアドレス', 255);
  }
  if (emailFormat.check(values.email)) {
    errors.email = emailFormat.message('メールアドレス');
  }
  // パスワード
  if (validBlank.check(values.password)) {
    errors.password = validBlank.message('パスワード');
  }
  if (validRange.check(values.password, 4, 30)) {
    errors.password = validRange.message('パスワード');
  }
  if (validhankakuEngNum.check(values.password)) {
    errors.password = validhankakuEngNum.message('パスワード');
  }

  return errors as any;
};
