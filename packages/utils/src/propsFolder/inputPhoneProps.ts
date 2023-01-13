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
    props: "hint",
    type: "string",
    description: "texte d'indication",
    required: false,
  },
  {
    props: "rounded",
    type: "string",
    description: "Permet d'arrondir les coins du champ",
    required: false,
  },
]
