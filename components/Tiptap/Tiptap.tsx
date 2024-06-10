'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './editorbar'

export default function Tiptap({
  description,
  onChange
}:{
  description:string,
  onChange:(richText:string)=>void
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
    ],
    content:description,
    editorProps :{
        attributes:{
          class: "flex min-h-[200px] max-w-[400px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        }
    },
    onUpdate({editor}){
      onChange(editor.getHTML())
      console.log(editor.getHTML())
    }
  })

  return (
    <div>
      <div> 
         <MenuBar editor={editor} />
      </div>
     
      <EditorContent editor={editor} />
    </div>
    
    
  )
}
