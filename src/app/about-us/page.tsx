'use client'
import { Bixmit, Bubble1, Bubble2 } from '@icons'
import { SegmentedControl } from '@mantine/core'
import Image from 'next/image'
import React, { useState } from 'react'

const AboutUsPage = () => {
  const [value, setValue] = useState('mean')

  const render = (name: string) => {
    switch (name) {
      case 'mean':
        return (
          <>
            <p className="text-[#53389E] font-bold font-inter md:text-4xl text-xl mb-5">
              Mengapa “Empower”?
            </p>
            <p className="md:text-base text-xs font-medium font-inter text-[#344054] text-justify">
              Kata <b>“Empower”</b> dalam nama situs web ini ditujukan sebagai
              pesan mengenai tujuan dan nilai konselor sebaya yang memberdayakan
              mahasiswa Universitas Indonesia, khususnya program Sarjana dan
              Vokasi. Dengan adanya dorongan dan dukungan tersebut, EmpowerU&I
              diharapkan dapat menciptakan kesan positif tentang komitmen
              konselor sebaya terhadap kesejahteraan dan pemberdayaan kesehatan
              mental mahasiswa program Sarjana dan Vokasi di UI. Selain itu,
              pemilihan kata <b>“U&I”</b> juga memberikan kesan dekat sehingga
              diharapkan dapat memberikan daya tarik bagi mahasiswa untuk
              melakukan konseling sebaya.
            </p>
          </>
        )
      case 'for':
        return (
          <>
            <p className="text-[#53389E] font-bold font-inter md:text-4xl text-xl mb-5">
              Tujuan
            </p>
            <p className="md:text-base text-xs font-medium font-inter text-[#344054] text-justify">
              Situs web ini bertujuan untuk menciptakan layanan kesehatan mental
              di kampus UI yang mudah diakses oleh mahasiswa UI program Sarjana
              (S-1) dan Vokasi (D-3/D-4) sebagai langkah preventif untuk
              membantu mahasiswa menghadapi permasalahan kesehatan mental yang
              lebih ringan serta sebagai langkah promotif untuk meningkatkan
              kesadaran akan pentingnya kesehatan mental.
            </p>
          </>
        )
      case 'urgent':
        return (
          <>
            <p className="text-[#53389E] font-bold font-inter md:text-4xl text-xl mb-5">
              Urgensi
            </p>
            <p className="md:text-base text-xs font-medium font-inter text-[#344054] text-justify mb-2">
              Hampir seluruh fakultas dan vokasi di UI kini memiliki layanan
              konseling sebaya yang juga melakukan gerakan promosi kesehatan
              mental. Layanan konseling sebaya ini disediakan dan diperuntukkan
              oleh mahasiswa. Dengan layanan konseling sebaya, mahasiswa dapat
              memiliki wadah bercerita yang aman dan nyaman sehingga upaya untuk
              memberdayakan kesehatan mental sesama dapat tercipta.
            </p>
            <p className="md:text-base text-xs font-medium font-inter text-[#344054] text-justify mb-2">
              Sayangnya, layanan konseling sebaya yang dijalankan oleh hampir
              seluruh fakultas pun belum sepenuhnya diketahui oleh seluruh
              mahasiswa dari fakultas yang bersangkutan. Hal ini disebabkan
              masih kurangnya jangkauan yang dicapai oleh layanan konseling
              sebaya. Oleh karena itu, dibutuhkan suatu wadah yang dapat
              mempromosikan layanan kesehatan mental yang telah tersedia,
              seperti dengan pembuatan situs web yang dapat mengintegrasikan
              gerakan preventif serta promotif yang diperuntukkan bagi
              mahasiswa.
            </p>
            <p className="md:text-base text-xs font-medium font-inter text-[#344054] text-justify mb-2">
              BEM Fakultas Psikologi UI bersama dengan BEM Fakultas Ilmu
              Komputer UI menginisiasikan pengintegrasian layanan konseling
              sebaya di setiap fakultas dan vokasi melalui situs web agar sistem
              pendaftaran konseling sebaya dan pemusatan publikasi informasi
              mengenai kesehatan mental di setiap fakultas dan vokasi lebih
              efektif, efisien, dan mudah dijangkau oleh setiap mahasiswa
              Universitas Indonesia.
            </p>
          </>
        )
      default:
        break
    }
  }
  return (
    <>
      <head>
        <title>About Us | Empower U&I</title>
      </head>
      <div className="w-full min-h-screen">
        <div className="relative mb-60">
          <div className="font-inter flex items-center justify-center flex-col bg-[#53389E] pt-10 md:pt-14 lg:pt-40 pb-60 md:pb-80 px-5 md:px-20 lg:px-40 relative overflow-hidden text-justify">
            <div className="absolute top-0 left-0 z-0">
              <Bubble1 />
            </div>
            <div className="absolute bottom-0 right-0 z-0">
              <Bubble2 />
            </div>
            <p className="font-medium md:text-2xl text-base text-white z-10">
              Tentang Kami
            </p>
            <p className="font-bold md:text-6xl text-4xl text-white z-10 mb-10">
              EmpowerU&I
            </p>
            <p className="text-white font-medium text-xs lg:text-xl md:text-base z-10">
              EmpowerU&I merupakan situs web kesehatan mental yang diinisiasikan
              oleh BEM Fakultas Psikologi UI 2023 dan BEM Fakultas Ilmu Komputer
              UI 2023. Situs web ini bertujuan sebagai wadah registrasi layanan
              konseling sebaya yang ada di UI. Selain itu, situs web ini juga
              akan menyediakan dan mengintegrasikan informasi-informasi yang
              berkaitan dengan kesehatan mental. Kebermanfaatan situs web ini
              diharapkan dapat menjangkau seluruh Civitas Akademika UI, terutama
              Mahasiswa Sarjana dan Vokasi yang ada di UI.
            </p>
            <div className="absolute bottom-0 w-full z-10">
              <div className="w-full h-32 relative">
                <Image
                  src={'/assets/wave.svg'}
                  alt="wave"
                  className="relative object-cover"
                  fill
                />
              </div>
            </div>
          </div>
          <div className="w-full md:px-20 lg:px-40 px-5 absolute -bottom-40 z-20">
            <div className="w-full rounded-3xl bg-[#F9F5FF] flex flex-col items-center justify-center py-9 shadow-xl gap-9 ">
              <p className="text-[#53389E] font-bold font-inter md:text-5xl text-3xl">
                Supported By
              </p>
              <Bixmit />
            </div>
          </div>
        </div>
        <div className="w-full bg-[#F9F5FF] flex flex-col items-center justify-center px-5 md:px-20 lg:px-40 py-10 gap-10">
          <p className="text-[#53389E] font-bold font-inter lg:text-5xl md:text-3xl text-center">
            Achieving Well-being through Our Community
          </p>
          <p className="text-justify text-[#344054] font-medium lg:text-lg md:text-sm text-xs">
            Gerakan promotif dan preventif kesehatan mental yang tersampaikan
            melalui situs web akan mengangkat tema{' '}
            <b>“Achieving Well-being through Our Community”</b>. Tema ini
            diambil dengan harapan terwujudnya kesejahteraan mental bagi seluruh
            civitas akademika Universitas Indonesia. <b>“Achieving”</b> memiliki
            makna bahwa usaha yang dilakukan seseorang untuk mencapai
            <b>“Well-being”</b> merupakan sebuah proses. Oleh karena itu,
            dibutuhkan upaya yang berkesinambungan untuk mencapai kesejahteraan
            psikologis.
            <b>“through Our Community”</b> mengindikasikan bahwa komunitas
            memiliki peran yang signifikan dengan memberikan fasilitas kesehatan
            mental yang mudah diakses bagi mahasiswa UI. Dengan berbagai fitur
            yang diberikan, situs web kesehatan mental akan membantu mahasiswa
            dalam mencegah munculnya masalah kesehatan mental sehingga dapat
            mencapai potensi diri yang optimal. Dengan demikian, melalui
            komunitas yang memfasilitasi perubahan, seluruh elemen yang tercakup
            dalam suatu komunitas dapat merasakan kebermanfaatannya sehingga
            dapat mendorong tercapainya kesejahteraan psikologis seseorang.
          </p>
        </div>
        <div className="bg-gradient-to-t from-[#D6BBFB] via-[#F4EBFF] px-5 md:px-20 lg:px-40 py-20">
          <div className="bg-[#F4EBFF] w-full rounded-3xl py-5 px-1 border-4 border-[#D6BBFB] flex gap-5">
            <div className="lg:w-1/2 hidden lg:block">
              <div className="aspect-square w-full relative">
                <Image
                  src={'/assets/aboutUsAssets.svg'}
                  alt="About Us Assets"
                  className="relative object-fill"
                  fill
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="w-full flex flex-col gap-5">
                <SegmentedControl
                  fullWidth
                  value={value}
                  onChange={setValue}
                  data={[
                    { label: 'Arti Nama', value: 'mean' },
                    { label: 'Tujuan', value: 'for' },
                    { label: 'Urgensi', value: 'urgent' },
                  ]}
                />
                <div className="bg-white w-full rounded-lg md:p-5 p-2">
                  {render(value)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsPage
