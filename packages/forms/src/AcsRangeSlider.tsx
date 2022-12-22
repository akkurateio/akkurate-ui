import {
  Box,
  HTMLChakraProps,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  Toast,
  UseRangeSliderProps,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React from "react"

interface AcsSliderProps {
  indicatorSteps?: number
  title?: string
  allStep: boolean
}

interface SliderRangeProps
  extends Omit<HTMLChakraProps<"div">, keyof UseRangeSliderProps>,
    ThemingProps<"Slider">,
    UseRangeSliderProps,
    AcsSliderProps {}

export const AcsRangeSlider: React.FC<SliderRangeProps> = ({
  allStep,
  min = 0,
  max = 100,
  ...props
}) => {
  const { indicatorSteps, ...rangeProps } = { ...props, max, min }

  return (
    <Box width={"full"} marginBottom={"30px"}>
      {max <= 1000 ? (
        <>
          <Text marginBottom={2} fontSize={props.fontSize || "md"}>
            {props.title}
          </Text>
          <RangeSlider {...rangeProps}>
            {props.indicatorSteps &&
              max &&
              [...Array(props.indicatorSteps - 1)].map((i, idx) =>
                allStep ? (
                  <>
                    <RangeSliderMark
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
                    </RangeSliderMark>
                    <RangeSliderMark
                      key={idx}
                      value={max}
                      fontSize={props.fontSize || "sm"}
                      fontWeight={"normal"}
                      marginTop={"2rem"}
                    >
                      {max}
                    </RangeSliderMark>
                    <RangeSliderMark
                      marginTop={"2rem"}
                      fontSize={props.fontSize || "sm"}
                      value={min}
                    >
                      {min}
                    </RangeSliderMark>
                  </>
                ) : (
                  <>
                    <RangeSliderMark
                      fontSize={props.fontSize || "sm"}
                      key={idx}
                      value={max}
                      marginTop={"2rem"}
                    >
                      {max}
                    </RangeSliderMark>
                    <RangeSliderMark
                      fontSize={props.fontSize || "sm"}
                      value={min}
                      marginTop={"2rem"}
                    >
                      {min}
                    </RangeSliderMark>
                  </>
                ),
              )}
            <RangeSliderTrack>
              <RangeSliderFilledTrack backgroundColor={"primary.500"} />
            </RangeSliderTrack>
            <RangeSliderThumb
              backgroundColor={"primary.500"}
              boxSize={"36px"}
              fontWeight={"bold"}
              color={"white"}
              fontSize={props.fontSize || "sm"}
              index={0}
            >
              {props.value && props.value[0]}
            </RangeSliderThumb>
            <RangeSliderThumb
              backgroundColor={"primary.500"}
              boxSize={"36px"}
              fontWeight={"bold"}
              color={"white"}
              fontSize={props.fontSize || "sm"}
              index={1}
            >
              {props.value && props.value[1]}
            </RangeSliderThumb>
          </RangeSlider>
        </>
      ) : (
        <>
          <Toast title={"La valeur maximale est de 1000"} />
        </>
      )}
    </Box>
  )
}
