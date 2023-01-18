import {
  Box,
  Flex,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  Icon,
  Text,
  useBreakpointValue,
  useTheme,
  VStack,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import { chakraComponents, components, Select } from "chakra-react-select"
import React, { useEffect, useId, useState } from "react"
import FormControlLayout from "./FormControlLayout"
// @ts-ignore
import { AisChevronSort } from "@akkurateio/icons"
import { sizesAll } from "@akkurateio/utils"

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
  size?: "sm" | "md" | "lg"
  icon?: JSX.Element
  menuPlacement?: "auto" | "bottom" | "top"
  iconSelected?: JSX.Element
}

interface SelectProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    AcsSelectProps,
    Omit<ThemingProps<"Input">, Omitted>,
    FormControlOptions {}

export const AcsSelect: React.FC<SelectProps> = ({
  size = "md",
  handleChange,
  menuPlacement = "auto",
  iconOnLeft = false,
  iconSelected = <AisChevronSort />,
  ...props
}) => {
  const theme = useTheme()

  const [currentValue, setCurrentValue] = useState<any>(undefined)
  const [focus, setFocus] = useState(false)
  const [notValid, setNotValid] = useState(false)

  const handleChangeSelect = (e: any) => {
    setCurrentValue(e)
    if (handleChange) {
      handleChange(e.value)
    }
  }

  useEffect(() => {
    if (props.isInvalid) {
      setNotValid(true)
    } else {
      setNotValid(false)
    }
  }, [notValid, props.isInvalid])

  const instanceId = useId()

  useEffect(() => {
    if (currentValue === undefined) {
      if (props.value) {
        setCurrentValue(props.options.find((opt) => opt.value == props.value))
      }
    } else {
      if (props.value && props.value != currentValue.value) {
        setCurrentValue(props.options.find((opt) => opt.value == props.value))
      }
    }
  }, [props.value])

  const sizeState = useBreakpointValue(typeof size === "object" ? size : {})
  const sizeInput = sizesAll(sizeState ? sizeState : (size as string))

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
          menuPlacement={menuPlacement}
          value={currentValue}
          variant={"outline"}
          instanceId={instanceId}
          onChange={handleChangeSelect}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          blurInputOnSelect={true}
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
              height: sizeInput?.heightSelect,
              minHeight: sizeInput?.heightSelect,
              backgroundColor: props.isInvalid ? "red.50" : "white",
              color: props.isInvalid ? "red.500" : "black",
              width: "full",
              outline: "none",
              fontSize: sizeInput?.fontSize,
              border: "none",
              _focusVisible: {
                border: "none",
                boxShadow: "none",
              },
            }),
            option: (provided: any, state: any) => ({
              ...provided,
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
              fontSize: sizeInput?.fontSize,
              padding: 0,
              paddingLeft: "0.255rem",
              borderBottom: "1px",
              borderBottomColor: "neutral.200",
              _last: {
                borderBottom: "none",
              },
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
              fontSize: sizeInput?.fontSize,
            }),
            valueContainer: (provided: any) => ({
              ...provided,
              padding: "0 0",
              paddingLeft: props.icon ? "0" : "0.688rem",
              fontSize: sizeInput?.fontSize,
            }),
            singleValue: (provided: any) => ({
              ...provided,
              margin: "0 0",
              fontSize: sizeInput?.fontSize,
            }),
            inputContainer: (provided: any) => ({
              ...provided,
              padding: "0 0",
              margin: "0",
              fontSize: sizeInput?.fontSize,
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
              <VStack {...props} marginRight={"0.5rem"}>
                {iconSelected ? (
                  <Icon boxSize={sizeInput?.iconSize}>{iconSelected}</Icon>
                ) : (
                  <AisChevronSort boxSize={sizeInput?.iconSize} />
                )}
              </VStack>
            ),
            SingleValue: ({ children, ...data }) => (
              <components.SingleValue {...data}>
                <Flex>
                  {data.data.icon && iconOnLeft && (
                    <Box mr={1}>{data.data.icon}</Box>
                  )}
                  {children}
                  {data.data.icon && !iconOnLeft && (
                    <Box ml={1}>{data.data.icon}</Box>
                  )}
                </Flex>
              </components.SingleValue>
            ),
            Control: ({ children, ...data }) => (
              <chakraComponents.Control {...data}>
                <Flex
                  ml={props.icon ? 2 : 0}
                  experimental_spaceX={1}
                  w={"full"}
                  height={"full"}
                  alignItems={"center"}
                >
                  {props.icon && (
                    <Box
                      color={
                        notValid
                          ? "red.500"
                          : focus
                          ? "primary.500"
                          : "neutral.500"
                      }
                    >
                      {props.icon}
                    </Box>
                  )}
                  {children}
                </Flex>
              </chakraComponents.Control>
            ),
            NoOptionsMessage: (props) => (
              <Box textAlign={"center"}>
                <Text color={"neutral.300"} fontSize={sizeInput?.fontSize}>
                  Aucun résultat
                </Text>
              </Box>
            ),
            Option: ({ children, ...data }) =>
              iconOnLeft ? (
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
