export const propsForInputNumber = [
  {
    props: "label",
    type: "string",
    description: "Label pour input number",
    required: false,
  },
  {
    props: "handleChange",
    type: "function",
    description: "Fonction pour récupérer la valeur saisie",
    required: true,
  },
  {
    props: "value",
    type: "number",
    description: "Valeur de l'input number",
    required: false,
  },
  {
    props: "step",
    type: "number",
    description: "Valeur de saut entre les nombres de l'input number",
    required: false,
  },
  {
    props: "precision",
    type: "number",
    description: "Nombre de chiffres après la virgule",
    required: false,
  },
  {
    props: "allowMouseWheel",
    type: "boolean",
    description:
      "Permettre la modification de la valeur avec la molette de la souris",
    required: false,
  },
  {
    props: "width",
    type: "string",
    description: "Largeur de l'input number",
    required: false,
  },
  {
    props: "height",
    type: "string",
    description: "Hauteur de l'input number",
    required: false,
  },
  {
    props: "defaultValue",
    type: "number",
    description: "Valeur par défaut de l'input number",
    required: false,
  },
  {
    props: "rounded",
    type: "string",
    description: "Permet d'arrondir les angles de l'input number",
    required: false,
  },
]
