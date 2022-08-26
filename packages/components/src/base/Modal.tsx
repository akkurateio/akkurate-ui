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
import { FunctionComponent } from "react"

interface ModalOptions {
  body: JSX.Element
  isOpen: boolean
  onClose: () => void
  title?: string
  hasCloseBtn?: boolean
  footer?: JSX.Element
}

interface AcsModalProps
  extends ModalOptions,
    ThemingProps<"ModalContent">,
    ModalContentProps {}

export const AcsModal: FunctionComponent<AcsModalProps> = ({
  title,
  hasCloseBtn,
  body,
  footer,
  isOpen,
  onClose,
  size,
  ...props
}) => {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      size={size}
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
