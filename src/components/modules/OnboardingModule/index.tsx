import React, {useEffect, useState} from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { OnBoardingFormInterface } from "./interface";

export const OnBoardingModule : React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<OnBoardingFormInterface>();
    console.log(errors);
    const [lineHandler, setLineHandler]  = useState(false)
    const [igHandler, setIgHandler] = useState(false)
    const [socmedState, setSocmedState] = useState(false)
    const onSubmit: SubmitHandler<OnBoardingFormInterface> = data => console.log(data);
    return (
        <div>
            <div className="p-20 flex flex-col gap-5">
                <div className="md:h-[500px] w-full bg-[#BDB4FE] rounded-3xl flex flex-col-reverse md:flex-row p-5">
                    <div className="md:w-3/5 w-full h-full justify-center flex flex-col md:p-10">
                        <p className="text-[#42307D] font-inter font-bold lg:text-4xl md:text-2xl text-xl">
                            Data Diri
                        </p>
                        <p className="text-black lg:text-lg text-sm mt-3 mb-10 leading-relaxed">
                        Silahkan mengisi data diri Anda dengan sejujur-jujurnya. 
                        Data yang Anda isikan hanya akan digunakan untuk keperluan administrasi sehingga
                        Anda tidak perlu khawatir karena kami akan menjaga kerahasiaan data tersebut.
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
                    <form className="flex flex-col gap-4 bg-white" onSubmit={handleSubmit(onSubmit)}>
                        <label>Nama/Inisial</label>
                        <input {...register("name", { required: true })} />
                        <label>Jenis Kelamin</label>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-4">
                                <input {...register("gender", { required: true })} type="radio" value="Laki-laki" />
                                <p>Laki-laki</p>
                            </div>
                            <div className="flex gap-4">
                                <input {...register("gender", { required: true })} type="radio" value="Perempuan" />
                                <p>Perempuan</p>
                            </div>
                            <div className="flex gap-4">
                                <input {...register("gender", { required: true })} type="radio" value="Memilih tidak menjawab" />
                                <p>Memilih tidak menjawab</p>
                            </div>
                        </div>
                        <label>NPM</label>
                        <input {...register("npm", { required: true })} />
                        <label>Jenjang Studi</label>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-4">
                                <input {...register("prodi", { required: true })} type="radio" value="S-1 Reguler" />
                                <p>S-1 Reguler</p>
                            </div>
                            <div className="flex gap-4">
                                <input {...register("prodi", { required: true })} type="radio" value="S-1 Paralel" />
                                <p>S-1 Paralel</p>
                            </div>
                            <div className="flex gap-4">
                                <input {...register("prodi", { required: true })} type="radio" value="S-1 KKI" />
                                <p>S-1 KKI</p>
                            </div>
                            <div className="flex gap-4">
                                <input {...register("prodi", { required: true })} type="radio" value="Vokasi" />
                                <p>Vokasi</p>
                            </div>
                        </div>
                        <label>Fakultas</label>
                        <input {...register("fakultas", { required: true })} />
                        <label>Jurusan</label>
                        <input {...register("jurusan", { required: true })} />
                        <label>Kanal Curhat</label>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-4">
                                    <input 
                                    {...register("socmed", { required: true })}
                                    type="radio" 
                                    name="socmed" 
                                    value="line"
                                    onClick={() => {
                                        if(!socmedState) setSocmedState(true)
                                        if(igHandler) setIgHandler(!igHandler)
                                        if(!lineHandler || socmedState===false)setLineHandler(!lineHandler)
                                    }}/>
                                    <p>OA Line</p>
                            </div>
                            <div className="flex gap-4">
                                    <input 
                                    {...register("socmed", { required: true })}
                                    type="radio" 
                                    name="socmed" 
                                    value="instagram"
                                    onClick={() => {
                                        if(!socmedState) setSocmedState(true)
                                        if(lineHandler)setLineHandler(!lineHandler)
                                        if(!igHandler||socmedState===false)setIgHandler(!igHandler)
                                    }}/>
                                    <p>Instagram</p>
                            </div>
                        </div>
                    { lineHandler && socmedState? 
                    <>     
                        
                        <p>ID Line dan Display Name</p>
                        <p>
                            Silakan menuliskan ID LINE dan Display 
                            Name Anda sesuai dengan contoh. 
                            Contoh: Ireneb519 - Irene Bella 
                            (Pastikan ID LINE & Display Name tertulis 
                            dengan benar)
                        </p>
                        <input {...register("linkSocmed", { required: true })} />

                    </> : <></> }
                    { igHandler && socmedState? 
                    <>     
                        
                        <p>Username Instagram</p>
                        <p>
                            Silakan tuliskan Username Instagram akun 
                            Anda yang akan digunakan selama konseling. 
                            Akun yang digunakan tidak harus 1st account, 
                            Anda boleh menggunakan 2nd account Anda.
                        </p>
                        <input {...register("linkSocmed", { required: true })} />

                    </> : <></> }
                    <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}