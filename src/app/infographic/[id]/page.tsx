'use client'
import { GET_BY_ID_INFOGRAFIC } from '@/actions/infografic'
import { useQuery } from '@apollo/client'
import { ArrowLeft } from '@icons'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { RichTextEditor, Link } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import SubScript from '@tiptap/extension-subscript'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import NextLink from 'next/link'

type Infografic = {
  id: number
  title: string
  description: string
  infograficUrl: string
}

const InfograficByIdPage = () => {
  const router = useRouter()
  const pathname = usePathname()
  const id = pathname.slice(-1)[0]
  const [infografic, setInfografic] = useState<Infografic>()

  const {} = useQuery(GET_BY_ID_INFOGRAFIC, {
    variables: {
      findOneInfograficId: Number(id),
    },
    onCompleted(data) {
      setInfografic(data.findOneInfografic)
    },
    onError(error) {
      console.log('error', error)
    },
  })

  const editor = useEditor({
    editable: false,
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    editorProps: {
      attributes: {
        class:
          'bg-[#D6BBFB40] border-transparent text-xs md:text-base lg:text-lg ring-0',
      },
    },
  })

  useEffect(() => {
    if (infografic?.description)
      editor?.commands.setContent(infografic?.description)
  }, [infografic?.description])

  return (
    <div className="min-h-screen p-5 lg:px-28 flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <button
          className="bg-[#7F56D9] md:p-2 p-1 rounded-lg drop-shadow-lg active:drop-shadow-none"
          onClick={() => router.back()}
        >
          <ArrowLeft />
        </button>
        <div className="flex text-[#344054] font-inter gap-2 md:text-xl text-sm">
          <NextLink href={'/'}>
            <p className="">Home</p>
          </NextLink>
          <p>/</p>
          <NextLink href={'/infografic?page=1'}>
            <p className="font-bold">Infografic</p>
          </NextLink>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="aspect-infografic w-full rounded-3xl relative max-w-[1024px]">
          {infografic?.infograficUrl && (
            <Image
              alt="Article Cover"
              src={infografic?.infograficUrl}
              className="relative"
              fill
            />
          )}
        </div>
      </div>
      <RichTextEditor editor={editor}>
        {infografic && (
          <div className="w-full bg-[#D6BBFB40]">
            <p className="text-[#53389E] font-inter lg:text-6xl md:text-4xl font-bold pt-5 md:pt-10 px-5 md:px-10">
              {infografic.title}
            </p>
            <div className="md:px-7 px-1">
              <RichTextEditor.Content />
            </div>
          </div>
        )}
      </RichTextEditor>
    </div>
  )
}

export default InfograficByIdPage