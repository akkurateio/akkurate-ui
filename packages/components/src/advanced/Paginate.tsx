import {
  AisChevronLeft,
  AisChevronRight,
  AisPageFirst,
  AisPageLast,
} from "@akkurateio/icons"
import { Flex, HStack, IconButton, Text } from "@chakra-ui/react"
import React from "react"
import PageBtn from "./PageBtn"

interface IProps {
  max: number
  current: number
  totalItems?: number
  handleChangePage: (val: number) => void
  withPageInfos?: boolean
}

export const AcsPaginate: React.FC<IProps> = ({
  current,
  max,
  totalItems,
  handleChangePage,
  withPageInfos,
}) => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <HStack alignItems={"center"}>
        <HStack spacing={2}>
          {max > 6 && (
            <IconButton
              variant={"ghost"}
              disabled={current === 1}
              size={"xs"}
              aria-label={"Première page"}
              onClick={() => handleChangePage(1)}
            >
              <AisPageFirst boxSize={"24px"} />
            </IconButton>
          )}
          <IconButton
            pr={"0.5rem"}
            variant={"ghost"}
            boxSize={6}
            disabled={current === 1}
            size={"xs"}
            aria-label={"Page précédente"}
            onClick={() => handleChangePage(current - 1)}
          >
            <AisChevronLeft boxSize={"24px"} />
          </IconButton>
        </HStack>
        <HStack spacing={1} alignItems={"center"}>
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
              current={true}
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
        <HStack spacing={1}>
          <IconButton
            pl={"0.25rem"}
            variant={"ghost"}
            disabled={current === max}
            size={"xs"}
            aria-label={"Page suivante"}
            onClick={() => handleChangePage(current + 1)}
          >
            <AisChevronRight boxSize={"24px"} />
          </IconButton>
          {max > 6 && (
            <IconButton
              variant={"ghost"}
              disabled={current === max}
              size={"xs"}
              aria-label={"Dernière page"}
              onClick={() => handleChangePage(max)}
            >
              <AisPageLast boxSize={"24px"} />
            </IconButton>
          )}
        </HStack>
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
  )
}
