import { EditorState, Plugin, PluginKey } from "@tiptap/pm/state"
import { Decoration, DecorationSet, EditorView } from "@tiptap/pm/view"
import { createStandaloneToast, useToast } from "@chakra-ui/react"

const uploadKey = new PluginKey("upload-image")

const UploadImagesPlugin = () =>
  new Plugin({
    key: uploadKey,
    state: {
      init() {
        return DecorationSet.empty
      },
      apply(tr, set) {
        set = set.map(tr.mapping, tr.doc)
        // See if the transaction adds or removes any placeholders
        const action = tr.getMeta(this as unknown as Plugin)
        if (action && action.add) {
          const { id, pos, src } = action.add

          const placeholder = document.createElement("div")
          placeholder.setAttribute("class", "img-placeholder")
          const image = document.createElement("img")
          image.setAttribute(
            "class",
            "opacity-40 rounded-lg border border-stone-200",
          )
          image.src = src
          placeholder.appendChild(image)
          const deco = Decoration.widget(pos + 1, placeholder, {
            id,
          })
          set = set.add(tr.doc, [deco])
        } else if (action && action.remove) {
          set = set.remove(
            set.find(0, 0, (spec) => spec.id == action.remove.id),
          )
        }
        return set
      },
    },
    props: {
      decorations(state) {
        return this.getState(state)
      },
    },
  })

export default UploadImagesPlugin

export async function startImageUpload(
  file: File,
  view: EditorView,
  pos: number,
  maxFileSize: number,
  handleUpload?: (file: File) =>
    | {
        url: string
      }
    | Promise<{ url: string }>,
  acceptedFileTypes?: string[],
  toastPosition?:
    | "top"
    | "bottom"
    | "top-right"
    | "top-left"
    | "bottom-left"
    | "bottom-right",
) {
  const { toast } = createStandaloneToast()

  if (acceptedFileTypes?.some((type) => !file.type.includes(type))) {
    toast({
      title: `Ce type de fichier n'est pas supporté, nous acceptons les ${acceptedFileTypes?.join(
        ", ",
      )}`,
      status: "error",
      duration: 10000,
      isClosable: true,
      position: toastPosition ?? "top",
    })
    return
  }
  if (file.size / 1024 / 1024 > maxFileSize) {
    toast({
      title: `Le fichier est trop volumineux (${maxFileSize})`,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: toastPosition ?? "top",
    })
    return
  }
  if (pos == null) {
    toast({
      title: `Une erreur inconnue est survenue lors de l'insertion de l'image`,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: toastPosition ?? "top",
    })
    return
  }

  const id = {}

  const tr = view.state.tr
  if (!tr.selection.empty) tr.deleteSelection()

  //@ts-ignore  -  error is handled before in the editor
  let src = handleUpload(file)

  if (src instanceof Promise<any>) {
    src = await src
  }

  if (!file.type.includes("image/")) {
    toast({
      title: "Fichier uploadé avec succès",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: toastPosition ?? "top",
    })
    return
  }

  const { schema } = view.state

  const transaction = view.state.tr
    .insert(pos, schema.nodes.image.create({ src: src.url }))
    .setMeta(uploadKey, { remove: { id } })
  view.dispatch(transaction)
}
