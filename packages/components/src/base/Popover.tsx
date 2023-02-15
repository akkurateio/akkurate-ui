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
              ? triggerBtnClosed
              : triggerBtnOpened}
          </PopoverTrigger>
          <Portal>
            <PopoverContent p={3} {...props}>
              {title && (
                <PopoverHeader p={0} mb={4}>
                  {title}
                </PopoverHeader>
              )}
              {hasArrow && <PopoverArrow />}
              {hasCloseBtn && <PopoverCloseButton />}
              <PopoverBody p={0}>{body}</PopoverBody>
              {hasFooter && footer ? (
                <PopoverFooter p={0} mt={4}>
                  {footer}
                </PopoverFooter>
              ) : (
                <PopoverFooter
                  pt={2}
                  pr={0}
                  pb={0}
                  pl={0}
                  mt={4}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    backgroundColor={"neutral.400"}
                    outline={"none"}
                    size={"sm"}
                    onClick={onClose}
                    color={"white"}
                    _hover={{ backgroundColor: "neutral.500" }}
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
