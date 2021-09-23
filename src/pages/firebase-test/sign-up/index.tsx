import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Loader from 'react-loader-spinner';
import firebase from 'src/firebase';
import { useRouter } from 'next/dist/client/router';
import { LabelAndTextField } from 'src/components/molecules';
import { BaseButton, BaseErrorText } from 'src/components/uiParts';
import { useFormik } from 'formik';
import { signupAndLoginValidate } from 'src/validate/user/signupAndLogin';
import { TUser, TSignupUser } from '../../../types/User';

const SignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validate = (values: TSignupUser) => {
    let errors = {} as TUser;
    errors = signupAndLoginValidate<TUser>(values, errors);
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
      _handleOnSubmit(values);
    },
  });

  const _handleOnSubmit = (values: TSignupUser) => {
    if (isMounted) setIsLoading(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        if (isMounted) setIsLoading(false);
        router.push('/firebase-test');
      })
      .catch((error) => {
        if (isMounted) setIsLoading(false);
        alert(error);
      });
  };

  return (
    <div>
      <div>
        <p>新規登録</p>
        <form onSubmit={formik.handleSubmit}>
          <LabelAndTextField
            id="name"
            label="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            required={true}
          >
            {formik.errors.name && formik.touched.name && (
              <BaseErrorText>{formik.errors.name}</BaseErrorText>
            )}
          </LabelAndTextField>
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
          <Link href="/firebase-test/login">
            <a>すでに会員の方はこちら</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
