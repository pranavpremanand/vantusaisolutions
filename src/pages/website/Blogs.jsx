import React from "react";
import Banner from "../../componets/website/Banner";
import { Link } from "react-router-dom";
import { blogs } from "../../constant";

const Blogs = () => {
  return (
    <>
      <Banner page="Blogs" />
      <div className="py-[5rem] space-y-7 text-white">
        <h1 className="heading-2 text-center max-w-5xl mx-auto">
          Insights & Innovations: Exploring the Future of AI and IT Solutions"
        </h1>
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 md:grid-cols-2 gap-5">
          {blogs.map((item, i) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="group space-y-2 p-5 rounded-xl border border-secondary"
            >
              <Link
                target="blank"
                className="aspect-square w-full overflow-hidden"
                to={item.link}
              >
                <img
                  src={item.image}
                  loading="lazy"
                  width='300'
                  height='300'
                  alt={item.title}
                  className="group-hover:brightness-75 w-full rounded-xl transition-all duration-300"
                />
              </Link>
              <Link
                target="blank"
                to={item.link}
                className="text-lg font-semibold line-clamp-3 text-white hover:text-primary transition-all duration-300"
              >
                {item.title}
              </Link>
              {/* <p className="line-clamp-3">
              Boluptatum dolores porro ex laborum officiis magnam deleniti ea
              velit dolore inventore consequuntur voluptas sit doloribus vero?
              Eos dolorum deleniti provident!
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
