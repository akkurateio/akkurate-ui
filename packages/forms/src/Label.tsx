import { FormLabel } from "@chakra-ui/react"
import React from "react"

interface IProps {
  label: string
}

const Label: React.FC<IProps> = ({ label }) => {
  return (
    <FormLabel
      height={3}
      fontSize={"2xs"}
      fontWeight={"normal"}
      opacity={0.7}
      mb={2}
    >
      {label}
    </FormLabel>
  )
}

export default Label
