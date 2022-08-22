import { createIcon } from "@chakra-ui/icon"

export const SpinnerAlternativeIcon = createIcon({
  displayName: "SpinnerAlternativeIcon",
  viewBox: "0 0 32 32",
  path: (
    <g fill="currentColor">
      <defs>
        <style>
          .cls-1{"opacity:.1;"}.cls-2{"opacity:.4;"}.cls-3{"opacity:.35;"}.cls-4
          {"opacity:.55;"}.cls-5{"opacity:.85;"}.cls-6{"opacity:.7;"}
        </style>
      </defs>
      <circle cx="16" cy="5" r="2" />
      <circle className="cls-2" cx="16" cy="27" r="2" />
      <circle className="cls-4" cx="8.222" cy="23.778" r="2" />
      <circle className="cls-1" cx="27" cy="16" r="2" />
      <circle className="cls-6" cx="5" cy="16" r="2" />
      <circle className="cls-3" cx="23.778" cy="23.778" r="2" />
      <circle className="cls-5" cx="8.222" cy="8.222" r="2" />
    </g>
  ),
})
