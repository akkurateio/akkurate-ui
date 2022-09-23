import {
  AisChevronLeft,
  AisChevronRight,
  AisChevronSort,
} from "@akkurateio/icons"
import {
  Button,
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import PageBtn from "./PageBtn"

interface IProps {
  max: number
  current: number
  totalItems?: number
  handleChangePage: (val: number) => void
  withBtns?: boolean
}

export const AcsPaginateSecondary: React.FC<IProps> = ({
  current,
  max,
  totalItems,
  handleChangePage,
  withBtns,
}) => {
  const fade = {
    initial: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  }

  const handlePreviousPage = () => {
    if (current > 1) {
      handleChangePage(current - 1)
    }
  }

  const handleNextPage = () => {
    if (current < max) {
      handleChangePage(current + 1)
    }
  }

  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"full"}
      spacing={20}
    >
      {withBtns && (
        <Button
          variant={"ghost"}
          fontWeight={"normal"}
          onClick={handlePreviousPage}
          isDisabled={current === 1}
        >
          <HStack alignItems={"center"} spacing={2}>
            <AisChevronLeft boxSize={6} />
            <Text>Précédent</Text>
          </HStack>
        </Button>
      )}

      <HStack alignItems={"center"} spacing={1}>
        <Text>Page</Text>
        <Text minW={10} textAlign={"right"}>
          {current}
        </Text>

        <Popover placement={"bottom-end"}>
          {({ isOpen, onClose }) => (
            <>
              <PopoverTrigger>
                <Button size={"xs"} variant={"ghost"}>
                  <AisChevronSort boxSize={4} />
                </Button>
              </PopoverTrigger>
              <PopoverContent width={"fit-content"}>
                <PopoverBody m={0} p={0.5} maxH={"240px"} overflowY={"scroll"}>
                  <VStack spacing={0.5} mr={0.5}>
                    {[...Array(max)].map((_, i) => (
                      <PageBtn
                        key={i}
                        action={() => {
                          handleChangePage(i + 1)
                          onClose()
                        }}
                        page={i + 1}
                        current={i + 1 === current ? true : false}
                      />
                    ))}
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </>
          )}
        </Popover>
        <Text>sur {max}</Text>
      </HStack>

      {withBtns && (
        <Button
          variant={"ghost"}
          fontWeight={"normal"}
          onClick={handleNextPage}
          isDisabled={max === current}
        >
          <HStack alignItems={"center"} spacing={2}>
            <Text>Suivant</Text>
            <AisChevronRight boxSize={6} />
          </HStack>
        </Button>
      )}
    </HStack>
  )
}
