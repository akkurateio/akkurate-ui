export const propsForInputPassword = [
  {
    props: "label",
    type: "string",
    description: "Label du champ",
    required: false,
  },
  {
    props: "value",
    type: "string",
    description: "Valeur du champ",
    required: false,
  },
  {
    props: "fontSize",
    type: "string",
    description: "Taille de la police",
    required: false,
  },
  {
    props: "isInvalid",
    type: "boolean",
    description: "Indique si le champ est invalide",
    required: false,
  },
  {
    props: "width",
    type: "string",
    description: "Largeur du champ",
    required: false,
  },
  {
    props: "height",
    type: "string",
    description: "Hauteur du champ",
    required: false,
  },
  {
    props: "variant",
    type: "string",
    description: "Variant du champ",
    required: false,
  },
  {
    props: "register",
    type: "function",
    description: "props qui permet d'associer avec hook",
    required: false,
  },
  {
    props: "iconOpen",
    type: "JSX.Element",
    description: "Icone oeil ouvert mais peut être changer si besoin",
    required: false,
  },
  {
    props: "iconClose",
    type: "JSX.Element",
    description: "Icone oeil fermé mais peut être changer si besoin",
    required: false,
  },
]
