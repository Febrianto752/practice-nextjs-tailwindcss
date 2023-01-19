import React from "react";

function Subscribe() {
  return (
    <section className="py-12 px-6">
      <div
        className="flex flex-col pt-20 pb-16 items-center space-y-4 bg-cover bg-center rounded-lg px-1"
        style={{ backgroundImage: 'url("/images/bg-long-blur.png")' }}
      >
        <h2 className="font-bold md:text-3xl text-center">
          Berlangganan Untuk Mendapatkan Pemberitahuan Dari Kami
        </h2>
        <p className="text-sky-900 text-center">
          Bergabunglah dan mendapatkan penawaran terbaik liburan
        </p>

        <form className="w-full">
          <div className="flex rounded-lg w-[90%]  mx-auto  overflow-hidden bg-white max-w-[560px] sm:w-[60%] lg:w-[400px] shadow-lg">
            <input
              type="text"
              className="py-1 px-2 rounded-lg focus:outline-0 grow min-w-[100px]"
              placeholder="Enter your email.."
            />
            <button className=" py-2 px-4 bg-sky-900 m-1 rounded-lg text-white text-sm font-medium hover:bg-sky-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
