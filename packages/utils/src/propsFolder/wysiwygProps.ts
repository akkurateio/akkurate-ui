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
    description: "Permet de définir la hauteur minimum du champ",
    required: false,
  },
  {
    props: "height",
    type: "string",
    description: "Permet de définir la hauteur du champ",
    required: false,
  },
  {
    props: "widthMenuBar",
    type: "boolean",
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
    description: "Permet de changer la couleur de fond de la menue bar",
    required: false,
  },
  {
    props: "menueColorScheme",
    type: "string",
    description: "Permet de changer la couleur de la menue bar",
    required: false,
  },
  {
    props: "maxFiles",
    type: "number",
    description:
      "Permet de choisir le nombre de fichiers maximum possible de mettre dans la zone ",
    required: false,
  },
  {
    props: "menueBarPlacement",
    type: "top,bottom",
    description: "Permet de choisir la position de la menue bar",
    required: false,
  },
]
