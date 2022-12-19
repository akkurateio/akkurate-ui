import React, { useEffect, useState } from "react"
import {
  Box,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  Text,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import FormControlLayout from "./FormControlLayout"
import { Select, chakraComponents } from "chakra-react-select"
import { AisChevronSort } from "@akkurateio/icons"
import { theme } from "@akkurateio/utils"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface AcsSelectProps {
  options: {
    value: string
    label: string
    isDisabled?: boolean
    icon?: JSX.Element
  }[]
  handleChange: (e: string | number) => void
  value: string | number
  label?: string
}

interface SelectProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    AcsSelectProps,
    ThemingProps<"Input">,
    FormControlOptions {}

export const AcsSelect: React.FC<SelectProps> = ({ height, ...props }) => {
  const [currentValue, setCurrentValue] = useState<string | number>()
  const [focus, setFocus] = useState(false)
  const [notValid, setNotValid] = useState(false)

  const handleChange = (e: any) => {
    setCurrentValue(e)
    if (props.handleChange) {
      props.handleChange(e.value)
    }
  }

  useEffect(() => {
    if (props.isInvalid) {
      setNotValid(true)
    } else {
      setNotValid(false)
    }
  }, [notValid, props.isInvalid])

  return (
    <FormControlLayout label={props.label}>
      <Box
        width={props.width ? props.width : "full"}
        h={"full"}
        backgroundColor={"white"}
        rounded={"base"}
      >
        <Select
          menuPortalTarget={document.body}
          useBasicStyles={true}
          // @ts-ignore
          options={props.options}
          closeMenuOnSelect={true}
          hideSelectedOptions={false}
          value={currentValue}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={props.placeholder || "Sélectionner"}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 9999,
            }),
          }}
          chakraStyles={{
            control: (base, state) => ({
              ...base,
              rounded: "base",
              padding: "0 0",
              backgroundColor: props.isInvalid ? "red.50" : "white",
              color: props.isInvalid ? "red.500" : "black",
              outline: "none",
              fontSize: props.fontSize || "sm",
              border: "none",
              _hover: {
                borderColor: props.isInvalid ? "red.500" : "gray.400",
              },
            }),
            option: (provided: any, state: any) => ({
              ...provided,
              backgroundColor: state.isSelected ? "primary.500" : "primary.100",
              margin: "0.063rem 0",
              color: state.isSelected ? "white" : "primary.500",
              rounded: "sm",
              width: "full",
              height: 9,
              fontSize: props.fontSize || "sm",
              padding: 0,
              paddingLeft: "0.255rem",
              border: "none",
            }),
            menuList: (provided: any, state: any) => ({
              ...provided,
              padding: "0.313rem 0",
              paddingRight: "0.313rem",
              paddingLeft: "0.313rem",
              maxHeight: "248px",
              border: "none",
            }),
            placeholder: (provided: any, state: any) => ({
              ...provided,
              padding: "0 0",
              margin: "0",
              fontSize: props.fontSize || "sm",
            }),
            valueContainer: (provided: any, state: any) => ({
              ...provided,
              padding: "0 0",
              paddingLeft: "0.688rem",
              fontSize: props.fontSize || "sm",
            }),
            singleValue: (provided: any, state: any) => ({
              ...provided,
              margin: "0 0",
              fontSize: props.fontSize || "sm",
            }),
            inputContainer: (provided: any, state: any) => ({
              ...provided,
              padding: "0 0",
              margin: "0",
              fontSize: props.fontSize || "sm",
            }),
            container: (provided: any, state: any) => ({
              ...provided,
              boxShadow: focus
                ? `0 0 0 3px ${theme.colors.primary[500]}25 `
                : undefined,
              rounded: "base",
              borderWidth: "1px",
              borderColor: props.isInvalid ? "red.500" : "gray.300",
              _hover: {
                borderColor: props.isInvalid
                  ? "red.500"
                  : focus
                  ? "primary.500"
                  : "gray.400",
              },
            }),
          }}
          components={{
            DropdownIndicator: (props) => (
              <Box {...props} margin={"0.5rem"}>
                <AisChevronSort
                  color={
                    notValid ? "red.500" : focus ? "primary.500" : "neutral.500"
                  }
                  boxSize={"16px"}
                  ml={2}
                />
              </Box>
            ),
            NoOptionsMessage: (props) => (
              <Box textAlign={"center"} {...props}>
                <Text color={"neutral.300"} fontSize={"sm"}>
                  Aucun résultat
                </Text>
              </Box>
            ),
            Option: ({ children, ...props }) => (
              <chakraComponents.Option {...props}>
                <HStack width={"full"}>
                  {/*@ts-ignore*/}
                  <Text>{children}</Text> {props.data.icon}
                </HStack>
              </chakraComponents.Option>
            ),
          }}
        />
      </Box>
    </FormControlLayout>
  )
}
