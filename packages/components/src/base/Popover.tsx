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
import { FunctionComponent, useRef } from "react"

interface PopoverOptions {
  body: JSX.Element
  action?: () => void
  title?: string
  hasCloseBtn?: boolean
  hasArrow?: boolean
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

export const AcsPopover: FunctionComponent<AcsPopoverProps> = ({
  body,
  title,
  hasCloseBtn = false,
  hasArrow = false,
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
      placement={props.placement ? props.placement : "bottom"}
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
              {title && <PopoverHeader>This is the header</PopoverHeader>}
              {hasArrow && <PopoverArrow />}
              {hasCloseBtn && <PopoverCloseButton />}
              <PopoverBody>{body}</PopoverBody>
              {footer ? (
                footer
              ) : (
                <PopoverFooter
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    colorScheme={"primary"}
                    variant={"outline"}
                    onClick={onClose}
                  >
                    {cancelText ? cancelText : "Annuler"}
                  </Button>
                  <Button
                    colorScheme={"primary"}
                    variant={"solid"}
                    onClick={action}
                    ml={3}
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
