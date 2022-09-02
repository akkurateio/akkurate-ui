import {
  AisChevronLeft,
  AisChevronRight,
  AisPageFirst,
  AisPageLast,
} from "@akkurateio/icons"
import { Flex, HStack, IconButton, Text } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { FunctionComponent } from "react"
import PageBtn from "./PageBtn"

interface IProps {
  max: number
  current: number
  totalItems?: number
  handleChangePage: (val: number) => void
  handleCreate?: () => void
  createBtn?: boolean
  handlePaginate?: () => void
  withPageInfos?: boolean
}

export const AcsPaginate: FunctionComponent<IProps> = ({
  current,
  max,
  totalItems,
  handleChangePage,
  handleCreate,
  createBtn = true,
  withPageInfos,
}) => {
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
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"}>
            {max > 6 && (
              <IconButton
                variant={"ghost"}
                disabled={current === 1}
                size={"sm"}
                aria-label={"Première page"}
                onClick={() => handleChangePage(1)}
              >
                <AisPageFirst boxSize={6} />
              </IconButton>
            )}
            <IconButton
              variant={"ghost"}
              boxSize={6}
              disabled={current === 1}
              size={"sm"}
              aria-label={"Page précédente"}
              onClick={() => handleChangePage(current - 1)}
            >
              <AisChevronLeft boxSize={6} />
            </IconButton>

            <HStack spacing={0.5} alignItems={"center"}>
              {current > 4 && current >= max && (
                <PageBtn
                  page={current - 4}
                  action={() => handleChangePage(current - 4)}
                />
              )}

              {current > 3 && current >= max - 1 && (
                <PageBtn
                  page={current - 3}
                  action={() => handleChangePage(current - 3)}
                />
              )}

              {current > 2 && (
                <PageBtn
                  page={current - 2}
                  action={() => handleChangePage(current - 2)}
                />
              )}

              {current > 1 && (
                <PageBtn
                  page={current - 1}
                  action={() => handleChangePage(current - 1)}
                />
              )}
              {current && (
                <PageBtn
                  page={current}
                  action={() => handleChangePage(current)}
                  color={"primary"}
                />
              )}
              {current <= max - 1 && (
                <PageBtn
                  page={current + 1}
                  action={() => handleChangePage(current + 1)}
                />
              )}
              {current <= max - 2 && (
                <PageBtn
                  page={current + 2}
                  action={() => handleChangePage(current + 2)}
                />
              )}
              {current <= 2 && current <= max - 3 && (
                <PageBtn
                  page={current + 3}
                  action={() => handleChangePage(current + 3)}
                />
              )}
              {current <= 1 && current <= max - 4 && (
                <PageBtn
                  page={current + 4}
                  action={() => handleChangePage(current + 4)}
                />
              )}
            </HStack>
            <IconButton
              variant={"ghost"}
              disabled={current === max}
              size={"sm"}
              aria-label={"Page suivante"}
              onClick={() => handleChangePage(current + 1)}
            >
              <AisChevronRight boxSize={6} />
            </IconButton>
            {max > 6 && (
              <IconButton
                variant={"ghost"}
                disabled={current === max}
                size={"sm"}
                aria-label={"Dernière page"}
                onClick={() => handleChangePage(max)}
              >
                <AisPageLast boxSize={6} />
              </IconButton>
            )}
          </HStack>

          {withPageInfos && (
            <Flex alignItems={"center"} justifyContent={"end"}>
              <Text fontSize={"xs"} opacity={0.5} mr={4}>
                Page {current}/{max}
                {totalItems && ` - ${totalItems} entrées`}
              </Text>
            </Flex>
          )}
        </Flex>
      </motion.div>
    </AnimatePresence>
  )
}
