import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"

// Custom components from variants folder (you may have to reboot the app to see the changes)

// Custom colors
const colors = {
  primary: {
    50: "#E93F63",
    100: "#E93F63",
    200: "#E93F63",
    300: "#E93F63",
    400: "#E93F63",
    500: "#e4395d",
    600: "#e4395d",
    700: "#e4395d",
    800: "#C71C40",
    900: "#C71C40",
  },
  secondary: {
    50: "#ecf5f0",
    100: "#CDDED4",
    300: "#bacdc1",
    500: "#9BB7A5",
    700: "#6F907B",
  },
  tertiary: {
    50: "#ecf5f0",
    100: "#7d91b3",
    300: "#bacdc1",
    500: "#9BB7A5",
    700: "#6F907B",
  },
  bgDark: "#15202B",
  bgLight: "#ffffff",
  textDark: "#1f1f1f",
  textLight: "#fafafa",
  success: {
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
  error: {
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
  warning: {
    100: "#FFFBEB",
    200: "#FEF3C7",
    300: "#FDE68A",
    400: "#FCD34D",
    500: "#FBBF24",
    600: "#F59E0B",
    700: "#D97706",
    800: "#B45309",
    900: "#92400E",
  },
  info: {
    100: "#ECFDF5",
    200: "#D1FAE5",
    300: "#A7F3D0",
    400: "#6EE7B7",
    500: "#34D399",
    600: "#10B981",
    700: "#059669",
    800: "#047857",
    900: "#065F46",
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
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
      fontSize: "14px", // 1rem = 16px (default)
    },
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "primary.500",
      borderRadius: "0px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "primary.700",
    },
    body: {
      fontFamily: "Inter, sans-serif",
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
  initialColorMode: "light",
  useSystemColorMode: false,
}
// Custom breakpoints (that will override default breakpoints)
const breakpoints = {
  sm: "30em", // iPhone 12 Pro Portrait
  custom: "450px", // Under this breakpoint the app starts to look bad
  md: "48em", // iPad Mini Portrait
  lg: "62em", // iPad Air Paysage
  xl: "80em", // 720p screen (HD)
  "2xl": "96em", // 1080p screen (FHD)
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
const fonts = {
  heading: '"Roboto Condensed", sans-serif',
  body: '"Roboto", sans-serif',
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
  fonts,
}
export const loveradiusTheme = extendTheme(global)
