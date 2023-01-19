import React from "react";
import Image from "next/image";
import Link from "next/link";

function Destination() {
  return (
    <section className="px-6 pt-16 pb-12">
      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-5 lg:text-4xl">
        Destinasi Tempat Terbaik
      </h1>
      <p className="text-center text-slate-500 max-w-[488px] mx-auto">
        Kami memberikan beberapa piihan destinasi tempat wisata untuk anda yang
        ingin pergi menikmati liburan
      </p>

      <div className="flex flex-wrap space-x-4  justify-center content-center mt-12">
        <div className="card flex flex-col max-w-[414px] mb-6">
          <picture className="relative rounded-xl overflow-hidden">
            <div className="overlay cursor-pointer absolute w-full h-full bg-black opacity-30 peer z-10"></div>
            <img
              src="/images/destination-1.png"
              alt="destination"
              className="duration-700 w-full h-full block peer-hover:scale-125 relative"
            />

            <div className="flex content-center items-center absolute top-3 right-8 z-20">
              <Image
                src="/images/ic-stars-black.png"
                alt="stars"
                width={26}
                height={26}
                className="mr-3 "
              />
              <span className="font-bold text-lg mt-1 text-slate-900">4.5</span>
            </div>
          </picture>

          <h3 className="font-bold text-xl mt-6 mb-2">Serayu Rafting</h3>
          <p className="text-slate-500">
            Tempat yang terkenal akan sungai yang bagus dan bersih...{" "}
            <Link href="#" className="text-teal-400 hover:underline">
              Baca Selengkapnya
            </Link>
          </p>

          <div className="flex justify-between my-4">
            <div>
              <p className="text-slate-500 mb-2">Harga</p>
              <p className="font-bold text-xl">
                Rp. 350000<span className="text-md text-slate-500">/orang</span>
              </p>
            </div>
            <button className="w-32 h-10 px-2 border-2 border-sky-900 rounded-lg hover:shadow-lg active:scale-95">
              Pesan Tiket
            </button>
          </div>
        </div>

        <div className="card flex flex-col max-w-[414px] mb-6">
          <picture className="relative rounded-xl overflow-hidden">
            <div className="overlay cursor-pointer absolute w-full h-full bg-black opacity-30 peer z-10"></div>
            <img
              src="/images/destination-2.png"
              alt="destination"
              className="duration-700 w-full h-full block peer-hover:scale-125 relative"
            />

            <div className="flex content-center items-center absolute top-3 right-8 z-20">
              <Image
                src="/images/ic-stars-black.png"
                alt="stars"
                width={26}
                height={26}
                className="mr-3 "
              />
              <span className="font-bold text-lg mt-1 text-slate-900">4.5</span>
            </div>
          </picture>

          <h3 className="font-bold text-xl mt-6 mb-2">Curug Cibulao</h3>
          <p className="text-slate-500">
            Tempat yang terkenal akan sungai yang bagus dan bersih...{" "}
            <Link href="#" className="text-teal-400 hover:underline">
              Baca Selengkapnya
            </Link>
          </p>

          <div className="flex justify-between my-4">
            <div>
              <p className="text-slate-500 mb-2">Harga</p>
              <p className="font-bold text-xl">
                Rp. 350000<span className="text-md text-slate-500">/orang</span>
              </p>
            </div>
            <button className="w-32 h-10 px-2 border-2 border-sky-900 rounded-lg hover:shadow-lg active:scale-95">
              Pesan Tiket
            </button>
          </div>
        </div>
        <div className="card flex flex-col max-w-[414px] mb-6">
          <picture className="relative rounded-xl overflow-hidden">
            <div className="overlay cursor-pointer absolute w-full h-full bg-black opacity-30 peer z-10"></div>
            <img
              src="/images/destination-3.png"
              alt="destination"
              className="duration-700 w-full h-full block peer-hover:scale-125 relative"
            />

            <div className="flex content-center items-center absolute top-3 right-8 z-20">
              <Image
                src="/images/ic-stars-black.png"
                alt="stars"
                width={26}
                height={26}
                className="mr-3 "
              />
              <span className="font-bold text-lg mt-1 text-slate-900">4.5</span>
            </div>
          </picture>

          <h3 className="font-bold text-xl mt-6 mb-2">Gunung Bromo</h3>
          <p className="text-slate-500">
            Tempat yang terkenal akan gunung yang indah dan udara yang segar...{" "}
            <Link href="#" className="text-teal-400 hover:underline">
              Baca Selengkapnya
            </Link>
          </p>

          <div className="flex justify-between my-4">
            <div>
              <p className="text-slate-500 mb-2">Harga</p>
              <p className="font-bold text-xl">
                Rp. 350000<span className="text-md text-slate-500">/orang</span>
              </p>
            </div>
            <button className="w-32 h-10 px-2 border-2 border-sky-900 rounded-lg hover:shadow-lg active:scale-95">
              Pesan Tiket
            </button>
          </div>
        </div>
      </div>

      <button className="mt-12 py-3 px-8 rounded-lg bg-sky-900 text-white mx-auto flex items-center hover:shadow-lg active:scale-95">
        Lihat semua{" "}
        <Image
          src="/images/ic-right-arrow-white.png"
          width={16}
          height={16}
          alt="icon stars"
          className="ml-3"
        />
      </button>
    </section>
  );
}

export default Destination;
