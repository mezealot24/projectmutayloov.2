import React from "react";

export const FeatureSection = () => {
  return (
    <div className="lg:m-auto lg:px-24 lg:py-8">
      <div className="lg:w-10/12 lg:m-auto">
        <div className="lg:grid lg:grid-cols-2">
          <div className="lg:flex lg:flex-col">
            <div className="lg:flex lg:flex-col lg:grow lg:justify-center">
              <div className="lg:shrink-0 lg:bg-zinc-300 lg:h-[500px]" />
            </div>
          </div>
          <div className="flex flex-col justify-center self-stretch py-20 lg:py-5 mx-4 my-8 bg-gray-100 text-neutral-900 lg:ml-0 lg:w-full">
            <div className="flex flex-col lg:grow lg:justify-center lg:items-start lg:self-stretch lg:pl-24 lg:pr-36 lg:pt-10 px-4 mt-8 lg:w-full lg:text-base lg:font-medium lg:bg-gray-100 lg:text-neutral-900 lg:h-[340px]">
              <div className="text-4xl font-medium tracking-tight leading-10 lg:mt-0 lg:w-full">
                About Us
              </div>
              <div className="mt-4 text-base leading-7 lg:w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </div>
            </div>
            <div className="flex gap-1 self-start px-4 lg:ml-24 lg:mb-12 lg:mt-4 mt-6 text-base font-medium tracking-tight leading-7 border-b border-solid border-neutral-900">
              <div>Shop Now</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c40df2e004e66be179de5a8e81d0e554472c5d9164bac4bc1803ece8dd3e9da7?"
                className="shrink-0 my-auto w-5 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

// <div className="flex justify-center items-center px-16 py-16">
// <div className="w-full max-w-screen-2xl">
//   <div className="flex">
//     <div className="flex flex-col w-6/12">
//       <div className="flex flex-col grow justify-center ">
//         <div className="shrink-0 bg-zinc-300 h-[520px] " />
//       </div>
//     </div>
//     <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
//       <div className="flex flex-col grow justify-center items-start self-stretch px-20 py-20 w-full text-base font-medium bg-gray-100 text-neutral-900 max-md:px-5 max-md:max-w-full">
//         <div className="mt-14 text-4xl tracking-tight leading-10 max-md:mt-10 max-md:max-w-full">
//           About Us
//         </div>
//         <div className="mt-4 leading-7 w-[452px] max-md:max-w-full">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy
//           text ever since the 1500s, when an unknown printer took a galley
//           of type and scrambled it to make a type specimen book.
//         </div>
//         <div className="flex gap-1 mt-6 tracking-tight leading-7 border-b border-solid border-neutral-900">
//           <div>Shop Now</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9604063617ac0f922d33751b9fe70c8554c6f89b1ac41c2f484ad16f1faabef?"
//             className="shrink-0 my-auto w-5 aspect-square"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>

  );
};






