import Image from 'next/image'
import React from 'react'
import PlaceHolder from '../../../../public/assets/Placeholder.png'
import { ArticleLandingCardProps } from './interface'

export const ArticleLandingCard: React.FC<ArticleLandingCardProps> = ({
  className,
}) => {
  return (
    <div
      className={`md:w-[537px] w-[200px] md:h-[249px] h-fit flex rounded-lg ${className} flex-col md:flex-row`}
    >
      <div className="md:w-1/3 w-full h-[100px] md:h-full relative">
        <Image
          alt="Placeholder"
          src={PlaceHolder}
          fill
          className="relative rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-l-lg"
          quality={100}
        />
      </div>
      <div className="md:w-2/3 w-full bg-[#D9D6FE] rounded-bl-lg rounded-br-lg md:rounded-lg md:-ml-1 z-10 p-5 relative pb-20 md:pb-0 ">
        <p className="font-inter text-[#53389E] font-bold md:text-lg text-base">
          Artikel 1
        </p>
        <div className=" h-[100px] flex w-full overflow-hidden mt-2">
          <p className="text-[#667085] text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur. Dui in iaculis non dui amet
            imperdiet Lorem ipsum dolor sit amet consectetur. Dui in iaculis non
            dui amet imperdiet Lorem ipsum dolor sit amet consectetur. Dui in
            iaculis non dui amet imperdiet Lorem ipsum dolor sit amet
            consectetur. Dui in iaculis non dui amet imperdiet
          </p>
        </div>
        <button className="text-white font-inter font-semibold px-5 py-2 bg-[#7F56D9] md:text-sm text-xs rounded-lg absolute bottom-5 right-5 drop-shadow-lg active:drop-shadow-none">
          Baca Selengkapnya
        </button>
      </div>
    </div>
  )
}
