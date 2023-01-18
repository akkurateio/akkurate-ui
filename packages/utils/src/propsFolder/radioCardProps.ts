export const propsForRadioCard = [
  {
    props: "contentArray",
    type: "array",
    description:
      "Tableau des options { id: string | number; body: JSX.Element }",
    required: true,
  },
  {
    props: "selectedCardId",
    type: "string | number",
    description: "Id de l'option sélectionnée",
    required: true,
  },
  {
    props: "setSelectedCardId",
    type: "function",
    description: "Fonction qui met à jour l'id de l'option sélectionnée",
    required: true,
  },
  {
    props: "columns",
    type: "number",
    default: "2",
    description: "Nombre de colonnes",
    required: false,
  },
  {
    props: "spacing",
    type: "number",
    default: "6",
    description: "Espacement entre les options",
    required: false,
  },
  {
    props: "justifyContent",
    type: "string",
    default: "space-between",
    description: "Alignement horizontal des options",
    required: false,
  },
  {
    props: "heightBox",
    type: "string",
    default: "auto",
    description: "Hauteur de la box",
    required: false,
  },
  {
    props: "alignItems",
    type: "string",
    default: "center",
    description: "Alignement vertical des options",
    required: false,
  },
  {
    props: "label",
    type: "string",
    description: "Label du groupe d'options",
    required: false,
  },
]
