import {
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

interface ModalOptions {
  body: JSX.Element
  isOpen: boolean
  onClose: () => void
  title?: string
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
      <ModalContent {...props}>
        {title && <ModalHeader>{title}</ModalHeader>}
        {hasCloseBtn && <ModalCloseButton />}
        <ModalBody>{body}</ModalBody>

        <ModalFooter>{footer && footer}</ModalFooter>
      </ModalContent>
    </Modal>
  )
}
