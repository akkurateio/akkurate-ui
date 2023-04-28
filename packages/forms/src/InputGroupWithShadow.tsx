import { InputGroup, useTheme } from "@chakra-ui/react"
import React, { useState } from "react"

interface IProps {
  children: React.ReactNode
  width: any
  height: any
  isInvalid: any
  rounded?: any
}

const FormControlLayout: React.FC<IProps> = (props) => {
  const theme = useTheme()

  const [focus, setFocus] = useState(false)

  return (
    <InputGroup
      height={props.height}
      width={props.width ? props.width : "full"}
      rounded={props.rounded ? props.rounded : "base"}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      borderWidth={"1px"}
      backgroundColor={props.isInvalid ? "red.50" : "white"}
      color={props.isInvalid ? "red.500" : "black"}
      borderColor={
        props.isInvalid
          ? "error.500"
          : focus
          ? // ? theme.colors.primary[500]
            "#1A202C"
          : "neutral.300"
      }
      boxShadow={
        // focus ? `0 0 0 3px ${theme.colors.primary[500]}25 ` : undefined
        focus ? `0 0 0 3px #FAFAFA25 ` : undefined
      }
      _focus={{
        border: "none",
        // boxShadow: `0 0 0 3px ${theme.colors.primary[500]}25 `,
      }}
      _focusVisible={{
        border: "none",
        // boxShadow: `0 0 0 3px ${theme.colors.primary[500]}25 `,
      }}
    >
      {props.children}
    </InputGroup>
  )
}

export default FormControlLayout
