import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { TSnackbar } from '../../customeHook/useSnackbarAction';

const BaseSnackbar = ({
  severity = 'success',
  open = false,
  handleClose,
  text = '',
  autoHideDuration = 3000,
}: TSnackbar) => {
  const Alert = (alertProps: any) => {
    return <MuiAlert elevation={6} variant="filled" {...alertProps} />;
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {text}
        </Alert>
      </Snackbar>
    </>
  );
};

export default BaseSnackbar;
