import Image from 'next/image'
import React from 'react'
import { ArticleLandingCardProps } from './interface'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
import Highlight from '@tiptap/extension-highlight'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import TextAlign from '@tiptap/extension-text-align'
import { useRouter } from 'next/navigation'
import NextLink from 'next/link'

export const ArticleLandingCard: React.FC<ArticleLandingCardProps> = ({
  className,
  content,
  id,
  posterUrl,
  thumbnailUrl,
  title,
}) => {
  const router = useRouter()

  const editor = useEditor({
    editable: false,
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
    content,
    editorProps: {
      attributes: {
        class:
          'bg-[#D6BBFB40] border-transparent text-xs md:text-base lg:text-lg ring-0',
      },
    },
  })
  return (
    <div
      className={`md:w-[537px] w-[200px] md:h-[249px] h-fit flex rounded-lg ${className} flex-col md:flex-row`}
    >
      <div className="md:w-1/3 aspect-article relative">
        <Image
          alt="Placeholder"
          src={thumbnailUrl}
          fill
          className="relative object-cover rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-l-lg"
          quality={100}
        />
      </div>
      <div className="md:w-2/3 w-full bg-[#D9D6FE] rounded-bl-lg rounded-br-lg md:rounded-lg md:-ml-1 z-10 p-5 relative pb-20 md:pb-0 ">
        <p className="font-inter text-[#53389E] font-bold md:text-lg text-base md:max-h-[60px] md:h-fit overflow-hidden">
          {title}
        </p>
        <div className=" h-[100px] flex w-full overflow-hidden mt-2">
          <p className="text-[#667085] text-xs md:text-base">
            {editor?.getText()}
          </p>
        </div>
        <NextLink
          className="text-white font-inter font-semibold px-5 py-2 bg-[#7F56D9] md:text-sm text-xs rounded-lg absolute bottom-5 right-5 drop-shadow-lg active:drop-shadow-none"
          href={`/article/${id}`}
        >
          Baca Selengkapnya
        </NextLink>
      </div>
    </div>
  )
}
