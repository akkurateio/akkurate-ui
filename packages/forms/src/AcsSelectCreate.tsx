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
import { chakraComponents, CreatableSelect } from "chakra-react-select"
import React, { useEffect, useState } from "react"
import FormControlLayout from "./FormControlLayout"

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
  const theme = useTheme()
  const [valuesArr, setValuesArr] = useState<
    { value: string | number; label: string }[]
  >([])

  const [currentValues, setCurrentValues] = useState<
    { value: string | number; label: string }[]
  >([])

  const [focus, setFocus] = useState(false)
  const [notValid, setNotValid] = useState(false)

  const handleChange = (value: any) => {
    setCurrentValues(value)
    props.handleChange(value.map((v: any) => v.value))
  }
  useEffect(() => {
    if (props.isInvalid) {
      setNotValid(true)
    } else {
      setNotValid(false)
    }
  }, [notValid, props.isInvalid])

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
    <Box>
      <FormControlLayout label={props.label}>
        <Box
          width={"full"}
          h={"full"}
          backgroundColor={"white"}
          rounded={props.rounded ? props.rounded : "base"}
        >
          <CreatableSelect
            isMulti
            formatCreateLabel={(inputValue) => `Créer le tag : ${inputValue}`}
            useBasicStyles={true}
            // @ts-ignore
            options={props.options}
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
                outline: "none",
                fontSize: props.fontSize || "sm",
                height: props.height ? props.height : "38px",
                minHeight: props.height ? props.height : "38px",
                border: "none",
                _focusVisible: {
                  border: "none",
                  boxShadow: "none",
                },
              }),
              option: (provided: any, state: any) => ({
                ...provided,
                backgroundColor: state.isSelected
                  ? "primary.500"
                  : "primary.100",
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
              menuList: (provided: any) => ({
                ...provided,
                padding: "0.313rem 0",
                paddingRight: "0.313rem",
                paddingLeft: "0.313rem",
                maxHeight: "248px",
                border: "none",
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
                rounded: "base",
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
              Option: ({ children, ...props }) => (
                <chakraComponents.Option {...props}>
                  <HStack width={"full"}>
                    {/*@ts-ignore*/}
                    <Text>{children}</Text> {props.data.icon}
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
