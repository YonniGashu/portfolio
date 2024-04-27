// theme.css.ts
import { createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
  primaryColor: "violet",
  primaryShade: 9,
  fontFamily: "Verdana",
  defaultGradient: {
    from: "violet",
    to: "rgba(190,0,180)",
    deg: 60,
  },
});

// CSS variables object, can be access in *.css.ts files
export const vars = themeToVars(theme);
