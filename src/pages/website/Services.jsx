import React from "react";
import OurServices from "../../componets/website/OurServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
// import Testimonials from "../../componets/common/Testimonials";
import Banner from "../../componets/website/Banner";

const Services = () => {
  return (
    <>
      <Banner page="Services" />
      <OurServices />
      <UnlockEfficiency />
      {/* <Testimonials /> */}
    </>
  );
};

export default Services;
