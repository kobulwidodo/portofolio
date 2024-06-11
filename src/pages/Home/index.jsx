import React from "react";
import gamer from "../../assets/gamer.svg";

const Home = () => {
  return (
    <>
      <div className="">
        <img src={gamer} alt="" />
      </div>
      <div className="mt-20">
        <h1 className="font-black text-4xl">Hello There!</h1>
        <p className="mt-5 font-medium text-lg">
          My name is Rakhmad Giffari Nurfadhilah, a Software Engineer focusing
          on Backend based in Indonesia.
        </p>
        <div className="flex gap-x-3 mt-5">
          <a
            href="https://www.linkedin.com/in/rakhmad-giffari-nurfadhilah/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              className="fill-[#d4d2d5] hover:fill-[#969696]"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
          <a href="https://www.github.com/kobulwidodo" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={30}
              className="fill-[#d4d2d5] hover:fill-[#969696]"
            >
              <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="z-40 h-2 mt-10 mb-32 bg-gradient-to-r from-blue-300 via-pink-500 to-yellow-300 rounded"></div>
      <div className="mb-16">
        <h1 className="font-bold text-2xl mb-10">Experience 🧑‍💻</h1>
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-12">
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 fill-pink-600"
              >
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </div>
            <div className="">
              <p className="font-bold text-sm opacity-50 mb-2">
                Feb 2024 - Now
              </p>
              <a
                href="https://www.ocbc.id/id/"
                target="_blank"
                className="text-xl font-bold hover:text-[#969696]"
              >
                OCBC Indonesia
              </a>
              <h4 className="mt-2">
                Software Engineer ~{" "}
                <span className="opacity-50 text-xs italic">Contract</span>
              </h4>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 fill-pink-600"
              >
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </div>
            <div className="">
              <p className="font-bold text-sm opacity-50 mb-2">
                Feb 2023 - May 2023
              </p>
              <a
                href="https://delosaqua.com/"
                target="_blank"
                className="text-xl font-bold hover:text-[#969696]"
              >
                Delos
              </a>
              <h4 className="mt-2">
                Software Engineer ~{" "}
                <span className="opacity-50 text-xs italic">Internship</span>
              </h4>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 fill-pink-600"
              >
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </div>
            <div className="">
              <p className="font-bold text-sm opacity-50 mb-2">
                July 2022 - Oct 2022
              </p>
              <a
                href="https://delosaqua.com/"
                target="_blank"
                className="text-xl font-bold hover:text-[#969696]"
              >
                Delos
              </a>
              <h4 className="mt-2">
                Software Engineer ~{" "}
                <span className="opacity-50 text-xs italic">Internship</span>
              </h4>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 fill-pink-600"
              >
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </div>
            <div className="">
              <p className="font-bold text-sm opacity-50 mb-2">
                Jan 2022 - Jul 2022
              </p>
              <a
                href="https://www.kawanbantu.com/"
                target="_blank"
                className="text-xl font-bold hover:text-[#969696]"
              >
                Kawanbantu
              </a>
              <h4 className="mt-2">
                Backend Developer ~{" "}
                <span className="opacity-50 text-xs italic">Part-time</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 text-center">
        <h1 className="font-medium text-xl mb-3">Favorite Tech Stacks 👾</h1>
        <div className="flex gap-x-3 justify-center items-center">
          <a target="_blank" href="https://go.dev/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              className="fill-[#d4d2d5] hover:fill-[#969696]"
              viewBox="0 0 640 512"
            >
              <path d="M400.1 194.8C389.2 197.6 380.2 199.1 371 202.4C363.7 204.3 356.3 206.3 347.8 208.5L347.2 208.6C343 209.8 342.6 209.9 338.7 205.4C334 200.1 330.6 196.7 324.1 193.5C304.4 183.9 285.4 186.7 267.7 198.2C246.5 211.9 235.6 232.2 235.9 257.4C236.2 282.4 253.3 302.9 277.1 306.3C299.1 309.1 316.9 301.7 330.9 285.8C333 283.2 334.9 280.5 337 277.5V277.5L337 277.5C337.8 276.5 338.5 275.4 339.3 274.2H279.2C272.7 274.2 271.1 270.2 273.3 264.9C277.3 255.2 284.8 239 289.2 230.9C290.1 229.1 292.3 225.1 296.1 225.1H397.2C401.7 211.7 409 198.2 418.8 185.4C441.5 155.5 468.1 139.9 506 133.4C537.8 127.8 567.7 130.9 594.9 149.3C619.5 166.1 634.7 188.9 638.8 218.8C644.1 260.9 631.9 295.1 602.1 324.4C582.4 345.3 557.2 358.4 528.2 364.3C522.6 365.3 517.1 365.8 511.7 366.3C508.8 366.5 506 366.8 503.2 367.1C474.9 366.5 449 358.4 427.2 339.7C411.9 326.4 401.3 310.1 396.1 291.2C392.4 298.5 388.1 305.6 382.1 312.3C360.5 341.9 331.2 360.3 294.2 365.2C263.6 369.3 235.3 363.4 210.3 344.7C187.3 327.2 174.2 304.2 170.8 275.5C166.7 241.5 176.7 210.1 197.2 184.2C219.4 155.2 248.7 136.8 284.5 130.3C313.8 124.1 341.8 128.4 367.1 145.6C383.6 156.5 395.4 171.4 403.2 189.5C405.1 192.3 403.8 193.9 400.1 194.8zM48.3 200.4C47.1 200.4 46.7 199.8 47.4 198.8L53.9 190.4C54.5 189.5 56.1 188.9 57.3 188.9H168.6C169.8 188.9 170.1 189.8 169.5 190.7L164.2 198.8C163.6 199.8 162 200.7 161.1 200.7L48.3 200.4zM1.2 229.1C0 229.1-.3 228.4 .3 227.5L6.9 219.1C7.5 218.2 9 217.5 10.3 217.5H152.4C153.6 217.5 154.2 218.5 153.9 219.4L151.4 226.9C151.1 228.1 149.9 228.8 148.6 228.8L1.2 229.1zM75.7 255.9C75.1 256.8 75.4 257.7 76.7 257.7L144.6 258C145.5 258 146.8 257.1 146.8 255.9L147.4 248.4C147.4 247.1 146.8 246.2 145.5 246.2H83.2C82 246.2 80.7 247.1 80.1 248.1L75.7 255.9zM577.2 237.9C577 235.3 576.9 233.1 576.5 230.9C570.9 200.1 542.5 182.6 512.9 189.5C483.9 196 465.2 214.4 458.4 243.7C452.8 268 464.6 292.6 487 302.6C504.2 310.1 521.3 309.2 537.8 300.7C562.4 287.1 575.8 268 577.4 241.2C577.3 240 577.3 238.9 577.2 237.9z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mb-16">
        <h1 className="font-bold text-2xl mb-10">Volunteer 🦖</h1>
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-12">
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 fill-pink-600"
              >
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </div>
            <div className="">
              <p className="font-bold text-sm opacity-50 mb-2">
                Sep 2022 - Aug 2023
              </p>
              <a
                className="text-xl font-bold hover:text-[#a9a8aa]"
                target="_blank"
                href="https://gdsc.community.dev/university-of-brawijaya/"
              >
                Google Developer Student Club
              </a>
              <h4 className="mt-2">Web & Cloud Core Team</h4>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 fill-pink-600"
              >
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </div>
            <div className="">
              <p className="font-bold text-sm opacity-50 mb-2">
                Jan 2022 - Jan 2023
              </p>
              <a
                href="https://www.bccfilkom.net"
                target="_blank"
                className="text-xl font-bold hover:text-[#a9a8aa]"
              >
                Basic Computing Community
              </a>
              <h4 className="mt-2">Deputy Head of Backend Department</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center opacity-50 text-sm">
        <p>Build with 🩷 and 🧋 by Rakhmad Giffari</p>
      </div>
    </>
  );
};

export default Home;
