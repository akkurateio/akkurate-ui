import { Button, Flex, IconButton, Text, Tooltip } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import {
  AisAdd,
  AisChevronLeft,
  AisChevronRight,
  AisPageFirst,
  AisPageLast,
} from "@akkurateio/icons"

interface IProps {
  max: number
  current: number
  totalItems?: number
  handleChangePage: (val: number) => void
  handleCreate?: () => void
  createBtn?: boolean
  handlePaginate?: () => void
}

export const Paginate = ({
  current,
  max,
  totalItems,
  handleChangePage,
  handleCreate,
  createBtn = true,
}: IProps) => {
  const slide = {
    initial: {
      y: "64px",
      transition: { duration: 0.1 },
    },
    animate: {
      y: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
    exit: {
      y: "64px",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  }

  const fade = {
    initial: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.2, delay: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={current}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fade}
      >
        <Flex
          flex={"none"}
          alignItems={"center"}
          justifyContent={"space-between"}
          borderTop={"1px"}
          borderColor={"gray.100"}
          px={4}
          h={16}
        >
          <Flex flex={"none"} alignItems={"center"}>
            {max > 6 && (
              <IconButton
                variant={"neutral"}
                disabled={current === 1}
                size={"sm"}
                aria-label={"Page suivante"}
                icon={
                  <>
                    <Tooltip label="Aller à la première page" size={"sm"}>
                      <AisPageFirst />
                    </Tooltip>
                  </>
                }
                ml={1}
                onClick={() => handleChangePage(1)}
              />
            )}
            <IconButton
              variant={"neutral"}
              disabled={current === 1}
              size={"sm"}
              aria-label={"Page précédente"}
              icon={
                <>
                  <AisChevronLeft />
                </>
              }
              mr={1}
              onClick={() => handleChangePage(current - 1)}
            />

            {current > 4 && current >= max && (
              <Button
                key={current - 4}
                size={"sm"}
                mr={"1px"}
                variant={"solid"}
                onClick={() => handleChangePage(current - 4)}
              >
                {current - 4}
              </Button>
            )}

            {current > 3 && current >= max - 1 && (
              <Button
                key={current - 3}
                size={"sm"}
                mr={"1px"}
                variant={"solid"}
                onClick={() => handleChangePage(current - 3)}
              >
                {current - 3}
              </Button>
            )}

            {current > 2 && (
              <Button
                key={current - 2}
                size={"sm"}
                mr={"1px"}
                variant={"solid"}
                onClick={() => handleChangePage(current - 2)}
              >
                {current - 2}
              </Button>
            )}

            {current > 1 && (
              <Button
                key={current - 1}
                size={"sm"}
                mr={"1px"}
                variant={"solid"}
                onClick={() => handleChangePage(current - 1)}
              >
                {current - 1}
              </Button>
            )}
            {current && (
              <Button
                key={current}
                size={"sm"}
                mr={"1px"}
                variant={"primary"}
                onClick={() => handleChangePage(current)}
              >
                {current}
              </Button>
            )}
            {current <= max - 1 && (
              <Button
                key={current + 1}
                size={"sm"}
                mr={"1px"}
                variant={"solid"}
                onClick={() => handleChangePage(current + 1)}
              >
                {current + 1}
              </Button>
            )}
            {current <= max - 2 && (
              <Button
                key={current + 2}
                size={"sm"}
                mr={"1px"}
                variant={"solid"}
                onClick={() => handleChangePage(current + 2)}
              >
                {current + 2}
              </Button>
            )}
            {current <= 2 && current <= max - 3 && (
              <Button
                key={current + 3}
                size={"sm"}
                mr={"1px"}
                variant={"solid"}
                onClick={() => handleChangePage(current + 3)}
              >
                {current + 3}
              </Button>
            )}
            {current <= 1 && current <= max - 4 && (
              <Button
                key={current + 4}
                size={"sm"}
                mr={"1px"}
                variant={"solid"}
                onClick={() => handleChangePage(current + 4)}
              >
                {current + 4}
              </Button>
            )}
            <IconButton
              variant={"neutral"}
              disabled={current === max}
              size={"sm"}
              aria-label={"Page suivante"}
              icon={
                <>
                  <AisChevronRight />
                </>
              }
              ml={1}
              onClick={() => handleChangePage(current + 1)}
            />
            {max > 6 && (
              <IconButton
                variant={"neutral"}
                disabled={current === max}
                size={"sm"}
                aria-label={"Page suivante"}
                icon={
                  <>
                    <Tooltip label="Aller à la dernière page" size={"sm"}>
                      <AisPageLast />
                    </Tooltip>
                  </>
                }
                ml={1}
                onClick={() => handleChangePage(max)}
              />
            )}
          </Flex>

          <Flex
            flex={"none"}
            alignItems={"center"}
            justifyContent={"end"}
            w={64}
          >
            <Text fontSize={"xs"} opacity={0.5} mr={4}>
              Page {current}/{max} - {totalItems} entrées
            </Text>

            {createBtn && (
              <IconButton
                onClick={handleCreate}
                aria-label={"Créer une alerte"}
                icon={
                  <>
                    <AisAdd />
                  </>
                }
                rounded={"full"}
                variant={"primary"}
              />
            )}
          </Flex>
        </Flex>
      </motion.div>
    </AnimatePresence>
  )
}
