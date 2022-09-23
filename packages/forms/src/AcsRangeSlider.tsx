import React from "react"
import {
  Box,
  HTMLChakraProps,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  UseRangeSliderProps,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"

interface AcsSliderProps {
  indicatorSteps?: number
}

interface SliderRangeProps
  extends Omit<HTMLChakraProps<"div">, keyof UseRangeSliderProps>,
    ThemingProps<"Slider">,
    UseRangeSliderProps,
    AcsSliderProps {}

export const AcsRangeSlider: React.FC<SliderRangeProps> = ({
  min = 0,
  max = 100,
  ...props
}) => {
  // const size depending on the max number
  const box = () => {
    if (max) {
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
  }

  const { indicatorSteps, ...rangeProps } = { ...props, max, min }

  return (
    <RangeSlider {...rangeProps}>
      {props.indicatorSteps &&
        max &&
        [...Array(props.indicatorSteps - 1)].map((i, idx) => (
          <RangeSliderMark
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
          </RangeSliderMark>
        ))}
      <RangeSliderTrack>
        <RangeSliderFilledTrack bg={"red.200"} />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} boxSize={box()}>
        <Box color={"black"}>{props.value && props.value[0]}</Box>
      </RangeSliderThumb>
      <RangeSliderThumb index={1} boxSize={box()}>
        <Box color={"black"}>{props.value && props.value[1]}</Box>
      </RangeSliderThumb>
    </RangeSlider>
  )
}
