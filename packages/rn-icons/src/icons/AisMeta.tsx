import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisMeta: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 18.288c0 1.53.302 2.871.917 3.894.753 1.255 1.97 2.087 3.892 2.087 1.621 0 2.853-.727 4.295-2.648.823-1.097 1.24-1.761 2.885-4.679l1.02-1.807c.066.107.133.217.199.328l2.332 3.895c.784 1.311 1.803 2.77 2.674 3.59 1.134 1.07 2.16 1.321 3.317 1.321 1.861 0 2.968-.982 3.536-1.966.588-1.017.933-2.305.933-4.057 0-2.948-.738-5.804-2.258-8.071C25.353 8.104 23.54 7 21.634 7c-1.135 0-2.262.506-3.308 1.418-.706.616-1.363 1.394-1.971 2.216-.75-.949-1.446-1.671-2.122-2.223C12.953 7.365 11.725 7 10.491 7c-2.131 0-3.99 1.388-5.277 3.373C3.764 12.61 3 15.508 3 18.288Zm2.808.1c0 .994.218 1.756.503 2.217.373.604.93.86 1.498.86.733 0 1.403-.182 2.694-1.968.729-1.009 1.55-2.305 2.258-3.423.296-.468.573-.905.815-1.277L14.68 13.1c-.54-.769-1.004-1.354-1.337-1.708-.669-.71-1.528-1.567-2.898-1.567-.479 0-.926.145-1.344.405-.55.343-1.048.887-1.496 1.564-1.115 1.683-1.798 4.189-1.798 6.596Zm13.184-3.846a48.822 48.822 0 0 0-1.361-2.149c.076-.12.153-.236.23-.35 1.214-1.805 2.294-2.818 3.637-2.818 1.242 0 2.37.821 3.24 2.165 1.228 1.894 1.785 4.545 1.785 6.934 0 1.676-.398 3.14-1.992 3.14-.629 0-1.112-.249-1.803-1.086-.537-.652-1.455-2.034-3.068-4.722l-.668-1.114Z"
      />
    </ReactSVG.G>,
  ],
})
