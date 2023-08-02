'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'
import { OnBoardingFormInterface } from './interface' 
import {
  ONBOARDING_BANNER_TEXT,
  ONBOARDING_INSTAGRAM_TEXT,
  ONBOARDING_LINE_TEXT,
} from './const'
import { useAuth } from '@/components/contexts/AuthContext'
import { useMutation } from '@apollo/client'
import { MUTATION_ONBOARDING } from '@/actions/onboarding'
import { useRouter } from 'next/navigation'

export const OnBoardingModule: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnBoardingFormInterface>()
  console.log(errors)


  const checkError = () => {
    if ((errors.gender == undefined && errors.linkSocmed == undefined && errors.socmed == undefined)) return true
    return false
  }
  const [lineHandler, setLineHandler] = useState(false)
  const [igHandler, setIgHandler] = useState(false)
  const { refreshToken } = useAuth()
  const [socmedState, setSocmedState] = useState(false)
  const router = useRouter()
  const onSubmit: SubmitHandler<OnBoardingFormInterface> = (data) => {
    console.log(data)
    console.log(123)
    mutate({
      variables: {
        createOnboardingInput: {
          linkSocmed: data.linkSocmed,
          socmed: data.socmed,
          gender: data.gender,
        },
      },
      onCompleted(data, clientOptions) {
        refreshToken().then(() => router.push('/'))
      },
    })
  }

  const [mutate, {}] = useMutation(MUTATION_ONBOARDING)

  return (
    <div>
      <div className="p-10 flex flex-col gap-5">
        <div className="md:h-[500px] w-full bg-[#BDB4FE] rounded-3xl flex flex-col-reverse md:flex-row p-5">
          <div className="md:w-3/5 w-full h-full justify-center flex flex-col md:p-10">
            <p className="text-[#42307D] font-inter font-bold lg:text-4xl md:text-2xl text-xl">
              Data Diri
            </p>
            <p className="text-black lg:text-lg text-sm mt-3 mb-10 leading-relaxed">
              {ONBOARDING_BANNER_TEXT}
            </p>
          </div>
          <div className="md:w-2/5 w-full h-32 md:h-auto relative">
            <Image
              src="assets/OnBoardingAsset.svg"
              alt="OnBoard Hero Assets"
              fill
              className="relative z-0"
            />
          </div>
        </div>
        <div className="">
          <form
            className="flex flex-col gap-4 bg-white"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>Jenis Kelamin</label>
            <div className="flex flex-col gap-1">
              <div className="flex gap-4">
                <input
                  className=" bg-transparent"
                  {...register('gender', { required: true })}
                  type="radio"
                  value="Laki-laki"
                />
                <p>Laki-laki</p>
              </div>
              <div className="flex gap-4">
                <input
                  {...register('gender', { required: true })}
                  type="radio"
                  value="Perempuan"
                />
                <p>Perempuan</p>
              </div>
            </div>
            <label>Kanal Curhat</label>
            <div className="flex flex-col gap-1">
              <div className="flex gap-4">
                <input
                  {...register('socmed', { required: true })}
                  type="radio"
                  name="socmed"
                  value="line"
                  onClick={() => {
                    if (!socmedState) setSocmedState(true)
                    if (igHandler) setIgHandler(!igHandler)
                    if (!lineHandler || socmedState === false)
                      setLineHandler(!lineHandler)
                  }}
                />
                <p>OA Line</p>
              </div>
              <div className="flex gap-4">
                <input
                  {...register('socmed', { required: true })}
                  type="radio"
                  name="socmed"
                  value="instagram"
                  onClick={() => {
                    if (!socmedState) setSocmedState(true)
                    if (lineHandler) setLineHandler(!lineHandler)
                    if (!igHandler || socmedState === false)
                      setIgHandler(!igHandler)
                  }}
                />
                <p>Instagram</p>
              </div>
            </div>
            {lineHandler && socmedState ? (
              <>
                <div className="flex flex-col gap-1">
                  <p>ID Line dan Display Name</p>
                  <p className="text-sm text-[#667080]">
                    {ONBOARDING_LINE_TEXT}
                  </p>
                  <input
                    className="bg-white outline outline-2 rounded-md outline-[#CBD2E0] p-2 placeholder:text-sm"
                    {...register('linkSocmed', { required: true })}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
            {igHandler && socmedState ? (
              <>
                <div className="flex flex-col gap-1">
                  <p>Username Instagram</p>
                  <p className="text-sm text-[#667080]">
                    {ONBOARDING_INSTAGRAM_TEXT}
                  </p>
                  <input
                    className="bg-white outline outline-2 rounded-md outline-[#CBD2E0] p-2 placeholder:text-sm"
                    {...register('linkSocmed', { required: true })}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="">
              <div className="flex justify-end">
                  <input
                    type="submit"
                    className={`text-white p-4 ${checkError() ? 'bg-[#7F56D9] hover:cursor-pointer' : 'bg-[#98A2B3] hover:cursor-not-allowed'} rounded-lg`}
                    value="Berikan Data"
                  />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
