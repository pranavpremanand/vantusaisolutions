import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  whyChooseUsPng,
} from "../../constant";

const WhyChooseUs = () => {
  const totalYrs = 2;
  const totalOnTimeCompletionPercentage = 100;
  const totalExperts = 15;
  const totalClients = 75;

  const [yrs, setYrs] = useState(0);
  const [onTimeCompletion, setOnTimeCompletion] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Animate Years of Experience
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 100);

      // Animate Experts
      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 100);

      // Animate Clients
      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, totalClients));
      }, 50);

      // Animate On Time Completion Percentage
      const completionInterval = setInterval(() => {
        setOnTimeCompletion((prev) =>
          Math.min(prev + 1, totalOnTimeCompletionPercentage)
        );
      }, 20);

      // Clear intervals when animation reaches target values
      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);

  return (
    <section className="py-[5rem] bg-gradient-to-r from-secondary/30 to-primary/30">
      <div className="wrapper text-center text-white flex flex-col gap-7">
        <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
          Why Choose Us
        </div>
        <div className="flex flex-col gap-5">
          <h2 data-aos="fade-up" className="heading-2">
            Magic Behind Our IT Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[40rem] mx-auto">
            We begin by conducting a comprehensive needs assessment to
            understand your specific requirements, challenges, and goals.
          </p>
          <div data-aos="fade-up" className="w-full block lg:hidden">
            <img
              src={whyChooseUsPng}
              className="object-contain max-h-[20rem] mx-auto"
              alt="why choose us"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 mt-9">
            <div className="flex flex-col gap-5 h-full">
              <div
                data-aos="fade-right"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl">Technical Expertise</h5>
                  <img
                    src={whyChooseUsIcon1}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-white/80 text-start mt-3">
                  A reputable IT company should possess a high level of
                  technical expertise.
                </p>
              </div>
              <div
                data-aos="fade-right"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl">Innovation & Adaptability</h5>
                  <img
                    src={whyChooseUsIcon2}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-white/80 text-start mt-3">
                  A reputable IT company should possess a high level of
                  technical expertise.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="w-full lg:block hidden">
              <img
                src={whyChooseUsPng}
                className="object-contain max-h-[25rem] mx-auto"
                alt="why choose us"
              />
            </div>
            <div className="flex flex-col gap-5 h-full">
              <div
                data-aos="fade-left"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl">Effective Communication</h5>
                  <img
                    src={whyChooseUsIcon3}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-white/80 text-start mt-3">
                  A reputable IT company should possess a high level of
                  technical expertise.
                </p>
              </div>
              <div
                data-aos="fade-left"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl">Security and Compliance</h5>
                  <img
                    src={whyChooseUsIcon4}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-white/80 text-start mt-3">
                  An IT company must prioritize cybersecurity and data
                  protection.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[3rem]">
          <div
            ref={ref}
            data-aos="fade-up"
            className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-5 rounded-3xl bg-gradient-to-r from-secondary to-primary p-[2rem]"
          >
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{yrs}</h1>
                <span className="absolute top-1 -right-3 text-lg">+</span>
              </div>
              <p className="font-medium mt-3">Years of Experience</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{experts}</h1>
                <span className="absolute top-1 -right-3 text-lg">+</span>
              </div>
              <p className="font-medium mt-3">Expert Team</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{clients}</h1>
                <span className="absolute top-1 -right-3 text-lg">+</span>
              </div>
              <p className="font-medium mt-3">Clients</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{onTimeCompletion}</h1>
                <span className="absolute top-1 -right-3 text-lg">%</span>
              </div>
              <p className="font-medium mt-3">On Time Completion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
