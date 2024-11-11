import React, { lazy } from "react";
import Banner from "../../componets/website/Banner";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { companyDetails } from "../../constant";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
const MapComponent = lazy(() => import("../../componets/website/MapComponent"));

const ContactUs = () => {
  return (
    <>
      <Banner page="Contact Us" />
      <div className="wrapper py-[5rem] grid lg:grid-cols-[45%_auto] gap-7">
        <div
          data-aos="fade-right"
          className="bg-gradient-to-r flex flex-col gap-2 text-white from-secondary/30 to-primary/30 p-4 rounded-xl"
        >
          <div className="gradient-rounded-text-box">Contact Us</div>
          <h2 className="heading-2 mt-5">Get in Touch</h2>
          <p className="desc">
            Ready to elevate your business with cutting-edge AI and digital
            solutions? <br />
            Let’s work together to bring your vision to life and take your
            business to the next level!
          </p>
          <Link
            to={`tel:${companyDetails.phone}`}
            className="flex items-start gap-3 w-fit mt-5"
          >
            <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
              <FaPhone className="text-2xl scale-x-[-1]" />
            </div>
            <div className="flex flex-col h-full">
              <p className="font-medium">Call Us</p>
              <p className="desc">{companyDetails.phone}</p>
            </div>
          </Link>
          <Link
            to={`mailto:${companyDetails.email}`}
            className="flex items-start gap-3 w-fit mt-5"
          >
            <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
              <IoMail className="text-3xl scale-x-[-1]" />
            </div>
            <div className="flex flex-col h-full">
              <p className="font-medium">Email</p>
              <p className="desc">{companyDetails.email}</p>
            </div>
          </Link>
          <div className="flex items-start gap-3 w-fit mt-5">
            <div className="min-w-[2.5rem] w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
              <FaLocationDot className="text-2xl scale-x-[-1]" />
            </div>
            <div className="flex flex-col h-full">
              <p className="font-medium">Location</p>
              <p className="desc max-w-[20rem]">{companyDetails.address}</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="h-full flex flex-col justify-between gap-7"
        >
          <div className="p-[1px] text-white h-full bg-gradient-to-r from-secondary to-primary rounded-lg">
            <div className="rounded-lg h-full bg-[#101010] p-4">
              <h3 className="text-lg">Have Any Question?</h3>
              <form className="flex flex-col gap-4 mt-5">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    className="border-primary p-2 rounded-md border outline-none bg-transparent"
                    placeholder="Name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <input
                      type="email"
                      className="border-primary p-2 rounded-md border outline-none bg-transparent"
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <input
                      type="tel"
                      className="border-primary p-2 rounded-md border outline-none bg-transparent"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <textarea
                    rows="4"
                    className="border-primary p-2 rounded-md border outline-none bg-transparent"
                    placeholder="Message"
                  />
                </div>
                <button type="button" className="tertiary-btn mt-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="flex gap-5 items-center text-white mb-1">
            <p>Follow Us On:</p>
            <div className="flex items-center gap-3">
              <Link className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center">
                <BsFacebook className="text-xl text-white group-hover:text-primary transition-all duration-300" />
              </Link>
              <Link className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center">
                <BsTwitter className="text-xl text-white group-hover:text-primary transition-all duration-300" />
              </Link>
              <Link className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center">
                <BsLinkedin className="text-xl text-white group-hover:text-primary transition-all duration-300" />
              </Link>
              <Link className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center">
                <BsYoutube className="text-xl text-white group-hover:text-primary transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MapComponent />
    </>
  );
};

export default ContactUs;
