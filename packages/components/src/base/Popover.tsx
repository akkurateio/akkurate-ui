import {
  Button,
  PlacementWithLogical,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverContentProps,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  ThemingProps,
} from "@chakra-ui/react"
import React, { useRef } from "react"

interface PopoverOptions {
  body: JSX.Element
  action?: () => void
  title?: string
  hasCloseBtn?: boolean
  hasArrow?: boolean
  hasFooter?: boolean
  footer?: JSX.Element
  triggerBtn?: JSX.Element
  triggerBtnOpened?: JSX.Element
  triggerBtnClosed?: JSX.Element
  closeOnBlur?: boolean
  placement?: PlacementWithLogical
  cancelText?: string
  confirmText?: string
}

interface AcsPopoverProps
  extends PopoverOptions,
    ThemingProps<"PopoverContent">,
    PopoverContentProps {}

export const AcsPopover: React.FC<AcsPopoverProps> = ({
  body,
  title,
  hasCloseBtn = false,
  hasArrow = false,
  hasFooter = true,
  footer,
  triggerBtn,
  triggerBtnOpened,
  triggerBtnClosed,
  closeOnBlur = true,
  cancelText,
  confirmText,
  action,
  ...props
}) => {
  const initRef = useRef(null)

  return (
    <Popover
      closeOnBlur={closeOnBlur}
      placement={props.placement ? props.placement : "bottom-end"}
      initialFocusRef={initRef}
    >
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            {triggerBtn
              ? triggerBtn
              : isOpen
              ? triggerBtnOpened
              : triggerBtnClosed}
          </PopoverTrigger>
          <Portal>
            <PopoverContent {...props}>
              {title && <PopoverHeader>{title}</PopoverHeader>}
              {hasArrow && <PopoverArrow />}
              {hasCloseBtn && <PopoverCloseButton />}
              <PopoverBody>{body}</PopoverBody>
              {hasFooter && footer ? (
                <PopoverFooter>{footer}</PopoverFooter>
              ) : (
                <PopoverFooter
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    colorScheme={"primary"}
                    variant={"outline"}
                    size={"sm"}
                    onClick={onClose}
                  >
                    {cancelText ? cancelText : "Annuler"}
                  </Button>
                  <Button
                    colorScheme={"primary"}
                    variant={"solid"}
                    size={"sm"}
                    onClick={action}
                  >
                    {confirmText ? confirmText : "Confirmer"}
                  </Button>
                </PopoverFooter>
              )}
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  )
}
