import React, { useRef, useEffect } from 'react';
/* material-ui */
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export type TSize = 'medium' | 'small';
export type TVariant = 'filled' | 'outlined' | 'standard';
export type TMenu = {
  value: string;
  label: string;
};

type TBaseSelectField = {
  className?: string;
  id: string;
  onChange: any;
  size?: TSize;
  value: string | number | Date;
  variant?: TVariant;
  menu: TMenu[];
};

const BaseSelectField = ({
  className = '',
  id,
  onChange,
  size = 'small',
  value,
  variant = 'standard',
  menu = [],
}: TBaseSelectField) => {
  const inputEl = useRef<HTMLDivElement | null>(null);

  return (
    <TextField
      inputRef={inputEl}
      select
      {...{
        className,
        id,
        onChange,
        size,
        value,
        variant,
      }}
    >
      {menu.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default BaseSelectField;
