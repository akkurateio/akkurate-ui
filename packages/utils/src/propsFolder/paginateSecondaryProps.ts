export const propsForPaginateSecondary = [
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
    props: "withBtn",
    type: "boolean",
    description: "Ajoute la possibilité des bouton de navigation",
    required: false,
  },
  {
    props: "totalItems",
    type: "number",
    description: "Le nombre total d'éléments",
    required: false,
  },
]
