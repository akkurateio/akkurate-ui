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
    type: "string | Dayjs",
    description: "Une date minimum ",
    required: false,
  },
  {
    props: "maxDate",
    type: "string | Dayjs",
    description: "Une date maximum",
    required: false,
  },
  {
    props: "disabledDates",
    type: "string[]",
    description: "Un tableau de date désactivé au format YYYY-MM-DD",
    required: false,
  },
  {
    props: "disabledDays",
    type: "number[]",
    description: "Un tableau de jour désactivé au format 0-6",
    required: false,
  },
  {
    props: "hint",
    type: "string",
    description: "Le texte d'indication",
    required: false,
  },
  {
    props: "size",
    type: "string",
    description: "Permet de changer la taille du select",
    required: false,
  },
]
