import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[92vh] py-3 flex flex-col-reverse  md:flex md:flex-row">
      <div className="h-1/3 w-full  md:h-full md:w-1/2  flex flex-col items-center justify-center">
        <div className=" w-full p-5">
          <div className="flex-col gap-5 mb-5 md:pl-20 md:pr-10 leading-9">
            <h1 className="text-[2.5rem] md:text-7xl font-bold">
              more than just
            </h1>
            <h1 className="text-4xl md:text-7xl font-bold">
              a link, it’s your
            </h1>
            <h1 className=" text-4xl md:text-7xl font-bold">home on the web</h1>
            <p className="text-lg mt-2 md:text-2xl font-medium text-gray-500">
              hoo.be empowers creators to turn every link into an opportunity
            </p>
          </div>
          <div className="h-full w-full mb-[4rem] md:p-10 md:pl-20 md:pr-10 md:py-10">
            <div className="relative">
              <span className="absolute p-[15px] top-[5px]   md:top-3 z-10 box-border">
                <svg
                  className=""
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#51555c"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2H18C19.0609 2 20.0783 2.42143 20.8284 3.17157C21.5786 3.92172 22 4.93913 22 6V18C22 19.0609 21.5786 20.0783 20.8284 20.8284C20.0783 21.5786 19.0609 22 18 22H6C4.93913 22 3.92172 21.5786 3.17157 20.8284C2.42143 20.0783 2 19.0609 2 18V6ZM6 4C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12ZM17.5 8C17.8978 8 18.2794 7.84196 18.5607 7.56066C18.842 7.27936 19 6.89782 19 6.5C19 6.10218 18.842 5.72064 18.5607 5.43934C18.2794 5.15804 17.8978 5 17.5 5C17.1022 5 16.7206 5.15804 16.4393 5.43934C16.158 5.72064 16 6.10218 16 6.5C16 6.89782 16.158 7.27936 16.4393 7.56066C16.7206 7.84196 17.1022 8 17.5 8Z"
                  ></path>
                </svg>
              </span>
              <div className="relative ">
                <span className="text-[#51555c] absolute pl-[46px] pt-[16px] top-[2px] md:top-2 z-10 box-border text-lg font-semibold">
                  @
                </span>
                <input
                  type="text"
                  maxLength="25"
                  className="h-[8vw] md:h-[5vw] w-full rounded-xl border pl-16 pr-60 border-[#51555c] box-border text-lg text-[#51555c] font-semibold"
                  placeholder="instagram handle"
                />
              </div>
              <button className="absolute bg-black text-white font-bold px-5 md:px-10 py-3 md:py-4 rounded-xl top-[0.4rem] md:top-2.5 left-[32.5rem] md:left-96 ">
                create your hoo.be
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2/3 w-full mb-5 p-5 md:h-full md:w-1/2">
        <img
          src="https://hoo.be/_next/image?url=%2Fhome%2Flanding-desktop.webp&w=1920&q=75"
          alt="landing desktop"
          className=" w-full h-full object-cover object-center md:object-left-top rounded-4xl"
        />
      </div>
    </section>
  );
};

export default Hero;
