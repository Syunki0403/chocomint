import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createTheme({
  overrides: {
    MuiListItemIcon: {
      root: {
        minWidth: 35,
      },
    },
    MuiToolbar: {
      regular: {
        minHeight: 50,
      },
    },
    MuiListItem: {
      root: {
        paddingTop: 6,
        paddingBottom: 6,
      },
    },
    MuiButton: {
      // contained: {
      //   backgroundColor: '#ffee58',
      // },
    },
    MuiDialog: {
      paper: {
        margin: 5,
      },
      paperFullWidth: {
        '@media (max-width: 768px)': {
          maxWidth: 500,
        },
      },
    },
    MuiFormControl: {
      root: {
        display: 'block',
      },
    },
    MuiSnackbar: {
      anchorOriginTopRight: {
        top: 1,
        '@media (min-width: 600px)': {
          top: 8,
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        minWidth: 200,
      },
      input: {
        padding: '10.5px 12px',
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: 40,
      },
    },
    MuiCard: {
      root: {
        maxWidth: 300,
        width: '30%',
      },
    },
    MuiCardMedia: {
      root: {
        maxHeight: 160,
        height: '40vw',
      },
    },
  },
  palette: {
    primary: {
      main: '#226cd6',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
