export const propsForPaginate = [
  {
    props: "max",
    type: "number",
    description: "Le nombre de pages besoin",
    required: true,
  },
  {
    props: "current",
    type: "number",
    description: "La page actuelle",
    required: true,
  },
  {
    props: "handleChangePage",
    type: "function",
    description: "La fonction qui permet de changer de page",
    required: true,
  },
  {
    props: "withPageInfo",
    type: "boolean",
    description: "Afficher le nombre de page",
    required: false,
  },
  {
    props: "totalItems",
    type: "number",
    description: "Le nombre total d'éléments",
    required: false,
  },
  {
    props: "composantPaginateSecondary",
    type: "ReactNode",
    description:
      "Offre la possibilité d'utilisé le composant secondaire en complément en suivant l'exemple suivant. Le composant sera affiché à droite de la pagination",
    required: false,
  },
]
