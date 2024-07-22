import React from 'react'

export const BreadCrums = () => {
  return (
      <div className="container">
        <div className=" flex flex-col justify-center lg:justify-start px-4 lg:px-16 py-8 lg:py-16 lg:px-5 bg-violet-200">
            <div className="text-sm lg:text-base leading-6 text-neutral-700 lg:w-full">
            Home &gt; Contact Us
            </div>
            <div className="mt-4 text-3xl lg:text-4xl font-bold leading-6 text-black lg:w-full">
            Contact Us
            </div>
        </div>
      </div>
  );
};
