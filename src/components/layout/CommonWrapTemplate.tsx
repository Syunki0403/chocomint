import React, { ReactNode, useState } from 'react';
/* components */
import { Header } from './index';
import { BaseSnackbar } from '../uiParts/index';

type TCommonWrapTemplate = {
  children: ReactNode;
  toastActions?: {
    severity: 'success' | 'info' | 'warning' | 'error';
    open: boolean;
    handleClose?: (_: any, reason: string) => void;
    text: string;
    autoHideDuration?: number;
  };
};

const CommonWrapTemplate = ({ children, toastActions }: TCommonWrapTemplate) => {
  const [open, setOpen] = useState(true);
  const handleClose = (_: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      {toastActions && <BaseSnackbar {...toastActions} />}
      {/* <BaseSnackbar
        severity="success"
        open={open}
        text="テストメッセージ"
        handleClose={handleClose}
      /> */}
      <Header />
      {children}
    </>
  );
};

export default CommonWrapTemplate;
