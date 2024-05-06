import { AisGoLeft, AisGoRight, AisGoSort } from "@akkurateio/chakra-icons"
import {
  Button,
  Divider,
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import PageBtnSecondary from "./PagesBtnSecondary"

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
            <AisGoLeft boxSize={"24px"} />
            <Text>Précédent</Text>
          </HStack>
        </Button>
      )}

      <HStack m={0} alignItems={"center"}>
        <Text mr={"2rem"}>Page</Text>
        <Text textAlign={"right"}>{current}</Text>

        <Popover placement={"bottom-end"}>
          {({ isOpen, onClose }) => (
            <>
              <PopoverTrigger>
                <Button p={0} pl={0.5} size={"xs"} variant={"ghost"}>
                  <AisGoSort boxSize={"24px"} />
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent rounded={"base"} mr={1.5} width={"5.125rem"}>
                  <PopoverBody p={1.5} maxH={"16.25rem"} overflowY={"scroll"}>
                    <VStack spacing={0.5} divider={<Divider />}>
                      {[...Array(max)].map((_, i) => (
                        <PageBtnSecondary
                          width={"3.75rem"}
                          height={"2.375rem"}
                          fontSize={"sm"}
                          key={i}
                          action={() => {
                            handleChangePage(i + 1)
                            onClose()
                          }}
                          page={i + 1}
                          current={i + 1 === current}
                        />
                      ))}
                    </VStack>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </>
          )}
        </Popover>
        <Text paddingLeft={0.5}>sur {max}</Text>
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
            <AisGoRight boxSize={"24px"} />
          </HStack>
        </Button>
      )}
    </HStack>
  )
}
