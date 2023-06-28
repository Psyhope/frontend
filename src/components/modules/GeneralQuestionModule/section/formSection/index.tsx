'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'
import { GHQQuestionInterface, GHQRespondsInterface } from './interface'
import { GHQ_QUESTION } from './const'
import { Path } from 'react-hook-form'
import { ChevronRight } from '../../elements/ChevronRight'

export const GQHQuestionModule: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GHQRespondsInterface>()
  console.log(errors)

  const onSubmit: SubmitHandler<GHQRespondsInterface> = (data) =>
    console.log(data)

  const listQuestion: GHQQuestionInterface[] = GHQ_QUESTION

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          {listQuestion.map((value, idx) => {
            const numb = value.number
            return (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <p>{idx + 1}.</p>
                  <p>{value.question}</p>
                </div>
                <div className="rounded-lg bg-gradient-to-tl p-2 border-2 border-[#7F56D9] from-[#E9D7FE] to-[#C7D7FE]">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-4">
                      <input
                        {...register(numb as Path<GHQRespondsInterface>, {
                          required: true,
                        })}
                        type="radio"
                        value="1"
                      />
                      <p>Lebih baik dari biasanya</p>
                    </div>
                    <div className="flex gap-4">
                      <input
                        {...register(numb as Path<GHQRespondsInterface>, {
                          required: true,
                        })}
                        type="radio"
                        value="2"
                      />
                      <p>Sama seperti biasanya</p>
                    </div>
                    <div className="flex gap-4">
                      <input
                        {...register(numb as Path<GHQRespondsInterface>, {
                          required: true,
                        })}
                        type="radio"
                        value="3"
                      />
                      <p>Kurang dari biasanya</p>
                    </div>
                    <div className="flex gap-4">
                      <input
                        {...register(numb as Path<GHQRespondsInterface>, {
                          required: true,
                        })}
                        type="radio"
                        value="4"
                      />
                      <p>Sangat kurang dari biasanya</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="">
            <div className="flex justify-end">
              <div className="p-4 bg-[#98A2B3] rounded-lg hover:cursor-pointer flex gap-2 items-center">
                <input
                  type="submit"
                  className="  text-white"
                  value="Lanjut Mengisi Form"
                />
                <ChevronRight></ChevronRight>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
