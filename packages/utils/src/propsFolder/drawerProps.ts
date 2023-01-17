export const propsForDrawer = [
  {
    props: "title",
    type: "string",
    description: "Titre du drawer",
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
    required: true,
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
    description: "Ouverture du drawer",
    required: true,
  },
  {
    props: "onClose",
    type: "function",
    description: "Fonction qui ferme la drawer",
    required: true,
  },
  {
    props: "hasCloseBtn",
    type: "boolean",
    description: "Affichage du bouton de fermeture",
    required: false,
  },
  {
    props: "placement",
    type: "string",
    description: "Position du drawer",
    required: false,
  },
  {
    props: "closeOnOverlayClick",
    type: "boolean",
    description: "Fermeture du drawer au clic sur l'overlay",
    required: false,
  },
  {
    props: "size",
    type: "string",
    description: "Taille du drawer",
    required: false,
  },
  {
    props: "isLoading",
    type: "boolean",
    description: "Affichage du loader",
    required: false,
  },
  {
    props: "colorSpinner",
    type: "string",
    description: "Couleur du loader",
    required: false,
  },
]
