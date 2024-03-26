// eslint-disable-next-line no-unused-vars
import React from "react";

const Join = () => {
  return (
    <section className="h-[80vh] p-10 ">
      <div className="p-10 h-full rounded-3xl w-full bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col lg:flex-row justify-center items-start">
        <div className="w-full lg:w-1/2 h-2/4 lg:h-full p-5  lg:p-10 flex flex-col justify-center items-start gap-5 text-white">
          <h1 className="font-bold text-2xl md:text-5xl">get started now</h1>
          <p className="font-semibold text-lg md:text-2xl">
            join our community of top creators and launch your own hub today
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-2/4 lg:h-full p-1 mt-5 peer-even:  lg:p-10">
          <div
            className="
h-full w-full rounded-3xl backdrop-blur-sm bg-white/10 border-[1px] border-[#c5bdbd] flex flex-col justify-center items-center
"
          >
            <form className="w-full flex flex-col justify-center items-center">
              <input
                className="rounded-xl mb-5 p-2 md:p-5 w-[80%]"
                placeholder="instagram"
                type="text"
              />
              <input
                className="bg-black w-[50%] text-white rounded-xl font-bold p-2 md:p-5"
                type="submit"
                value="Join"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
