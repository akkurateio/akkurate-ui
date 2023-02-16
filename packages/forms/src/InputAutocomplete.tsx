import {
  Box,
  Divider,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useEffect, useState } from "react"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"
// @ts-ignore
import { sizesAll } from "@akkurateio/utils"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange: (e: string) => void
  value?: string
  resultsArray: string[]
  label?: string
  error?: string
  hint?: string
  size?: "sm" | "md" | "lg"
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    Omit<ThemingProps<"Input">, Omitted>,
    FormControlOptions {}

export const AcsInputAutocomplete: React.FC<InputProps> = ({
  label,
  hint,
  error,
  isRequired,
  size = "md",
  isDisabled,
  isInvalid,
  isReadOnly,
  resultsArray,
  handleChange,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true)
  const [isOpened, setIsOpened] = useState(false)
  const [text, setText] = useState("")

  const sizeState = useBreakpointValue(typeof size === "object" ? size : {})

  const sizeInput = sizesAll(sizeState ? sizeState : (size as string))

  useEffect(() => {
    if (props.value && String(props.value).length >= 3) {
      setIsOpened(true)
    }
  }, [props.value])

  useEffect(() => {
    if (text) {
      handleChange(text)
    }
  }, [text])

  return (
    <FormControlLayout
      label={label}
      hint={hint}
      error={error}
      isRequired={isRequired}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
    >
      <InputGroupWithShadow
        isInvalid={isInvalid}
        height={sizeInput?.height}
        width={props.width}
        rounded={props.rounded}
      >
        <Input
          type={"text"}
          {...props}
          border={"none"}
          _focusVisible={{
            border: "none",
            boxShadow: `none`,
          }}
          height={"full"}
          rounded={props.rounded ? props.rounded : "base"}
          width={"full"}
          pl={"0.688rem"}
          pt={"0.656rem"}
          pb={"0.656rem"}
          fontSize={sizeInput?.fontSize}
          onChange={(e) => {
            if (e.target.value.length >= 3) {
              setIsVisible(true)
            }
            if (text !== e.target.value) {
              setText(e.target.value)
            }
            handleChange(e.target.value)
          }}
        />
      </InputGroupWithShadow>

      {isVisible &&
        resultsArray.length > 0 &&
        props.value &&
        String(props.value).length >= 3 && (
          <VStack
            bg={"white"}
            spacing={1}
            alignItems={"flex-start"}
            borderTop={0}
            borderBottomLeftRadius={4}
            borderBottomRightRadius={4}
          >
            <Popover
              isOpen={isOpened}
              onClose={() => setIsOpened(false)}
              placement={"bottom-start"}
              autoFocus={false}
              closeOnBlur={true}
            >
              <PopoverContent
                h={"full"}
                mt={10}
                backgroundColor={"yellow.100"}
                w={"full"}
              >
                {
                  // show the first 10 results of the search
                  resultsArray
                    .filter((result) =>
                      result
                        .toLowerCase()
                        .includes(String(props.value).toLowerCase()),
                    )
                    .slice(0, 10)
                    .map((result, idx) => (
                      <Box
                        backgroundColor={"blue.200"}
                        w={"full"}
                        h={"full"}
                        key={idx}
                        onClick={() => {
                          setText(result)
                          setIsOpened(false)
                        }}
                        cursor={"pointer"}
                      >
                        {result}
                      </Box>
                    ))
                }
              </PopoverContent>
            </Popover>
          </VStack>
        )}
    </FormControlLayout>
  )
}
