import React from "react";

export const HoroscopeSymbol = ({  }) => {
  console.log(horoscope);
  return (
    <div className="container">
      <div className="grid grid-cols-2 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 w-full h-full ">
        <img src={horoscope.img} className="w-full aspect-square" />
      </div>
    </div>
  );
};