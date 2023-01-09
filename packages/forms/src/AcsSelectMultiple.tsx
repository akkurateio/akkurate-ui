import { AisChevronSort, AisClose } from "@akkurateio/icons"
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
  handleChange: (e: (string | number)[]) => void
  value: (string | number)[]
  label?: string
  selectedBgColor?: string
  iconOnLeft?: boolean
  tagBgColor?: string
  fontSizeTag?: string
}

interface SelectProps
  extends Omit<HTMLChakraProps<"select">, Omitted>,
    AcsSelectProps,
    ThemingProps<"Select">,
    FormControlOptions {}

export const AcsSelectMultiple: React.FC<SelectProps> = ({ ...props }) => {
  const theme = useTheme()
  const [currentValues, setCurrentValues] = useState<any>([])
  const [focus, setFocus] = useState(false)
  const [notValid, setNotValid] = useState(false)

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
          width={"full"}
          h={"full"}
          backgroundColor={"white"}
          rounded={props.rounded ? props.rounded : "base"}
        >
          <Select
            isMulti
            useBasicStyles={true}
            // @ts-ignore
            options={props.options}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
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
                backgroundColor: props.isInvalid ? "red.50" : "white",
                color: props.isInvalid ? "red.500" : "black",
                height: props.height ? props.height : "38px",
                minHeight: props.height ? props.height : "38px",
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
              multiValue: (provided: any, state: any) => ({
                ...provided,
                width: "fit-content",
                rounded: "full",
                backgroundColor: props.tagBgColor
                  ? props.tagBgColor
                  : "primary.50",
                color: props.color ? props.color : "primary.900",
                paddingLeft: "0.75rem",
                paddinTop: "0.25rem",
                paddinBottom: "0.25rem",
                paddinRight: "0.60rem",
                fontSize: props.fontSizeTag ? props.fontSizeTag : "2xs",
              }),
              menuList: (provided: any) => ({
                ...provided,
                padding: "0.375rem 0",
                paddingRight: "0.375rem",
                paddingLeft: "0.375rem",
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
            closeMenuOnSelect={false}
            selectedOptionStyle={"check"}
            hideSelectedOptions={false}
            value={currentValues}
            onChange={(e) => {
              handleChange(e.map((option) => option))
            }}
            placeholder={props.placeholder || "Sélectionner"}
            components={{
              DropdownIndicator: (props) => (
                <Box {...props} marginRight={"0.5rem"}>
                  <AisChevronSort
                    color={
                      notValid
                        ? "red.500"
                        : focus
                        ? "primary.500"
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
              ClearIndicator: (props) => {
                const {
                  innerProps: { ref, ...restInnerProps },
                } = props
                return (
                  <Box
                    cursor={"pointer"}
                    ref={ref}
                    {...props}
                    {...restInnerProps}
                    p={2}
                  >
                    <AisClose
                      rounded={"full"}
                      backgroundColor={"neutral.500"}
                      color={"white"}
                      boxSize={"16px"}
                      ml={2}
                    />
                  </Box>
                )
              },
            }}
          />
        </Box>
      </FormControlLayout>
    </Box>
  )
}
