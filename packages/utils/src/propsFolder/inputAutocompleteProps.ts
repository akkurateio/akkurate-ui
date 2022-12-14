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
    props: "hint",
    type: "string",
    description: "Indication sous le champ",
    required: false,
  },
]
