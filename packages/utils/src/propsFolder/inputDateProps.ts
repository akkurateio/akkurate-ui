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
    default: "md",
    description: "Permet de changer la taille de l'input",
    required: false,
  },
  {
    props: "hoverBg",
    type: "string",
    default: "undefined",
    description: "Permet de changer la couleur de fond au hover",
    required: false,
  },
  {
    props: "hoverColor",
    type: "string",
    default: "undefined",
    description: "Permet de changer la couleur de texte au hover",
    required: false,
  },

  {
    props: "selectedBg",
    type: "string",
    default: "undefined",
    description: "Permet de changer la couleur de fond du jour sélectionné",
    required: false,
  },
  {
    props: "selectedColor",
    type: "string",
    default: "undefined",
    description: "Permet de changer la couleur de texte du jour sélectionné",
    required: false,
  },

  {
    props: "currentMonthBg",
    type: "string",
    default: "undefined",
    description: "Permet de changer la couleur de fond du mois courant",
    required: false,
  },
  {
    props: "currentMonthColor",
    type: "string",
    default: "undefined",
    description: "Permet de changer la couleur de texte du mois courant",
    required: false,
  },

  {
    props: "isEditable",
    type: "boolean",
    default: "true",
    description: "Permet de rendre l'input éditable ou non",
    required: false,
  },
]
