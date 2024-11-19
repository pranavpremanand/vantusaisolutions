import React, { lazy } from "react";
import Banner from "../../componets/website/Banner";
import ContactForm from "../../componets/common/ContactForm";
const MapComponent = lazy(() => import("../../componets/website/MapComponent"));

const ContactUs = () => {
  return (
    <>
      <Banner page="Contact Us" />
      <ContactForm />
      <MapComponent />
    </>
  );
};

export default ContactUs;
