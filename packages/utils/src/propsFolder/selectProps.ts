export const propsForSelect = [
  {
    props: "options (? veut dire optionnel)",
    type: "[{value: string, label: string, isDisabled?: boolean , icon?: JSX.Element}]",
    description:
      "Tableau des options avec une value, un label et en option un isDisabled et une icon",
    required: true,
  },
  {
    props: "value",
    type: "array",
    description: "Tableau des valeurs sélectionnées",
    required: true,
  },
  {
    props: "handleChange",
    type: "function",
    description:
      "Fonction qui prend en paramètre le tableau des valeurs sélectionnées",
    required: true,
  },
  {
    props: "label",
    type: "string",
    description: "Label du select",
    required: false,
  },
  {
    props: "isInvalid",
    type: "boolean",
    description: "Indique si le select est invalide",
    required: false,
  },
  {
    props: "fontSize",
    type: "string",
    description: "Taille de la police",
    required: false,
  },
  {
    props: "rounded",
    type: "string",
    description: "Permet d'arrondir les coins du champ",
    required: false,
  },
  {
    props: "selectedBgColor",
    type: "string",
    description:
      "Permet de changer la couleur de fond des options sélectionnées",
    required: false,
  },
  {
    props: "iconOnLeft",
    type: "boolean",
    description: "Permet d'afficher l'icone à gauche du select",
    required: false,
  },
]
