import Image from 'next/image'
import React from 'react'
import { InfographicCardLandingProps } from './interface'
import NextLink from 'next/link'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Superscript from '@tiptap/extension-superscript'
import Link from '@tiptap/extension-link'
import Subscript from '@tiptap/extension-subscript'
import Highlight from '@tiptap/extension-highlight'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import TextAlign from '@tiptap/extension-text-align'

export const InfographicCardLanding: React.FC<InfographicCardLandingProps> = ({
  description,
  id,
  infograficUrl,
  title,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      Subscript,
      Highlight,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: 'font-inter text-sm md:text-base',
      },
    },
  })

  const sortedUrls: string[] = [...infograficUrl].sort((a, b) =>
    a.localeCompare(b)
  )

  return (
    <NextLink href={`/infographic/${id}`}>
      <div className="lg:w-[445px] w-[200px] rounded-lg relative flex-none pr-5 lg:my-10">
        <div className="w-full aspect-infografic relative">
          <Image
            alt="Infografis"
            src={sortedUrls[0]}
            fill
            className="rounded-t-lg"
          />
        </div>
        <div className="bg-[#D9D6FE] w-full relative rounded-lg -mt-2 lg:p-6 p-2 break-words">
          <p className="text-[#53389E] lg:text-2xl text-lg font-bold">
            {title}
          </p>
        </div>
      </div>
    </NextLink>
  )
}
