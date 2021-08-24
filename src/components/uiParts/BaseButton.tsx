import React, { ReactNode, useRef, useEffect } from 'react';
import { COLORS } from '../../const/color';
/* material-ui */
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

type TProps = {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  focus?: boolean;
  onClick?: VoidFunction;
  type?: 'button' | 'submit' | 'reset';
  size?: 'large' | 'medium' | 'small';
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'mint' | 'white';
};

const BaseButton = ({
  className = '',
  children,
  disabled,
  focus = false,
  onClick,
  size = 'medium',
  type = 'button',
  variant = 'outlined',
  color = 'mint',
}: TProps) => {
  const CustomButton = withStyles({
    root: {
      background: color === 'mint' ? COLORS.MINT : 'white',
      borderRadius: 3,
      border: 0,
      color: color === 'mint' ? 'white' : COLORS.MINT,
      height: 48,
      padding: '0 30px',
      '&:hover': {
        backgroundColor: color === 'mint' ? COLORS.DARK_MINT : 'rgba(0, 0, 0, 0.1)',
      },
    },
  })(Button);

  const inputEl = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (focus) {
        inputEl.current?.focus();
      }
    }, 100);
  });

  return (
    <CustomButton
      ref={inputEl}
      className={className}
      disabled={disabled}
      onClick={onClick}
      size={size}
      type={type}
      variant={variant}
    >
      {children}
    </CustomButton>
  );
};

export default BaseButton;
