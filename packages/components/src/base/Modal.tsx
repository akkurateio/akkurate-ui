import { AisClose } from "@akkurateio/chakra-icons"
import {
  Flex,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  ThemingProps,
} from "@chakra-ui/react"
import React from "react"

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
  isLoading?: boolean
  colorSpinner?: string
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
        {title && !header && (
          <HStack justifyContent={"space-between"} w={"full"}>
            <ModalHeader flex={1} p={0} fontWeight={"md"} fontSize={"md"}>
              {title}
            </ModalHeader>
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
        )}
        {!title && hasCloseBtn && (
          <HStack justifyContent={"flex-end"} w={"full"}>
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
        )}
        {header && <ModalHeader p={0}>{header}</ModalHeader>}
        {props.isLoading ? (
          <Flex alignItems={"center"} justifyContent={"center"} minH={64}>
            <Spinner
              color={props.colorSpinner ? props.colorSpinner : "primary.500"}
            />
          </Flex>
        ) : (
          <>
            <ModalBody p={0} mt={"1.5rem"} mb={"1.5rem"} fontSize={"sm"}>
              {body}
            </ModalBody>
            {footer && <ModalFooter p={0}>{footer}</ModalFooter>}
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
