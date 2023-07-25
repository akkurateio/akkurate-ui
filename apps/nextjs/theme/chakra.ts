import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools" // Custom colors

// Custom colors
const colors = {
  primary: {
    50: "#FAF5FF",
    100: "#D2CADD",
    200: "#ABA0BA",
    300: "#837598",
    400: "#5C4B75",
    500: "#342053",
    600: "#2B1B43",
    700: "#211633",
    800: "#181023",
    900: "#0E0B13",
  },
  secondary: {
    50: "#FFF5FE",
    100: "#FCE3F0",
    200: "#F9D1E1",
    300: "#F7C3D8",
    400: "#F5B4CE",
    500: "#F4A6C5",
    600: "#F297BB",
    700: "#E774A2",
    800: "#DC5289",
    900: "#D12F70",
  },
  bgDark: "#15202B",
  bgLight: "#FFF5FE",
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

const markdownCss = {
  h2: {
    lineHeight: "1.5",
    fontSize: "1.875rem",
    fontWeight: "bold",
  },
  h3: {
    lineHeight: "1.5",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  h4: {
    lineHeight: "1,5",
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  h5: {
    lineHeight: "1,5",
    fontSize: "1.125rem",
    fontWeight: "bold",
  },
  h6: {
    lineHeight: "1,5",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  p: {
    fontSize: "0.875rem",
    whiteSpace: "pre-wrap",
    marginBottom: "0.1rem",
  },
  "p:empty:before": {
    content: '" "',
    whiteSpace: "pre",
  },
  pre: {
    borderRadius: "0.5rem",
    padding: "0.5rem",
    fontSize: "0.75rem",
    backgroundColor: "gray.100",
    margin: "1rem 0",
  },
  "pre > code": {
    fontFamily: "monospace",
  },
  blockquote: {
    fontSize: "1.125rem",
    backgroundColor: "blue.50",
    padding: "0.5rem",
    borderRadius: "4px",
    fontStyle: "italic",
    fontFamily: "Times",
    marginBottom: "1rem",
    margin: "1rem 0",
  },
  ".task-list-item": {
    display: "flex",
    gap: "0.5rem",
  },
  ul: {
    fontSize: "0.875rem",
    marginLeft: "2rem",
    marginBottom: "1rem",
  },
  ol: {
    marginLeft: "2rem",
    marginBottom: "1rem",
  },
  "li > p": {
    marginBottom: 0,
  },
  a: {
    color: "blue.600",
    textDecoration: "underline",
  },
  table: {
    borderCollapse: "collapse",
    margin: 0,
    overflow: "hidden",
    tableLayout: "fixed",
    width: "100%",

    td: {
      border: "2px solid #ced4da",
      boxSizing: "border-box",
      minWidth: "1em",
      padding: "3px 5px",
      position: "relative",
      verticalAlign: "top",

      "> * ": {
        marginBottom: 0,
      },
    },
    th: {
      border: "2px solid #ced4da",
      boxSizing: "border-box",
      minWidth: "1em",
      padding: "3px 5px",
      position: "relative",
      verticalAlign: "top",

      "> * ": {
        marginBottom: 0,
      },
    },
  },
  th: {
    backgroundColor: "#bfbfbf20",
    fontWeight: "bold",
    textAlign: "left",
  },

  ".selectedCell:after": {
    background: "rgba(0, 0, 0, 0.4)",
    content: `""`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    pointerEvents: "none",
    position: "absolute",
    zIndex: 2,
  },

  ".tableWrapper": {
    padding: "1rem 0",
    overflowX: "auto",
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
      background: "primary.500",
      borderRadius: "4px",
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
    ".markdown": {
      ...markdownCss,
    },
    ".ProseMirror": {
      width: "100%",
      height: "100%",
      minHeight: "100px",
      overflowY: "auto",
      padding: 2,
      bg: "inherit",
      ...markdownCss,
    },
    ".ProseMirror-focused": {
      outlineColor: "primary.500",
    },
    ".chakra-portal-zIndex:has(#chakra-toast-manager-top)": {
      zIndex: "41 !important",
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

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
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

export const theme = extendTheme(global)
