import { AisChevronLeft, AisChevronRight } from "@akkurateio/icons"
import { Box, Button, Flex, HStack } from "@chakra-ui/react"
import { FunctionComponent, useState } from "react"

interface IProps {
  cardsArray: JSX.Element[]
  withIndicator?: boolean
}

export const AcsCarousel: FunctionComponent<IProps> = ({
  cardsArray,
  withIndicator = true,
}) => {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    if (index < cardsArray.length - 1) {
      setIndex(index + 1)
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
  return (
    <Box width={"full"}>
      <Flex width={"full"} alignItems={"center"}>
        <Button onClick={handlePrevious} variant={"ghost"}>
          <AisChevronLeft />
        </Button>
        <Box width={"100%"} overflow={"hidden"}>
          <Flex
            width={`${100 * cardsArray.length}%`}
            justifyContent={"flex-start"}
            alignItems={"center"}
            transition={"all 0.4s ease-in-out"}
            transform={`translateX(-${index * (100 / cardsArray.length)}%)`}
          >
            {cardsArray.map((card, index) => (
              <Flex
                key={index}
                width={`100%`}
                justifyContent={"center"}
                alignItems={"center"}
                p={2}
              >
                {card}
              </Flex>
            ))}
          </Flex>
        </Box>

        <Button onClick={handleNext} variant={"ghost"}>
          <AisChevronRight />
        </Button>
      </Flex>
      {withIndicator && (
        <HStack
          spacing={2}
          width={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          py={2}
        >
          {cardsArray.map((card, idx) => (
            <Box
              key={idx}
              rounded={"full"}
              bg={idx === index ? "primary.500" : "gray.500"}
              width={2}
              height={2}
              shadow={"inner"}
            />
          ))}
        </HStack>
      )}
    </Box>
  )
}
