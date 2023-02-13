import { AisChevronSort, AisClose } from "@akkurateio/icons"
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
import { chakraComponents, CreatableSelect } from "chakra-react-select"
import React, { useEffect, useId, useState } from "react"
import FormControlLayout from "./FormControlLayout"
// @ts-ignore
import { sizesAll } from "@akkurateio/utils"

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
  size?: "sm" | "md" | "lg"
  icon?: JSX.Element
  menuPlacement?: "auto" | "bottom" | "top"
  iconSelected?: JSX.Element
}

interface SelectProps
  extends Omit<HTMLChakraProps<"select">, Omitted>,
    AcsSelectProps,
    Omit<ThemingProps<"Select">, Omitted>,
    FormControlOptions {}

export const AcsSelectCreate: React.FC<SelectProps> = ({
  size = "md",
  menuPlacement = "auto",
  iconOnLeft = false,
  iconSelected = <AisChevronSort />,
  ...props
}) => {
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
  const instanceId = useId()
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
  const sizeState = useBreakpointValue(typeof size === "object" ? size : {})
  const sizeInput = sizesAll(sizeState ? sizeState : (size as string))

  return (
    <FormControlLayout label={props.label}>
      <Box
        width={"full"}
        backgroundColor={"white"}
        rounded={props.rounded ? props.rounded : "base"}
      >
        {props.icon && (
          <Box
            position={"absolute"}
            top={0}
            left={sizeInput?.iconSize === "32px" ? -1 : 0}
            bottom={0}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={sizeInput?.heightSelect}
            backgroundColor={"white"}
            roundedLeft={props.rounded ? props.rounded : "base"}
            zIndex={1}
            borderWidth={1}
            borderRight={"none"}
            borderColor={
              props.isInvalid
                ? "red.500"
                : focus
                ? "primary.500"
                : "neutral.300"
            }
            boxShadow={
              focus
                ? `inset 0px 0px -3px 3px ${theme.colors.primary[500]}25 `
                : undefined
            }
            color={
              props.color ? props.color : focus ? "primary.500" : "neutral.500"
            }
          >
            <Icon boxSize={sizeInput?.iconSize}>{props.icon} </Icon>
          </Box>
        )}
        <CreatableSelect
          isMulti
          formatCreateLabel={(inputValue) => `Créer le tag : ${inputValue}`}
          useBasicStyles={true}
          // @ts-ignore
          options={props.options}
          instanceId={instanceId}
          value={currentValues}
          menuPlacement={menuPlacement}
          closeMenuOnSelect={false}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
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
              paddingLeft: props.icon ? 10 : 0,
              backgroundColor: props.isInvalid ? "red.50" : "white",
              color: props.isInvalid ? "red.500" : "black",
              outline: "none",
              fontSize: sizeInput?.fontSize,
              height: sizeInput?.heightSelect,
              minHeight: sizeInput?.heightSelect,
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
              fontSize: sizeInput?.fontSize,
              padding: 0,
              paddingLeft: "0.255rem",
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
              paddingLeft: "0.688rem",
              fontSize: sizeInput?.fontSize,
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
            DropdownIndicator: (props) => (
              <VStack {...props} marginRight={"0.5rem"}>
                {iconSelected ? (
                  <Icon boxSize={sizeInput?.iconSize}>{iconSelected}</Icon>
                ) : (
                  <AisChevronSort boxSize={sizeInput?.iconSize} />
                )}
              </VStack>
            ),
            NoOptionsMessage: (props) => (
              <Box textAlign={"center"} {...props}>
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
                    boxSize={sizeInput?.iconSize}
                    ml={2}
                  />
                </Box>
              )
            },
          }}
        />
      </Box>
    </FormControlLayout>
  )
}
