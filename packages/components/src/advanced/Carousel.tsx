import { AisChevronLeft, AisChevronRight } from "@akkurateio/icons"
import { Box, Button, Flex, HStack } from "@chakra-ui/react"
import React, { useState } from "react"

interface IProps {
  cardsArray: JSX.Element[]
  withIndicator?: boolean
}

export const AcsCarousel: React.FC<IProps> = ({
  cardsArray,
  withIndicator = true,
}) => {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    if (index < cardsArray.length - 1) {
      setIndex(index + 1)
    } else if (index === cardsArray.length - 1) {
      setIndex(0)
    } else {
      setIndex(0)
    }
  }

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(cardsArray.length - 1)
    }
  }

  const defineBoxSize = (idx: number) => {
    if (idx === index) {
      return "8px"
    }

    return "6px"
  }

  return (
    <Box width={"full"}>
      <Flex width={"full"} alignItems={"center"}>
        <Button onClick={handlePrevious} variant={"ghost"} size={"none"}>
          <AisChevronLeft boxSize={"32px"} />
        </Button>

        <Box width={"100%"} overflow={"hidden"} px={4}>
          <Flex
            width={`${100 * cardsArray.length}%`}
            justifyContent={"flex-start"}
            alignItems={"center"}
            transform={`translateX(-${index * (100 / cardsArray.length)}%)`}
            transition={"all 0.3s ease-in-out"}
          >
            {cardsArray.map((card, index) => (
              <Flex
                key={index}
                width={`100%`}
                justifyContent={"center"}
                alignItems={"center"}
                py={2}
              >
                {card}
              </Flex>
            ))}
          </Flex>
        </Box>

        <Button onClick={handleNext} variant={"ghost"} size={"none"}>
          <AisChevronRight boxSize={"32px"} />
        </Button>
      </Flex>
      {withIndicator && (
        <HStack
          spacing={2}
          width={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          h={4}
        >
          {cardsArray.map((card, idx) => (
            <Box
              key={idx}
              rounded={"full"}
              bg={idx === index ? "primary.500" : "gray.500"}
              width={defineBoxSize(idx)}
              height={defineBoxSize(idx)}
              shadow={"inner"}
              transition={"all 0.3s ease-in-out"}
            />
          ))}
        </HStack>
      )}
    </Box>
  )
}
