export const propsForInputFile = [
  {
    props: "handleChange",
    type: "function",
    description: "La fonction qui permet de récupérer le/les fichiers",
    required: true,
  },
  {
    props: "value",
    type: "string",
    description: "La valeur du/des fichier(s)",
    required: true,
  },
  {
    props: "label",
    type: "string",
    description: "Le label de l'input",
    required: false,
  },
  {
    props: "multiple",
    type: "boolean",
    default: "false",
    description:
      "Permet de choisir si l'on veut un input à fichier unique ou multiple",
    required: false,
  },
  {
    props: "hint",
    type: "string",
    description: "Le texte d'indication",
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
