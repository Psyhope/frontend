'use client'
import { GET_BY_ID_ARTICLE } from '@/actions/article'
import { useQuery } from '@apollo/client'
import { ArrowLeft } from '@icons'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
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

type Article = {
  id: number
  title: string
  content: string
  posterUrl: string
  thumbnailUrl: string
}

const ArticleByIdPage = () => {
  const router = useRouter()
  const pathname = usePathname()
  const id = pathname.slice(-1)[0]
  const [article, setArticle] = useState<Article>()

  const { refetch: getAllRefetch } = useQuery(GET_BY_ID_ARTICLE, {
    variables: {
      findOneArticleId: Number(id),
    },
    onCompleted(data) {
      setArticle(data.findOneArticle)
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
    if (article?.content) editor?.commands.setContent(article?.content)
  }, [article?.content])

  return (
    <div className="min-h-screen p-5 lg:px-28 flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <button
          onClick={() => router.back()}
          className="bg-[#7F56D9] md:p-2 p-1 rounded-lg drop-shadow-lg active:drop-shadow-none"
        >
          <ArrowLeft />
        </button>
        <div className="flex text-[#344054] font-inter gap-2 md:text-xl text-sm">
          <NextLink href={'/'}>
            <p className="">Home</p>
          </NextLink>
          <p>/</p>
          <NextLink href={'/article?page=1'}>
            <p className="font-bold">Artikel</p>
          </NextLink>
        </div>
      </div>
      <div className="aspect-articleCover w-full rounded-3xl relative">
        {article?.posterUrl && (
          <Image
            alt="Article Cover"
            src={article?.posterUrl}
            className="relative"
            fill
          />
        )}
      </div>
      <div className="w-full bg-[#D6BBFB40]">
        {article?.content && (
          <div className="font-inter leading-loose text-[#667085] lg:text-xl md:text-lg text-sm">
            <RichTextEditor editor={editor}>
              <p className="text-[#53389E] font-inter lg:text-6xl md:text-4xl font-bold p-2 md:p-5">
                {article.title}
              </p>
              <RichTextEditor.Content />
            </RichTextEditor>
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticleByIdPage
