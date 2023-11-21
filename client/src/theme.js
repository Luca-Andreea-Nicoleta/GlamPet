import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#FAFAFA",
    200: "#F5F5F5",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },

  secondary: {
    100: "#FFD700",
    200: "#FFD700",
    300: "#FFD700",
    400: "#FFD700",
    500: "#FFD700",
    600: "#FFD700",
    700: "#FFD700",
    800: "#FFD700",
    900: "#FFD700",
  },

  neutral: {
    100: "#001F3F",
    200: "#001F3F",
    300: "#001F3F",
    400: "#001F3F",
    500: "#001F3F",
    600: "#001F3F",
    700: "#001F3F",
    800: "#001F3F",
    900: "#001F3F",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    // @ts-ignore
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 18,
    h1: {
      fontFamily: ["Poiret One", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Sacramento", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Poiret One", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
