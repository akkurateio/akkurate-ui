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
    description: "Le label dde l'input",
    required: false,
  },
  {
    props: "multiple",
    type: "boolean",
    description:
      "Permet de choisir si l'on veut un input a fichier unique ou multiple",
    required: false,
  },
]
