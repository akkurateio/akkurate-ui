import { Button } from "@chakra-ui/react"
import React from "react"

interface IProps {
  page: number
  action: () => void
  current?: boolean
}

const PageBtn: React.FC<IProps> = ({ page, action, current = false }) => {
  return (
    <Button
      size={"sm"}
      borderRadius={"4px"}
      m={0}
      colorScheme={current ? "primary" : "gray"}
      color={current ? undefined : "gray.600"}
      onClick={action}
      width={"2rem"}
      height={"2rem"}
    >
      {page}
    </Button>
  )
}

export default PageBtn
