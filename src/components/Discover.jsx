// eslint-disable-next-line no-unused-vars
import React from "react";

const Discover = () => {
  return (
    <section className="h-full lg:h-screen bg-white p-10">
      <div className=" h-full w-full rounded-3xl bg-discover pt-10">
        <div className="h-[90%] flex flex-col lg:flex-row justify-center items-center px-2 lg:px-20">
          <div className="w-full px-5 py-5     lg:w-1/3 text-3xl md:text-5xl font-bold">
            discover opportunities on creatorpass
          </div>
          <div className="w-[80%] px-5 py-5 lg:w-1/3">
            <img
              src="https://hoo.be/_next/image?url=%2Fhome%2Fcreatorpass.webp&w=384&q=75"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/3 text-2xl lg:text-lg font-bold leading-none">
            <ul className="px-5 py-5">
              {[
                {
                  title:
                    "Unlock Exclusive Experiences: Access unique events, products, and more.",
                  image: "https://hoo.be/home/icons/suitcase.svg",
                },
                {
                  title:
                    "Collaborate with Top Brands: Partner with leading companies on exciting campaigns.",
                  image: "https://hoo.be/home/icons/gift.svg",
                },
                {
                  title:
                    "Monetize Your Content: Turn your passion into profit with exclusive offers.",
                  image: "https://hoo.be/home/icons/tips.svg",
                },
              ].map((item, index) => (
                <li key={index} className="p-3 tracking-tighter">
                  <div className="py-5">
                    <img src={item.image} alt="" />
                  </div>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="h-[10%] text-gray-600  text-base flex flex-col justify-center items-center">
          <h1>want to partner with hoo.be on creatorpass?</h1>
          <h1>
            email <span className="text-blue-600">business@hoo.be</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Discover;
