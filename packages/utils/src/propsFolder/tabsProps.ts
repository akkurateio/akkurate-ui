export const propsForTabs = [
  {
    props: "tabNameArray",
    type: "string[]",
    description: "Tableau de string",
    required: true,
  },
  {
    props: "tabContentArray",
    type: "JSX.Element[]",
    description: "Tableau de JSX.Element",
    required: true,
  },
  {
    props: "width",
    type: "string",
    description: "Largeur du composant",
    required: false,
  },
  {
    props: "colorScheme",
    type: "string",
    description: "Couleur du composant",
    required: false,
  },
]
