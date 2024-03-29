export const propsForCheckboxMultiple = [
  {
    props: "contentArray",
    type: "{ id: string | number; name: string; isChecked: boolean }[]",
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
    type: "(string | number)[]",
    description: "Tableau d'id des checkbox sélectionnées",
    required: true,
  },
  {
    props: "setSelectedCheckboxIds",
    type: "function",
    description:
      "Fonction pour mettre à jour le tableau d'id des checkboxes sélectionnées",
    required: true,
  },
  {
    props: "multiple",
    type: "boolean",
    default: "true",
    description: "Permet de basculer sur une sélection multiple",
    required: false,
  },
  {
    props: "columns",
    type: "number",
    default: "1",
    description:
      "Nombre de colonnes pour l'affichage des checkbox (1, 2, 3, 4, 6, 12)",
    required: false,
  },
  {
    props: "size",
    type: "sm, md, lg",
    default: "md",
    description: "Taille des checkbox (small, medium, large) et du text",
    required: false,
  },
]
