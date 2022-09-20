// import React, {FunctionComponent, useState} from "react"
// import {FormControlOptions, HTMLChakraProps, Switch} from "@chakra-ui/react"
// import {MinuteStep} from "../types";
// import {ThemingProps} from "@chakra-ui/system";
// import FormControlLayout from "./FormControlLayout";
//
// type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"
//
// interface InputOptions {
//     onChange: (e: boolean) => void
//     checked?: boolean
//     value?: string
//     label?: string
//     error?: string
//     hint?: string
// }
//
// interface InputProps
//     extends Omit<HTMLChakraProps<"switch">, Omitted>,
//         InputOptions,
//         ThemingProps<"Switch">,
//         FormControlOptions {}
//
// export const AcsSwitch: FunctionComponent<InputProps> = ({
//     onChange,
//      ...props
//  }) => {
//     const propsForInput = () => {
//         const {
//             label,
//             hint,
//             error,
//             isRequired,
//             isDisabled,
//             isInvalid,
//             isReadOnly,
//             size,
//             ...rest
//         } = props
//         return rest
//     }
//     const [checked, setChecked] = useState(false)
//
//     const handleSwitch = (check: any) => {
//         setChecked(check.target.checked)
//         if (check.target.checked) {
//             setChecked(true)
//         }
//         if (!check.target.checked) {
//             setChecked(false)
//         }
//     }
//     return (
//         <FormControlLayout {...props}>
//             <Switch {...propsForInput()} size={props.size} checked={checked}  onChange={handleSwitch} />
//         </FormControlLayout>
//     )
// }
