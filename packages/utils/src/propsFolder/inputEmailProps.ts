export const propsForInputEmail = [
  {
    props: "handleChange",
    type: "function",
    description: "fonction pour récupérer la donnée saisie",
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
    props: "fontSize",
    type: "string",
    description: "Taille de la police",
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
    props: "hint",
    type: "string",
    description: "Indique un message d'aide",
    required: false,
  },
]