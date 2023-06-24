'use client'
import { ArrowLeft } from '@icons'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ArticleByIdPage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen p-5 lg:px-28 flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <button
          className="bg-[#7F56D9] md:p-2 p-1 rounded-lg drop-shadow-lg active:drop-shadow-none"
          onClick={() => router.push('/article')}
        >
          <ArrowLeft />
        </button>
        <div className="flex text-[#344054] font-inter gap-2 md:text-xl text-sm">
          <button onClick={() => router.push('/')}>
            <p className="">Home</p>
          </button>
          <p>/</p>
          <button onClick={() => router.push('/article')}>
            <p className="font-bold">Artikel</p>
          </button>
        </div>
      </div>
      <div className="aspect-articleCover w-full rounded-3xl relative">
        <Image
          alt="Article Cover"
          src={'/assets/ArtileCoverPlaceholder.jpg'}
          className="relative"
          fill
        />
      </div>
      <div className="w-full md:p-10 p-5 bg-[#D6BBFB40]">
        <p className="text-[#53389E] font-inter lg:text-6xl md:text-4xl font-bold">
          What is Mental Health?
        </p>
        <p className="mt-5 font-inter leading-loose text-[#667085] lg:text-xl md:text-lg text-sm">
          Mental health is a state of mental well-being that enables people to
          cope with the stresses of life, realize their abilities, learn well
          and work well, and contribute to their community. It is an integral
          component of health and well-being that underpins our individual and
          collective abilities to make decisions, build relationships and shape
          the world we live in. Mental health is a basic human right. And it is
          crucial to personal, community and socio-economic development. Mental
          health is more than the absence of mental disorders. It exists on a
          complex continuum, which is experienced differently from one person to
          the next, with varying degrees of difficulty and distress and
          potentially very different social and clinical outcomes. Mental health
          conditions include mental disorders and psychosocial disabilities as
          well as other mental states associated with significant distress,
          impairment in functioning, or risk of self-harm. People with mental
          health conditions are more likely to experience lower levels of mental
          well-being, but this is not always or necessarily the case. Throughout
          our lives, multiple individual, social and structural determinants may
          combine to protect or undermine our mental health and shift our
          position on the mental health continuum. Individual psychological and
          biological factors such as emotional skills, substance use and
          genetics can make people more vulnerable to mental health problems.
          Exposure to unfavourable social, economic, geopolitical and
          environmental circumstances – including poverty, violence, inequality
          and environmental deprivation – also increases people’s risk of
          experiencing mental health conditions. Risks can manifest themselves
          at all stages of life, but those that occur during developmentally
          sensitive periods, especially early childhood, are particularly
          detrimental. For example, harsh parenting and physical punishment is
          known to undermine child health and bullying is a leading risk factor
          for mental health conditions. Protective factors similarly occur
          throughout our lives and serve to strengthen resilience. They include
          our individual social and emotional skills and attributes as well as
          positive social interactions, quality education, decent work, safe
          neighbourhoods and community cohesion, among others. Mental health
          risks and protective factors can be found in society at different
          scales. Local threats heighten risk for individuals, families and
          communities. Global threats heighten risk for whole populations and
          include economic downturns, disease outbreaks, humanitarian
          emergencies and forced displacement and the growing climate crisis.
        </p>
      </div>
    </div>
  )
}

export default ArticleByIdPage
