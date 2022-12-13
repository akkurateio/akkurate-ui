import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
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
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"InputPhone">,
    FormControlOptions {}

export const AcsInputPhone: React.FC<InputProps> = ({
  defaultCountry = "fr",
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
      <InputGroup
        size={props.size}
        width={"fit-content"}
        rounded={"4px"}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        borderWidth={"1px"}
        borderColor={focus ? "primary.500" : "neutral.400"}
        boxShadow={
          focus ? `0 0 0 3px ${theme.colors.primary[500]}25 ` : undefined
        }
      >
        <InputLeftAddon
          outline={"none"}
          rounded={"4px"}
          backgroundColor={"white"}
          border={"none"}
          width={"83px"}
          paddingLeft={"10px"}
          paddingTop={"6px"}
          paddingBottom={"6px"}
          paddingRight={"7px"}
        >
          <Popover>
            <PopoverTrigger>
              <Button
                variant={"unstyled"}
                onChange={() => setIsOpen(true)}
                display={"flex"}
                alignItems={"center"}
                border={"none"}
              >
                <HStack spacing={"16px"}>
                  <Flag code={country} width={"32px"} />
                  <AisChevronDown />
                </HStack>
              </Button>
            </PopoverTrigger>
            <PopoverContent overflow={"hidden"} width={"85px"} h={"226px"}>
              <PopoverBody
                overflow={"hidden"}
                overflowY={"auto"}
                padding={0}
                paddingLeft={"5px"}
              >
                <Box h={"full"}>
                  <SimpleGrid columns={1} spacing={"2px"} paddingTop={"5px"}>
                    {frenchCountryWithCode.map((country, idx) => {
                      return (
                        <Tooltip key={idx} label={country.name}>
                          <Button
                            width={"62px"}
                            height={"34px"}
                            onClick={() => changeCountry(country.code)}
                            variant={"unstyled"}
                            backgroundColor={
                              country.code.toLowerCase() === countryLower
                                ? "primary.500"
                                : "primary.100"
                            }
                            rounded={"2px"}
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
        <PhoneInput
          specialLabel={""}
          country={countryLower}
          onChange={(phoneNumber) => handleChange("+" + phoneNumber)}
          countryCodeEditable={false}
          value={props.value}
          inputStyle={{
            width: "100%",
            height: "100%",
            paddingLeft: "12px",
            paddingTop: "10.5px",
            paddingBottom: "10.5px",
            borderLeft: props.isInvalid
              ? `1px solid ${theme.colors.red[600]}`
              : focus
              ? `1px solid ${theme.colors.primary[500]}`
              : `1px solid ${theme.colors.neutral[400]}`,
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
            outline: "none",
            fontSize: "14px",
            fontStyle: "inter",
            fontWeight: "regular",
          }}
        />
      </InputGroup>
    </FormControlLayout>
  )
}
