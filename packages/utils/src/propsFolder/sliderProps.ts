export const propsForSlider = [
  {
    props: "title",
    type: "string",
    description: "Titre pour le slider",
    required: false,
  },
  {
    props: "indicatorStep",
    type: "number",
    description: "Nombre de pas pour l'indicateur",
    required: false,
  },
  {
    props: "allSteps",
    type: "boolean",
    description: "Afficher tous les pas",
    required: true,
  },
  {
    props: "min",
    type: "number",
    description: "Valeur minimale",
    required: false,
  },
  {
    props: "max",
    type: "number",
    description: "Valeur maximale",
    required: false,
  },
  {
    props: "fontSize",
    type: "string | number",
    default: "sm",
    description: "Taille de la police",
    required: false,
  },
]
