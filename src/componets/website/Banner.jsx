import React from "react";
import { defaultBanner } from "../../constant";

const Banner = ({ page }) => {
  return (
    <div data-aos="fade-down" className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
      <img src={defaultBanner} className="object-cover h-full w-full" alt="" />
      <h2 className="font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] text-center">
        {page}
      </h2>
    </div>
  );
};

export default Banner;
