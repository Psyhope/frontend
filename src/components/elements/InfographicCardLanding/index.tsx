import Image from 'next/image'
import React from 'react'
import PlaceHolder from '../../../../public/assets/Placeholder.png'
import { InfographicCardLandingProps } from './interface'
import Link from 'next/link'

export const InfographicCardLanding: React.FC<InfographicCardLandingProps> = ({
  description,
  id,
  infograficUrl,
  title,
}) => {
  return (
    <Link href={`/infographic/${id}`}>
      <div className="lg:w-[445px] w-[200px] rounded-lg relative flex-none pr-5 lg:my-10">
        <div className="w-full aspect-infografic relative">
          <Image
            alt="Infografis"
            src={infograficUrl}
            fill
            className="rounded-t-lg"
          />
        </div>
        <div className="bg-[#D9D6FE] w-full lg:h-[156px] h-[100px] relative rounded-lg -mt-2 lg:p-6 p-2">
          <p className="text-[#53389E] lg:text-2xl text-lg font-bold">
            {title}
          </p>
          <p className="lg:max-h-20 max-h-12 pb-6 overflow-hidden lg:text-base text-xs">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
