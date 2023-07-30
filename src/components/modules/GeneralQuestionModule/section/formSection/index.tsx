'use client'
import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { GHQQuestionInterface, GHQRespondsInterface } from './interface'
import { GHQ_QUESTION } from './const'
import { Path } from 'react-hook-form'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronRight } from '../../elements/ChevronRight'
import { BookingTopic, CounselorType } from '@/__generated__/graphql'
import { useMutation } from '@apollo/client'
import { MUTATION_CREATE_BOOKING } from '@/actions/booking'

export const GQHQuestionModule: React.FC = () => {
  const pathname = usePathname()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GHQRespondsInterface>()

  const [mutate, {}] = useMutation(MUTATION_CREATE_BOOKING)

  const onSubmit: SubmitHandler<GHQRespondsInterface> = (data) => {
    const jadwal: string[] = localStorage
      .getItem('time')
      ?.split(' -- ') as string[]

    const tempTopic: string[] = localStorage
      .getItem('topic')
      ?.split(',') as string[]

    const topic: BookingTopic[] = []

    tempTopic.forEach((data) => {
      if (data == 'TOPIC_1') topic.push(BookingTopic.Topic_1)
      if (data == 'TOPIC_2') topic.push(BookingTopic.Topic_2)
      if (data == 'TOPIC_3') topic.push(BookingTopic.Topic_3)
    })

    mutate({
      variables: {
        createBookingInput: {
          bookingDate: localStorage.getItem('date'),
          reasonApply: localStorage.getItem('reason') as string,
          closestKnown:
            localStorage.getItem('closest') == 'true' ? true : false,
          bookingTopic: topic,
          bookingTime: jadwal[0],
          bookingTime2: jadwal[1],
          counselorType:
            pathname.slice(5) == 'psyhope'
              ? CounselorType.Psyhope
              : CounselorType.Faculty,
          number_1: parseInt(data.number_1),
          number_2: parseInt(data.number_2),
          number_3: parseInt(data.number_3),
          number_4: parseInt(data.number_4),
          number_5: parseInt(data.number_5),
          number_6: parseInt(data.number_6),
          number_7: parseInt(data.number_7),
          number_8: parseInt(data.number_8),
          number_9: parseInt(data.number_9),
          number_10: parseInt(data.number_10),
          number_11: parseInt(data.number_11),
          number_12: parseInt(data.number_12),
        },
      },
      onCompleted(data, clientOptions) {
        console.log(data)
        router.push('/dashboard')
      },
    })
  }

  const listQuestion: GHQQuestionInterface[] = GHQ_QUESTION

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          {listQuestion.map((value, idx) => {
            const numb = value.number
            return (
              <div key={idx.toString()} className="flex flex-col gap-2">
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
                        value="0"
                      />
                      <p>Lebih baik dari biasanya</p>
                    </div>
                    <div className="flex gap-4">
                      <input
                        {...register(numb as Path<GHQRespondsInterface>, {
                          required: true,
                        })}
                        type="radio"
                        value="1"
                      />
                      <p>Sama seperti biasanya</p>
                    </div>
                    <div className="flex gap-4">
                      <input
                        {...register(numb as Path<GHQRespondsInterface>, {
                          required: true,
                        })}
                        type="radio"
                        value="2"
                      />
                      <p>Kurang dari biasanya</p>
                    </div>
                    <div className="flex gap-4">
                      <input
                        {...register(numb as Path<GHQRespondsInterface>, {
                          required: true,
                        })}
                        type="radio"
                        value="3"
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
