import { AisChevronDown } from "@akkurateio/icons"
import {
  Box,
  Button,
  Flex,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  InputLeftAddon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Tooltip,
  useTheme,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useState } from "react"
// @ts-ignore
import isoCountriesLanguages from "iso-countries-languages"
import PhoneInput from "react-phone-input-2"
import Flag from "react-world-flags"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"
import { countryArrayCode } from "@akkurateio/utils/src/country/countryArray"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  value?: string
  handleChange: (e: string) => void
  defaultCountry?: string
  label?: string
  error?: string
  hint?: string
  countriesArray?: {
    name: string
    icon: JSX.Element
    code: string
    prefix: string
  }[]
  fontSizePhone?: string
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"InputPhone">,
    FormControlOptions {}

export const AcsInputPhone: React.FC<InputProps> = ({
  defaultCountry = "fr",
  fontSizePhone = "14px",
  handleChange,
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

  const frenchCountry = isoCountriesLanguages.getCountries("fr")
  const countryArray = Object.keys(countryArrayCode).filter((key) => {
    // @ts-ignore
    return countryArrayCode[key].continent === "EU"
  })

  const frenchCountryWithCode = countryArray.map((code, idx) => {
    return {
      code: code,
      name: frenchCountry[code],
    }
  })

  const countryLower = country.toLowerCase()

  return (
    <FormControlLayout label={props.label} {...props}>
      <InputGroupWithShadow
        isInvalid={props.isInvalid}
        width={props.width}
        height={props.height}
      >
        <InputLeftAddon
          outline={"none"}
          rounded={"0.25rem"}
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
                  <Flag code={country} width={"24px"} />
                  <AisChevronDown boxSize={"16px"} />
                </HStack>
              </Button>
            </PopoverTrigger>
            <PopoverContent
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
                    {frenchCountryWithCode.map((country, idx) => {
                      return (
                        <Tooltip key={idx} label={country.name}>
                          <Button
                            width={"3rem"}
                            height={"2.125rem"}
                            onClick={() => changeCountry(country.code)}
                            variant={"unstyled"}
                            backgroundColor={
                              country.code.toLowerCase() === countryLower
                                ? "primary.500"
                                : "primary.100"
                            }
                            rounded={"sm"}
                            justifyContent={"center"}
                            display={"flex"}
                          >
                            <Flag
                              width={"24px"}
                              height={"18px"}
                              code={country.code}
                            />
                          </Button>
                        </Tooltip>
                      )
                    })}
                  </SimpleGrid>
                </Box>
              </PopoverBody>
            </PopoverContent>
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
          borderTopRightRadius={"0.25rem"}
          borderBottomRightRadius={"0.25rem"}
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
              borderTopRightRadius: "0.25rem",
              borderBottomRightRadius: "0.25rem",
              backgroundColor: "inherit",
              outline: "none",
              fontSize: fontSizePhone || "14px",
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
