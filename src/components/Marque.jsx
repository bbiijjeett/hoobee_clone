// eslint-disable-next-line no-unused-vars
import React from "react";

const Marque = () => {
  return (
    <section className="h-[60vh] md:h-screen w-full  flex flex-col justify-center items-center py-24">
      <div className="font-bold text-4xl md:text-6xl flex flex-col justify-center items-center">
        <p>hoo.be is home for</p>
        <p>all creatives</p>
      </div>
      <div className=" h-full w-full flex items-center justify-center py-10 ">
        <div className="flex animate-marquee [--duration:30s] hover:[animation-play-state:paused] gap-5 translate-x-[50%] overflow-hidden">
          {[
            "blogger",
            "musicians",
            "streamers",
            "athletes",
            "entrepreneurs",
            "artists",
            "actors",
            "you",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-8 rounded-full flex-shrink-0"
            >
              <span className="font-bold text-2xl text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marque;
