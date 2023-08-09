'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { GHQ_MODULE_BANNER } from './const'
import { GQHQuestionModule } from './section/formSection'
import { usePathname, useRouter } from 'next/navigation'
import { BsArrowLeftCircle } from 'react-icons/bs'

export const GHQModule: React.FC = () => {
  const pathname = usePathname()
  const router = useRouter()

  const handlerBack = () => {
    pathname.slice(5) == 'psyhope'
      ? router.push('/schedule/psyhope')
      : router.push('/schedule/csp')
  }


  useEffect(() => {
    if(localStorage.getItem('date') == null) router.replace('/dashboard')
  },[])

  return (
    <div>
      <div className="px-8 lg:px-24  py-10 flex flex-col gap-5">
        <button
          className="p-2 bg-[#F9F5FF] w-fit rounded-lg"
          onClick={handlerBack}
        >
          <div className="flex w-fit gap-2 items-center justify-center">
            <BsArrowLeftCircle className="text-[#6941C6]"></BsArrowLeftCircle>
            <p className="text-[#6941C6]">Ubah Jadwal</p>
          </div>
        </button>
        <div className="md:h-[350px] w-full bg-[#BDB4FE] rounded-3xl flex flex-col-reverse md:flex-row p-5">
          <div className="md:w-3/5 w-full h-full justify-center flex flex-col md:p-10">
            <p className="text-[#42307D] font-inter font-bold lg:text-4xl md:text-2xl text-xl">
              General Health Questionnaire
            </p>
            <p className="text-[#6941C6] font-semibold lg:text-lg text-sm mt-3 mb-10 leading-relaxed">
              {GHQ_MODULE_BANNER}
            </p>
          </div>
          <div className="md:w-2/5 w-full h-32 md:h-auto relative">
            <Image
              src="/assets/OnBoardingAsset.svg"
              alt="GHQ Banner Assets"
              fill
              className="relative z-0"
            />
          </div>
        </div>
        <div className="">
          <GQHQuestionModule></GQHQuestionModule>
        </div>
      </div>
    </div>
  )
}
