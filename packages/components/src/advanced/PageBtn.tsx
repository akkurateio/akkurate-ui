import { Button } from "@chakra-ui/react"
import React from "react"

interface IProps {
  page: number
  action: () => void
  current?: boolean
  width?: string
  height?: string
  fontSize?: string
}

const PageBtn: React.FC<IProps> = ({
  fontSize,
  width,
  height,
  page,
  action,
  current = false,
}) => {
  return (
    <Button
      size={"sm"}
      borderRadius={"base"}
      fontSize={fontSize ? fontSize : "2xs"}
      fontWeight={current ? "bold" : "normal"}
      backgroundColor={current ? "primary.500" : "neutral.200"}
      _hover={{ backgroundColor: current ? "primary.700" : "neutral.400" }}
      _active={{ backgroundColor: current ? "primary.900" : "neutral.600" }}
      color={current ? "white" : "neutral.600"}
      onClick={action}
      width={width ? width : "2.063rem"}
      height={height ? height : "2.063rem"}
    >
      {page}
    </Button>
  )
}

export default PageBtn
