import {
  AlertDescriptionProps,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ThemingProps,
} from "@chakra-ui/react"
import React, { useRef } from "react"

interface ModalAlertOptions {
  body: JSX.Element
  isOpen: boolean
  onClose: () => void
  action?: () => void
  title?: string
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
  title,
  body,
  action,
  confirmText,
  cancelText,
  footer,
  isCentered,
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
      isCentered={isCentered ? isCentered : true}
      closeOnOverlayClick={false}
      size={size}
    >
      <AlertDialogOverlay>
        <AlertDialogContent {...props}>
          {title && (
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>
          )}

          <AlertDialogBody>{body}</AlertDialogBody>

          {footer ? (
            <AlertDialogFooter>{footer}</AlertDialogFooter>
          ) : (
            <AlertDialogFooter
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
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
