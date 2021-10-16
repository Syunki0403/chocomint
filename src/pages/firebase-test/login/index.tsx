import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Loader from 'react-loader-spinner';
import firebase from 'src/firebase';
import { useFormik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import { TLoginUser, TUserValidateError } from '../../../types/User';
import { LabelAndTextField } from 'src/components/molecules';
import { BaseButton, BaseErrorText } from 'src/components/uiParts';
import { signupAndLoginValidate } from 'src/validate/user/signupAndLogin';

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      _handleOnSubmit(values);
    },
  });

  const _handleOnSubmit = (values: TLoginUser) => {
    if (isMounted) setIsLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        router.push('/firebase-test');
        if (isMounted) setIsLoading(false);
      })
      .catch((error) => {
        if (isMounted) setIsLoading(false);
        alert(error);
      });
  };

  return (
    <div>
      <div>
        <p>サインイン</p>
        <form onSubmit={formik.handleSubmit}>
          <LabelAndTextField
            id="email"
            label="Email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          >
            {formik.errors.email && formik.touched.email && (
              <BaseErrorText>{formik.errors.email}</BaseErrorText>
            )}
          </LabelAndTextField>
          <LabelAndTextField
            id="password"
            label="Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
          >
            {formik.errors.password && formik.touched.password && (
              <BaseErrorText>{formik.errors.password}</BaseErrorText>
            )}
          </LabelAndTextField>
          <BaseButton type="submit">
            <Loader
              visible={isLoading}
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
            送信
          </BaseButton>
          <br />
          <br />
          <Link href="/firebase-test/sign-up">
            <a>会員登録がお済みでない方はこちら</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
