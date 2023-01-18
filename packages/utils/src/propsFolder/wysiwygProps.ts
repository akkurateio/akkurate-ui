export const propsForWysiwyg = [
  {
    props: "value",
    type: "string | undefined",
    description: "La valeur du champ en markdown",
    required: true,
  },
  {
    props: "setValue",
    type: "function",
    description: "La fonction qui retourne la valeur en markdown",
    required: true,
  },
  {
    props: "label",
    type: "string",
    description: "Le label du champ",
    required: false,
  },
  {
    props: "isInvalid",
    type: "boolean",
    default: "false",
    description: "Indique si le champ est invalide",
    required: false,
  },
  {
    props: "setFiles",
    type: "function (files: FileList | File[] | null)",
    description: "Permet d'utiliser la dropzone pour envoyer des fichier avec",
    required: false,
  },
  {
    props: "bgSecondary",
    type: "boolean",
    default: "false",
    description: "Permet de changer la couleur de fond du champ",
    required: false,
  },
  {
    props: "bgPrimaryColor",
    type: "string",
    description: "Permet de changer la couleur de fond du champ",
    required: false,
  },
  {
    props: "bgSecondaryColor",
    type: "string",
    description: "Permet de changer la couleur de fond du champ",
    required: false,
  },
  {
    props: "minHeight",
    type: "string",
    default: "100px",
    description: "Permet de définir la hauteur minimum du champ",
    required: false,
  },
  {
    props: "height",
    type: "string",
    default: "auto",
    description: "Permet de définir la hauteur du champ",
    required: false,
  },
  {
    props: "widthMenuBar",
    type: "boolean",
    default: "true",
    description: "Afficher la menue bar ou non",
    required: false,
  },
  {
    props: "closeDropZone",
    type: "boolean",
    description: "Permet de fermer la dropzone",
    required: false,
  },
  {
    props: "menueBgColor",
    type: "string",
    default: "gray.100",
    description: "Permet de changer la couleur de fond de la menue bar",
    required: false,
  },
  {
    props: "menueColorScheme",
    type: "string",
    default: "primary",
    description: "Permet de changer la couleur de la menue bar",
    required: false,
  },
  {
    props: "maxFiles",
    type: "number",
    default: "5",
    description:
      "Permet de choisir le nombre de fichiers maximum possible de mettre dans la zone ",
    required: false,
  },
  {
    props: "menueBarPlacement",
    type: "top,bottom",
    default: "bottom",
    description: "Permet de choisir la position de la menue bar",
    required: false,
  },
]
