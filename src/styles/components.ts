export const fontSize = 14;

export const components = {
  MuiCssBaseline: {
    styleOverrides: {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      },
      p: {
        lineHeight: 1.75
      },
      a: {
        textDecoration: 'none',
        color: 'inherit'
      },
      button: {
        fontSize
      },
      '.MuiRating-sizeSmall': {
        fontSize: '20px'
      },
      '#nprogress .bar': {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px !important',
        borderRadius: '0px 300px 300px 0px !important',
        zIndex: 1031,
        overflow: 'hidden'
      },
      '& .MuiTabs-flexContainer': {
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '24px',
        fontWeight: '700'
      },
      '& .MuiTabs-flexContainer  button': {
        fontSize: '24px',
        fontWeight: '700',
        color: 'black',
        textTransform: 'none'
      }
    }
  },
  MuiPagination: {
    defaultProps: {
      variant: 'outlined',
      color: 'primary'
    }
  },
  MuiTextField: {
    defaultProps: {
      size: 'small',
      variant: 'outlined'
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        paddingTop: 8,
        paddingBottom: 8,
        '&:hover': {
          backgroundColor: 'transparent',
          textDecoration: 'underline',

          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'rgb(232, 241, 250)'
          }
        },
        '&.Mui-focused': {
          backgroundColor: 'rgb(250, 241, 232)'
        }
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        zIndex: 0
      }
    }
  },

  MuiFilledInput: {
    styleOverrides: {
      root: {
        backgroundColor: 'white',
        borderRadius: '5px',
        '&:hover': {
          backgroundColor: 'rgb(250, 232, 241)',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'rgb(232, 241, 250)'
          }
        },
        '&.Mui-focused': {
          backgroundColor: 'rgb(250, 241, 232)'
        }
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        textTransform: 'capitalize',
        minWidth: 0,
        minHeight: 0
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 8
      }
    }
  }
};
