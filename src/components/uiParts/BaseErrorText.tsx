import React, { ReactNode } from 'react';

const BaseErrorText = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <p className={className + ' text-sm text-red-500'}>{children}</p>;
};

export default BaseErrorText;
