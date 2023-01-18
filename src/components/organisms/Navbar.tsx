import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="absolute top-0 right-0 flex left-0 bg-sky-300 md:bg-transparent px-6 flex-col md:flex-row pt-6 pb-6 md:items-center md:justify-between">
      <div className="flex items-center mr-8">
        <Image
          src="/images/ic-traveler.png"
          alt="banner"
          width={42}
          height={42}
        />

        <span className="text-primary font-bold text-xl ml-2">Traveler</span>
      </div>

      <button
        className="absolute top-6 right-4 text-xl md:hidden"
        onClick={toggleNavbar}
      >
        ☰
      </button>

      <div
        className={`flex flex-col text-center items-center mt-6 ${
          showNavbar ? "" : "hidden"
        } md:flex-row md:flex md:justify-between md:basis-[80%] `}
      >
        <ul className="flex flex-col space-y-1 mb-2 md:flex-row md:space-y-0 md:space-x-2 lg:space-x-8">
          <li>
            <Link href="#" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Destinasi
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Tentang
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Kontak
            </Link>
          </li>
        </ul>

        <div className="flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-2">
          <button className="text-slate-900 font-semibold border-2 border-slate-900 rounded-lg block w-24 py-1 hover:shadow-lg active:scale-90">
            Daftar
          </button>
          <button className="text-white bg-slate-900 font-semibold border-2 border-slate-900 rounded-lg block w-24 py-1 hover:shadow-lg active:scale-90">
            Masuk
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
