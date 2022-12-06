import React, { useEffect, useState } from "react"
import {
  FormControlOptions,
  FormLabel,
  HTMLChakraProps,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import FormControlLayout from "./FormControlLayout"
import { Select } from "chakra-react-select"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface AcsSelectProps {
  options: {
    value: string
    label: string
  }[]
  handleChange: (e: string) => void
  value: string
  label?: string
}

interface SelectProps
  extends Omit<HTMLChakraProps<"select">, Omitted>,
    AcsSelectProps,
    ThemingProps<"Select">,
    FormControlOptions {}

export const AcsSelect: React.FC<SelectProps> = ({ ...props }) => {
  const [value, setValue] = useState("")
  const [currentValue, setCurrentValue] = useState({
    value: "",
    label: "Indéfini",
  })

  const handleChange = (e: any) => {
    setValue(e.value)
    setCurrentValue(e)
    if (props.handleChange) {
      props.handleChange(e.value)
    }
  }

  return (
    <FormControlLayout label={props.label}>
      <Select
        menuPortalTarget={document.body}
        useBasicStyles={true}
        // @ts-ignore
        options={props.options}
        styles={{
          menuPortal: (base) => ({
            ...base,
            zIndex: 9999,
          }),
          option: () => ({
            fontSize: "12px",
          }),
        }}
        focusBorderColor={props.colorScheme ? props.colorScheme : "primary.500"}
        selectedOptionStyle={"check"}
        closeMenuOnSelect={true}
        hideSelectedOptions={false}
        errorBorderColor={props.onError ? "red.500" : "primary.500"}
        value={currentValue}
        onChange={handleChange}
      />
    </FormControlLayout>
  )
}
