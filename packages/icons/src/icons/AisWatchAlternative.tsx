import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisWatchAlternative: FunctionComponent<IProps> = ({
  size = IconSize.md,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={"0 0 32 32"}
      fill={"currentColor"}
      className={className}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <path d="M16 10a1 1 0 0 1 1 1v4.586l1.707 1.707a1 1 0 0 1-1.414 1.414L15.586 17A2 2 0 0 1 15 15.586V11a1 1 0 0 1 1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m8.038 9.725.143.04A9.958 9.958 0 0 0 6 16c0 2.335.8 4.482 2.14 6.184l-.118.025 1.161 5.42A3 3 0 0 0 12.117 30h6.874a3 3 0 0 0 2.885-2.176l1.426-4.992a9.973 9.973 0 0 0 2.502-4.851A1 1 0 0 0 27 17v-2.001a1 1 0 0 0-1.196-.98 9.972 9.972 0 0 0-2.447-4.793l-1.04-4.856A3 3 0 0 0 19.383 2H12.51a3 3 0 0 0-2.885 2.176l-1.586 5.55ZM12.508 4a1 1 0 0 0-.96.725l-.788 2.756A9.953 9.953 0 0 1 16 6c1.778 0 3.447.464 4.894 1.277L20.36 4.79a1 1 0 0 0-.978-.79H12.51Zm9.069 17.736-.039-.01-.018.065a8 8 0 1 1 .057-.055Zm-.934 3.123-.69 2.416a1 1 0 0 1-.962.725h-6.874a1 1 0 0 1-.978-.79l-.608-2.836A9.954 9.954 0 0 0 16 26a9.956 9.956 0 0 0 4.643-1.141Z"
      />
    </svg>
  )
}
