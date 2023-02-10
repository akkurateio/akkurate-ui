export const propsForAcsDateRange = [
  {
    props: "handleChange",
    type: "function",
    description: "Fonction qui permet de récupérer les dates sélectionnées",
    required: true,
  },
  {
    props: "value",
    type: "Array",
    description: "Tableau des dates sélectionnées",
    required: true,
  },
  {
    props: "label",
    type: "string",
    description: "Label du composant",
    required: false,
  },
  {
    props: "numberOfMonths",
    type: "number",
    default: 1,
    description: "Nombre de mois voulue affichés",
    required: false,
  },
  {
    props: "btnColor",
    type: "string",
    description: "Couleur du bouton start et end date selectioner",
    required: false,
  },
  {
    props: "hoverColor",
    type: "string",
    description: "Couleur du hover sur les dates",
    required: false,
  },
  {
    props: "disabledStartDays",
    type: "Array",
    description: "Tableau des jours désactivés pour le start date",
    required: false,
  },
  {
    props: "disabledEndDays",
    type: "Array",
    description: "Tableau des jours désactivés pour le end date",
    required: false,
  },
  {
    props: "disabledStartDates",
    type: "Array",
    description: "Tableau des dates désactivés pour le start date",
    required: false,
  },
  {
    props: "disabledEndDates",
    type: "Array",
    description: "Tableau des dates désactivés pour le end date",
    required: false,
  },
  {
    props: "numericFormat",
    type: "boolean",
    description: "Permet d'afficher les dates en format numérique",
    required: false,
  },
]
