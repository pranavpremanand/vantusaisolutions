import React, { useState } from "react";
import { faqPng, faqs } from "../../constant";
import { BiCaretDown, BiCaretRight } from "react-icons/bi";

const Faqs = () => {
  return (
    <div className="py-[5rem] bg-black">
      <div className="wrapper grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
        <div className="lg:flex hidden items-end justify-end">
          <div className="bg-gradient-to-r min-w-[13rem] flex flex-col items-center text-white w-fit from-secondary/80 to-primary/80 rounded-xl p-5">
            <div className="flex flex-col justify-center gap-3 relative w-fit">
              <h1 className="heading-2">3</h1>
              <span className="absolute top-1 -right-3 text-lg">+</span>
            </div>
            <p className="font-medium mt-3">Years of Experience</p>
          </div>
          <div className="h-full max-h-[32rem]">
            <img
              src={faqPng}
              className="h-full max-h-[32rem] object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-7 text-white">
          <div className="gradient-rounded-text-box">FAQs</div>
          <h2 className="heading-2">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3 mt-3 w-full">
            {faqs.map((faq) => (
              <FaqItem key={faq.id} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col w-full">
      <div
        className={`${
          !isOpen && "bg-gradient-to-r"
        } p-[1px] rounded-md from-secondary/80 to-primary/80`}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer rounded-md p-3 bg-[#101010] flex justify-between gap-4"
        >
          <p className="font-inter">{question}</p>
          {isOpen ? <BiCaretDown /> : <BiCaretRight />}
        </div>
      </div>
      {isOpen && <p className="px-5 py-3 desc text-[.9rem]">{answer}</p>}
    </div>
  );
};
