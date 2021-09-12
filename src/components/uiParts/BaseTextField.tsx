import React, { useRef, useEffect } from 'react';
/* material-ui */
import TextField from '@material-ui/core/TextField';

export type TSize = 'medium' | 'small';
export type TVariant = 'filled' | 'outlined' | 'standard';
export type TType = 'text' | 'password' | 'date' | 'number';

type TBaseTextField = {
  className?: string;
  disabled?: boolean;
  focus?: boolean;
  fullWidth?: boolean;
  id: string;
  onBlur?: any;
  onChange: any;
  placeholder?: string;
  required?: boolean;
  size?: TSize;
  type?: TType;
  value: string | number | Date;
  variant?: TVariant;
  multiline?: boolean;
  rows?: number;
  InputProps?: any;
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
  InputProps,
}: TBaseTextField) => {
  const inputEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (focus) {
      inputEl.current?.focus();
    }
  }, []);

  return (
    <TextField
      inputRef={inputEl}
      placeholder={placeholder}
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
        InputProps,
      }}
    />
  );
};

export default BaseTextField;
