'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'
import { OnBoardingFormInterface } from './interface'
import {
  ONBOARDING_BANNER_TEXT,
  ONBOARDING_INSTAGRAM_TEXT,
  ONBOARDING_LINE_TEXT,
} from './const'

export const OnBoardingModule: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnBoardingFormInterface>()
  console.log(errors)
  const [lineHandler, setLineHandler] = useState(false)
  const [igHandler, setIgHandler] = useState(false)
  const [socmedState, setSocmedState] = useState(false)
  const onSubmit: SubmitHandler<OnBoardingFormInterface> = (data) =>
    console.log(data)
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
            <label>Nama/Inisial</label>
            <input
              className="bg-white outline outline-2 rounded-md outline-[#CBD2E0] p-2 placeholder:text-sm"
              placeholder="Masukkan nama anda"
              {...register('name', { required: true })}
            />
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
              <div className="flex gap-4">
                <input
                  {...register('gender', { required: true })}
                  type="radio"
                  value="Memilih tidak menjawab"
                />
                <p>Memilih tidak menjawab</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label>NPM</label>
              <p className="text-sm text-[#667080]">
                Data ini dibutuhkan untuk memastikan bahwa Anda merupakan
                mahasiswa D-3/D-4 atau S-1 Universitas Indonesia
              </p>
            </div>
            <input
              className="bg-white outline outline-2 rounded-md outline-[#CBD2E0] p-2 placeholder:text-sm"
              placeholder="Contoh : 2106000000"
              {...register('npm', { required: true })}
            />
            <label>Jenjang Studi</label>
            <div className="flex flex-col gap-1">
              <div className="flex gap-4">
                <input
                  {...register('prodi', { required: true })}
                  type="radio"
                  value="S-1 Reguler"
                />
                <p>S-1 Reguler</p>
              </div>
              <div className="flex gap-4">
                <input
                  {...register('prodi', { required: true })}
                  type="radio"
                  value="S-1 Paralel"
                />
                <p>S-1 Paralel</p>
              </div>
              <div className="flex gap-4">
                <input
                  {...register('prodi', { required: true })}
                  type="radio"
                  value="S-1 KKI"
                />
                <p>S-1 KKI</p>
              </div>
              <div className="flex gap-4">
                <input
                  {...register('prodi', { required: true })}
                  type="radio"
                  value="Vokasi"
                />
                <p>Vokasi</p>
              </div>
            </div>
            <label>Fakultas</label>
            <input
              className="bg-white outline outline-2 rounded-md outline-[#CBD2E0] p-2 placeholder:text-sm"
              {...register('fakultas', { required: true })}
            />
            <div className="flex flex-col gap-1">
              <label>Jurusan</label>
              <p className="text-sm text-[#667080]">Contoh : Ilmu Komputer</p>
            </div>
            <input
              className="bg-white outline outline-2 rounded-md outline-[#CBD2E0] p-2 placeholder:text-sm"
              {...register('jurusan', { required: true })}
            />
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
                <div className="p-4 bg-[#98A2B3] rounded-lg hover:cursor-pointer">
                  <input
                    type="submit"
                    className="  text-white"
                    value="Berikan Data"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
