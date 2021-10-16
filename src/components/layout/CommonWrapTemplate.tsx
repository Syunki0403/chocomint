import React, { ReactNode, useState } from 'react';
/* components */
import { Header } from './index';
import { BaseSnackbar } from '../uiParts/index';
/* type */
import { TSnackbar } from '../../customeHook/useSnackbarAction';

type TCommonWrapTemplate = {
  children: ReactNode;
  snackbarAction?: TSnackbar;
};

const CommonWrapTemplate = ({ children, snackbarAction }: TCommonWrapTemplate) => {
  // const [open, setOpen] = useState(true);
  // const handleClose = (_: any, reason: string) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpen(false);
  // };

  return (
    <>
      {snackbarAction && <BaseSnackbar {...snackbarAction} />}
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
