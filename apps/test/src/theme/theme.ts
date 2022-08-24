import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"

// Custom colors
const colors = {
  primary: {
    100: "#ce9e66",
    200: "#c68e4d",
    300: "#bd7e33",
    400: "#b56e1a",
    500: "#ad5e00",
    600: "#9c5500",
    700: "#8a4b00",
    800: "#794200",
    900: "#683800",
  },
  secondary: {
    100: "#b59eda",
    200: "#a98ed4",
    300: "#9d7ece",
    400: "#906ec8",
    500: "#845ec2",
    600: "#7755af",
    700: "#6a4b9b",
    800: "#5c4288",
    900: "#4f3874",
  },
  tertiary: {
    100: "#66b9b3",
    200: "#4daea7",
    300: "#33a29a",
    400: "#1a978e",
    500: "#008b81",
    600: "#007d74",
    700: "#006f67",
    800: "#00615a",
    900: "#00534d",
  },
  bgDark: "#15202B",
  bgLight: "#F5F5F5",
  textDark: "#1f1f1f",
  textLight: "#fafafa",
  isValid: {
    100: "#F0FDF4",
    200: "#DCFCE7",
    300: "#BBF7D0",
    400: "#86EFAC",
    500: "#4ADE80",
    600: "#22C55E",
    700: "#16A34A",
    800: "#15803D",
    900: "#166534",
  },
  isInvalid: {
    100: "#FEF2F2",
    200: "#FEE2E2",
    300: "#FECACA",
    400: "#FCA5A5",
    500: "#F87171",
    600: "#EF4444",
    700: "#DC2626",
    800: "#B91C1C",
    900: "#991B1B",
  },
}

// Custom global styles
const styles = {
  global: (props: StyleFunctionProps) => ({
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
    },
    html: {
      fontSize: "16px", // 1rem = 16px (default)
    },
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "tertiary.500",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "tertiary.700",
    },
    body: {
      fontFamily: "Roboto, sans-serif",
      bg: mode("bgLight", "bgDark")(props), // custom bg color in dark mode or light mode
      color: mode("textDark", "textLight")(props), // custom text color in dark mode or light mode
    },
    a: {
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    },
  }),
}

// Config to include color mode
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

// Custom breakpoints (that will override default breakpoints)
const breakpoints = {
  sm: "390px", // iPhone 12 Pro Portrait
  custom: "450px", // Under this breakpoint the app starts to look bad
  md: "768px", // iPad Mini Portrait
  lg: "1180px", // iPad Air Paysage
  xl: "1280px", // 720p screen (HD)
  "2xl": "1920px", // 1080p screen (FHD)
  "3xl": "2560px", // 1440p screen (QHD)
  "4xl": "3840px", // 2160p screen (UHD)
}

// Custom font sizes (to add smaller font sizes)
const fontSizes = {
  "6xs": "0.2rem",
  "5xs": "0.3rem",
  "4xs": "0.375rem",
  "3xs": "0.5rem",
  "2xs": "0.625rem",
  // This exists already and is the default
  // you dont need to define it again
  // xs: '0.75rem',
  // sm: '0.875rem',
  // md: '1rem',
  // lg: '1.125rem',
  // xl: '1.25rem',
  // '2xl': '1.5rem',
  // '3xl': '1.875rem',
  // '4xl': '2.25rem',
  // '5xl': '3rem',
  // '6xl': '4rem',
  // '7xl': '5rem',
  // '8xl': '6rem',
  // '9xl': '7rem',
}

// Custom sizes, this could be used to define standard sizes for padding, margin, etc...
const sizes = {
  p2: "0.2rem",
  p4: "0.4rem",
  p6: "0.6rem",
  p8: "0.8rem",
  p10: "1rem",
}

// Extend the theme to include every needed part
const global = {
  styles,
  colors,
  config,
  breakpoints,
  fontSizes,
  sizes,
}

export const theme = extendTheme(global)
