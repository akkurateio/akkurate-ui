export const propsForInputPassword = [
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
    description: "props qui permet d'associer avec hook",
    required: false,
  },
  {
    props: "iconClose",
    type: "JSX.Element",
    default: "<AisEye />",
    description: "Permet de modifier l’icône de l'oeil ouvert",
    required: false,
  },
  {
    props: "iconOpen",
    type: "JSX.Element",
    default: "<AisEyeClosed />",
    description: "Permet de modifier l'l’icône de l'oeil fermé",
    required: false,
  },
  {
    props: "hint",
    type: "string",
    description: "Permet d'afficher un message d'aide",
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
