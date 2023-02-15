export const propsForInputText = [
  {
    props: "handleChange",
    type: "function",
    description: "fonction pour récupérer la données saisie",
    required: false,
  },
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
    props: "placeholder",
    type: "string",
    description: "Placeholder du champ",
    required: false,
  },
  {
    props: "defaultValue",
    type: "string",
    description: "Valeur par défaut du champ",
    required: false,
  },
  {
    props: "isInvalid",
    type: "boolean",
    description: "Indique si le champ est invalide",
    required: false,
  },
  {
    props: "variant",
    type: "string",
    description: "Variant du champ",
    required: false,
  },
  {
    props: "register",
    type: "function",
    description: "props qui permet d'associer avec React Hook Form",
    required: false,
  },
  {
    props: "rounded",
    type: "string",
    description: "Permet d'arrondir les coins du champ",
    required: false,
  },
  {
    props: "size",
    type: "string",
    default: "md",
    description: "Permet de changer la taille de l'input",
    required: false,
  },
]
