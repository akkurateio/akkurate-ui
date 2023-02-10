import React from "react"
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import dayjs, { Dayjs } from "dayjs"
import { AisClose } from "@akkurateio/icons"

interface IProps {
  startDate: Dayjs | null | string
  endDate: Dayjs | null | string
  numericFormat: boolean
  onOpen: () => void
  deleteDate: () => void
  isOpen: boolean
  screenSize: string | undefined
}

const Header: React.FC<IProps> = ({
  startDate,
  endDate,
  numericFormat,
  onOpen,
  deleteDate,
  isOpen,
  screenSize,
}) => {
  console.log(onOpen, "onOpen")
  console.log(isOpen, "isOpen")
  return screenSize !== "base" ? (
    <Button
      minW={{ base: "full", md: 400 }}
      w={"full"}
      border={"1px"}
      borderColor={"gray.400"}
      rounded={"full"}
      alignSelf={"center"}
      variant={"unstyled"}
      h={10}
    >
      <Flex
        textAlign={"center"}
        display={{ base: "none", md: "flex" }}
        w={"full"}
        h={"full"}
        justifyContent={"space-between"}
        onClick={onOpen}
      >
        <VStack w={"50%"} h={"full"} spacing={0}>
          <Text
            fontSize={startDate ? "2xs" : "sm"}
            fontWeight={startDate ? "normal" : "bold"}
            w={"full"}
          >
            Date de départ
          </Text>
          <Text fontSize={"md"} w={"full"}>
            {startDate
              ? dayjs(startDate).format(
                  numericFormat ? "DD/MM/YYYY" : "dddd DD MMMM YYYY",
                )
              : ""}
          </Text>
        </VStack>
        {isOpen && startDate ? (
          <Box
            onClick={(e: any) => {
              e.stopPropagation()
              deleteDate()
            }}
            backgroundColor={"neutral.300"}
            w={"20px"}
            h={"20px"}
            rounded={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            mt={2}
          >
            <AisClose boxSize={"14px"} />
          </Box>
        ) : null}
        <Box border={"1px"} color={"gray.300"} h={"75%"} mt={1} ml={2} />
        <VStack w={"50%"} spacing={0}>
          <Text
            fontSize={endDate ? "2xs" : "sm"}
            fontWeight={endDate ? "normal" : "bold"}
            w={"full"}
          >
            Date d'arrivée
          </Text>
          <Text fontSize={"md"}>
            {endDate
              ? dayjs(endDate).format(
                  numericFormat ? "DD/MM/YYYY" : "dddd DD MMMM YYYY",
                )
              : ""}
          </Text>
        </VStack>
        {isOpen && endDate ? (
          <HStack
            onClick={(e: any) => {
              e.stopPropagation()
              deleteDate()
            }}
            backgroundColor={"neutral.300"}
            w={"20px"}
            h={"20px"}
            as={"button"}
            rounded={"full"}
            position={"absolute"}
            alignItems={"center"}
            justifyContent={"center"}
            verticalAlign={"middle"}
            right={3}
            top={2}
          >
            <AisClose boxSize={"14px"} />
          </HStack>
        ) : null}
      </Flex>
    </Button>
  ) : (
    <VStack
      textAlign={"center"}
      display={{ base: "flex", md: "none" }}
      w={"full"}
      h={"full"}
      spacing={2}
      minH={100}
    >
      <VStack
        border={"1px"}
        w={"full"}
        h={50}
        rounded={"full"}
        onClick={() => onOpen()}
      >
        <HStack>
          <VStack spacing={0}>
            <Text
              fontSize={startDate ? "2xs" : "sm"}
              fontWeight={startDate ? "normal" : "bold"}
              w={"full"}
            >
              Date de départ
            </Text>
            <Text fontWeight={"bold"} fontSize={"md"}>
              {startDate
                ? dayjs(startDate).format(
                    numericFormat ? "DD/MM/YYYY" : "dddd DD MMMM YYYY",
                  )
                : ""}
            </Text>
          </VStack>
        </HStack>
        {isOpen && startDate ? (
          <Box
            onClick={(e: any) => {
              e.stopPropagation()
              deleteDate()
            }}
            backgroundColor={"neutral.300"}
            w={"20px"}
            h={"20px"}
            rounded={"full"}
            position={"absolute"}
            right={4}
            top={1.5}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            as={"button"}
          >
            <AisClose boxSize={"14px"} />
          </Box>
        ) : null}
      </VStack>
      <VStack
        border={"1px"}
        w={"full"}
        h={50}
        rounded={"full"}
        onClick={onOpen}
      >
        <HStack>
          <VStack spacing={0}>
            <Text
              fontSize={endDate ? "2xs" : "sm"}
              fontWeight={endDate ? "normal" : "bold"}
              w={"full"}
            >
              Date d'arrivée
            </Text>
            <Text fontWeight={"bold"} fontSize={"md"}>
              {endDate
                ? dayjs(endDate).format(
                    numericFormat ? "DD/MM/YYYY" : "dddd DD MMMM YYYY",
                  )
                : ""}
            </Text>
          </VStack>
        </HStack>
        {isOpen && endDate ? (
          <Box
            onClick={(e: any) => {
              e.stopPropagation()
              deleteDate()
            }}
            backgroundColor={"neutral.300"}
            w={"20px"}
            h={"20px"}
            rounded={"full"}
            position={"absolute"}
            right={4}
            bottom={4}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            as={"button"}
          >
            <AisClose boxSize={"14px"} />
          </Box>
        ) : null}
      </VStack>
    </VStack>
  )
}

export default Header
