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
import React, { useId, useState } from "react"
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

export const AcsSelect: React.FC<SelectProps> = (props) => {
  const theme = useTheme()

  const [currentValue, setCurrentValue] = useState<any>(
    props.value
      ? props.options.find((opt) => opt.value == props.value)
      : undefined,
  )
  const [focus, setFocus] = useState(false)

  const handleChange = (e: any) => {
    setCurrentValue(e)
    if (props.handleChange) {
      props.handleChange(e.value)
    }
  }

  const instanceId = useId()

  return (
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
          instanceId={instanceId}
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
              width: "full",
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
              padding: "0.375rem 0",
              paddingRight: "0.375rem",
              paddingLeft: "0.375rem",
              maxHeight: "248px",
              border: "1px",
              boxShadow: `0px 0px 0px 1px ${theme.colors.neutral[200]}`,
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
            DropdownIndicator: (dropdownProps) => (
              <Box margin={"0.5rem"}>
                <AisChevronSort
                  color={
                    props.isInvalid
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
              <Box textAlign={"center"}>
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
  )
}
