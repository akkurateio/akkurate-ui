import { AisTime } from "@akkurateio/chakra-icons"
import {
  Box,
  Button,
  Flex,
  FormControlOptions,
  HTMLChakraProps,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  SimpleGrid,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import dayjs, { Dayjs } from "dayjs"
import React, { useEffect, useState } from "react"
import { DateObject, MinuteStep } from "../../types"
import FormControlLayout from "../FormControlLayout"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  value: string
  handleChange: (e: string) => void
  focusBorderColor?: string
  errorBorderColor?: string
  htmlSize?: number
  label?: string
  error?: string
  hint?: string
  // ---
  minDate?: string | Dayjs
  maxDate?: string | Dayjs
  disabledDays?: number[] // 0 - 6 : 0 - Sunday, 1 - Monday, ...
  disabledDates?: string[] // format : YYYY-MM-DD
  minuteStep?: MinuteStep
  disabledHours?: number[]
  disabledMinutes?: number[]
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

export const AcsInputDateTime: React.FC<InputProps> = ({
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
      minDate,
      maxDate,
      disabledDays,
      disabledDates,
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

  const [date, setDate] = useState<DateObject>({
    currentDate: dayjs(new Date()),
    selectedDate: props.value ? dayjs(props.value) : null,
    value: props.value,
    minDate: props.minDate,
    maxDate: props.maxDate,
    disabledDays: props.disabledDays,
    disabledDates: props.disabledDates,
  })

  useEffect(() => {
    if (date.selectedDate) {
      handleChange(date.selectedDate.format("YYYY-MM-DD"))
      setDate({ ...date, value: date.selectedDate.format("YYYY-MM-DD") })
    } else {
      handleChange("")
      setDate({ ...date, value: "" })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date.selectedDate])

  const handleManualChange = (e: string) => {
    setDate({
      ...date,
      value: e,
    })
    handleChange(e)
  }

  return (
    <FormControlLayout {...props}>
      <InputGroup size={props.size} position={"relative"} width={props.width}>
        <Input
          type={"date"}
          {...propsForInput()}
          value={props.value}
          variant={props.variant}
          focusBorderColor={props.isInvalid ? "error.700" : "primary.700"}
          _invalid={{
            borderColor: "error.600",
            bg: "error.100",
            color: "error.600",
          }}
          px={props.px ? props.px : 3}
          bg={props.bg ? props.bg : "white"}
          onChange={(e) => handleManualChange(e.target.value)}
          appearance={"none"}
        />

        {/*<PopBtn date={date} setDate={setDate} />*/}
        <InputRightElement width={"35%"}>
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
            borderLeftRadius={0}
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
              <Portal>
                <PopoverContent
                  rootProps={{ style: { transform: "scale(0)" } }}
                  overflow={"hidden"}
                  w={44}
                  h={72}
                >
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
                              bg={
                                h === hourValue ? "primary.500" : "primary.100"
                              }
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
                              bg={
                                m === minuteValue
                                  ? "primary.500"
                                  : "primary.100"
                              }
                              color={
                                m === minuteValue ? "white" : "primary.500"
                              }
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
              </Portal>
            </Popover>
          </Flex>
        </InputRightElement>
      </InputGroup>
    </FormControlLayout>
  )
}
