export const propsForInputPin = [
  {
    props: "handleChange",
    type: "function",
    description: "permet de récuperé les valeurs ",
    required: true,
  },
  {
    props: "pinNumber",
    type: "number",
    description: "nombre de chiffre du code",
    required: true,
  },
  {
    props: "bg",
    type: "string",
    description: "couleur de fond",
    required: false,
  },
  {
    props: "focusBorderColor",
    type: "string",
    description: "couleur de la bordure lors du focus",
    required: false,
  },
  {
    props: "errorBorderColor",
    type: "string",
    description: "couleur de la bordure lors de l'erreur",
    required: false,
  },
]
