import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerContentProps,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  ThemingProps,
} from "@chakra-ui/react"
import React from "react"
import { AisClose } from "@akkurateio/icons"

interface DrawerOptions {
  body: JSX.Element
  isOpen: boolean
  onClose: () => void
  placement?: "top" | "right" | "bottom" | "left"
  title?: string
  header?: JSX.Element
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
  header,
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
        {title && !header && (
          <>
            <HStack justifyContent={"space-between"} w={"full"}>
              <DrawerHeader
                alignItems={"center"}
                flex={1}
                fontWeight={"md"}
                fontSize={"md"}
                pl={"1rem"}
                pt={"1rem"}
                pr={0}
                pb={0}
              >
                {title}
              </DrawerHeader>
              {hasCloseBtn && (
                <IconButton
                  pr={"1rem"}
                  aria-label="Close"
                  icon={<AisClose boxSize={"24px"} />}
                  color={"neutral.500"}
                  onClick={onClose}
                  size={"xs"}
                  variant={"ghost"}
                  cursor={"pointer"}
                />
              )}
            </HStack>
            <Box height={"1px"} bg={"neutral.300"} m={4} mr={0} ml={0} />
          </>
        )}
        {!title && hasCloseBtn && (
          <>
            <HStack
              alignItems={"center"}
              justifyContent={"flex-end"}
              w={"full"}
              pl={"1rem"}
              pt={"1rem"}
              pr={"1rem"}
              pb={0}
            >
              <IconButton
                aria-label="Close"
                icon={<AisClose boxSize={"24px"} />}
                color={"neutral.500"}
                onClick={onClose}
                size={"xs"}
                variant={"ghost"}
                cursor={"pointer"}
              />
            </HStack>
            <Box height={"1px"} bg={"neutral.300"} m={4} mr={0} ml={0} />
          </>
        )}
        {header && (
          <>
            <DrawerHeader
              alignItems={"center"}
              backgroundColor={"blue.400"}
              fontWeight={"md"}
              fontSize={"md"}
              w={"full"}
              pl={"1rem"}
              pt={"1rem"}
              pr={"1rem"}
              pb={0}
            >
              {header}
            </DrawerHeader>
            <Box height={"1px"} bg={"neutral.300"} m={4} mr={0} ml={0} />
          </>
        )}
        <DrawerBody pl={"1rem"} pr={"1rem"} pt={0} pb={0}>
          {body}
        </DrawerBody>
        <Box height={"1px"} bg={"neutral.300"} m={4} ml={0} mr={0} />
        {footer && (
          <DrawerFooter pl={"1rem"} pr={"1rem"} pt={0} pb={"1rem"}>
            {footer}
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  )
}
