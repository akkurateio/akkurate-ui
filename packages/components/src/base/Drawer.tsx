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
import React from "react"

interface DrawerOptions {
  body: JSX.Element
  isOpen: boolean
  onClose: () => void
  placement?: "top" | "right" | "bottom" | "left"
  title?: string
  hasCloseBtn?: boolean
  footer?: JSX.Element
  closeOnOverlayClick?: boolean
}

interface AcsDrawerProps
  extends DrawerOptions,
    ThemingProps<"DrawerContent">,
    DrawerContentProps {}

export const AcsDrawer: React.FC<AcsDrawerProps> = ({
  isOpen,
  onClose,
  placement,
  title,
  hasCloseBtn,
  body,
  footer,
  size,
  closeOnOverlayClick,
  ...props
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement={placement ? placement : "right"}
      onClose={onClose}
      size={size ? size : "md"}
      closeOnOverlayClick={closeOnOverlayClick}
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
