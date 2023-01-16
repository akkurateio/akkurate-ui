export const propsForTreeStructure = [
  {
    props: "tree",
    type: "Array [id :string | numer, name: string, children: tree[]",
    description:
      "Le tableau des données comme ceci( [id: string | number | null , name: string | null])",
    required: true,
  },
  {
    props: "item",
    type: "object",
    description: "L'objet qui contient les données de l'item",
    required: true,
  },
  {
    props: "setItem",
    type: "function",
    description: "La fonction qui permet la navigation entre les items",
    required: true,
  },
]
