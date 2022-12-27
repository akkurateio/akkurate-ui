import { AisRadioButton, AisRadioButtonChecked } from "@akkurateio/icons"
import {
  Button,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  Stack,
  Text,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useEffect, useState } from "react"
import FormControlLayout from "./FormControlLayout"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange: (e: string | number | undefined) => void
  label?: string
  error?: string
  hint?: string
  value: string | number | undefined
  valuesArray: {
    value: string | number | undefined
    label: string
  }[]
  direction?: "horizontal" | "vertical"
}

interface InputProps
  extends Omit<HTMLChakraProps<"div">, Omitted>,
    InputOptions,
    ThemingProps<"Radio">,
    FormControlOptions {}

export const AcsRadioGroup: React.FC<InputProps> = ({
  handleChange,
  valuesArray,
  direction,
  value,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState<number | string | undefined>(
    value ? value : undefined,
  )

  useEffect(() => {
    if (currentValue) {
      handleChange(currentValue)
    }
  }, [currentValue])

  let boxSize = "24px"
  if (props.size === "sm") {
    boxSize = "16px"
  } else if (props.size === "md") {
    boxSize = "22px"
  } else if (props.size === "lg") {
    boxSize = "24px"
  }

  let fontSize = "14px"
  if (props.size === "sm") {
    fontSize = "12px"
  } else if (props.size === "md") {
    fontSize = "14px"
  } else if (props.size === "lg") {
    fontSize = "16px"
  }

  let spacing = "8px"
  if (props.size === "sm") {
    spacing = "6px"
  } else if (props.size === "md") {
    spacing = "8px"
  } else if (props.size === "lg") {
    spacing = "10px"
  }

  let padding = "8px"
  if (direction === "vertical") {
    padding = "0px"
  }

  let paddingLeft = "8px"
  if (props.size === "sm") {
    paddingLeft = "4px"
  } else if (props.size === "md") {
    paddingLeft = "8px"
  } else if (props.size === "lg") {
    paddingLeft = "15px"
  }

  return (
    <FormControlLayout {...props}>
      <Stack
        direction={direction === "vertical" ? "column" : "row"}
        flexWrap={props.flexWrap}
      >
        {valuesArray.map((item, idx) => (
          <Button
            onClick={() => setCurrentValue(item.value)}
            variant={"unstyled"}
            fontWeight={"normal"}
            key={idx}
            paddingLeft={paddingLeft}
          >
            <HStack
              spacing={spacing}
              // paddingLeft={padding ? props.paddingLeft : 3}
            >
              {currentValue === item.value ? (
                <AisRadioButtonChecked
                  boxSize={boxSize}
                  color={props.color ? props.color : "primary.500"}
                />
              ) : (
                <AisRadioButton
                  boxSize={boxSize}
                  color={"neutral.400"}
                  _hover={{ color: props.color ? props.color : "neutral.500" }}
                />
              )}
              <Text fontSize={fontSize}>{item.label}</Text>
            </HStack>
          </Button>
        ))}
      </Stack>
    </FormControlLayout>
  )
}
