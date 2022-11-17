import React, { useState } from "react"
import {
  Box,
  HTMLChakraProps,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  UseSliderProps,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import FormControlLayout from "./FormControlLayout"

interface AcsSliderProps {
  indicatorSteps?: number
}

interface SliderProps
  extends Omit<HTMLChakraProps<"div">, keyof UseSliderProps>,
    ThemingProps<"Slider">,
    UseSliderProps,
    AcsSliderProps {}

export const AcsSlider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  ...props
}) => {
  const box = () => {
    if (max >= 1000) {
      return "50px"
    }
    if (max < 1000) {
      return "40px"
    }
    if (max > 10000) {
      return "90px"
    }
  }
  const { indicatorSteps, ...sliderProps } = { ...props, max, min }

  return (
    <FormControlLayout>
      <Slider {...sliderProps}>
        {props.indicatorSteps &&
          max &&
          [...Array(props.indicatorSteps - 1)].map((i, idx) => (
            <SliderMark
              key={idx}
              value={
                max! / props.indicatorSteps! +
                (max! / props.indicatorSteps!) * idx
              }
            >
              <Box color={"black"} textAlign={"center"}>
                {max! / props.indicatorSteps! +
                  (max! / props.indicatorSteps!) * idx}
              </Box>
            </SliderMark>
          ))}
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb
          width={3}
          h={20}
          borderRadius={2}
          backgroundColor={"blue.500"}
          // boxSize={box()}
        >
          <Box>{props.value}</Box>
        </SliderThumb>
      </Slider>
    </FormControlLayout>
  )
}
