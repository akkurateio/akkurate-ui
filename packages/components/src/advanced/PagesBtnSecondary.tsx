import { Button } from "@chakra-ui/react"
import React from "react"

interface IProps {
  page: number
  action: () => void
  current?: boolean
  width?: string
  height?: string
  fontSize?: string
  color?: boolean
}

const PageBtnSecondary: React.FC<IProps> = ({
  fontSize,
  width,
  height,
  page,
  action,
  current = false,
  color,
}) => {
  return (
    <Button
      size={"sm"}
      fontSize={fontSize ? fontSize : "2xs"}
      fontWeight={current ? "bold" : "normal"}
      _hover={{ backgroundColor: current ? "primary.700" : "neutral.200" }}
      colorScheme={current ? "primary" : "white"}
      color={current ? "white" : "neutral.600"}
      onClick={action}
      width={width ? width : "2.063rem"}
      height={height ? height : "2.063rem"}
    >
      {page}
    </Button>
  )
}

export default PageBtnSecondary
