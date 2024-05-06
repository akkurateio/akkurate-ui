import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisLinux: FunctionComponent<IProps> = ({
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
      <g clip-path="url(#a)">
        <path d="m19.513 30 .057-.04c-.182-.072-.38-.129-.562-.227-.364-.198-.624-.519-.788-.928a.276.276 0 0 0-.21-.185c-.95-.25-1.914-.323-2.882-.277-.52.023-1.036.135-1.556.215a.282.282 0 0 0-.185.132c-.457.887-1.401 1.366-2.369.97-.514-.211-1.027-.43-1.544-.63a4.04 4.04 0 0 0-1.762-.288c-.296.02-.589-.003-.867-.135-.546-.26-.824-.736-.842-1.376-.006-.225.05-.472.14-.673.198-.436.192-.878.129-1.337-.045-.34-.114-.68-.045-1.026.054-.284.173-.525.385-.694.192-.151.4-.28.613-.396.403-.217.773-.485 1.075-.854.036-.043.066-.126.054-.175-.317-1.162-.23-2.317.027-3.469.322-1.449.92-2.756 1.696-3.967.305-.475.636-.93.944-1.402.472-.73.834-1.522.893-2.426.045-.644.015-1.29.003-1.938-.018-.967-.104-1.934-.012-2.9.105-1.083.442-2.057 1.147-2.845.562-.63 1.255-.967 2.04-1.083.63-.092 1.258-.07 1.867.152.962.346 1.616 1.066 2.022 2.076.293.73.428 1.495.481 2.287.048.683 0 1.36-.044 2.04-.07 1.135.071 2.217.707 3.155.233.346.505.66.765.983 1.314 1.654 2.264 3.518 2.652 5.697.207 1.145.254 2.293.07 3.448-.01.046 0 .116.026.145.26.304.355.687.445 1.073.033.152.069.3.108.449.068.25.176.479.352.657.83.835.478 2.449-.567 2.864-.693.274-1.267.73-1.772 1.307-.248.284-.486.578-.755.839a4.751 4.751 0 0 1-.693.547c-.147.096-.326.136-.493.198l.042.034h-.792V30Zm-1.667-18.822c-.05.026-.086.043-.12.066-.51.34-1.024.68-1.534 1.023-.093.063-.186.132-.281.192-.666.405-1.32.468-1.96-.076-.325-.274-.66-.532-.994-.796-.06-.046-.126-.079-.203-.132v.508c-.027 1.205-.242 2.34-.86 3.37a9.966 9.966 0 0 0-1.42 4.624c-.008.158-.023.313-.035.472h-.048c-.553-1.515-.46-3.043-.042-4.581a.178.178 0 0 0-.06.056c-.457.832-.785 1.716-.85 2.697-.043.617.008 1.22.25 1.795.224.531.591.907 1.022 1.23.576.436 1.155.872 1.717 1.328.332.267.618.594.789 1.02.218.55 0 1.141-.5 1.382-.038.02-.077.04-.122.06.018.026.024.043.036.056.338.402.63.835.816 1.35.024.069.101.132.167.168.675.36 1.395.416 2.127.363.806-.06 1.568-.317 2.306-.68.119-.06.203-.125.238-.277.042-.182.111-.36.168-.535.209-.633.313-1.287.334-1.967.021-.623.075-1.25.153-1.871.05-.42.23-.789.633-.924.152-.05.206-.129.233-.29.084-.453.367-.717.785-.74.568-.03 1.046.225 1.482.594.26.221.484.482.61.829.068.188.104.214.313.184-.003-.056 0-.112-.012-.168-.114-.723-.466-1.274-1.04-1.614-.265-.158-.331-.333-.325-.64.012-.809-.072-1.61-.314-2.383a5.33 5.33 0 0 0-.63-1.37c.224 1.307.469 2.614.164 3.948a.746.746 0 0 1-.06-.155c-.086-.34-.152-.69-.26-1.02-.346-1.066-.827-2.066-1.269-3.086-.442-1.02-.875-2.043-1.18-3.129-.08-.287-.149-.577-.227-.881h.003ZM7.882 27.973c0-.02.003-.043.006-.062.331.04.663.06.992.125.669.135 1.296.423 1.914.726.257.126.52.198.804.195.627-.007 1.135-.462 1.248-1.145a1.624 1.624 0 0 0-.104-.842 3.55 3.55 0 0 0-.586-1 7.618 7.618 0 0 1-1.099-1.808c-.17-.4-.367-.786-.582-1.159a2.887 2.887 0 0 0-.481-.614c-.317-.307-.616-.277-.905.056-.045.053-.09.106-.129.165-.32.489-.744.835-1.224 1.103-.186.102-.37.201-.55.313a.511.511 0 0 0-.239.485c.006.175.02.35.039.522.048.4.107.802.009 1.201-.051.205-.135.4-.197.6-.156.49.047.945.498 1.07.189.053.392.043.589.063l-.003.006Zm11.984-6.092a.667.667 0 0 0-.242.442 8.844 8.844 0 0 0-.084.796c-.03.485-.03.973-.072 1.455-.06.67-.26 1.307-.469 1.934-.155.465-.25.937-.206 1.439.051.564.383 1.02.887 1.149.511.128.944-.063 1.309-.462.176-.195.337-.41.51-.611.5-.58 1.049-1.093 1.718-1.43.227-.115.457-.237.654-.398a.962.962 0 0 0 .367-.911c-.03-.231-.152-.413-.286-.581a2.888 2.888 0 0 1-.559-1.221 4.979 4.979 0 0 0-.125-.476c-.129-.409-.389-.465-.747-.475-.03 0-.066.027-.09.053-.268.27-.591.439-.935.544-.283.086-.57.113-.854-.013-.397-.175-.591-.528-.702-.957-.02-.086-.045-.175-.072-.28l-.002.003Zm-4.887-13.36c-.185.063-.37.086-.514.185-.531.36-1.054.736-1.571 1.119-.2.148-.23.353-.107.584a.865.865 0 0 0 .173.234c.176.159.361.31.546.46.34.267.678.537 1.025.795.152.115.331.138.52.108.271-.043.52-.145.74-.32.44-.35.896-.666 1.383-.927.159-.086.308-.211.436-.347.168-.175.153-.412-.02-.574a1.469 1.469 0 0 0-.3-.208 67.686 67.686 0 0 0-1.666-.865c-.206-.102-.427-.161-.642-.24l-.003-.004Zm.72-.577c.033-.29.113-.555.266-.786.203-.307.537-.37.761-.122.09.096.153.238.191.373.096.314.063.634.003.95-.05.281-.047.274.198.39.107.05.155.03.2-.09.161-.435.209-.89.179-1.356a2.178 2.178 0 0 0-.236-.9c-.12-.225-.278-.406-.52-.463-.364-.082-.699 0-.982.278-.404.396-.571.92-.634 1.495-.003.036.027.102.054.109.167.05.34.085.517.125l.003-.003Zm-1.822.27c.101-.069.19-.122.271-.184a.162.162 0 0 0 .054-.106c-.009-.475-.09-.927-.361-1.314-.2-.28-.46-.376-.774-.303-.257.06-.38.277-.448.525-.2.71-.125 1.399.15 2.069.011.033.041.056.068.092.108-.066.21-.128.287-.178-.057-.191-.12-.353-.146-.521-.042-.268-.033-.535.092-.78.144-.283.436-.296.58-.016.083.165.128.36.188.538.018.053.027.109.042.182l-.003-.004Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(6 2)" d="M0 0h19v28H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
