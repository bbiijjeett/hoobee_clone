// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";

const images = [
  {
    id: 1,
    img: "https://hoo.be/_next/image?url=%2Fhome%2Fshop-carousels.webp&w=1080&q=75",
    title: "products",
  },
  {
    id: 2,
    img: "https://hoo.be/_next/image?url=%2Fhome%2Fembeds.webp&w=1080&q=75",
    title: "socials",
  },
  {
    id: 3,
    img: "https://hoo.be/_next/image?url=%2Fhome%2Ftips-paywalls.webp&w=1080&q=75",
    title: "payments",
  },
  {
    id: 4,
    img: "https://hoo.be/_next/image?url=%2Fhome%2Fthemes-accents.webp&w=1080&q=75",
    title: "designs",
  },
  {
    id: 5,
    img: "https://hoo.be/_next/image?url=%2Fhome%2Fevent-carousels.webp&w=1080&q=75",
    title: "tickets",
  },
  {
    id: 6,
    img: "https://hoo.be/_next/image?url=%2Fhome%2Fintegrations.webp&w=1080&q=75",
    title: "shops",
  },
];

const Feature = () => {
  const containerRef = useRef();

  const prevSlide = () => {
    containerRef.current.scrollLeft -= 500;
  };

  const nextSlide = () => {
    containerRef.current.scrollLeft += 500;
  };

  return (
    <section className="h-screen w-full bg-white flex flex-col items-center">
      <div className="h-[17%] flex flex-col items-center justify-center py-10">
        <h1 className="text-black text-2xl md:text-5xl font-bold">
          powerful features built
        </h1>
        <h1 className="text-black text-2xl md:text-5xl font-bold">
          for creators:
        </h1>
      </div>
      <div className="h-[73%] w-[85%] pt-10">
        <ul
          className="p-1 h-full w-full whitespace-nowrap overflow-hidden overflow-x-scroll scroll-smooth no-scrollbar"
          ref={containerRef}
        >
          {images.map((item, index) => {
            return (
              <div
                key={index}
                className="w-auto h-[93%] rounded-3xl mx-2  inline-block relative"
              >
                <img src={item.img} className="h-full" alt={item.title} />
              </div>
            );
          })}
        </ul>
      </div>
      <div className="h-[10%] w-[85%] flex justify-center items-center gap-5">
        <button
          className="p-3 rounded-full border-[1px] border-gray-600"
          onClick={prevSlide}
        >
          <svg
            className="CarouselArrow_icon__AOSWz rotate-180"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9963 11.9076C15.9743 11.7054 15.8918 11.5147 15.7588 11.3614L9.81215 4.43568C9.65341 4.20121 9.40305 4.04661 9.12303 4.00925C8.84427 3.9706 8.56166 4.05434 8.34612 4.23727C8.1319 4.42021 8.00545 4.68689 8.00026 4.96771C7.99381 5.24984 8.10866 5.52167 8.31514 5.71361L13.7147 12.0002L8.31514 18.2868C8.10866 18.4788 7.9938 18.7493 8.00026 19.0314C8.00542 19.3136 8.13189 19.579 8.34612 19.7619C8.56164 19.9461 8.84426 20.0286 9.12303 19.9912C9.40307 19.9525 9.65344 19.798 9.81215 19.5648L15.7588 12.639C15.933 12.4368 16.0195 12.1726 15.9963 11.9073V11.9076Z"
              fill="#000"
            ></path>
          </svg>
        </button>
        <button
          className="p-3 rounded-full border-[1px] border-gray-600"
          onClick={nextSlide}
        >
          <svg
            className="CarouselArrow_icon__AOSWz"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9963 11.9076C15.9743 11.7054 15.8918 11.5147 15.7588 11.3614L9.81215 4.43568C9.65341 4.20121 9.40305 4.04661 9.12303 4.00925C8.84427 3.9706 8.56166 4.05434 8.34612 4.23727C8.1319 4.42021 8.00545 4.68689 8.00026 4.96771C7.99381 5.24984 8.10866 5.52167 8.31514 5.71361L13.7147 12.0002L8.31514 18.2868C8.10866 18.4788 7.9938 18.7493 8.00026 19.0314C8.00542 19.3136 8.13189 19.579 8.34612 19.7619C8.56164 19.9461 8.84426 20.0286 9.12303 19.9912C9.40307 19.9525 9.65344 19.798 9.81215 19.5648L15.7588 12.639C15.933 12.4368 16.0195 12.1726 15.9963 11.9073V11.9076Z"
              fill="#000"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Feature;
