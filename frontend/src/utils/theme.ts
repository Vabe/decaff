import localFont from "@next/font/local";
import { red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const polysansFont = localFont({
  src: "../../public/fonts/PolySans-Median.woff2",
});

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#7466ef",
      },
      secondary: {
        main: "#E3F2FD",
      },
      error: {
        main: red.A400,
      },
    },
    typography: {
      h1: {
        fontFamily: polysansFont.style.fontFamily,
        fontWeight: 600,
      },
      h2: {
        fontFamily: polysansFont.style.fontFamily,
        fontWeight: 600,
      },
      h3: {
        fontFamily: polysansFont.style.fontFamily,
        fontWeight: 600,
      },
      h4: {
        fontFamily: polysansFont.style.fontFamily,
        fontWeight: 600,
      },
      h5: {
        fontFamily: polysansFont.style.fontFamily,
        fontWeight: 600,
      },
      h6: {
        fontFamily: polysansFont.style.fontFamily,
        fontWeight: 600,
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 6,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            border: "1px solid rgb(229, 231, 235)",
            boxShadow: "0 2px 5px -4px rgba(0,0,0,0.34)",
            borderRadius: "12px",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: "1px solid rgb(229, 231, 235)",
            borderRadius: 12,
            boxShadow: "0 2px 5px -4px rgba(0,0,0,0.34)",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          list: {
            padding: 6,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            borderRadius: 8,
          },
        },
      },
    },
  })
);

export default theme;
