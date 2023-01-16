export const propsForCheckboxCard = [
  {
    props: "contentArray",
    type: "array",
    description:
      "Tableau des options { id: string | number; body: JSX.Element }",
    required: true,
  },
  {
    props: "selectedCardId",
    type: "(string | number)[]",
    description: "Id de l'option sélectionnée",
    required: true,
  },
  {
    props: "setSelectedCardId",
    type: "function",
    description: "Fonction qui met à jour l'id des options sélectionnées",
    required: true,
  },
  {
    props: "columns",
    type: "number",
    description: "Nombre de colonnes",
    required: false,
  },
  {
    props: "spacing",
    type: "number",
    description: "Espacement entre les options",
    required: false,
  },
  {
    props: "label",
    type: "string",
    description: "Label du groupe d'options",
    required: false,
  },
]
