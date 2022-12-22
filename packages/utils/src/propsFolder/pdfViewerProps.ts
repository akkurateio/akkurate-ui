export const propsForPdfViewer = [
  {
    props: "src",
    type: "string",
    description: "Url du fichier pdf.",
    required: true,
  },
  {
    props: "viewerOnly",
    type: "boolean",
    description: "Affiche le viewer seulement",
    required: false,
  },
  {
    props: "withFitH",
    type: "boolean",
    description: "Permet d'avoir un pdf responsive",
    required: false,
  },
]
