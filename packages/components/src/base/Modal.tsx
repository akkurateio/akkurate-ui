import {
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ThemingProps,
} from "@chakra-ui/react"
import React from "react"
import { AisClose } from "@akkurateio/icons"

interface ModalOptions {
  body: JSX.Element
  isOpen: boolean
  onClose: () => void
  title?: string
  header?: JSX.Element
  hasCloseBtn?: boolean
  footer?: JSX.Element
  closeOnOverlayClick?: boolean
  isCentered?: boolean
}

interface AcsModalProps
  extends ModalOptions,
    ThemingProps<"ModalContent">,
    ModalContentProps {}

export const AcsModal: React.FC<AcsModalProps> = ({
  title,
  header,
  hasCloseBtn,
  body,
  footer,
  isOpen,
  onClose,
  size,
  closeOnOverlayClick,
  isCentered = true,
  ...props
}) => {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      closeOnOverlayClick={closeOnOverlayClick}
      isCentered={isCentered}
    >
      <ModalOverlay />
      <ModalContent p={"1rem"} {...props}>
        <HStack justifyContent={"space-between"} w={"full"} mb={"1rem"}>
          {title && !header && (
            <ModalHeader p={0} fontWeight={"md"} fontSize={"md"}>
              {title}
            </ModalHeader>
          )}
          {hasCloseBtn && (
            <AisClose
              color={"neutral.500"}
              onClick={onClose}
              cursor={"pointer"}
              boxSize={"24px"}
            />
          )}
        </HStack>
        {header && (
          <ModalHeader p={0} mb={"1rem"} fontWeight={"md"} fontSize={"md"}>
            {header}
          </ModalHeader>
        )}
        <ModalBody p={0} mt={"1rem"} mb={"1rem"} fontSize={"sm"}>
          {body}
        </ModalBody>

        <ModalFooter p={0} mt={"1rem"}>
          {footer && footer}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
