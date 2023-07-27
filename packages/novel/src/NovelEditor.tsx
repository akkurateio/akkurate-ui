import React, { useEffect, useState } from "react"
import { EditorContent, useEditor } from "@tiptap/react"
import { TiptapExtensions } from "./extensions"
import { useDebouncedCallback } from "use-debounce"
import { Box } from "@chakra-ui/react"
import { getPrevText, TiptapEditorProps } from "./utils/editor"

interface IProps {
  value: string
  setValue: (val: string) => void
}

export const NovelEditor: React.FC<IProps> = ({ value, setValue }) => {
  const [saveStatus, setSaveStatus] = useState("Saved")

  const [hydrated, setHydrated] = useState(false)

  const debouncedUpdates = useDebouncedCallback(async ({ editor }) => {
    const json = editor.getJSON()
    setSaveStatus("Saving...")
    setValue(json)
    // Simulate a delay in saving.
    setTimeout(() => {
      setSaveStatus("Saved")
    }, 500)
  }, 750)

  const editor = useEditor({
    extensions: TiptapExtensions,
    editorProps: TiptapEditorProps,
    onUpdate: (e) => {
      setSaveStatus("Unsaved")
      const selection = e.editor.state.selection
      const lastTwo = getPrevText(e.editor, {
        chars: 2,
      })
    },
    autofocus: "end",
  })

  // Hydrate the editor with the content from localStorage.
  useEffect(() => {
    if (editor && value && !hydrated) {
      editor.commands.setContent(value)
      setHydrated(true)
    }
  }, [editor, value, hydrated])

  return (
    <Box
      position={"relative"}
      width="full"
      height="full"
      bg={"white"}
      padding={12}
      paddingX={8}
      // onClick={() => {
      //   editor?.chain().focus().run()
      // }}
      // className="relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white p-12 px-8 sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:px-12 sm:shadow-lg"
    >
      <Box
        position={"absolute"}
        right={5}
        top={5}
        marginBottom={5}
        rounded={"lg"}
        bg={"gray.100"}
        paddingX={2}
        paddingY={1}
        fontSize={"sm"}
        color={"gray.400"}
      >
        {saveStatus}
      </Box>
      {/*{editor && <EditorBubbleMenu editor={editor} />}*/}
      <EditorContent editor={editor} />
    </Box>
  )
}
