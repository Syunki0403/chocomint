import React, { ReactNode } from 'react';
import { BaseButton } from '../uiParts/index';
import Loader from 'react-loader-spinner';

type loadType =
  | 'Puff'
  | 'Audio'
  | 'BallTriangle'
  | 'Bars'
  | 'Circles'
  | 'Grid'
  | 'Hearts'
  | 'Oval'
  | 'Rings'
  | 'TailSpin'
  | 'ThreeDots';

type TProps = {
  wrapClassName?: string;
  buttonClassName?: string;
  children: ReactNode;
  disabled?: boolean;
  focus?: boolean;
  onClick?: VoidFunction;
  buttonType?: 'button' | 'submit' | 'reset';
  size?: 'large' | 'medium' | 'small';
  variant?: 'contained' | 'outlined' | 'text';
  buttonColor?: 'mint' | 'white';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isLoading: boolean;
  loadType?: loadType;
  loadColor?: string;
  loadHeight?: number;
  loadWidth?: number;
};

const LoaderButton = ({
  wrapClassName = '',
  buttonClassName = '',
  children,
  disabled,
  focus = false,
  onClick,
  size = 'medium',
  buttonType = 'button',
  variant = 'outlined',
  buttonColor = 'mint',
  startIcon,
  endIcon,
  isLoading = false,
  loadType = 'Puff',
  loadColor = '#00BFFF',
  loadHeight = 100,
  loadWidth = 100,
}: TProps) => {
  return (
    <div className={wrapClassName}>
      <BaseButton
        className={buttonClassName}
        disabled={disabled}
        focus={focus}
        onClick={onClick}
        size={size}
        type={buttonType}
        variant={variant}
        color={buttonColor}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {children}
      </BaseButton>
      <div className="wrapLoader">
        <Loader
          visible={isLoading}
          type={loadType}
          color={loadColor}
          height={loadHeight}
          width={loadWidth}
        />
      </div>
    </div>
  );
};

export default LoaderButton;
