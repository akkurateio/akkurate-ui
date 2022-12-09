import React, { useEffect, useState } from "react"
import { Box, FormControlOptions, HTMLChakraProps } from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import FormControlLayout from "./FormControlLayout"
import { Select } from "chakra-react-select"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface AcsSelectProps {
  options: {
    value: string
    label: string
  }[]
  handleChange: (e: (string | number)[]) => void
  value: (string | number)[]
  label?: string
}

interface SelectProps
  extends Omit<HTMLChakraProps<"select">, Omitted>,
    AcsSelectProps,
    ThemingProps<"Select">,
    FormControlOptions {}

export const AcsSelectMultiple: React.FC<SelectProps> = ({ ...props }) => {
  const [currentValues, setCurrentValues] = useState<any>([])

  const handleChange = (e: { value: string | number; label: string }[]) => {
    setCurrentValues(e)
    if (props.handleChange) {
      props.handleChange(e.map((item) => item.value))
    }
  }

  useEffect(() => {
    if (props.options && props.value) {
      if (props.value.length > 0) {
        const array = props.options.filter((v) => props.value.includes(v.value))

        setCurrentValues(array)
      }
    }
  }, [props.options, props.value])

  return (
    <FormControlLayout label={props.label}>
      <Box width={"full"} h={"full"} backgroundColor={"white"} rounded={5}>
        <Select
          isMulti
          // menuPortalTarget={document.body}
          useBasicStyles={true}
          // @ts-ignore
          options={props.options}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 9999,
            }),
          }}
          closeMenuOnSelect={false}
          selectedOptionStyle={"check"}
          hideSelectedOptions={false}
          focusBorderColor={
            props.colorScheme ? props.colorScheme : "primary.500"
          }
          value={currentValues}
          onChange={(e) => {
            handleChange(e.map((option) => option))
          }}
          placeholder={props.placeholder}
        />
      </Box>
    </FormControlLayout>
  )
}
