import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  Flex,
  FormControlOptions,
  FormLabel,
  HStack,
  HTMLChakraProps,
  InputGroup,
  InputLeftAddon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Tooltip,
} from "@chakra-ui/react"
// @ts-ignore
import { theme } from "@akkurateio/utils"
// @ts-ignore
import isoCountriesLanguages from "iso-countries-languages"
import { countries, Country } from "countries-list"
import PhoneInput from "react-phone-input-2"
import Flag from "react-world-flags"
import { AisChevronDown } from "@akkurateio/icons"
import { ThemingProps } from "@chakra-ui/system"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  value?: string
  handleChange: (e: string) => void
  focusBorderColor?: string
  defaultCountry?: string
  errorBorderColor?: string
  htmlSize?: number
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
  const [isOpen, setIsOpen] = useState(false)
  const [country, setCountry] = useState<string>(defaultCountry)
  const [focus, setFocus] = useState(false)

  const changeCountry = (country: string) => {
    setCountry(country)
    setIsOpen(false)
  }

  const frenchCountry = isoCountriesLanguages.getCountries("fr")
  const countryArray = Object.keys(countries).filter((key) => {
    // @ts-ignore
    return countries[key].continent === "EU"
  })

  const frenchCountryWithCode = countryArray.map((code, idx) => {
    return {
      code: code,
      name: frenchCountry[code],
    }
  })

  const countryLower = country.toLowerCase()

  return (
    <FormControlLayout {...props}>
      <InputGroupWithShadow
        isInvalid={props.isInvalid}
        width={props.width}
        height={props.height}
        size={props.size}
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
                  <Flag code={country} width={"32px"} />
                  <AisChevronDown boxSize={"16px"} />
                </HStack>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              overflow={"hidden"}
              width={"5.313rem"}
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
                  >
                    {frenchCountryWithCode.map((country, idx) => {
                      return (
                        <Tooltip key={idx} label={country.name}>
                          <Button
                            width={"3.875rem"}
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
                              width={"32px"}
                              height={"24px"}
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
        <Box width={"full"} height={"full"}>
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
              paddingLeft: "0.75rem",
              paddingTop: "0.625rem",
              paddingBottom: "0.625rem",
              borderLeft: props.isInvalid
                ? `1px solid ${theme.colors.red[500]}`
                : focus
                ? `1px solid ${theme.colors.primary[500]}`
                : `1px solid ${theme.colors.neutral[300]}`,
              borderTopRightRadius: "0.25rem",
              backgroundColor: props.isInvalid ? theme.colors.red[50] : "white",
              borderBottomRightRadius: "0.25rem",
              outline: "none",
              fontSize: fontSizePhone || "14px",
              fontStyle: "inter",
              fontWeight: "regular",
            }}
          />
        </Box>
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
