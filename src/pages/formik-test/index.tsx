import React from 'react';
import { LabelAndTextField } from '../../components/molecules/index';
import { BaseButton, BaseErrorText } from '../../components/uiParts/index';
import { useFormik } from 'formik';
import { signupAndLoginValidate } from '../../validate/user/signupAndLogin';
import { TUser, TSignupUser } from '../../types/User';

const FormikTest = () => {
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
      console.log('form data', values);
    },
  });

  return (
    <div>
      <p className="text-purple-600 text-xl">テストページ</p>
      <form>
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
        <BaseButton type="submit">送信</BaseButton>
      </form>
    </div>
  );
};

export default FormikTest;
