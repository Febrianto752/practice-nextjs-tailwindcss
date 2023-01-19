import React from "react";
import Image from "next/image";

function Features() {
  return (
    <section className="py-12 px-6 flex flex-wrap md:space-x-1 justify-evenly">
      <div className="max-w-[504px] mb-8">
        <h2>Dapatkan Pengalaman Liburan Yang Menyenangkan</h2>
        <p className="my-4 text-slate-600">
          Bersama Traveler kamu bisa mendapatkan pengalmaan terbaik destinasi
          wisata yang sangat menyenangkan.
        </p>

        <picture>
          <img src="/images/traveler.png" alt="people" />
        </picture>
      </div>

      <div className="max-w-[600px] flex flex-col space-y-12 ">
        <div className="flex flex-wrap">
          <picture
            className="flex justify-center items-center rounded-[50%]  bg-teal-500 mr-4"
            style={{ width: 90, height: 90 }}
          >
            <img src="/images/ic-dollar-white.png" alt="stars" />
          </picture>
          <div className="max-w-[400px]">
            <h3 className="font-semibold text-xl mb-2">Harga Terjangkau</h3>
            <p className="text-slate-500">
              Kami akan memberikan pelyanan yang sangat baik dan ramah demi
              pelanggan setia kami.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <picture
            className="flex justify-center items-center rounded-[50%]  bg-teal-500 mr-4"
            style={{ width: 90, height: 90 }}
          >
            <img src="/images/ic-stars-white.png" alt="stars" />
          </picture>
          <div className="max-w-[400px]">
            <h3 className="font-semibold text-xl mb-2">
              Pengalaman Tak Terlupakan
            </h3>
            <p className="text-slate-500">
              Kami akan memberikan pelyanan yang sangat baik dan ramah demi
              pelanggan setia kami.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <picture
            className="flex justify-center items-center rounded-[50%]  bg-teal-500 mr-4"
            style={{ width: 90, height: 90 }}
          >
            <img src="/images/ic-setting-white.png" alt="stars" />
          </picture>
          <div className="max-w-[400px]">
            <h3 className="font-semibold text-xl mb-2">
              Pelayanan Sangat Ramah
            </h3>
            <p className="text-slate-500">
              Kami akan memberikan pelyanan yang sangat baik dan ramah demi
              pelanggan setia kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
