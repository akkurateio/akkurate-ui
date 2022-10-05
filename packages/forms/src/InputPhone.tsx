import React, { useState } from "react"
import {
  Box,
  Button,
  FormControlOptions,
  FormLabel,
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
  const propsForInput = () => {
    const {
      label,
      hint,
      error,
      isRequired,
      isDisabled,
      isInvalid,
      isReadOnly,
      size,
      ...rest
    } = props
    return rest
  }

  const [isOpen, setIsOpen] = useState(false)
  const [country, setCountry] = useState<string>(defaultCountry)
  const [phone, setPhone] = useState<string>("")

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

  return (
    <FormControlLayout
      // paddingRight={5}
      // paddingLeft={40}
      // isDisabled={false}
      // isInvalid={false}
      // isRequired={true}
      // variant="filled"
      {...props}
    >
      <FormLabel>{props.label}</FormLabel>
      <InputGroup size={props.size}>
        <InputLeftAddon>
          <Popover>
            <PopoverTrigger>
              <Button
                variant={"unstyled"}
                onChange={() => setIsOpen(true)}
                display={"flex"}
                alignItems={"center"}
              >
                <Flag code={country} width={"32px"} />
                <AisChevronDown marginLeft={2} />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              overflow={"hidden"}
              width={"90px"}
              h={72}
              backgroundColor={"blue.50"}
            >
              <PopoverBody overflow={"hidden"}>
                <Box pr={3} h={"full"} overflowY={"auto"}>
                  <SimpleGrid columns={1}>
                    {frenchCountryWithCode.map((country, idx) => {
                      return (
                        <Tooltip key={idx} label={country.name}>
                          <Button
                            width={15}
                            onClick={() => changeCountry(country.code)}
                            variant={"unstyled"}
                          >
                            <Flag code={country.code} />
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
          country={country.toLowerCase()}
          onChange={(phone) => setPhone("+" + phone)}
          countryCodeEditable={false}
          value={phone}
          inputStyle={{
            width: "100%",
            height: "100%",
            paddingLeft: "10px",
            border: "1px solid #E2E8F0",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            backgroundColor: "#F7FAFC",
          }}
        />
      </InputGroup>
    </FormControlLayout>
  )
}
