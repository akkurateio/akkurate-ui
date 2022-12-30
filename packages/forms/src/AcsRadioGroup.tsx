import { AisRadioButton, AisRadioButtonChecked } from "@akkurateio/icons"
import {
  Button,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import { ResponsiveValue, ThemingProps } from "@chakra-ui/system"
import React, { useEffect, useState } from "react"
import FormControlLayout from "./FormControlLayout"
import { allSizes } from "@akkurateio/utils"

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
  columns?: ResponsiveValue<number>
  size?: "sm" | "md" | "lg"
}

interface InputProps
  extends Omit<HTMLChakraProps<"div">, Omitted>,
    InputOptions,
    Omit<ThemingProps<"Radio">, Omitted>,
    FormControlOptions {}

export const AcsRadioGroup: React.FC<InputProps> = ({
  handleChange,
  valuesArray,
  size = "md",
  columns = 1,
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

  const sizeState = useBreakpointValue(typeof size === "object" ? size : {})

  const sizes = allSizes(sizeState ? sizeState : (size as string))

  return (
    <FormControlLayout {...props}>
      <SimpleGrid columns={columns} spacing={sizes?.spacing}>
        {valuesArray.map((item, idx) => (
          <Button
            w={"full"}
            h={"full"}
            onClick={() => setCurrentValue(item.value)}
            variant={"unstyled"}
            fontWeight={"normal"}
            key={idx}
          >
            <HStack spacing={sizes?.spacing}>
              {currentValue === item.value ? (
                <AisRadioButtonChecked
                  boxSize={sizes?.boxSize}
                  color={props.color ? props.color : "primary.300"}
                />
              ) : (
                <AisRadioButton
                  boxSize={sizes?.boxSize}
                  color={"neutral.300"}
                  _hover={{ color: props.color ? props.color : "neutral.500" }}
                />
              )}
              <Text fontSize={sizes?.fontSize}>{item.label}</Text>
            </HStack>
          </Button>
        ))}
      </SimpleGrid>
    </FormControlLayout>
  )
}
