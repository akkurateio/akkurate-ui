import { Box, ControlBoxOptions, HTMLChakraProps } from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useEffect, useState } from "react"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface PDFViewerOptions {
  src: string
  viewerOnly?: boolean
  withFitH?: boolean
}

interface BoxProps
  extends Omit<HTMLChakraProps<"div">, Omitted>,
    PDFViewerOptions,
    ThemingProps<"Box">,
    ControlBoxOptions {}

export const AcsPdfViewer: React.FC<BoxProps> = ({
  src,
  height,
  width,
  viewerOnly,
  withFitH,
  ...props
}) => {
  const [pdf, setPdf] = useState<string>("")

  useEffect(() => {
    let mySrc = src

    if (viewerOnly && !withFitH) {
      mySrc = mySrc + "#toolbar=0"
    }

    if (withFitH && !viewerOnly) {
      mySrc = mySrc + "#view=FitH"
    }

    if (viewerOnly && withFitH) {
      mySrc = mySrc + "#view=FitH&toolbar=0"
    }

    setPdf(mySrc)
  }, [src, viewerOnly, withFitH])

  return (
    <Box
      height={height ? height : "full"}
      width={width ? width : "full"}
      {...props}
    >
      <iframe src={pdf} height={"100%"} width={"100%"} />
    </Box>
  )
}

export default AcsPdfViewer
