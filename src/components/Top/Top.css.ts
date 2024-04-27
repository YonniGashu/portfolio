import { style } from "@vanilla-extract/css";
import { vars } from "../../../theme.ts";

const BREAKPOINT = "{max-width: 755px}";
export const wrapper = style({
  position: "relative",
  boxSizing: "border-box",
  backgroundColor: vars.colors.white,

  selectors: {
    [vars.darkSelector]: {
      backgroundColor: vars.colors.dark[8],
    },
  },
});
export const inner = style({
  position: "relative",
  paddingTop: 160,
  paddingBottom: 140,

  "@media": {
    [BREAKPOINT]: {
      paddingBottom: 40,
      paddingTop: 80,
    },
  },
});

export const title = style({
  fontFamily: `Verdana, ${vars.fontFamily}`,
  fontSize: 62,
  fontWeight: 900,
  lineHeight: 1.1,
  margin: 0,
  padding: 0,
  textAlign: "left",
  color: vars.colors.black,
  selectors: {
    [vars.darkSelector]: {
      color: vars.colors.white,
    },
  },

  "@media": {
    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },
});

export const desc = style({
  textAlign: "left",
  marginTop: vars.spacing.xl,
  fontSize: 24,

  "@media": {
    [BREAKPOINT]: {
      fontSize: 18,
    },
  },
});

export const control = style({
  marginTop: 0,

  "@media": {
    [BREAKPOINT]: {
      marginTop: vars.spacing.xl,
    },
  },
});
