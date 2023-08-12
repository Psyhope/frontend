'use client'
import React, { useEffect, useState } from 'react'
import { GHQQuestionInterface, GHQRespondsInterface } from './interface'
import { GHQ_QUESTION } from './const'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronRight } from '../../elements/ChevronRight'
import { CounselorType } from '@/__generated__/graphql'
import { useMutation } from '@apollo/client'
import { MUTATION_CREATE_BOOKING } from '@/actions/booking'
import { useForm } from '@mantine/form'
import { Flex, Group, Loader, Radio } from '@mantine/core'
import { useAuth } from '@/components/contexts/AuthContext'

export const GQHQuestionModule: React.FC = () => {
  const pathname = usePathname()
  const router = useRouter()
  const form = useForm()
  const {
    date,
    reason,
    closest: closestContext,
    time,
    setClosest: setClosestContext,
    setDate,
    setTime,
    setReason,
  } = useAuth()

  const [loading, setLoading] = useState(false)

  const [closest, setClosest] = useState<boolean | null>(null)

  const handleClosest = () => {
    setClosest(!closest)
  }

  const [mutate, {}] = useMutation(MUTATION_CREATE_BOOKING)

  const onSubmit = (data: any) => {
    setLoading(true)
    try {
      const jadwal: string[] = time.split(' -- ') as string[]

      const tanggal = new Date(
        decodeURI(date).replace(/-/g, '/').replace('T', ' ').replace('Z', '')
      )
        .toISOString()
        .replace(/-/g, '/')
        .replace('T', ' ')
        .replace('Z', '')

      console.log(1)
      const newTanggal = new Date(tanggal)
      console.log(2)
      newTanggal.setHours(newTanggal.getHours() + 7)
    } catch (err) {
      console.log(123)
      console.log(err)
    }
    try {
      const jadwal: string[] = time.split(' -- ') as string[]

      const tanggal = new Date(decodeURI(date))
        .toISOString()
        .replace(/-/g, '/')
        .replace('T', ' ')
        .replace('Z', '')

      const newTanggal = new Date(tanggal)
      newTanggal.setHours(newTanggal.getHours() + 7)
      mutate({
        variables: {
          createBookingInput: {
            bookingDate: new Date(newTanggal)
              .toISOString()
              .replace(/-/g, '/')
              .replace('T', ' ')
              .replace('Z', ''),
            reasonApply: reason,
            isSuicidal: closest as boolean,
            closestKnown: closestContext == 'true' ? true : false,
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
          console.log(new Date(newTanggal))
          setDate('')
          setReason('')
          setClosestContext('')
          setTime('')
          router.push('/dashboard')
          setLoading(false)
        },
        onError(err) {
          console.log(err)
          setLoading(true)
        },
      })
    } catch (error) {
      console.log('error trycatch', error)
      setLoading(false)
    }
  }

  const listQuestion: GHQQuestionInterface[] = GHQ_QUESTION

  const disabled = Object.keys(form.values).length != 12 || closest == null

  return (
    <div className="">
      <form
        onSubmit={form.onSubmit((values) => {
          onSubmit(values)
        })}
      >
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
                  <Radio.Group {...form.getInputProps(value.number)}>
                    <Group>
                      <Flex direction={'column'} gap={8}>
                        <Radio value="0" label="Lebih baik dari biasanya" />
                        <Radio value="1" label="Sama seperti biasanya" />
                        <Radio value="2" label="Kurang dari biasanya" />
                        <Radio value="3" label="Sangat kurang dari biasanya" />
                      </Flex>
                    </Group>
                  </Radio.Group>
                </div>
              </div>
            )
          })}
          <div>
            <p className=" font-semibold">
              Apakah Anda melakukan tindakan menyakiti diri dan/atau memiliki
              pikiran untuk mengakhiri hidup?
            </p>
          </div>
          <div className="flex gap-2">
            <input name="close" type="radio" onChange={handleClosest}></input>
            <span>Ya</span>
          </div>
          <div className="flex gap-2">
            <input name="close" type="radio" onChange={handleClosest}></input>
            <span>Tidak</span>
          </div>
          {/* <div className="">
            <div className="flex justify-end">
              <input
                disabled={disabled}
                type="submit"
                className={`text-white ${
                  disabled ? 'bg-gray-500' : 'bg-[#7F56D9]'
                } p-4 rounded-lg hover:cursor-pointer flex gap-2 items-center`}
                value="Lanjut Mengisi Form"
              />
            </div>
          </div> */}
        </div>
      </form>
      <div className="">
        <div className="flex justify-end">
          <button
            disabled={disabled || loading}
            className={`text-white ${
              disabled ? 'bg-gray-500' : 'bg-[#7F56D9]'
            } p-4 rounded-lg hover:cursor-pointer flex gap-2 items-center justify-center`}
            onClick={() => onSubmit(form.values)}
          >
            {loading ? (
              <Loader variant="dots" size={'sm'} />
            ) : (
              'Lanjut Mengisi Form'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
