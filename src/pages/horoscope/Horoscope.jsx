import React from "react";
import horoscopeData from "../../data/horoscope";
import { Link } from "react-router-dom";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";

const Horoscope = () => {
  console.log(horoscopeData);

  return (
    <div>
      <BreadcrumbBanner />
      <section className="container">
        <h2 className="mt-8 font-bold">Horoscope</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 lg:py-24 my-8 lg:mr-8 justify-center items-center lg:ml-16 ">
          {horoscopeData.map((horoscope) => (
            <Link to={`/horoscope/${horoscope.id}`} key={horoscope.id}>
              <div className="bg-gray-200 justify-center items-center pl-10 md:pl-14 lg:ml-24 py-8 rounded-full lg:rounded-full lg:pl-20" key={horoscope.id}>
                <p className="justify-center items-center pl-4  text-2xl">{horoscope.name}</p>
                <p className="pl-2 ">{horoscope.description}</p>
                <img src={horoscope.image} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Horoscope;
