import { FormLabel } from "@chakra-ui/react"
import React from "react"

interface IProps {
  label: string
}

const Label: React.FC<IProps> = ({ label }) => {
  return (
    <FormLabel
      fontSize={"xs"}
      lineHeight={"1.2rem"}
      fontWeight={"normal"}
      opacity={0.7}
      m={0}
      ml={1}
    >
      {label}
    </FormLabel>
  )
}

export default Label
