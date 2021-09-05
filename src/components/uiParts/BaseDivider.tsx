import React, { ReactNode, useRef, useEffect } from 'react';
/* material-ui */
import Divider from '@material-ui/core/Divider';

type TProps = {
  className?: string;
  flexItem?: boolean;
  light?: boolean;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'fullWidth' | 'inset' | 'middle';
};

const BaseDivider = ({
  className = '',
  flexItem = false,
  light = false,
  orientation = 'horizontal',
  variant = 'fullWidth',
}: TProps) => {
  return (
    <Divider
      className={className}
      flexItem={flexItem}
      light={light}
      orientation={orientation}
      variant={variant}
    />
  );
};

export default BaseDivider;
