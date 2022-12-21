import { AisClose } from "@akkurateio/icons"
import {
  AlertDescriptionProps,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  HStack,
  IconButton,
  ModalHeader,
  ThemingProps,
} from "@chakra-ui/react"
import React, { useRef } from "react"

interface ModalAlertOptions {
  body: JSX.Element
  isOpen: boolean
  onClose: () => void
  action?: () => void
  title?: string
  header?: JSX.Element
  hasCloseBtn?: boolean
  confirmText?: string
  cancelText?: string
  footer?: JSX.Element
  isCentered?: boolean
  isLoading?: boolean
}

interface AcsModalAlertProps
  extends ModalAlertOptions,
    ThemingProps<"AlertDialogContent">,
    AlertDescriptionProps {}

export const AcsModalAlert: React.FC<AcsModalAlertProps> = ({
  isOpen,
  onClose,
  hasCloseBtn,
  title,
  header,
  body,
  action,
  confirmText,
  cancelText,
  footer,
  isCentered = true,
  size,
  isLoading,
  ...props
}) => {
  const cancelRef = useRef<any | null>(null)

  return (
    <AlertDialog
      onClose={onClose}
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      isCentered={isCentered}
      closeOnOverlayClick={false}
      size={size}
    >
      <AlertDialogOverlay>
        <AlertDialogContent p={"1rem"} position={"relative"} {...props}>
          <HStack justifyContent={"space-between"} w={"full"} mb={"1rem"}>
            {title && !header && (
              <ModalHeader p={0} fontWeight={"md"} fontSize={"md"}>
                {title}
              </ModalHeader>
            )}
            {hasCloseBtn && title && (
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
            {hasCloseBtn && !title && (
              <IconButton
                position={"absolute"}
                right={"1rem"}
                top={"1rem"}
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
          {header && (
            <ModalHeader p={0} mb={"1rem"} fontWeight={"md"} fontSize={"md"}>
              {header}
            </ModalHeader>
          )}

          <AlertDialogBody p={0} mt={"1.5rem"} mb={"1.5rem"} fontSize={"sm"}>
            {body}
          </AlertDialogBody>

          {footer ? (
            <AlertDialogFooter p={0} mt={"1rem"}>
              {footer}
            </AlertDialogFooter>
          ) : (
            <AlertDialogFooter
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={0}
              mt={"1rem"}
            >
              <Button
                colorScheme={"primary"}
                variant={"outline"}
                ref={cancelRef}
                onClick={onClose}
              >
                {cancelText ? cancelText : "Annuler"}
              </Button>
              <Button
                colorScheme={"primary"}
                variant={"solid"}
                onClick={action}
                isLoading={isLoading}
              >
                {confirmText ? confirmText : "Confirmer"}
              </Button>
            </AlertDialogFooter>
          )}
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
