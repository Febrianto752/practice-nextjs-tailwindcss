import React from "react";
import Link from "next/link";
import Image from "next/image";

function Banner() {
  return (
    <div className="flex">
      <div
        className="flex-col space-y-6 pt-36 px-6 pb-24 sm:basis-[60%] xl:basis-[50%] bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/bg-blur.png")' }}
      >
        <h1 className="text-3xl  md:text-4xl lg:text-5xl font-bold md:leading-[3rem] lg:leading-[3.5rem]">
          Mari Nikmati Liburan Perjalanan Anda Dengan Tujuan Perjalananmu
        </h1>
        <p className="text-slate-500">
          Dengan Traveler kamu bisa merasakan pengalaman baru dengan menikmati
          tujuan tempat wisata liburanmu yang sangat indah untuk memanjakan mata
          anda.
        </p>

        <div className="flex items-center">
          <button className="px-8 py-2 rounded-lg bg-slate-900 mr-4 text-white hover:shadow-lg active:scale-95">
            Lihat Destinasi
          </button>
          <Link href="#" className="flex items-center hover:underline">
            <span className="mr-3">Galeri Kami</span>
            <picture>
              <img
                src="/images/ic-right-arrow-black.png"
                alt="icon right arrow"
              />
            </picture>
          </Link>
        </div>
      </div>
      <div
        className="hidden sm:block pt-36 sm:basis-[40%] lg:basis-[50%] border-2 bg-cover bg-center lg:bg-bottom"
        style={{ backgroundImage: 'url("/images/bg-half-header.png")' }}
      ></div>
    </div>
  );
}

export default Banner;
