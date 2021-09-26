import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { TUser, TLoginUser } from '../../../types/User';
import { signupAndLoginValidate } from '../../../validate/user/signupAndLogin';
/* components */
import Image from 'next/image';
import logo from '/public/images/logo_transparent.png';
import { BaseTextField, BaseButton, BaseErrorText } from 'src/components/uiParts';

const LogInTemplate = () => {
  const validate = (values: TLoginUser) => {
    let errors = {} as TUser;
    errors = signupAndLoginValidate<TUser>(values, errors);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('form data', values);
    },
  });

  return (
    <div className="px-8 py-12 w-screen h-screen bg-green-300">
      <div className="mx-auto md:w-3/5">
        <div className="flex flex-col items-center mx-auto pb-4 w-52">
          <Link href="/">
            <a>
              <Image src={logo} alt="ロゴ" width={150} height={150} className="cursor-pointer" />
            </a>
          </Link>
          <h1>ログイン</h1>
        </div>
        <div className="pb-6">
          <div className="pb-2">メールアドレス</div>
          <BaseTextField
            id="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="example@chocomint.com"
            className="bg-white rounded"
          />
          {formik.errors.email && formik.touched.email && (
            <BaseErrorText>{formik.errors.email}</BaseErrorText>
          )}
        </div>
        <div>
          <div className="pb-2">パスワード</div>
          <BaseTextField
            id="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            className="bg-white rounded"
          />
          {formik.errors.password && formik.touched.password && (
            <BaseErrorText>{formik.errors.password}</BaseErrorText>
          )}
        </div>
        <div className="py-10 text-center">
          <BaseButton className="px-4 h-10" color="white">
            ログイン
          </BaseButton>
        </div>
        <div>
          <span>パスワードを忘れた場合は</span>
          <a className="text-blue-600 cursor-pointer">こちら</a>
        </div>
      </div>
    </div>
  );
};

export default LogInTemplate;
