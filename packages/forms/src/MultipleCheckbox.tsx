// import React, { useState } from "react"
// import {
//   Checkbox,
//   CheckboxGroup,
//   HTMLChakraProps,
//   UseSliderProps,
// } from "@chakra-ui/react"
// import { ThemingProps } from "@chakra-ui/system"
//
// interface AcsCheckboxProps {
//   // items: [
//   //   {
//   //     id: number
//   //     name: string
//   //     isChecked?: boolean
//   //   },
//   // ]
// }
//
// interface CheckboxGroupProps
//   extends Omit<ThemingProps<"Checkbox">, keyof UseSliderProps>,
//     ThemingProps<"Checkbox">,
//     UseSliderProps,
//     AcsCheckboxProps {
//   items: [
//     {
//       id: number
//       name: string
//       isChecked?: boolean
//     },
//   ]
// }
//
// const AcsMultipleCheckbox: React.FC<AcheckboxGroupProps> = ({ ...props }) => {
//   const [allIsChecked, setAllIsChecked] = useState(false)
//   const [items, setItems] = useState(props.items)
//
//   const handleCheckAll = () => {
//     const newItems = items.map((items) => ({
//       ...items,
//       isChecked: !allIsChecked,
//     }))
//     setItems(newItems[items.map((items) => items.name)])
//     setAllIsChecked(!allIsChecked)
//   }
//
//   const handleCheck = (id: number) => {
//     const newItems = items.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           isChecked: !item.isChecked,
//         }
//       }
//       return item
//     })
//     setItems(newItems[0].name)
//     setAllIsChecked(newItems.every((item) => item.isChecked))
//   }
//   return (
//     <CheckboxGroup>
//       <Checkbox
//         isChecked={allIsChecked}
//         onChange={handleCheckAll}
//         marginRight={5}
//       >
//         Check all
//       </Checkbox>
//       {items.map((item) => (
//         <Checkbox
//           marginRight={2}
//           key={item.id}
//           isChecked={item.isChecked}
//           onChange={() => handleCheck(item.id)}
//           items={props.items}
//         >
//           {item.name}
//         </Checkbox>
//       ))}
//     </CheckboxGroup>
//   )
// }
