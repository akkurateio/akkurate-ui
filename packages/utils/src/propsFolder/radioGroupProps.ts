export const propsForRadioGroup = [
  {
    props: "handleChange",
    type: "function",
    description: "Fonction qui met à jour l'id de l'option sélectionnée",
    required: true,
  },
  {
    props: "valuesArray",
    type: "[{value: string | number | undefined, label: string}]",
    description: "Tableau des options { id: string | number; label:string }",
    required: true,
  },
  {
    props: "value",
    type: "string | number",
    description: "Id de l'option sélectionnée",
    required: true,
  },
  {
    props: "label",
    type: "string",
    description: "Label du groupe d'options",
    required: false,
  },
  {
    props: "size",
    type: "string",
    description: "Taille des options",
    required: false,
  },
  {
    props: "flexWrap",
    type: "string",
    description: "Wrap des options",
    required: false,
  },
  {
    props: "color",
    type: "string",
    description: "Couleur des options",
    required: false,
  },
  {
    prop: "hint",
    type: "string",
    description: "Texte d'aide",
    required: false,
  },
]
