
import { Editor, EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import { Toggle } from "@/components/ui/toggle"


const MenuBar = ({editor}:{editor:Editor | null}) => {


  if (!editor) {
    return null
  }

  return (
    <>
      <Toggle
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        bold
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        italic
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleList('bullet_list', 'list_item')
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        liste
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        code
      </Toggle>
      <Toggle onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </Toggle>
      <Toggle onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        paragraph
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </Toggle>
      
      
    </>
  )
}
export default MenuBar