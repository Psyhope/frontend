'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { ArticleLandingCard, InfographicCardLanding } from '@elements'
import { ChevronLeft, ChevronRight } from '@icons'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_BY_LIMIT_ARTICLE } from '@/actions/article'
import { notifications } from '@mantine/notifications'
import Link from 'next/link'
import { GET_BY_LIMIT_INFOGRAFIC } from '@/actions/infografic'
import { useRouter } from 'next/navigation'

type Article = {
  id: number
  title: string
  content: string
  posterUrl: string
  thumbnailUrl: string
}

type Infografic = {
  id: number
  title: string
  description: string
  infograficUrl: string[]
}

export default function Home() {
  const [listArticle, setListArticle] = useState<Array<Article>>()
  const [listInfografic, setListInfografic] = useState<Array<Infografic>>()
  const router = useRouter()

  const {} = useQuery(GET_BY_LIMIT_ARTICLE, {
    variables: {
      limit: 5,
    },
    onCompleted(data) {
      setListArticle(data.findByLimitArticle)
    },
    onError(error) {
      console.log('error', error)
      notifications.show({
        title: 'Failed',
        message: 'Error while load Article...',
        color: 'red',
        autoClose: 3000,
      })
    },
  })

  const {} = useQuery(GET_BY_LIMIT_INFOGRAFIC, {
    variables: {
      limit: 5,
    },
    onCompleted(data) {
      setListInfografic(data.findByLimitInfografic)
    },
    onError(error) {
      console.log('error', error)
      notifications.show({
        title: 'Failed',
        message: 'Error while load Infografic...',
        color: 'red',
        autoClose: 3000,
      })
    },
  })

  return (
    <>
      <head>
        <title>Home | Empower U&I</title>
      </head>
      <main className="min-h-screen md:pt-5">
        {/* Hero */}
        <div className="p-5 md:px-10">
          <div className="md:h-[419px] w-full bg-[#53389E] rounded-3xl md:p-10 p-5 flex flex-col-reverse md:flex-row">
            <div className="flex flex-col justify-center w-full h-full md:w-3/5">
              <p className="text-[#E9D7FE99] font-inter font-bold lg:text-4xl md:text-2xl text-xl">
                Layanan Konseling Sebaya UI
              </p>
              <p className="text-[#F2F4F7] lg:text-sm text-xs mt-3 mb-10 leading-relaxed">
                Aliansi Departemen Advokasi dan Kesejahteraan Mahasiswa BEM
                Se-UI menyediakan layanan konseling sebaya yang diperuntukkan
                bagi Mahasiswa Universitas Indonesia Program Sarjana dan Vokasi.
                Bersama teman sebaya yang terlatih, kamu dapat bercerita dengan
                aman dan nyaman.
              </p>
              <div className="bg-[#D6BBFB] w-fit px-4 py-3 rounded-t-xl rounded-r-xl text-[#53389E] font-inter font-semibold text-xs lg:text-base">
                <TypeAnimation
                  sequence={[
                    'Butuh teman bercerita? Yuk, curhat dengan konselor sebaya! 👇',
                    5000,
                  ]}
                  repeat={Infinity}
                />
              </div>
              <div className="flex flex-col">
                <Link href={'/dashboard'} className="w-fit">
                  <button className="mt-2 py-3 font-semibold rounded-lg drop-shadow-lg active:drop-shadow-none px-4 bg-[#7F56D9] flex-none w-fit text-white text-xs lg:text-base">
                    Daftar Konseling Sekarang!
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative w-full h-32 md:w-2/5 md:h-auto">
              <Image
                src={'/assets/Hero Asset.svg'}
                alt="Hero Assets"
                fill
                className="relative z-0"
              />
            </div>
          </div>
        </div>

        {/* Infografis */}
        <div className="bg-[#53389E] lg:h-fit mt-16 mb-10 flex lg:flex-row flex-col relative overflow-hidden pb-5 lg:pb-0">
          <div className="p-5 lg:w-1/3 lg:p-12">
            <p className="font-inter lg:text-6xl text-xl font-bold text-[#F4EBFF] leading-normal md:text-3xl">
              The Mindful Mind: An Infographic
            </p>
            <p className="font-inter font-medium lg:text-lg text-sm md:text-base text-[#B692F6] leading-relaxed lg:mt-5 md:mt-3">
              Lihat infografis ini untuk tips sehat mental yang dapat kamu
              terapkan dalam keseharianmu.
            </p>
            <div className="z-10 flex justify-end w-full gap-10 mt-5 lg:mt-20">
              <button
                className="w-14 h-14 rounded-full bg-[#42307D] flex items-center justify-center drop-shadow-lg active:drop-shadow-none"
                onClick={() => {
                  const element = document.getElementById('infografic')
                  element!.scrollLeft -= 400
                }}
              >
                <ChevronLeft />
              </button>
              <button
                className="w-14 h-14 rounded-full bg-[#42307D] flex items-center justify-center drop-shadow-lg active:drop-shadow-none"
                onClick={() => {
                  const element = document.getElementById('infografic')
                  element!.scrollLeft += 400
                }}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
          <div className="flex items-center w-full max-w-full px-5 overflow-hidden lg:w-2/3">
            <div
              className="relative overflow-x-auto border-red-500 scrollbar-hidden scroll-smooth boder lg:ml-10 xl:ml-0"
              id="infografic"
            >
              <div className="flex transition-transform -translate-x-0">
                {listInfografic &&
                  listInfografic.map((infographic) => (
                    <InfographicCardLanding
                      {...infographic}
                      key={infographic.id}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* Image 1 */}
        <div className="w-full px-1 md:px-10">
          <div className="relative w-full aspect-[21/9]">
            <Image
              src="/why.svg"
              alt="Mengapa EmpowerUni"
              fill
              className="relative object-cover rounded-2xl"
            />
          </div>
        </div>
        {/* Article */}
        <div className="flex flex-col w-full mt-10 mb-10 md:mt-32">
          {/* Panel Title */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <p className="font-bold font-inter lg:text-6xl md:text-4xl text-2xl text-center text-[#53389E]">
                Your Mind Matters: An Article
              </p>
            </div>
            <p className="md:w-3/5 w-4/5 text-center text-[#7F56D9] font-inter font-medium mt-5 text-xs md:text-sm lg:text-base">
              Artikel ini akan membawamu pada pengetahuan baru mengenai Isu
              Kesehatan Mental serta panduan praktis untuk menjaga kesehatan
              mental kita.
            </p>
            <Link
              className="text-white font-inter font-semibold px-5 py-2 bg-[#7F56D9] md:text-sm text-xs rounded-lg drop-shadow-lg active:drop-shadow-none mt-5"
              href={'/article?page=1'}
            >
              Lihat Artikel Lainnya
            </Link>
          </div>
          {/* Card */}
          <div className="relative">
            <div className="h-48 bg- w-full absolute -bottom-10 bg-gradient-to-br from-[#0085FF] to-[#6600CC]"></div>
            <div className="px-2 md:px-10">
              <div
                className="relative mt-5 mb-5 overflow-x-auto scrollbar-hidden scroll-smooth"
                id="article"
              >
                <div className="flex transition-transform -translate-x-0">
                  {listArticle &&
                    listArticle.map((article) => (
                      <ArticleLandingCard
                        {...article}
                        className="flex-none mx-2"
                        key={article.id}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="z-20 flex items-center justify-center w-full gap-10 mt-3">
            <button
              className="w-14 h-14 rounded-full bg-[#42307D] flex items-center justify-center drop-shadow-lg active:drop-shadow-none"
              onClick={() => {
                const element = document.getElementById('article')
                element!.scrollLeft -= 400
              }}
            >
              <ChevronLeft />
            </button>
            <button
              className="w-14 h-14 rounded-full bg-[#42307D] flex items-center justify-center drop-shadow-lg active:drop-shadow-none"
              onClick={() => {
                const element = document.getElementById('article')
                element!.scrollLeft += 400
              }}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        {/* Image 2 */}
        <div className="w-full px-1 md:px-10">
          <div className="relative w-full mx-auto aspect-[2/1] mb-10">
            <Image
              src="/peer.svg"
              alt="Mengapa EmpowerUni"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </main>
    </>
  )
}
