import React from "react";
import Image from "next/image";

function Gallery() {
  return (
    <section className="px-6 py-12">
      <h2 className="font-bold mb-4 text-3xl">Galeri Kami</h2>

      <div className="flex flex-wrap justify-between items-center mb-12">
        <p className="text-slate-500 max-w-[510px] mb-4 md:mb-0">
          Kami memiliki beberapa dokumentasi yang kita buat sendiri ketika
          sedang berada di tempat destinasi wisata.
        </p>
        <button className="flex items-center py-2 px-6 bg-sky-900 hover:shadow-lg active:scale-95 rounded-lg text-white min-w-[180px]">
          Lihat semua{" "}
          <Image
            src="/images/ic-right-arrow-white.png"
            alt="right arrow"
            width={16}
            height={16}
            className="ml-2"
          />
        </button>
      </div>

      <div className="flex flex-col items-center space-y-3 lg:flex-row lg:space-y-0 lg:space-x-3 lg:items-start lg:justify-center">
        <picture className="relative overflow-hidden">
          <img
            src="/images/gallery-1.png"
            alt="gallery"
            className="peer cursor-pointer"
          />
          <div className="overlay absolute w-full h-28 -bottom-28  bg-black opacity-0 peer-hover:opacity-50 peer-hover:bottom-0 duration-1000 hover:opacity-50 hover:bottom-0">
            <h3 className="text-white font-semibold text-center mt-12">
              Gallery
            </h3>
          </div>
        </picture>

        <div className="flex-col">
          <picture className="max-w-[304px] h-full relative overflow-hidden rounded-br-xl rounded-bl-xl">
            <img
              src="/images/gallery-2.png"
              alt="gallery"
              className="peer cursor-pointer"
            />
            <div className="overlay absolute w-full h-0 bottom-0  bg-black opacity-0 peer-hover:opacity-50 peer-hover:h-28 duration-1000 hover:opacity-50 hover:h-28">
              <h3 className="text-white font-semibold text-center mt-12">
                Gallery
              </h3>
            </div>
          </picture>

          <div className="flex space-x-3 mt-3">
            <picture className="grow h-full relative overflow-hidden rounded-br-xl rounded-bl-xl">
              <img
                src="/images/gallery-3.png"
                alt="gallery"
                className="peer cursor-pointer w-full"
              />
              <div className="overlay absolute w-full h-28 -bottom-28  bg-black opacity-0 peer-hover:opacity-50 peer-hover:bottom-0 duration-1000 hover:opacity-50 hover:bottom-0">
                <h3 className="text-white font-semibold text-center mt-12">
                  Gallery
                </h3>
              </div>
            </picture>

            <picture className="grow h-full relative overflow-hidden rounded-br-xl rounded-bl-xl">
              <img
                src="/images/gallery-4.png"
                alt="gallery"
                className="peer cursor-pointer w-full"
              />
              <div className="overlay absolute w-full h-28 -bottom-28  bg-black opacity-0 peer-hover:opacity-50 peer-hover:bottom-0 duration-1000 hover:opacity-50 hover:bottom-0">
                <h3 className="text-white font-semibold text-center mt-12">
                  Gallery
                </h3>
              </div>
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
