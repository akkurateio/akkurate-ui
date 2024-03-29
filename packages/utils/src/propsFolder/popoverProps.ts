export const propsForPopover = [
  {
    props: "body",
    type: "ReactNode",
    description: "Le contenu du popover",
    required: true,
  },
  {
    props: "placement",
    type: "string",
    description: "Permet de choisir la position du popover",
    required: false,
  },
  {
    props: "title",
    type: "string",
    description: "Le titre du popover",
    required: false,
  },
  {
    props: "action",
    type: "function",
    description: "La fonction qui permet de réaliser une action sur un bouton",
    required: false,
  },
  {
    props: "hasCloseButton",
    type: "boolean",
    default: "false",
    description: "Permet d'afficher ou non le bouton de fermeture",
    required: false,
  },
  {
    props: "hasArrow",
    type: "boolean",
    default: "false",
    description: "Permet d'afficher ou non la flèche du popover",
    required: false,
  },
  {
    props: "hasFooter",
    type: "boolean",
    default: "true",
    description: "Permet d'afficher ou non le footer du popover",
    required: false,
  },
  {
    props: "footer",
    type: "ReactNode",
    description: "Le contenu du footer du popover",
    required: false,
  },
  {
    props: "triggerBtn",
    type: "ReactNode",
    description:
      "Le bouton qui permet d'ouvrir ou de fermer le popover personalisable avec un etat ouvert ou fermé",
    required: false,
  },
  {
    props: "triggerBtnOpen",
    type: "ReactNode",
    description:
      "bouton qui permet d'ouvrir le popover personalisable avec un etat ouvert",
    required: false,
  },
  {
    props: "triggerBtnClose",
    type: "ReactNode",
    description:
      "Le bouton qui permet de fermer le popover personalisable avec un etat fermé",
    required: false,
  },
  {
    props: "closeOnBlur",
    type: "boolean",
    default: "true",
    description: "Permet de fermer le popover en cliquant à l'extérieur",
    required: false,
  },
  {
    props: "cancelText",
    type: "string",
    description: "Le texte du bouton de fermeture",
    required: false,
  },
  {
    props: "confirmText",
    type: "string",
    description: "Le texte du bouton de confirmation",
    required: false,
  },
]
