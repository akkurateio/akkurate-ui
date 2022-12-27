export const propsForInputPhone = [
  {
    props: "value",
    type: "string",
    description: "valeur de l'input",
    required: false,
  },
  {
    props: "handleChange",
    type: "function",
    description: " fonction qui permet de modifier la valeur de l'input",
    required: true,
  },
  {
    props: "label",
    type: "string",
    description: "label de l'input",
    required: false,
  },
  {
    props: "isInvalid",
    type: "boolean",
    description: "indique si l'input est invalide",
    required: false,
  },
  {
    props: "fontSizePhone",
    type: "string",
    description: "taille de la police de l'input",
    required: false,
  },
  {
    props: "countriesArray",
    type: "array[name:string, icon: JSX.Element, code: string, prefix: string]",
    description: "tableau des pays",
    required: false,
  },
  {
    props: "hint",
    type: "string",
    description: "texte d'indication",
    required: false,
  },
]
