import React, { useState, FunctionComponent } from "react"
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormControlOptions,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HTMLChakraProps,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import { AisChevronDown } from "@akkurateio/icons"
import { ThemingProps } from "@chakra-ui/system"
import FormControlLayout from "./FormControlLayout";

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  value?: string
  handleChange: (e: string) => void
  focusBorderColor?: string
  errorBorderColor?: string
  htmlSize?: number
  label?: string
  error?: string
  hint?: string
  countriesArray: {
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

export const AcsInputPhone: FunctionComponent<InputProps> = ({
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

  const [phoneValue, setPhoneValue] = useState("")
  const [valid, setValid] = useState("")
  const [country, setCountry] = useState<{
    name: string
    icon: JSX.Element
    code: string
    prefix: string
  }>(props.countriesArray[0])

  const handleCountryChange = (
    currentCountry: {
      name: string
      icon: JSX.Element
      code: string
      prefix: string
    },
    onClose: any,
  ) => {
    setCountry(currentCountry)
    onClose()
  }

  const setPhoneNumber = (phoneNumb: any) => {
    setPhoneValue(phoneNumb)
    if (isNaN(phoneNumb)) {
      throw new Error("Not a number")
    } else {
      setValid("success")
      const slicedPhoneValue =
        phoneNumb.slice(0, 3) +
        " " +
        phoneNumb.slice(3, 4) +
        " " +
        phoneNumb.slice(4, 6) +
        " " +
        phoneNumb.slice(6, 8) +
        " " +
        phoneNumb.slice(8, 10) +
        " " +
        phoneNumb.slice(10, 12)
      return slicedPhoneValue
    }
  }

  return (
      <FormControlLayout {...props}>
      <FormLabel>Telephone</FormLabel>
      <InputGroup>
        <InputLeftElement
          width={"90px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Popover>
            {({ isOpen, onClose }) => (
              <>
                <PopoverTrigger>
                  <Flex alignItems={"center"}>
                    <Button
                      variant={"unstyled"}
                      color={"red.500"}
                      _hover={{ color: "red.700" }}
                      _active={{ color: "red.700" }}
                      marginLeft={2}
                      marginRight={-3}
                    >
                      {country.icon}
                    </Button>
                    <AisChevronDown />
                  </Flex>
                </PopoverTrigger>
                <PopoverContent overflow={"hidden"} w={20} h={72}>
                  <PopoverBody overflow={"hidden"}>
                    <SimpleGrid columns={1} h={"full"} overflow={"hidden"}>
                      <Box h={"full"} overflowY={"auto"}>
                        <SimpleGrid spacingY={0.5}>
                          {props.countriesArray.map((country, index) => (
                            <Button
                              key={index}
                              onClick={() =>
                                handleCountryChange(country, onClose)
                              }
                              size={"sm"}
                            >
                              {country.icon}
                            </Button>
                          ))}
                        </SimpleGrid>
                      </Box>
                    </SimpleGrid>
                  </PopoverBody>
                </PopoverContent>
              </>
            )}
          </Popover>
          <Text minWidth={"40px"} maxWidth={"40px"} paddingLeft={"10px"}>
            {country.prefix}
          </Text>
        </InputLeftElement>
        <Input
          {...propsForInput()}
          variant={props.variant}
          placeholder={"Numéro de téléphone"}
          width={"auto"}
          paddingLeft={"95px"}
          maxLength={9}
          onChange={(phoneNumb) =>
            setPhoneNumber(country.prefix + phoneNumb.target.value)
          }
        />
      </InputGroup>
      <FormHelperText>Need help ? </FormHelperText>
      <FormErrorMessage>rentrer du texte</FormErrorMessage>
      </FormControlLayout>
  )
}

