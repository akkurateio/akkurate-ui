export const propsForInputTime = [
  {
    props: "label",
    type: "string",
    description: "Label du champ",
    required: false,
  },
  {
    props: "value",
    type: "string",
    description: "Valeur du champ",
    required: false,
  },
  {
    props: "handleChange",
    type: "function",
    description: "Fonction de gestion de la modification de la valeur",
    required: true,
  },
  {
    props: "minuteStep",
    type: "number",
    description: "Pas de la valeur en minutes",
    required: false,
  },
  {
    props: "disabledHours",
    type: "number[]",
    description: "Heures désactivées",
    required: false,
  },
  {
    props: "disabledMinutes",
    type: "number[]",
    description: "Minutes désactivées",
    required: false,
  },
  {
    props: "isInvalid",
    type: "boolean",
    description: "Indique si le champ est invalide",
    required: false,
  },
  {
    props: "width",
    type: "string",
    description: "Largeur du champ",
    required: false,
  },
  {
    props: "height",
    type: "string",
    description: "Hauteur du champ",
    required: false,
  },
  {
    props: "rounded",
    type: "string",
    description: "Permet d'arrondir les coins du champ",
    required: false,
  },
]
