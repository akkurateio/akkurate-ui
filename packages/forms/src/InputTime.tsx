import { AisTime } from "@akkurateio/icons"
import {
  Box,
  Button,
  Flex,
  FormControlOptions,
  HTMLChakraProps,
  Input,
  InputGroup,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import { FunctionComponent, useState } from "react"
import { MinuteStep } from "../types"
import FormControlLayout from "./FormControlLayout"

type Omitted = "disabled" | "required" | "readOnly" | "size"

interface InputOptions {
  handleChange: (e: string) => void
  minuteStep?: MinuteStep
  disabledHours?: number[]
  disabledMinutes?: number[]
  focusBorderColor?: string
  errorBorderColor?: string
  htmlSize?: number
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

export const InputTime: FunctionComponent<InputProps> = ({
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
      <InputGroup size={props.size} position={"relative"}>
        <Input
          type={"time"}
          onChange={handleManualTimeChange}
          step={minuteStep ? minuteStep * 60 : 60}
          {...propsForInput()}
          focusBorderColor={props.isInvalid ? "error.700" : "primary.700"}
          _invalid={{
            borderColor: "error.600",
            bg: "error.100",
            color: "error.600",
          }}
          px={props.px ? props.px : 3}
          bg={props.bg ? props.bg : "white"}
        />
        <Flex
          position={"absolute"}
          top={0}
          right={2}
          bottom={0}
          w={10}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <Popover placement={"bottom-end"}>
            <PopoverTrigger>
              <Button
                variant={"unstyled"}
                color={"primary.500"}
                bg={"white"}
                w={"32px"}
                h={"32px"}
                _hover={{ color: "primary.700" }}
                _active={{ color: "primary.700" }}
                zIndex={1}
              >
                <AisTime boxSize={6} />
              </Button>
            </PopoverTrigger>
            <PopoverContent overflow={"hidden"} w={44} h={72}>
              <PopoverBody overflow={"hidden"} bg={"white"}>
                <SimpleGrid
                  columns={2}
                  spacing={4}
                  h={"full"}
                  overflow={"hidden"}
                >
                  <Box pr={2} h={"full"} overflowY={"auto"}>
                    <SimpleGrid spacingY={0.5}>
                      {hourOptions.map((h) => (
                        <Button
                          size={"sm"}
                          fontWeight={"normal"}
                          value={h}
                          bg={h === hourValue ? "primary.500" : "primary.100"}
                          color={h === hourValue ? "white" : "primary.500"}
                          _hover={{
                            bg: "primary.300",
                            color: "white",
                          }}
                          _active={{
                            bg: "primary.600",
                          }}
                          key={h}
                          onClick={handleHourChange}
                          width={"3rem"}
                          height={"2rem"}
                          borderRadius={"2px"}
                          isDisabled={
                            disabledHours && disabledHours.includes(+h)
                          }
                        >
                          {h}
                        </Button>
                      ))}
                    </SimpleGrid>
                  </Box>
                  <Box pr={2} h={"full"} overflowY={"auto"}>
                    <SimpleGrid spacingY={0.5}>
                      {minuteOptions.map((m) => (
                        <Button
                          size={"sm"}
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
                          width={"3rem"}
                          height={"2rem"}
                          borderRadius={"2px"}
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
      </InputGroup>
    </FormControlLayout>
  )
}
