import {
  Box,
  HTMLChakraProps,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  Toast,
  UseSliderProps,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React from "react"
import FormControlLayout from "./FormControlLayout"

interface AcsSliderProps {
  indicatorSteps?: number
  title?: string
  allStep: boolean
}

interface SliderProps
  extends Omit<HTMLChakraProps<"div">, keyof UseSliderProps>,
    ThemingProps<"Slider">,
    UseSliderProps,
    AcsSliderProps {}

export const AcsSlider: React.FC<SliderProps> = ({
  allStep,
  min = 0,
  max = 100,
  ...props
}) => {
  const { indicatorSteps, ...sliderProps } = { ...props, max, min }

  return (
    <FormControlLayout {...props}>
      {max <= 1000 ? (
        <Box marginBottom={"30px"}>
          <Text fontSize={props.fontSize || "md"}>{props.title}</Text>
          <Slider {...sliderProps} marginTop={"16px"}>
            {props.indicatorSteps &&
              max &&
              [...Array(props.indicatorSteps - 1)].map((i, idx) =>
                allStep ? (
                  <>
                    <SliderMark
                      key={idx}
                      value={
                        max! / props.indicatorSteps! +
                        (max! / props.indicatorSteps!) * idx
                      }
                      marginTop={"2rem"}
                    >
                      <Box
                        fontSize={props.fontSize || "sm"}
                        color={"black"}
                        textAlign={"center"}
                      >
                        {max! / props.indicatorSteps! +
                          (max! / props.indicatorSteps!) * idx}
                      </Box>
                    </SliderMark>
                    <SliderMark
                      key={idx}
                      value={max}
                      fontSize={props.fontSize || "sm"}
                      fontWeight={"normal"}
                      marginTop={"2rem"}
                    >
                      {max}
                    </SliderMark>
                    <SliderMark
                      marginTop={"32px"}
                      fontSize={props.fontSize || "sm"}
                      value={min}
                    >
                      {min}
                    </SliderMark>
                  </>
                ) : (
                  <>
                    <SliderMark
                      fontSize={props.fontSize || "sm"}
                      key={idx}
                      value={max}
                      marginTop={"2rem"}
                    >
                      {max}
                    </SliderMark>
                    <SliderMark
                      fontSize={props.fontSize || "sm"}
                      value={min}
                      marginTop={"2rem"}
                    >
                      {min}
                    </SliderMark>
                  </>
                ),
              )}
            <SliderTrack>
              <SliderFilledTrack backgroundColor={"primary.500"} />
            </SliderTrack>
            <SliderThumb
              backgroundColor={"primary.500"}
              boxSize={"36px"}
              fontWeight={"bold"}
              color={"white"}
              fontSize={props.fontSize || "sm"}
            >
              {props.value}
            </SliderThumb>
          </Slider>
        </Box>
      ) : (
        <>
          <Toast title={"La valeur maximale est de 1000"}></Toast>
        </>
      )}
    </FormControlLayout>
  )
}
