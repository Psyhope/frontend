'use client'
import { Bismit, FooterAsset1, FooterAsset2, Psyhope } from '@icons'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full bg-[#6941C6] flex flex-col items-center text-white py-10 relative overflow-hidden">
        <FooterAsset1 className="absolute top-0 right-0 hidden lg:block" />
        <FooterAsset2 className="absolute bottom-0 left-0" />
        <FooterAsset2 className="absolute top-0 right-0 rotate-180 lg:hidden" />
        <p className="font-bold font-inter text-3xl mb-6 z-10">Made With 💖</p>
        <div className="flex flex-col md:flex-row md:gap-20 gap-5 z-10">
          <div>
            <p className="font-semibold text-xl mb-4">Crafted by:</p>
            <div className="bg-white rounded-lg p-[19px]">
              <Psyhope />
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl mb-4">Developed by:</p>
            <Bismit />
          </div>
        </div>
      </div>
    </>
  )
}
