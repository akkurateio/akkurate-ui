import React, { useState } from "react"
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
import FormControlLayout from "./FormControlLayout"
import { theme } from "@akkurateio/utils"

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
        <Box>
          <Text fontSize={"16px"}>{props.title}</Text>
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
                      marginTop={"32px"}
                    >
                      <Box
                        fontSize={"14px"}
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
                      fontSize={"14px"}
                      fontWeight={"normal"}
                      marginTop={"32px"}
                    >
                      {max}
                    </SliderMark>
                    <SliderMark
                      marginTop={"32px"}
                      fontSize={"14px"}
                      value={min}
                    >
                      {min}
                    </SliderMark>
                  </>
                ) : (
                  <>
                    <SliderMark
                      fontSize={"14px"}
                      key={idx}
                      value={max}
                      marginTop={"32px"}
                    >
                      {max}
                    </SliderMark>
                    <SliderMark
                      fontSize={"14px"}
                      value={min}
                      marginTop={"32px"}
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
              fontSize={"14px"}
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
