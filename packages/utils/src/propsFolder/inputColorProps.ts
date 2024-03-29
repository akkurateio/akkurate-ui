export const propsForInputColor = [
  {
    props: "handleChange",
    type: "function",
    description:
      "Fonction permettant de changer la valeur de la couleur dans l'input",
    required: true,
  },
  {
    props: "value",
    type: "string",
    description: "Valeur de la couleur",
    required: false,
  },
  {
    props: "isInvalid",
    type: "boolean",
    description: "Permet de savoir si la couleur est invalide",
    required: false,
  },
  {
    props: "label",
    type: "string",
    description: "Label de l'input",
    required: false,
  },
  {
    props: "iconOpen",
    type: "JSX.Element",
    default: "<AisColorPalette />",
    description: "Permet de changer l'icon palette quand ouvert",
    required: false,
  },
  {
    props: "iconClose",
    type: "JSX.Element",
    default: "<AisColorPalette />",
    description: "Permet de changer l'icon palette quand fermer",
    required: false,
  },
  {
    props: "size",
    type: "string",
    default: "md",
    description: "Permet de changer la taille de l'input",
    required: false,
  },
  {
    props: "rounded",
    type: "string",
    description: "Permet de changer d'arrondir l'input",
    required: false,
  },
]
