import Image from 'next/image'
import React from 'react'
import PlaceHolder from '../../../../public/assets/Placeholder.png'
import { ArticleLandingCardProps } from './interface'

export const ArticleLandingCard: React.FC<ArticleLandingCardProps> = ({
  className,
}) => {
  return (
    <div className={`w-[537px] h-[249px] flex rounded-lg ${className}`}>
      <div className="w-1/3 relative rounded-lg">
        <Image
          alt="Placeholder"
          src={PlaceHolder}
          fill
          className="relative rounded-l-lg"
        />
      </div>
      <div className="w-2/3 bg-[#D9D6FE] rounded-lg -ml-1 z-10 p-5 relative">
        <p className="font-inter text-[#53389E] font-bold text-lg">Artikel 1</p>
        <div className=" h-[120px] flex w-full overflow-hidden mt-2">
          <p className="text-[#667085]">
            Lorem ipsum dolor sit amet consectetur. Dui in iaculis non dui amet
            imperdiet Lorem ipsum dolor sit amet consectetur. Dui in iaculis non
            dui amet imperdiet Lorem ipsum dolor sit amet consectetur. Dui in
            iaculis non dui amet imperdiet Lorem ipsum dolor sit amet
            consectetur. Dui in iaculis non dui amet imperdiet
          </p>
        </div>
        <button className="text-white font-inter font-semibold px-5 py-2 bg-[#7F56D9] text-sm rounded-lg absolute bottom-5 right-5 drop-shadow-lg active:drop-shadow-none">
          Baca Selengkapnya
        </button>
      </div>
    </div>
  )
}
