import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col space-y-6 max-w-[320px]">
          <div className="flex items-center mr-8">
            <Image
              src="/images/ic-traveler.png"
              alt="banner"
              width={42}
              height={42}
            />

            <span className="text-primary font-bold text-xl ml-2">
              Traveler
            </span>
          </div>

          <p>
            Kami membantu orang lain untuk pergi berlibur dengan pengalaman
            terbaik
          </p>

          <div className="flex space-x-4">
            <Link
              href="#"
              className="flex justify-center items-center rounded-full border-2 w-10 h-10 border-sky-900 hover:shadow-lg "
            >
              <Image
                src="/images/ic-facebook.png"
                alt="instagram"
                width={10}
                height={10}
              />
            </Link>
            <Link
              href="#"
              className="flex justify-center items-center rounded-full border-2 w-10 h-10 border-sky-900 hover:shadow-lg "
            >
              <Image
                src="/images/ic-twitter.png"
                alt="instagram"
                width={16}
                height={16}
              />
            </Link>
            <Link
              href="#"
              className="flex justify-center items-center rounded-full border-2 w-10 h-10 border-sky-900 hover:shadow-lg "
            >
              <Image
                src="/images/ic-instagram.png"
                alt="instagram"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>

        <div className="flex space-x-12 mt-12 md:mt-0 max-w-[380px]">
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-slate-900">Destinasi</h4>
            <Link href="#" className="hover:underline">
              Destinasi
            </Link>
            <Link href="#" className="hover:underline">
              Harga
            </Link>
            <Link href="#" className="hover:underline">
              Lokasi
            </Link>
            <Link href="#" className="hover:underline">
              Review
            </Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-slate-900">Tentang</h4>
            <Link href="#" className="hover:underline">
              Tentang
            </Link>
            <Link href="#" className="hover:underline">
              Galeri
            </Link>
            <Link href="#" className="hover:underline">
              Kontak
            </Link>
            <Link href="#" className="hover:underline">
              Rating
            </Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-slate-900">Company</h4>
            <Link href="#" className="hover:underline">
              Company
            </Link>
            <Link href="#" className="hover:underline">
              Akomodasi
            </Link>
            <Link href="#" className="hover:underline">
              Group Hotel
            </Link>
            <Link href="#" className="hover:underline">
              Mitra Hotel
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-8 border-2" />
      <p className="text-center mb-4">
        Copyright @ 2022 Traveler. All Right Reserved
      </p>
    </footer>
  );
}

export default Footer;
