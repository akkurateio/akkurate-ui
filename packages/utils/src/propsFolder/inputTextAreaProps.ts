export const propsForInputTextArea = [
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
    props: "autoResize",
    type: "boolean",
    description:
      "Permet de redimensionner automatiquement la zone de texte en fonction de la hauteur du contenu",
    required: false,
  },
  {
    props: "minH",
    type: "string",
    description: "Hauteur minimale de la zone de texte",
    required: false,
  },
  {
    props: "fontSize",
    type: "string",
    default: "sm",
    description: "Taille de la police",
    required: false,
  },
]
