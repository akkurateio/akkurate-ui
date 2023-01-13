export const allSizes = (size: string) => {
  if (size === "lg") {
    return {
      fontSize: "1rem",
      spacing: "0.625rem",
      paddingLeft: "2rem",
      boxSize: "24px",
    }
  } else if (size === "md") {
    return {
      fontSize: "0.875rem",
      spacing: "0.55rem",
      paddingLeft: "1.75rem",
      boxSize: "22px",
    }
  } else if (size === "sm") {
    return {
      fontSize: "0.75rem",
      spacing: "0.375rem",
      paddingLeft: "1.25rem",
      boxSize: "16px",
    }
  }
}

export const sizesAll = (size: string) => {
  if (size === "lg") {
    return {
      fontSize: "1rem",
      height: "2.875rem",
      heightSelect: "2.75rem",
      boxSize: "32px",
      iconSize: "32px",
    }
  }
  if (size === "md") {
    return {
      fontSize: "0.875rem",
      height: "2.375rem",
      heightSelect: "2.25rem",
      boxSize: "24px",
      iconSize: "24px",
    }
  }
  if (size === "sm") {
    return {
      fontSize: "0.75rem",
      height: "1.875rem",
      heightSelect: "1.75rem",
      boxSize: "16px",
      iconSize: "16px",
    }
  }
}
