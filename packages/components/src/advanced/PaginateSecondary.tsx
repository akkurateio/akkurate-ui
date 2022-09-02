import { AisChevronLeft, AisChevronRight } from "@akkurateio/icons"
import { Button, HStack } from "@chakra-ui/react"
import { FunctionComponent } from "react"

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

export const AcsPaginateSecondary: FunctionComponent<IProps> = ({
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
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  }

  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"full"}
    >
      <Button variant={"ghost"} leftIcon={<AisChevronLeft boxSize={8} />}>
        Précédent
      </Button>

      <Button variant={"ghost"} rightIcon={<AisChevronRight boxSize={8} />}>
        Suivant
      </Button>
    </HStack>
  )
}
