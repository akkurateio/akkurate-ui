import { AisChevronSort } from "@akkurateio/icons"
import {
  Box,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  Text,
  useTheme,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import { chakraComponents, Select } from "chakra-react-select"
import React, { useEffect, useState } from "react"
import FormControlLayout from "./FormControlLayout"

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
  iconOnLeft?: boolean
  selectedBgColor?: string
}

interface SelectProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    AcsSelectProps,
    ThemingProps<"Input">,
    FormControlOptions {}

export const AcsSelect: React.FC<SelectProps> = ({ ...props }) => {
  const theme = useTheme()
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
    <Box>
      <FormControlLayout label={props.label}>
        <Box
          width={props.width ? props.width : "full"}
          backgroundColor={"white"}
          rounded={props.rounded ? props.rounded : "base"}
        >
          <Select
            useBasicStyles={true}
            // @ts-ignore
            options={props.options}
            closeMenuOnSelect={true}
            hideSelectedOptions={false}
            value={currentValue}
            variant={"outline"}
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
                rounded: props.rounded ? props.rounded : "base",
                padding: "0 0",
                height: props.height ? props.height : "38px",
                minHeight: props.height ? props.height : "38px",
                backgroundColor: props.isInvalid ? "red.50" : "white",
                color: props.isInvalid ? "red.500" : "black",
                outline: "none",
                fontSize: props.fontSize || "sm",
                border: "none",
                _focusVisible: {
                  border: "none",
                  boxShadow: "none",
                },
              }),
              option: (provided: any, state: any) => ({
                ...provided,
                borderBottom: "1px",
                backgroundColor:
                  state.isSelected && props.selectedBgColor
                    ? props.selectedBgColor
                    : state.isSelected
                    ? "primary.500"
                    : null,
                margin: "0.063rem 0",
                color: state.isSelected ? "white" : "primary.500",
                rounded: "sm",
                width: "full",
                height: 9,
                fontSize: props.fontSize || "sm",
                padding: 0,
                paddingLeft: "0.255rem",
                borderBottomColor: "neutral.200",
              }),
              menuList: (provided: any) => ({
                ...provided,
                padding: "0.313rem 0",
                paddingRight: "0.313rem",
                paddingLeft: "0.313rem",
                maxHeight: "248px",
                border: "1px",
                borderColor: "neutral.200",
              }),
              placeholder: (provided: any) => ({
                ...provided,
                padding: "0 0",
                margin: "0",
                fontSize: props.fontSize || "sm",
              }),
              valueContainer: (provided: any) => ({
                ...provided,
                padding: "0 0",
                paddingLeft: "0.688rem",
                fontSize: props.fontSize || "sm",
              }),
              singleValue: (provided: any) => ({
                ...provided,
                margin: "0 0",
                fontSize: props.fontSize || "sm",
              }),
              inputContainer: (provided: any) => ({
                ...provided,
                padding: "0 0",
                margin: "0",
                fontSize: props.fontSize || "sm",
              }),
              container: (provided: any) => ({
                ...provided,
                boxShadow: focus
                  ? `0 0 0 3px ${theme.colors.primary[500]}25 `
                  : undefined,
                rounded: props.rounded ? props.rounded : "base",
                borderWidth: "1px",
                borderColor: props.isInvalid
                  ? "red.500"
                  : focus
                  ? theme.colors.primary[500]
                  : "neutral.300",
              }),
            }}
            components={{
              DropdownIndicator: (props) => (
                <Box {...props} margin={"0.5rem"}>
                  <AisChevronSort
                    color={
                      notValid
                        ? "red.500"
                        : focus
                        ? theme.colors.primary[500]
                        : "neutral.500"
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
              Option: ({ children, ...data }) =>
                props.iconOnLeft ? (
                  <chakraComponents.Option {...data}>
                    <HStack width={"full"}>
                      {/*@ts-ignore*/}
                      {data.data.icon}
                      <Text>{children}</Text>
                    </HStack>
                  </chakraComponents.Option>
                ) : (
                  <chakraComponents.Option {...data}>
                    <HStack width={"full"}>
                      <Text>{children}</Text>
                      {/*@ts-ignore*/}
                      {data.data.icon}
                    </HStack>
                  </chakraComponents.Option>
                ),
            }}
          />
        </Box>
      </FormControlLayout>
    </Box>
  )
}
