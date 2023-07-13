'use client'
import { GET_BY_ID_ARTICLE } from '@/actions/article'
import { useQuery } from '@apollo/client'
import { ArrowLeft } from '@icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

type Article = {
  id: number
  title: string
  content: string
  posterUrl: string
  thumbnailUrl: string
}

const ArticleByIdPage = () => {
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

  const description = { __html: article?.content as string }

  return (
    <div className="min-h-screen p-5 lg:px-28 flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <Link
          href={'/article'}
          className="bg-[#7F56D9] md:p-2 p-1 rounded-lg drop-shadow-lg active:drop-shadow-none"
        >
          <ArrowLeft />
        </Link>
        <div className="flex text-[#344054] font-inter gap-2 md:text-xl text-sm">
          <Link href={'/'}>
            <p className="">Home</p>
          </Link>
          <p>/</p>
          <Link href={'/article'}>
            <p className="font-bold">Artikel</p>
          </Link>
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
      <div className="w-full md:p-10 p-5 bg-[#D6BBFB40]">
        {article?.title && (
          <p className="text-[#53389E] font-inter lg:text-6xl md:text-4xl font-bold">
            {article.title}
          </p>
        )}
        {article?.content && (
          <div className="mt-5 font-inter leading-loose text-[#667085] lg:text-xl md:text-lg text-sm">
            <div dangerouslySetInnerHTML={description} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticleByIdPage
