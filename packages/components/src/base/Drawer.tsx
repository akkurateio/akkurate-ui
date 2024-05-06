import { AisClose } from "@akkurateio/chakra-icons"
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerContentProps,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Spinner,
  ThemingProps,
} from "@chakra-ui/react"
import React from "react"

interface DrawerOptions {
  body: JSX.Element
  isOpen: boolean
  onClose: () => void
  placement?: "top" | "right" | "bottom" | "left"
  title?: string
  header?: JSX.Element
  hasCloseBtn?: boolean
  footer?: JSX.Element | null
  closeOnOverlayClick?: boolean
  isLoading?: boolean
  colorSpinner?: string
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
            <HStack justifyContent={"space-between"} w={"full"} p={4}>
              <DrawerHeader
                alignItems={"center"}
                flex={1}
                fontWeight={"md"}
                fontSize={"md"}
                p={0}
              >
                {title}
              </DrawerHeader>
              {hasCloseBtn && (
                <IconButton
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
            <Box height={"1px"} bg={"neutral.300"} />
          </>
        )}
        {!title && hasCloseBtn && (
          <>
            <HStack
              alignItems={"center"}
              justifyContent={"flex-end"}
              w={"full"}
              p={4}
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
            <Box height={"1px"} bg={"neutral.300"} />
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
              p={4}
            >
              {header}
            </DrawerHeader>
            <Box height={"1px"} bg={"neutral.300"} />
          </>
        )}
        {props.isLoading ? (
          <Flex alignItems={"center"} justifyContent={"center"} h={"full"}>
            <Spinner
              color={props.colorSpinner ? props.colorSpinner : "primary.500"}
            />
          </Flex>
        ) : (
          <>
            <DrawerBody p={0}>
              <Box p={4} h={"full"}>
                {body}
              </Box>
            </DrawerBody>

            {footer && (
              <>
                <Box height={"1px"} bg={"neutral.300"} />
                <DrawerFooter p={4}>{footer}</DrawerFooter>
              </>
            )}
          </>
        )}
      </DrawerContent>
    </Drawer>
  )
}
