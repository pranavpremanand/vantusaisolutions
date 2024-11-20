import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/common/Contact";
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1">Welcome to <br /> Vantus AI Solutions LLP.</h1>
            <p className="text-2xl">Where Innovation Meets Intelligence!</p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[5rem] bg-black text-white wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">Uplifting Business, Powered by AI</h2>
              <p className="desc">
                At Vantus AI Solutions LLP., our perpetual devotion to revolutionising
                company processes though a seamless integration of cutting-edge
                innovative technologies and artificial intelligence (AI) into
                every facet of a company drives us. Our mission is to formulate
                innovative, highly scalable digital solutions that will not only
                spur sustainable business growth but also substantially boost
                operational efficiency. We are not just passionate about
                integrating cutting-edge technologies. We position our clients
                at the forefront of industry innovation and give them the tools
                they require to succeed in the rapidly changing digital world of
                today. We assist businesses to meet and even surpass the
                constantly changing demands of today's markets by ensuring our
                solutions are resilient and malleable. This ensures them
                competitive, innovative, and primed for long-term success.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={aboutUsImg}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section className="py-[5rem] bg-black text-white">
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-[#4a62ec] max-w-[50rem] mx-auto to-primary bg-clip-text text-transparent">
            Reliable IT Support for Your Business
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            At Vantus AI Solutions LLP., we firmly believe that long-term client
            partnerships are nurtured through solutions that go beyond typical
            transactional relationships. The services we provide are designed
            with foresight to grow and evolve alongside your business, ensuring
            a solid foundation for sustained success. We uphold unparalleled
            standards of quality, security, and integrity, driven by our
            unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <Contact />
    </>
  );
};

export default Home;
