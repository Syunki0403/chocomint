import React from 'react';
import Link from 'next/link';
import firebase from 'src/firebase';
import { useFormik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import { TLoginUser, TUserValidateError } from '../../../types/User';
import { signupAndLoginValidate } from '../../../validate/user/signupAndLogin';
/* components */
import Image from 'next/image';
import logo from '/public/images/logo_transparent.png';
import { BaseButton, BaseErrorText } from 'src/components/uiParts';
import { LabelAndTextField } from 'src/components/molecules/index';

const LogInTemplate = () => {
  const router = useRouter();
  const validate = (values: TLoginUser) => {
    let errors = {} as TUserValidateError;
    errors = signupAndLoginValidate<TUserValidateError>(values, errors);
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
      _handleOnSubmit(values);
    },
  });

  const _handleOnSubmit = (values: TLoginUser) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        router.push('/');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="px-8 py-12 w-screen h-screen bg-green-300">
      <div className="mx-auto md:w-1/2">
        <div className="flex flex-col items-center mb-10 mx-auto w-52">
          <Image src={logo} alt="ロゴ" width={150} height={150} />
          <h1>ログイン</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="pb-6">
            <LabelAndTextField
              id="email"
              label="メールアドレス"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              labelClass="font-bold"
            >
              {formik.errors.email && formik.touched.email && (
                <BaseErrorText>{formik.errors.email}</BaseErrorText>
              )}
            </LabelAndTextField>
          </div>
          <div>
            <LabelAndTextField
              id="password"
              label="パスワード"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              labelClass="font-bold"
            >
              {formik.errors.password && formik.touched.password && (
                <BaseErrorText>{formik.errors.password}</BaseErrorText>
              )}
            </LabelAndTextField>
          </div>
          <div className="py-10 text-center">
            <BaseButton className="px-4 h-10" color="white" type="submit">
              ログイン
            </BaseButton>
          </div>
          <div>
            <span>パスワードを忘れた場合は</span>
            <a className="text-blue-600 cursor-pointer">こちら</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInTemplate;
