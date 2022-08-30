import { AisChevronLeft, AisChevronRight } from "@akkurateio/icons"
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react"
import { FunctionComponent, useState } from "react"

interface IProps {}

const numberPerPage = 2

export const AcsCarousel: FunctionComponent<IProps> = ({}) => {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    if (index < 3) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(3)
    }
  }

  // make a carousel using chakra ui and framer motion
  return (
    <Box>
      <Flex width={"full"} alignItems={"center"}>
        <Button onClick={handlePrevious}>
          <AisChevronLeft />
        </Button>
        <Box width={"100%"} overflow={"hidden"}>
          <Flex
            bg={"success.200"}
            width={"400%"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            transition={"all 0.4s ease-in-out"}
            transform={`translateX(-${index * (100 / 4)}%)`}
          >
            <Flex
              bg={"red.400"}
              width={`50%`}
              justifyContent={"space-between"}
              p={2}
            >
              <Text>Carousel</Text>
              <Text>Carousel</Text>
            </Flex>

            <Flex
              bg={"blue.400"}
              width={`50%`}
              justifyContent={"space-between"}
              p={2}
            >
              <Text>Carousel</Text>
              <Text>Carousel</Text>
            </Flex>
            <Flex
              bg={"purple.400"}
              width={`50%`}
              justifyContent={"space-between"}
              p={2}
            >
              <Text>Carousel</Text>
              <Text>Carousel</Text>
            </Flex>

            <Flex
              bg={"yellow.400"}
              width={`50%`}
              justifyContent={"space-between"}
              p={2}
            >
              <Text>Carousel</Text>
              <Text>Carousel</Text>
            </Flex>
          </Flex>
        </Box>

        <Button onClick={handleNext}>
          <AisChevronRight />
        </Button>
      </Flex>

      <HStack
        spacing={2}
        width={"full"}
        alignItems={"center"}
        justifyContent={"center"}
        py={1}
      >
        <Box
          rounded={"full"}
          bg={index === 0 ? "primary.500" : "secondary.500"}
          width={2}
          height={2}
        />
        <Box
          rounded={"full"}
          bg={index === 1 ? "primary.500" : "secondary.500"}
          width={2}
          height={2}
        />
        <Box
          rounded={"full"}
          bg={index === 2 ? "primary.500" : "secondary.500"}
          width={2}
          height={2}
        />
        <Box
          rounded={"full"}
          bg={index === 3 ? "primary.500" : "secondary.500"}
          width={2}
          height={2}
        />
      </HStack>
    </Box>
  )
}
