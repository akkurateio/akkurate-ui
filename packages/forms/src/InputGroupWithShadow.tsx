import React, { useState } from "react"

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  ResponsiveValue,
} from "@chakra-ui/react"
import Label from "./Label"
import { theme } from "@akkurateio/utils"

interface IProps {
  size: ResponsiveValue<string> | undefined
  children: React.ReactNode
}

const FormControlLayout: React.FC<IProps> = (props) => {
  const [focus, setFocus] = useState(false)

  return (
    <InputGroup
      size={props.size}
      width={"fit-content"}
      rounded={"4px"}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      borderWidth={"1px"}
      borderColor={focus ? "primary.500" : "neutral.400"}
      boxShadow={
        focus ? `0 0 0 3px ${theme.colors.primary[500]}25 ` : undefined
      }
    >
      {props.children}
    </InputGroup>
  )
}

export default FormControlLayout
