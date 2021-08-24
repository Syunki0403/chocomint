import React, { useRef, useEffect } from 'react';
/* material-ui */
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

export type TSize = 'medium' | 'small';
export type TVariant = 'filled' | 'outlined' | 'standard';
export type TType = 'text' | 'password' | 'date' | 'number';

type TBaseTextField = {
  className?: string;
  disabled?: boolean;
  focus?: boolean;
  fullWidth?: boolean;
  id: string;
  onBlur: any;
  onChange: any;
  placeholder?: string;
  required?: boolean;
  size?: TSize;
  type?: TType;
  value: string | number | Date;
  variant?: TVariant;
  multiline?: boolean;
  rows?: number;
};

const BaseTextField = ({
  className = '',
  disabled,
  focus = false,
  fullWidth = true,
  id,
  onBlur,
  onChange,
  placeholder = '',
  required,
  size = 'small',
  type,
  value,
  variant = 'outlined',
  multiline = false,
  rows,
}: TBaseTextField) => {
  const CustomTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: 'grey',
        },
      },
    },
  })(TextField);

  const inputEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (focus) {
      inputEl.current?.focus();
    }
  }, []);

  return (
    <CustomTextField
      inputRef={inputEl}
      placeholder={placeholder ? `例：${placeholder} ` : ''}
      {...{
        className,
        disabled,
        fullWidth,
        id,
        onBlur,
        onChange,
        required,
        size,
        type,
        value,
        variant,
        multiline,
        rows,
      }}
    />
  );
};

export default BaseTextField;
