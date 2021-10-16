import { useState } from 'react';

type TSeverity = 'info' | 'success' | 'error' | 'warning' | '';
export type TSnackbar = {
  severity: TSeverity;
  open: boolean;
  handleClose?: (_: any, reason: string) => void;
  handleSnackbarOpen?: ({ text, severity, autoHideDuration }: TSnackbarOpen) => void;
  text: string;
  autoHideDuration?: number;
};

type TSnackbarOpen = Omit<TSnackbar, 'handleClose' | 'handleSnackbarOpen' | 'open'>;

const useSnackbarAction = (): TSnackbar => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [severity, setSeverity] = useState<TSeverity>('info');
  const [autoHideDuration, setAutoHideDuration] = useState(0);

  const handleSnackbarOpen = ({
    severity = 'success',
    text,
    autoHideDuration = 4000,
  }: TSnackbarOpen) => {
    console.log('handleSnackbarOpen');
    setOpen(true);
    setText(text);
    setSeverity(severity);
    setAutoHideDuration(autoHideDuration);
  };

  const handleClose = (_: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return {
    severity,
    open,
    handleClose,
    handleSnackbarOpen,
    text,
    autoHideDuration,
  };
};

export default useSnackbarAction;
