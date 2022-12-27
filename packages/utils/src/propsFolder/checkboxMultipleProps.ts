export const propsForCheckboxMultiple = [
  {
    props: "contentArray",
    type: "string[]",
    description:
      "Tableau d'objet comportant un id, un name et un booléen pour savoir si l'objet est sélectionné ou non",
    required: true,
  },
  {
    props: "label",
    type: "string",
    description: "Label du composant",
    required: false,
  },
  {
    props: "selectedCheckboxIds",
    type: "string[]",
    description: "Tableau d'id des checkbox sélectionnées",
    required: true,
  },
  {
    props: "setSelectedCheckboxIds",
    type: "function",
    description:
      "Fonction pour mettre à jour le tableau d'id des checkbox sélectionnées",
    required: true,
  },
  {
    props: "multiple",
    type: "boolean",
    description: "Permet de basculer sur une sélection multiple",
    required: false,
  },
  {
    props: "direction",
    type: "string",
    description:
      "Permet de choisir la direction de l'affichage des checkbox (row / column)",
    required: false,
  },
  {
    props: "width",
    type: "string",
    description: "Permet de définir la largeur du composant",
    required: false,
  },
  {
    props: "height",
    type: "string",
    description: "Permet de définir la hauteur du composant",
    required: false,
  },
  // {props:"fontSize", type:"string",  description:"Permet de définir la taille de la police", required:false},
  {
    props: "backgroundColor",
    type: "string",
    description: "Permet de définir la couleur de fond du composant",
    required: false,
  },
  {
    props: "margin",
    type: "string",
    description: "Permet de définir la marge du composant",
    required: false,
  },
  {
    props: "marginTop",
    type: "string",
    description: "Permet de définir la marge du composant",
    required: false,
  },
  {
    props: "marginBottom",
    type: "string",
    description: "Permet de définir la marge du composant",
    required: false,
  },
  {
    props: "marginLeft",
    type: "string",
    description: "Permet de définir la marge du composant",
    required: false,
  },
  {
    props: "marginRight",
    type: "string",
    description: "Permet de définir la marge du composant",
    required: false,
  },
  {
    props: "padding",
    type: "string",
    description: "Permet de définir le padding du composant",
    required: false,
  },
  {
    props: "paddingTop",
    type: "string",
    description: "Permet de définir le padding du composant",
    required: false,
  },
  {
    props: "paddingBottom",
    type: "string",
    description: "Permet de définir le padding du composant",
    required: false,
  },
  {
    props: "paddingLeft",
    type: "string",
    description: "Permet de définir le padding du composant",
    required: false,
  },
  {
    props: "paddingRight",
    type: "string",
    description: "Permet de définir le padding du composant",
    required: false,
  },
  {
    props: "spacing",
    type: "string",
    description: "Permet de définir l'espacement entre les checkbox",
    required: false,
  },
  {
    props: "justifyContent",
    type: "string",
    description: "Permet de définir l'alignement horizontal des checkbox",
    required: false,
  },
  {
    props: "alignItems",
    type: "string",
    description: "Permet de définir l'alignement vertical des checkbox",
    required: false,
  },
]
