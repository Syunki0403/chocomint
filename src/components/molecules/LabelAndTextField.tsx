import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { TSize, TVariant, TType } from '../uiParts/BaseTextField';
import { BaseTextField } from '../uiParts/index';

type TProps = {
  FieldClass?: string;
  children?: ReactNode;
  disabled?: boolean;
  focus?: boolean;
  fullWidth?: boolean;
  id: string;
  label: string;
  onBlur?: any;
  onChange: any;
  placeholder?: string;
  required?: boolean;
  value: string | number | Date;
  size?: TSize;
  type?: TType;
  variant?: TVariant;
  wrapClass?: string;
  labelClass?: string;
  multiline?: boolean;
  rows?: number;
};

const LabelAndTextField = ({
  FieldClass = '',
  children,
  disabled,
  focus,
  fullWidth,
  id,
  label,
  onBlur,
  onChange,
  placeholder,
  required = false,
  size,
  type,
  value,
  variant,
  wrapClass = '',
  labelClass = '',
  multiline,
  rows,
}: TProps) => {
  return (
    <div className={wrapClass}>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? <RequiredMsg>※必須</RequiredMsg> : ''}
      </label>
      <BaseTextField
        {...{
          disabled,
          focus,
          fullWidth,
          id,
          onBlur,
          onChange,
          placeholder,
          value,
          size,
          type,
          variant,
          multiline,
          rows,
        }}
        className={FieldClass}
      />
      {children}
    </div>
  );
};

const RequiredMsg = styled.span`
  margin-left: 3px;
  font-size: 80%;
  color: red;
  vertical-align: 1px;
`;

export default LabelAndTextField;
