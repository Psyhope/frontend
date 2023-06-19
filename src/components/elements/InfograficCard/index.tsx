import Image from 'next/image'
import React from 'react'
import PlaceHolder from '../../../../public/assets/Placeholder.png'

export const InfograficCard: React.FC = () => {
  return (
    <div className="w-[445px] rounded-lg relative flex-none pr-5">
      <div className="w-full aspect-infografic relative">
        <Image
          alt="Infografis"
          src={PlaceHolder}
          fill
          className="rounded-t-lg"
        />
      </div>
      <div className="bg-[#D9D6FE] w-full h-[156px] relative rounded-lg -mt-2 p-6">
        <p className="text-[#53389E] text-2xl font-bold">Judul</p>
        <p className="max-h-20 pb-6 overflow-hidden">
          Lorem ipsum dolor sit amet consectetur. Dui in iaculis non dui amet
          imperdiet Lorem ipsum dolor sit amet consectetur. Dui in iaculis non
          dui amet imperdietLorem ipsum dolor sit amet consectetur. Dui in
          iaculis non dui amet imperdiet Lorem ipsum dolor sit amet consectetur.
          Dui in iaculis non dui amet imperdiet
        </p>
      </div>
    </div>
  )
}
