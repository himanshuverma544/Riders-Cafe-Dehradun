import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      ["2xl"]: 1536
    },
  },
});

export { 
  theme
};