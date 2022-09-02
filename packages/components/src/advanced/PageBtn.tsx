import { Button } from "@chakra-ui/react"
import { FunctionComponent } from "react"

interface IProps {
  page: number
  action: () => void
  color?: string
}

const PageBtn: FunctionComponent<IProps> = ({ page, action, color }) => {
  return (
    <Button
      size={"sm"}
      borderRadius={"4px"}
      m={0}
      colorScheme={color}
      onClick={action}
      width={"2rem"}
    >
      {page}
    </Button>
  )
}

export default PageBtn
