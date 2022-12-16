import React, { useEffect, useState } from "react"
import { FormControlOptions, HTMLChakraProps } from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import FormControlLayout from "./FormControlLayout"
import { Select, StylesConfig } from "chakra-react-select"
import { theme } from "@akkurateio/utils"
import InputGroupWithShadow from "./InputGroupWithShadow"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface AcsSelectProps {
  options: {
    value: string
    label: string
    isDisabled?: boolean
  }[]
  handleChange: (e: string | number) => void
  value: string | number
  label?: string
}

interface SelectProps
  extends Omit<HTMLChakraProps<"select">, Omitted>,
    AcsSelectProps,
    ThemingProps<"Select">,
    FormControlOptions {}

export const AcsSelect: React.FC<SelectProps> = ({ height, ...props }) => {
  const [currentValue, setCurrentValue] = useState<string | number>()
  const [focus, setFocus] = useState(false)

  const handleChange = (e: any) => {
    setCurrentValue(e)
    if (props.handleChange) {
      props.handleChange(e.value)
    }
  }

  return (
    <FormControlLayout label={props.label}>
      <InputGroupWithShadow isInvalid={props.isInvalid}>
        <Select
          // menuPortalTarget={document.body}
          useBasicStyles={true}
          // @ts-ignore
          options={props.options}
          closeMenuOnSelect={true}
          hideSelectedOptions={false}
          errorBorderColor={props.isInvalid ? "error.500" : "primary.500"}
          value={currentValue}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          // components={{
          //   DropdownIndicator,
          // }}
          placeholder={props.placeholder || "Sélectionner"}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 9999,
            }),
          }}
          chakraStyles={{
            control: (provided: any, state: any) => ({
              ...provided,
              backgroundColor: props.isInvalid ? "red.50" : "white",
              width: props.width ? props.width : "300px",
              height: "38px",
              color: props.isInvalid ? "error.500" : "black",
              border: "none",
              rounded: "4px",
              fontSize: props.fontSize || "sm",
            }),
            option: (provided: any, state: any) => ({
              ...provided,
              backgroundColor: state.isSelected ? "primary.500" : "primary.100",
              margin: "1px 0",
              color: state.isSelected ? "white" : "primary.500",
              height: "38px",
              width: "100%",
              rounded: "2px",

              fontSize: props.fontSize || "sm",
              padding: "0",
            }),
            menuList: (provided: any, state: any) => ({
              ...provided,
              padding: "5px 0",
              paddingRight: "5px",
              paddingLeft: "5px",
              height: "248px",
            }),
            placeholder: (provided: any, state: any) => ({
              ...provided,
              padding: "0 0",
              margin: "0",
              fontSize: props.fontSize || "sm",
            }),
            valueContainer: (provided: any, state: any) => ({
              ...provided,
              padding: "10.5px 0",
              paddingLeft: "10px",
            }),
            downChevron: (provided: any, state: any) => ({
              ...provided,
              color: props.isInvalid
                ? "error.500"
                : focus
                ? "primary.500"
                : "neutral.500",
            }),
          }}
        />
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
