import React from "react"

import { FormControl, FormErrorMessage, FormHelperText } from "@chakra-ui/react"
import Label from "./Label"

interface IProps {
  label?: string
  hint?: string
  error?: string
  isRequired?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isReadOnly?: boolean
  children: React.ReactNode
}

const FormControlLayout: React.FC<IProps> = (props) => {
  return (
    <FormControl
      isRequired={props.isRequired}
      isDisabled={props.isDisabled}
      isInvalid={props.isInvalid}
      isReadOnly={props.isReadOnly}
    >
      {props.label && <Label label={props.label} />}

      {props.children}

      <FormHelperText opacity={0.7} fontSize={"xs"}>
        {props.hint}
      </FormHelperText>
      <FormErrorMessage fontSize={"xs"}>{props.error}</FormErrorMessage>
    </FormControl>
  )
}

export default FormControlLayout
