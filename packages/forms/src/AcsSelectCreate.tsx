import React, { useEffect, useState } from "react"
import { ThemingProps } from "@chakra-ui/system"
import { Box, FormControlOptions, HTMLChakraProps } from "@chakra-ui/react"
import FormControlLayout from "./FormControlLayout"
import { CreatableSelect } from "chakra-react-select"

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

export const AcsSelectCreate: React.FC<SelectProps> = ({ ...props }) => {
  const [valuesArr, setValuesArr] = useState<
    { value: string | number; label: string }[]
  >([])

  const [currentValues, setCurrentValues] = useState<
    { value: string | number; label: string }[]
  >([])

  const handleChange = (value: any) => {
    setCurrentValues(value)
    props.handleChange(value.map((v: any) => v.value))
  }

  useEffect(() => {
    if (props.options) {
      const arr = props.options.map(
        (option: { value: string; label: string }, idx: number) => {
          return {
            value: idx,
            label: option.label,
          }
        },
      )

      setValuesArr(arr)
    }
  }, [props.options])

  return (
    <FormControlLayout label={props.label}>
      <Box width={"full"} h={"full"} backgroundColor={"white"} rounded={5}>
        <CreatableSelect
          isMulti
          formatCreateLabel={(inputValue) => `Créer le tag : ${inputValue}`}
          menuPortalTarget={document.body}
          useBasicStyles={true}
          // @ts-ignore
          options={props.options}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 9999,
            }),
          }}
          value={currentValues}
          closeMenuOnSelect={false}
          selectedOptionStyle={"check"}
          hideSelectedOptions={false}
          focusBorderColor={
            props.colorScheme ? props.colorScheme : "primary.500"
          }
          onChange={(e) => {
            handleChange(e.map((option) => option))
          }}
        />
      </Box>
    </FormControlLayout>
  )
}
