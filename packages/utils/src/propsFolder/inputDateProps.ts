export const propsForInputDate = [
  {
    props: "handleChange",
    type: "function",
    description: "La fonction qui permet de récupérer la date",
    required: true,
  },
  {
    props: "value",
    type: "string",
    description: "La valeur de la date",
    required: true,
  },
  {
    props: "label",
    type: "string",
    description: "Le label de l'input",
    required: false,
  },
  {
    props: "minDate",
    type: "string",
    description: "Une date minimum ",
    required: false,
  },
  {
    props: "maxDate",
    type: "string",
    description: "Une date maximum",
    required: false,
  },
  {
    props: "disabledDate",
    type: "Array",
    description: "Un tableau de date désactivé",
    required: false,
  },
  {
    props: "disabledDays",
    type: "Array",
    description: "Un tableau de jour désactivé",
    required: false,
  },
]
