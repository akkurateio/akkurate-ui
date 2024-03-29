export const propsForDropzone = [
  {
    props: "handleChange",
    type: "function (files: FileList | File[] | null) => void",
    description:
      "La fonction qui permet de récupérer les informations du/des fichiers ",
    required: true,
  },
  {
    props: "accept",
    type: "string",
    description: "Le type de fichier accepté",
    required: false,
  },
  {
    props: "maxFiles",
    type: "number",
    default: "1",
    description:
      "Permet de choisir le nombre de fichiers maximum possible de mettre dans la zone ",
    required: false,
  },
  {
    props: "backgroundColor",
    type: "string",
    default: "primary.500",
    description: "Permet de choisir la couleur de fond de la zone",
    required: false,
  },
  {
    props: "height",
    type: "string",
    default: "350px",
    description: "Permet de choisir la hauteur de la zone",
    required: false,
  },
  {
    props: "colorScheme",
    type: "string",
    description: "Permet de choisir la couleur de la zone",
    required: false,
  },
  {
    props: "boxSize",
    type: "string",
    default: "100px",
    description: "Permet de choisir la taille des cards files",
    required: false,
  },
]
