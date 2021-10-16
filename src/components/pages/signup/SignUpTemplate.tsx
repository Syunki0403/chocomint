import React, { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { TSignupUser, TUserValidateError } from '../../../types/User';
import { signupAndLoginValidate } from '../../../validate/user/signupAndLogin';
/* components */
import Image from 'next/image';
import logo from '/public/images/logo_transparent.png';
import { BaseTextField, BaseButton, BaseErrorText } from 'src/components/uiParts';
import { LabelAndTextField } from 'src/components/molecules/index';

const SignUpTemplate = () => {
  const [checked, setChecked] = useState(true);

  const onChangeChecked = () => {
    setChecked(!checked);
  };

  const validate = (values: TSignupUser) => {
    let errors = {} as TUserValidateError;
    errors = signupAndLoginValidate<TUserValidateError>(values, errors);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
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
      <div className="mx-auto md:w-1/2">
        <div className="flex flex-col items-center mb-10 mx-auto w-52">
          <Image src={logo} alt="ロゴ" width={150} height={150} />
          <h1>新規登録</h1>
        </div>
        <div className="pb-6">
          <LabelAndTextField
            id="name"
            label="ユーザー名"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            labelClass="font-bold"
          >
            {formik.errors.name && formik.touched.name && (
              <BaseErrorText>{formik.errors.name}</BaseErrorText>
            )}
          </LabelAndTextField>
        </div>
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
        <div className="pb-6">
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
        <div>
          <label>
            <input type="checkbox" onChange={onChangeChecked} />
            <a className="text-blue-600 cursor-pointer"> 利用規約</a>
            <span>に同意しますか？</span>
          </label>
        </div>
        <div className="py-10 text-center">
          <BaseButton className="px-4 h-10" color="white" disabled={checked}>
            新規登録
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default SignUpTemplate;
