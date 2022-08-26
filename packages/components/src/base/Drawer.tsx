import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentProps,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  ThemingProps,
} from "@chakra-ui/react"
import { FunctionComponent } from "react"

interface DrawerOptions {
  body: JSX.Element
  isOpen: boolean
  onClose: () => void
  placement?: "top" | "right" | "bottom" | "left"
  title?: string
  hasCloseBtn?: boolean
  footer?: JSX.Element
}

interface AcsDrawerProps
  extends DrawerOptions,
    ThemingProps<"DrawerContent">,
    DrawerContentProps {}

export const AcsDrawer: FunctionComponent<AcsDrawerProps> = ({
  isOpen,
  onClose,
  placement,
  title,
  hasCloseBtn,
  body,
  footer,
  size,
  ...props
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement={placement ? placement : "right"}
      onClose={onClose}
      size={size ? size : "md"}
    >
      <DrawerOverlay />
      <DrawerContent {...props}>
        {hasCloseBtn && <DrawerCloseButton />}
        {title && <DrawerHeader>{title}</DrawerHeader>}

        <DrawerBody>{body}</DrawerBody>

        {footer && <DrawerFooter>{footer}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  )
}
