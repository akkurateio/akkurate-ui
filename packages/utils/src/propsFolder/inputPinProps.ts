export const propsForInputPin = [
  {
    props: "handleChange",
    type: "function",
    description: "permet de récupérer les valeurs ",
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
  {
    props: "htmlSize",
    type: "number",
    description: "taille du champ",
    required: false,
  },
  {
    props: "label",
    type: "string",
    description: "label du champ",
    required: false,
  },
  {
    props: "hint",
    type: "string",
    description: "texte d'aide",
    required: false,
  },
]
