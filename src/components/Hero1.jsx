import React from "react";

const Hero1 = () => {
  return (
    <section className="text-white h-screen w-full flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 h-2/5 md:h-full  flex justify-center items-center">
        <div className="p-5">
          <h1 className="mb-5 text-4xl lg:text-7xl font-bold text-black">
            more than just <br /> a link, its your <br /> home on the web
          </h1>
          <span className=" text-base md:text-xl text-gray-500 ">
            hoo.be empowers creators to turn every link into an opportunity
          </span>
          <form className="h-full w-full mt-5 md:mt-10 relative">
            <input
              type="text"
              maxLength="25"
              className="h-[10vw] md:h-[5vw] w-full rounded-xl border-[0.5px] pl-16 pr-10 md:pr-30 border-[#9e9fa1] text-lg text-[#7f838a] font-semibold"
              placeholder="instagram handle"
            />
            <button className="absolute bg-black text-white rounded-xl px-4 py-1 md:px-10 md:py-4 top-1/2 transform -translate-y-1/2 right-2 font-semibold">
              create
            </button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-3/5 md:h-full">
        <img
          className="h-full w-full  object-cover object-left-top rounded-3xl hidden lg:block"
          src="https://hoo.be/_next/image?url=%2Fhome%2Flanding-desktop.webp&w=1920&q=75"
          alt="bg"
        />

        <img
          className="h-full w-full object-cover object-center rounded-3xl hidden md:block lg:hidden"
          src="https://hoo.be/_next/image?url=%2Fhome%2Flanding-tablet.webp&w=1920&q=75"
          alt="bg"
        />

        <img
          className="h-full w-full object-cover object-center rounded-3xl md:hidden"
          src="https://hoo.be/_next/image?url=%2Fhome%2Flanding-mobile.webp&w=1920&q=75"
          alt="bg"
        />
      </div>
    </section>
  );
};

export default Hero1;
