// eslint-disable-next-line no-unused-vars
import React from "react";

const items = [
  {
    name: "Beyoncé",
    title: "Singer",
    image:
      "https://www.hollywoodreporter.com/wp-content/uploads/2023/02/Beyonce-Acceptance-Grammys-Onstage-GettyImages-1463288737-H-2023.jpg?w=1296",
    follower: "150 M",
  },
  {
    name: "Drake",
    title: "Rapper",
    image:
      "https://people.com/thmb/j3qf-BDqR2Nhug2Ay4nDyrYVeyI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1079x449:1081x451)/drake-dcb24fd1c49644c1b5e7de9ac22396cd.jpg",
    follower: "90 M",
  },
  {
    name: "Taylor Swift",
    title: "Singer-Songwriter",
    image:
      "https://images.seattletimes.com/wp-content/uploads/2023/07/07222023_swift_213100.jpg?d=2040x1479",
    follower: "120 M",
  },
  {
    name: "Ed Sheeran",
    title: "Singer-Songwriter",
    image:
      "https://images.hellomagazine.com/horizon/landscape/df341f077f91-ed-sheeran-home-video-t.jpg",
    follower: "100 M",
  },
  {
    name: "Rihanna",
    title: "Singer",
    image:
      "https://assets.vogue.com/photos/63e67c2653cf7705e1e06f3a/4:3/w_2560%2Cc_limit/GettyImages-1246958447.jpg",
    follower: "120 M",
  },
  {
    name: "Justin Bieber",
    title: "Singer",
    image:
      "https://media.vanityfair.com/photos/63d16b6b14e07ec307e8d624/master/w_2560%2Cc_limit/GettyImages-1414522654.jpg",
    follower: "140 M",
  },
  {
    name: "Ariana Grande",
    title: "Singer",
    image:
      "https://www.billboard.com/wp-content/uploads/2023/03/Ariana-Grande-2020-billboard-1548.jpg?w=1024",
    follower: "110 M",
  },
  {
    name: "Kanye West",
    title: "Rapper",
    image:
      "https://media.gq-magazine.co.uk/photos/63109331ee141ccaf8195063/16:9/w_2560%2Cc_limit/GettyImages-1366424468.jpg",
    follower: "70 M",
  },
  {
    name: "Post Malone",
    title: "Rapper-Singer",
    image:
      "https://www.billboard.com/wp-content/uploads/2023/04/Post-Malone-2023-billboard-1548.jpg?w=1024",
    follower: "80 M",
  },
  {
    name: "Lady Gaga",
    title: "Singer-Songwriter",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjQ4MzIzMDkyOF5BMl5BanBnXkFtZTgwNzE4NjYwODM@._V1_QL75_UX500_CR0,35,500,281_.jpg",
    follower: "90 M",
  },
];

const Creator = () => {
  return (
    <section className="h-full w-full">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-3xl pt-32 pb-10">
          trusted by top creators
        </h1>
      </div>
      <div className=" relative flex w-[full] items-center pb-10 md:px-32">
        <div className="relative flex max-w-[100vw] overflow-hidden py-5">
          <div className=" flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="h-full ">
                <div className="relative h-full w-52   border border-white/5 bg-white/5 px-4 py-6">
                  <img
                    src={item.image}
                    className=" w-full h-28 object-fill bg-white  hover:scale-110 rounded-3xl mb-4"
                  />

                  <div className="flex flex-col justify-center items-center">
                    <div className="text-black font-bold text-lg ">
                      {item.name}
                    </div>

                    <div className="text-gray-400 font-base">{item.title}</div>
                    <div className="pt-4 pb-4 text-gray-400 font-bold flex items-baseline">
                      <span className="pr-2">
                        <svg
                          className="translate-y-[2px]"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#808080"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2H18C19.0609 2 20.0783 2.42143 20.8284 3.17157C21.5786 3.92172 22 4.93913 22 6V18C22 19.0609 21.5786 20.0783 20.8284 20.8284C20.0783 21.5786 19.0609 22 18 22H6C4.93913 22 3.92172 21.5786 3.17157 20.8284C2.42143 20.0783 2 19.0609 2 18V6ZM6 4C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12ZM17.5 8C17.8978 8 18.2794 7.84196 18.5607 7.56066C18.842 7.27936 19 6.89782 19 6.5C19 6.10218 18.842 5.72064 18.5607 5.43934C18.2794 5.15804 17.8978 5 17.5 5C17.1022 5 16.7206 5.15804 16.4393 5.43934C16.158 5.72064 16 6.10218 16 6.5C16 6.89782 16.158 7.27936 16.4393 7.56066C16.7206 7.84196 17.1022 8 17.5 8Z"
                          ></path>
                        </svg>
                      </span>
                      {item.follower}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creator;
