import { AisChevronDown } from "@akkurateio/chakra-icons"
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  InputLeftAddon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  SimpleGrid,
  Text,
  Tooltip,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useState } from "react"
// @ts-ignore
import { countryArrayCode, sizesAll } from "@akkurateio/utils"
import PhoneInput from "react-phone-input-2"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  value?: string
  handleChange: (e: string) => void
  defaultCountry?: string
  label?: string
  error?: string
  hint?: string
  size?: "sm" | "md" | "lg"
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    Omit<ThemingProps<"InputPhone">, Omitted>,
    FormControlOptions {}

export const AcsInputPhone: React.FC<InputProps> = ({
  defaultCountry = "FR",
  handleChange,
  size = "md",
  ...props
}) => {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [country, setCountry] = useState<string>(defaultCountry)
  const [focus, setFocus] = useState(false)

  const changeCountry = (country: string) => {
    setCountry(country)
    setIsOpen(false)
  }

  const countryArray = Object.keys(countryArrayCode).filter((key) => {
    return countryArrayCode[key].continent === "EU"
  })

  const frenchCountryWithCode = countryArray.map((code, idx) => {
    return {
      code: code,
      name: countryArrayCode[code].name,
      flag: countryArrayCode[code].flag,
    }
  })

  const countryLower = country.toLowerCase()

  const sizeState = useBreakpointValue(typeof size === "object" ? size : {})
  const sizeInput = sizesAll(sizeState ? sizeState : (size as string))

  return (
    <FormControlLayout label={props.label} {...props}>
      <InputGroupWithShadow
        isInvalid={props.isInvalid}
        width={props.width}
        height={sizeInput?.height}
        rounded={props.rounded}
      >
        <InputLeftAddon
          outline={"none"}
          rounded={props.rounded ? props.rounded : "0.25rem"}
          backgroundColor={props.isInvalid ? "red.50" : "white"}
          border={"none"}
          height={"full"}
          width={"fit-content"}
          paddingLeft={"0.625rem"}
          paddingTop={"0.375rem"}
          paddingBottom={"0.325rem"}
          paddingRight={"0.438rem"}
          _invalid={{
            borderColor: "error.500",
            bg: "red.50",
            color: "error.500",
          }}
        >
          <Popover>
            <PopoverTrigger>
              <Button
                variant={"unstyled"}
                onChange={() => setIsOpen(true)}
                display={"flex"}
                alignItems={"center"}
                border={"none"}
                cursor={"pointer"}
                as={Box}
              >
                <HStack spacing={"16px"}>
                  <Text>{countryArrayCode[country].flag}</Text>
                  <AisChevronDown boxSize={sizeInput?.iconSize} />
                </HStack>
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent
                rootProps={{ style: { transform: "scale(0)" } }}
                overflow={"hidden"}
                width={"4.5rem"}
                h={"14.125rem"}
              >
                <PopoverBody
                  overflow={"hidden"}
                  overflowY={"auto"}
                  padding={0}
                  paddingLeft={"0.313rem"}
                >
                  <Box h={"full"}>
                    <SimpleGrid
                      columns={1}
                      spacing={"0.125rem"}
                      paddingTop={"0.313rem"}
                      paddingBottom={"0.313rem"}
                    >
                      {frenchCountryWithCode.map((countryMapped, idx) => {
                        return (
                          <Tooltip
                            key={idx}
                            label={countryMapped.name}
                            openDelay={300}
                            size={"xs"}
                            placement={"right"}
                          >
                            <Box>
                              <Button
                                width={"3rem"}
                                height={"2.125rem"}
                                onClick={() =>
                                  changeCountry(countryMapped.code)
                                }
                                variant={"unstyled"}
                                rounded={"sm"}
                                justifyContent={"center"}
                                display={"flex"}
                              >
                                <Text>
                                  {countryArrayCode[countryMapped.code].flag}
                                </Text>
                              </Button>
                              <Divider />
                            </Box>
                          </Tooltip>
                        )
                      })}
                    </SimpleGrid>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </InputLeftAddon>
        <Flex
          borderLeft={
            props.isInvalid
              ? `1px solid ${theme.colors.red[500]}`
              : focus
              ? `1px solid ${theme.colors.primary[500]}`
              : `1px solid ${theme.colors.neutral[300]}`
          }
          width={"full"}
          height={"full"}
          backgroundColor={props.isInvalid ? theme.colors.red[50] : "white"}
          borderTopRightRadius={props.rounded ? props.rounded : "0.25rem"}
          borderBottomRightRadius={props.rounded ? props.rounded : "0.25rem"}
          pl={"0.75rem"}
        >
          <PhoneInput
            specialLabel={""}
            country={countryLower}
            onChange={(phoneNumber) => handleChange("+" + phoneNumber)}
            countryCodeEditable={false}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            value={props.value}
            inputStyle={{
              width: "100%",
              height: "100%",
              borderTopRightRadius: props.rounded ? "100%" : "0.25rem",
              borderBottomRightRadius: props.rounded ? "10rem" : "0.25rem",
              backgroundColor: "inherit",
              outline: "none",
              fontSize: sizeInput?.fontSize,
              fontStyle: "inter",
              fontWeight: "regular",
            }}
            containerStyle={{
              width: "100%",
              height: "100%",
            }}
          />
        </Flex>
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
