import { AisTime } from "@akkurateio/icons"
import {
  Box,
  Button,
  Flex,
  FormControlOptions,
  HTMLChakraProps,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useState } from "react"
import { MinuteStep } from "../types"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange: (e: string) => void
  value?: string
  minuteStep?: MinuteStep
  disabledHours?: number[]
  disabledMinutes?: number[]
  label?: string
  error?: string
  hint?: string
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"Input">,
    FormControlOptions {}

const hourArray = Array.from({ length: 24 }, (v, k) => {
  return k.toString().padStart(2, "0")
})
const minuteArray = Array.from({ length: 60 }, (v, k) => {
  return k.toString().padStart(2, "0")
})

export const AcsInputTime: React.FC<InputProps> = ({
  handleChange,
  disabledHours,
  disabledMinutes,
  minuteStep = 1,
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

  const [hourValue, setHourValue] = useState("00")
  const [minuteValue, setMinuteValue] = useState("00")
  const [focus, setFocus] = useState(false)

  const handleHourChange = (e: any) => {
    setHourValue(e.target.value)
    handleChange(`${e.target.value}:${minuteValue}`)
  }
  const handleMinuteChange = (e: any) => {
    setMinuteValue(e.target.value)
    handleChange(`${hourValue}:${e.target.value}`)
  }

  const hourOptions = hourArray.filter((hour, index) => {
    return index % 1 === 0
  })

  const minuteOptions = minuteArray.filter((minute, index) => {
    return index % minuteStep === 0
  })

  const handleManualTimeChange = (e: any) => {
    handleChange(e.target.value)

    if (e.target.value.includes(":")) {
      const [hour, minute] = e.target.value.split(":")
      setHourValue(hour)
      setMinuteValue(minute)
    }
  }

  return (
    <FormControlLayout {...props}>
      <InputGroupWithShadow
        isInvalid={props.isInvalid}
        width={props.width}
        height={props.height}
        rounded={props.rounded}
      >
        <Input
          type={"time"}
          onChange={handleManualTimeChange}
          step={minuteStep ? minuteStep * 60 : 60}
          {...propsForInput()}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          color={props.isInvalid ? "red.500" : undefined}
          border={"none"}
          _focusVisible={{
            border: "none",
            boxShadow: `none`,
          }}
          height={"full"}
          pl={"0.688rem"}
          pt={"0.656rem"}
          pb={"0.656rem"}
          rounded={props.rounded ? props.rounded : "base"}
          width={"full"}
          fontSize={props.fontSize ? props.fontSize : "sm"}
        />
        <Flex
          top={0}
          right={2}
          bottom={0}
          w={10}
          position={"absolute"}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <Popover placement={"bottom-end"}>
            <PopoverTrigger>
              <Button
                variant={"unstyled"}
                backgroundColor={props.isInvalid ? "red.50" : "white"}
                color={
                  props.isInvalid
                    ? "red.500"
                    : focus
                    ? "primary.500"
                    : "neutral.500"
                }
                bg={"white"}
                w={"32px"}
                h={"32px"}
                _hover={{ color: "primary.700" }}
                _active={{ color: "primary.500" }}
                zIndex={1}
              >
                <AisTime boxSize={"24px"} />
              </Button>
            </PopoverTrigger>
            <PopoverContent overflow={"hidden"} w={"9.813rem"} h={"15.625rem"}>
              <PopoverBody p={1.5} overflow={"hidden"} bg={"white"}>
                <SimpleGrid
                  columns={2}
                  spacing={"0.313rem"}
                  h={"full"}
                  overflow={"hidden"}
                >
                  <Box h={"full"} overflowY={"auto"}>
                    <SimpleGrid>
                      {hourOptions.map((h) => (
                        <Button
                          mb={0.5}
                          fontWeight={"normal"}
                          fontSize={"sm"}
                          value={h}
                          bg={h === hourValue ? "primary.500" : "primary.100"}
                          color={h === hourValue ? "white" : "primary.500"}
                          _hover={{
                            bg: "primary.300",
                            color: "white",
                          }}
                          p={0}
                          _active={{
                            bg: "primary.600",
                          }}
                          key={h}
                          onClick={handleHourChange}
                          width={"3.75rem"}
                          height={"2.375rem"}
                          borderRadius={"sm"}
                          isDisabled={
                            disabledHours && disabledHours.includes(+h)
                          }
                        >
                          {h}
                        </Button>
                      ))}
                    </SimpleGrid>
                  </Box>
                  <Box h={"full"} overflowY={"auto"}>
                    <SimpleGrid>
                      {minuteOptions.map((m) => (
                        <Button
                          p={0}
                          mb={0.5}
                          fontSize={"sm"}
                          fontWeight={"normal"}
                          value={m}
                          bg={m === minuteValue ? "primary.500" : "primary.100"}
                          color={m === minuteValue ? "white" : "primary.500"}
                          _hover={{
                            bg: "primary.300",
                            color: "white",
                          }}
                          _active={{
                            bg: "primary.600",
                          }}
                          key={m}
                          width={"3.75rem"}
                          height={"2.375rem"}
                          borderRadius={"sm"}
                          onClick={handleMinuteChange}
                          isDisabled={
                            disabledMinutes && disabledMinutes.includes(+m)
                          }
                        >
                          {m}
                        </Button>
                      ))}
                    </SimpleGrid>
                  </Box>
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
