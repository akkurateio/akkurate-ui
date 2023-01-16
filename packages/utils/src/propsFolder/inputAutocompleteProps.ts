export const propsForInputAutocomplete = [
  {
    props: "handleChange",
    type: "function",
    description: "fonction pour récupérer la donnée saisie",
    required: true,
  },
  {
    props: "resultsArray",
    type: "string[]",
    description: "Tableau de résultats",
    required: true,
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
    props: "isInvalid",
    type: "boolean",
    description: "Indique si le champ est invalide",
    required: false,
  },
  {
    props: "hint",
    type: "string",
    description: "Indication sous le champ",
    required: false,
  },
  {
    props: "size",
    type: "string",
    description: "Permet de changer la taille du champ",
    required: false,
  },
]
