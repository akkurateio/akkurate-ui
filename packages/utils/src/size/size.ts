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

export const sizesAll = (sizes: string) => {
  if (sizes === "lg") {
    return {
      fontSize: "1rem",
      height: "2.5rem",
    }
  }
  if (sizes === "md") {
    return {
      fontSize: "0.875rem",
      height: "2.25rem",
    }
  }
  if (sizes === "sm") {
    return {
      fontSize: "0.75rem",
      height: "1.75rem",
    }
  }
}
