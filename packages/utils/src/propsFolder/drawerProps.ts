export const propsForDrawer = [
  {
    props: "title",
    type: "string",
    description: "Titre de la modale",
    required: false,
  },
  {
    props: "header",
    type: "JSX.Element",
    description: "Contenu du header",
    required: false,
  },
  {
    props: "body",
    type: "JSX.Element",
    description: "Contenu du body",
    required: false,
  },
  {
    props: "footer",
    type: "JSX.Element",
    description: "Contenu du footer",
    required: false,
  },
  {
    props: "isOpen",
    type: "boolean",
    description: "Ouverture de la modale",
    required: true,
  },
  {
    props: "onClose",
    type: "function",
    description: "Fonction qui ferme la modale",
    required: true,
  },
  {
    props: "hasCloseBtn",
    type: "boolean",
    description: "Affichage du bouton de fermeture",
    required: false,
  },
  {
    props: "position",
    type: "string",
    description: "Position de la drawer",
    required: false,
  },
  {
    props: "closeOnOverlayClick",
    type: "boolean",
    description: "Fermeture de la drawer au clic sur l'overlay",
    required: false,
  },
  {
    props: "size",
    type: "string",
    description: "Taille de la modale",
    required: false,
  },
]
