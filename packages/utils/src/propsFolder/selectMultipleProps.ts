export const propsForSelectMultiple = [
  {
    props: "options",
    type: "array",
    description:
      "Tableau des option avec une value, un label et en option un isDisabled et une icône",
    required: true,
  },
  {
    props: "value",
    type: "array",
    description: "Tableau des valeurs sélectionnées",
    required: true,
  },
  {
    props: "handleChange",
    type: "function",
    description:
      "Fonction qui prend en paramètre le tableau des valeurs sélectionnées",
    required: true,
  },
  {
    props: "label",
    type: "string",
    description: "Label du select",
    required: false,
  },
  {
    props: "isInvalid",
    type: "boolean",
    description: "Indique si le select est invalide",
    required: false,
  },
  {
    props: "fontSize",
    type: "string",
    description: "Taille de la police",
    required: false,
  },
]
